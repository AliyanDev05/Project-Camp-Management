import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailtextual = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mail = {
    from: "mailtaskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailtextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "email is not sent kindly check you creds of MAILTRAP and env file also",
    );
    console.error("Error:", error);
  }
};

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

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendMail,
};
