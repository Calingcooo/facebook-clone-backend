module.exports = {
  handleLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email);

      if (email === "boyangat@gmail.com") {
        return res.status(200).json({ message: "Official tanga" });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Something went wrong, please study again." });
    }
  },
};
