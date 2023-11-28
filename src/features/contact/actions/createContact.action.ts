"use server";

import { ContactSchema } from "@/features/contact";

export async function createContact(formData: ContactSchema) {
  console.log({ formData });
  return {
    success: true,
  };
}
