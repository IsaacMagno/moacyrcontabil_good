import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_QuikgENt_4PA6xPaZjkE1CT8i3m1wdWCE");

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
      // to: "atendimento01@moacyrcontabil.com.br",
      to: "gustavolemes997@gmail.com",
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
