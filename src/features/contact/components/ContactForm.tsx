"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { actions, contactSchema, type ContactSchema } from "@features/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { TextArea, Button, Input } from "@/components";
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
        await actions.createContact(data);
    };

    const verifiyCaptcha = async (token: string | null) => {
        const captchaResult = await actions.captchaSubmit(token);
        setVerified(captchaResult);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
                <Input type="text" label="Név" {...register("name")} error={!!errors.name} name="name" />
                <Input type="text" label="E-mail cím" {...register("email")} error={!!errors.email} name="email" />
                <Input type="text" label="Telefonszám" {...register("phoneNumber")} error={!!errors.phoneNumber} name="phone" />
            </div>
            <TextArea
                {...register("comment")}
                rows={10}
            />
            <div className="grid grid-cols-2 items-center align-middle">
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