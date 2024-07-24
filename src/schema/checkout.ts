import { z } from "zod";

export const RegisterUserCheckoutSchema = z.object({
    name: z.string().min(2, {
        message: "Firstname must be a valid firstname"
    }),
    email: z.string().email({
        message: "Email must be a valid email."
    }),
    password: z.string().min(7, {
        message: "Password must be a more than 8 characters."
    }).max(30).optional(),
    whatsapp: z.string().min(7, {
        message: "Whatsapp number must be a valid phone number."
    }).max(30),
    momoNumber: z.string().min(7, {
        message: "Momo number must be a valid phone number."
    }).max(30),
    notes: z.string().optional()
})

// export const RegisteredUserCheckoutSchema = z.object({
//     name: z.string().min(2, {
//         message: "Firstname must be a valid firstname"
//     }),
//     email: z.string().email({
//         message: "Email must be a valid email."
//     }),
//     whatsapp: z.string().min(7, {
//         message: "Whatsapp number must be a valid phone number."
//     }).max(30),
//     phone: z.string().min(7, {
//         message: "Momo number must be a valid phone number."
//     }).max(30),
//     notes: z.string().optional()
// })

export type RegisterUserCheckoutSchemaType = z.infer<typeof RegisterUserCheckoutSchema>
// export type RegisteredUserCheckoutSchemaType = z.infer<typeof RegisteredUserCheckoutSchema>
