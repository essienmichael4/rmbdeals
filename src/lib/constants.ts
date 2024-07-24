export const Currencies:{value:"GHS" | "RMB" | "NGN", label: string, locale: string}[] = [
    // {value: "USD", label: "$ Dollar", locale: "en-US"},
    // {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "GHS", label: "¢ Cedis", locale: "en-GH"},
    {value: "RMB", label: "¥ RMB", locale: "zh-CN"},
    {value: "NGN", label: " ₦ Naira", locale: "en-NG"},
]

export type Currency = (typeof Currencies)[0]

export const Accounts: {value:"personal" | "supplier", label: string}[] = [
    {value: "personal", label: "Personal"},
    {value: "supplier", label: "Supplier"},
]

export type Account = (typeof Accounts)[0]
