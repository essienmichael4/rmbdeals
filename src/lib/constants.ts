export const Currencies = [
    // {value: "USD", label: "$ Dollar", locale: "en-US"},
    // {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "GHS", label: "¢ Cedis", locale: "en-GH"},
    {value: "RMB", label: "¥ RMB", locale: "zh-CN"},
    // {value: "GBP", label: "£ Pound", locale: "en-GB"},
]

export type Currency = (typeof Currencies)[0]

export const Accounts = [
    {value: "personal", label: "Personal"},
    {value: "supplier", label: "Supplier"},
]

export type Account = (typeof Accounts)[0]
