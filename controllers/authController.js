module.exports = {
  handleLogin: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email);
      const emailCondition = email.toLowerCase();
      let letterBeforeAt = "";

      if (emailCondition.includes("@")) {
        const atIndex = emailCondition.indexOf("@");
        if (atIndex > 0) {
          letterBeforeAt = emailCondition[atIndex - 1];
        }
      }

      // Check if the letter before '@' is 'j' and if the email ends with 'y'
      if (
        letterBeforeAt === "y" &&
        emailCondition.startsWith("j") &&
        emailCondition.includes("e")
      ) {
        return res.status(200).json({ message: "Email meets the condition!" });
      }

      // Your existing logic for handling other email cases
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
