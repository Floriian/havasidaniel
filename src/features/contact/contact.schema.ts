import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "A név megadása kötelező."),
  email: z
    .string()
    .email("Hibás email formátum.")
    .min(1, "Az email megadása kötelező."),
  phoneNumber: z.string().min(1, "A telefonszám megadása kötelező."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
