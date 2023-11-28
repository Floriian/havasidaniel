"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { actions, contactSchema, type ContactSchema } from "@features/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
export function ContactForm() {
    const captchaRef = useRef<ReCAPTCHA>(null);

    const [verified, setVerified] = useState<boolean>(false);

    const { formState: { errors }, register, handleSubmit } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
    }

    const verifiyCaptcha = async (token: string | null) => {
        const captchaResult = await actions.captchaSubmit(token);
        setVerified(captchaResult);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="/" method="POST" className="grid">
                <div className="grid-cols-3">
                    <input {...register("email")} className="border-2 border-gray-500" />
                    <input {...register("name")} className="border-2 border-gray-500" />
                    <input {...register("phoneNumber")} className="border-2 border-gray-500" />
                </div>
                <textarea {...register("comment")} className="border-2 border-gray-500" />
                <ReCAPTCHA size="normal" sitekey="6LeFlx8pAAAAALV3R7myD7JZjCaqSaN5g_w5VaaE" onChange={verifiyCaptcha} ref={captchaRef} />
                <button disabled={!verified}>Submit</button>
            </form>
        </>
    )
}