const jwt = require("jsonwebtoken");

module.exports = {
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      

      return res.status(200).json({ message: "Official tanga!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Something went wrong, please study again." });
    }
  },
};
