"use server";

import { ContactSchema } from "@/features/contact";
import { transporter } from "@features/contact/mailer";

export async function createContact(formData: ContactSchema) {
  const result = await transporter.sendMail({
    from: "havasidaniel.hu",
    to: "lovasifloriian@outlook.hu",
    subject: `Kapcsolat - ${formData.name}`,
    html: `${JSON.stringify(formData)}`,
  });

  if (!result) return { success: false };
  return {
    success: true,
  };
}
