import { useState } from 'react'
import { Dialog, DialogTitle, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '../../components/ui/dialog'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

interface Props{
    trigger?: React.ReactNode,
    successCallback?: ()=>void
}

const EditAccountDialog = ({trigger}:Props) => {
    const [open, setOpen] = useState(false)
    const form = useForm({
        // resolver:zodResolver(CreateNewCustomerSchema),
        defaultValues:{
            firstname:"",
            lastname: "",
            othernames: "",
            email: "",
            phones: []
        }
    })

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit Account
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className='space-y-2'>
                        <FormField 
                            control={form.control}
                            name="othernames"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel className='text-xs'>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )} 
                        />
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel className='text-xs'>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )} 
                        />
                    </form>
                </Form>
                <DialogFooter >
                    <DialogClose asChild>
                        <Button 
                            type='button'
                            variant={"secondary"}
                            onClick={()=>{
                                form.reset()
                            }} >
                                Cancel
                        </Button>
                    </DialogClose>
                    {/* <Button onClick={form.handleSubmit(onSubmit)} disabled={isPending} className='bg-[#47C9D1] hover:bg-[#106981]'
                    >
                        {!isPending && "Create Customer"}
                        {isPending && <Loader2 className='animate-spin' /> }
                    </Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditAccountDialog
