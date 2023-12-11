"use server";

export async function captchaSubmit(token: string | null) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${token}`,
    {
      method: "POST",
    }
  );
  const success = (await res.json()) as { success: boolean };
  if (!success) return false;

  return true;
}
 