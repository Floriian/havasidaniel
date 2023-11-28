"use server";

import { ContactSchema } from "@/features/contact";

export async function handleContactRequest(formData: ContactSchema) {
  console.log({ formData });
  return {
    success: true,
  };
}
