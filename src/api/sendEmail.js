import nodemailer from "nodemailer";

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seuemail@gmail.com",
      pass: "sua senha",
    },
  });

  let mailOptions = {
    from: "seuemail@gmail.com",
    to: "destinatario@gmail.com",
    subject: "Assunto do email",
    text: "Corpo do email",
  };

  let info = await transporter.sendMail(mailOptions);

  res.status(200).json({ message: "Email enviado: " + info.response });
}
