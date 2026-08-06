import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, emailVerificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "welcome to our project management platform here is the verification link",
      action: {
        instructions: "kindly click into the button to verify the email",
        button: {
          color: "#22BC66",
          text: "verify the email",
          link: emailVerificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, forgotPasswordUrl) => {
  return {
    body: {
      name: username,
      intro:
        "welcome to our project management platform here is the forgot password link",
      action: {
        instructions: "kindly click into the button to reset password",
        button: {
          color: "#22BC66",
          text: "Reset the Password",
          link: forgotPasswordUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
