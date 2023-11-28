"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema, type ContactSchema, handleContactRequest } from "@/features/contact";
import { zodResolver } from "@hookform/resolvers/zod";

export function ContactForm() {
    const { formState: { errors }, register, handleSubmit } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit: SubmitHandler<ContactSchema> = async (data) => {
        const { success } = await handleContactRequest(data);
        console.log({ success })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="/" method="POST">
                <input {...register("email")} />
                <input {...register("name")} />
                <input {...register("phoneNumber")} />
                <input {...register("comment")} />
                <button>Submit</button>
            </form>
        </>
    )
}