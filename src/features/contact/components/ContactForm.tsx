"use client";

import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import { actions, contactSchema, type ContactSchema } from "@features/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Button } from "@components/button";
import { Input } from "@components/input";
export function ContactForm() {
    const captchaRef = useRef<ReCAPTCHA>(null);

    const [verified, setVerified] = useState<boolean>(false);

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
        const { success } = await actions.createContact(data);
    };

    const verifiyCaptcha = async (token: string | null) => {
        const captchaResult = await actions.captchaSubmit(token);
        setVerified(captchaResult);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
                <Input type="text" label="Név" {...register("name")} error={!!errors.name} />
                <Input type="text" label="E-mail cím" {...register("email")} error={!!errors.email} />
                <Input type="text" label="Telefonszám" {...register("phoneNumber")} error={!!errors.phoneNumber} />
            </div>
            <textarea
                {...register("comment")}
                className="border-2 border-gray-500 w-full"
                rows={5}
            />
            <div className="flex items-center justify-between">
                <ReCAPTCHA
                    size="normal"
                    sitekey="6LeFlx8pAAAAALV3R7myD7JZjCaqSaN5g_w5VaaE"
                    onChange={verifiyCaptcha}
                    ref={captchaRef}
                />
                <div>
                    <Button disabled={!verified} primary={verified} className="h-auto w-32">
                        Küldés
                    </Button>
                </div>
            </div>
        </form>
    );
}