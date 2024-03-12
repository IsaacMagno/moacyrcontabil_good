import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_DP1eKBF5_8ZqK6Mc5uKooTUc4ThE9X33d");

export async function POST(req, res) {
  const {
    formData: {
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
    },
  } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "isaacmagno98@gmail.com",
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
