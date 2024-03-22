import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_74nAsEND_AY7rdDwaeUa4eWUDKchzjVqz");

export async function POST(req, res) {
  const {
    formData: {
      email,
      name,
      phone,
      message,
      agree,
      city,
      maritalStatus,
      age,
      numberChildren,
      technicalFormation,
      higherEducation,
      practicesComment,
      role,
      about,
      file,
    }, emailType,
  } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "comercial01@moacyrcontabil.com.br",
      subject:
        emailType === "Contact"
          ? `Solicitação de contato: ${name}`
          : `Curriculo: ${name}`,
      react: EmailTemplate({
        email,
        name,
        phone,
        message,
        agree,
        emailType,
        city,
        maritalStatus,
        age,
        numberChildren,
        technicalFormation,
        higherEducation,
        practicesComment,
        role,
        about,
        file,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
