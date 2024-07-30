import { z } from "zod";

export const OrderSchema = z.object({
    account: z.enum(["personal", "supplier"]),
    currency: z.string({
        message: "Currency must not be empty"
    }),
    amount: z.coerce.number().positive().multipleOf(0.01),
    recipient: z.string().min(2, {
        message: "Recipient name must be a valid name."
    })
})

export type OrderSchemaType = z.infer<typeof OrderSchema>