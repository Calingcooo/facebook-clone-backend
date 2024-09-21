module.exports = {
  addNewUser: async (req, res) => {
    try {
      const { first_name, middle_name, last_name, email, password } = req.body;

      

      return res.status(200).json({ message: "Official tanga!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Something went wrong, please study again." });
    }
  },
};
