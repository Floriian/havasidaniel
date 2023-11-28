"use client";

import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import { actions, contactSchema, type ContactSchema } from "@features/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import {
    useEffect,
    useRef,
    useState
} from "react";
import clsx from "clsx";
import { useAppStore } from "@features/app";
export function ContactForm() {
    const captchaRef = useRef<ReCAPTCHA>(null);

    const [verified, setVerified] = useState<boolean>(false);

    const { formState: { errors }, register, handleSubmit } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
        const { success } = await actions.createContact(data);
    }

    const verifiyCaptcha = async (token: string | null) => {
        const captchaResult = await actions.captchaSubmit(token);
        setVerified(captchaResult);
    }

    const inputStyle = (path: keyof ContactSchema) => clsx('border-2 border-gray-500', {
        'border-orange-500 focus:outline-none': errors[path]
    })

    const { toggle } = useAppStore.getState();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
                <input {...register("email")} className={inputStyle("email")} />
                <input {...register("name")} className={inputStyle("name")} />
                <input {...register("phoneNumber")} className={inputStyle("phoneNumber")} />
            </div>
            <textarea {...register("comment")} className="border-2 border-gray-500 w-full" />
            <ReCAPTCHA size="normal" sitekey="6LeFlx8pAAAAALV3R7myD7JZjCaqSaN5g_w5VaaE" onChange={verifiyCaptcha} ref={captchaRef} />
            <button disabled={!verified}>Submit</button>
            <button type="button" onClick={toggle}>toggle</button>
        </form>
    )
}