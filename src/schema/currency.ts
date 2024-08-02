import { z } from "zod";

export const CurrencySchema = z.object({
    label: z.string(),
    currency: z.string({
        message: "Currency must not be empty"
    }),
    rate: z.coerce.number().positive().multipleOf(0.01),
    description: z.string().min(2, {
        message: "Currency description is needed."
    })
})

export const UpdateCurrencySchema = z.object({
    label: z.string().optional().or(z.literal('')),
    currency: z.string({
        message: "Currency must not be empty"
    }),
    rate: z.coerce.number().positive().multipleOf(0.000000001).optional(),
    description: z.string().min(2, {
        message: "Currency description is needed."
    }).optional().or(z.literal(''))
})

export type CurrencySchemaType = z.infer<typeof CurrencySchema>
export type UpdateCurrencySchemaType = z.infer<typeof UpdateCurrencySchema>
