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
            <form onSubmit={handleSubmit(onSubmit)} action="/" method="POST" className="grid">
                <div className="grid-cols-3">
                    <input {...register("email")} className="border-2 border-gray-500" />
                    <input {...register("name")} className="border-2 border-gray-500" />
                    <input {...register("phoneNumber")} className="border-2 border-gray-500" />
                </div>
                <textarea {...register("comment")} className="border-2 border-gray-500" />
                <button>Submit</button>
            </form>
        </>
    )
}