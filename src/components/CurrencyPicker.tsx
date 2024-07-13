import { useEffect, useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Currencies, Currency } from '../lib/constants'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { cn } from '../lib/utils'

interface Props {
    onChange: (value: string)=>void
}

const CurrencyPicker = ({ onChange}:Props) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>("GHS")

    useEffect(()=>{
        if(!value) return
        onChange(value)
    }, [onChange, value])

    const selectedCurrency = Currencies.find((currency:Currency)=> currency.value === value)

    // const successCallback = useCallback((currency:Currency)=>{
    //     setValue(currency.value)
    //     setOpen(prev => !prev)
    // },[setValue, setOpen])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant={"outline"} role='combobox' aria-expanded={open} className=' justify-between'>
                    {selectedCurrency ? (
                        <CurrencyRow currency={selectedCurrency} />
                    ) : (
                        "Select currency"
                    )}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50'/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0'>
                <Command onSubmit={e=> e.preventDefault()}>
                    <CommandInput placeholder='Search currency'/>
                    <CommandEmpty>
                        <p>Currency not found</p>
                    </CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {Currencies?.map((currency:Currency) => {
                                    return (
                                        <CommandItem key={currency.value} onSelect={()=>{
                                            setValue(currency.value)
                                            setOpen(prev=>!prev)
                                        }}>
                                        <CurrencyRow currency={currency} />
                                        <Check className={cn("mr-2 w-4 h-4 opacity-0", value===currency.value && "opacity-100")} />
                                        </CommandItem>
                                    )
                                })}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
      )
}

function CurrencyRow({currency}:{currency:Currency}){
    return (
        <div className="flex items-center gap-2">
            <span>{currency.label}</span>
        </div>
    )
}

export default CurrencyPicker
