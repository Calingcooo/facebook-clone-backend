const jwt = require("jsonwebtoken");

module.exports = {
  handleLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email != "boyangat@gmail.com") {
        return res.status(400).json({ message: "Pasensya, hindi ka tanga." });
      }

      const payload = {
        email: email,
      };

      const session = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });

      res.cookie("session", session, {
        sameSite: "lax",
        // secure: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
      });

      return res.status(200).json({ message: "Official tanga!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Something went wrong, please study again." });
    }
  },
};
