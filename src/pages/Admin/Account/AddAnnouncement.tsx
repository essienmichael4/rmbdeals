import { Dialog, DialogTitle, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import useAxiosToken from '@/hooks/useAxiosToken'
import { AddAnnouncementSchema, AddAnnouncementSchemaType } from '@/schema/announcement'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

interface Props{
    trigger?: React.ReactNode,
}

const AddAnnouncement = ({trigger}:Props) => {
    const [open, setOpen] = useState(false)
    const axios_instance_token = useAxiosToken()
    const queryClient = useQueryClient()

    const form = useForm<AddAnnouncementSchemaType>({
        resolver:zodResolver(AddAnnouncementSchema),
        defaultValues:{
            title: "",
            subject: "",
        }
    })

    const addAnnouncement = async (data:AddAnnouncementSchemaType)=>{
        const response = await axios_instance_token.post(`/announcements`, {
            ...data
        },)

        return response.data
    }

    const {mutate, isPending} = useMutation({
        mutationFn: addAnnouncement,
        onSuccess: ()=>{
            toast.success("Announcement added successfully", {
                id: "add-announcement"
            })

            queryClient.invalidateQueries({queryKey: ["announcements"]})

            form.reset({
                title: "",
                subject: ""
            })

            setOpen(prev => !prev)
        },onError: (err:any) => {
            if (axios.isAxiosError(err)){
                toast.error(err?.response?.data?.error, {
                    id: "add-announcement"
                })
            }else{
                toast.error(`Something went wrong`, {
                    id: "add-announcement"
                })
            }
        }
    })

    const onSubmit = (data:AddAnnouncementSchemaType)=>{
        toast.loading("Adding announcement...", {
            id: "add-announcement"
        })
        mutate(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className='w-[90%] mx-auto rounded-2xl'>
                <DialogHeader className='items-start'>
                    <DialogTitle>
                        Add Announcement
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form className='space-y-2'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) =>(
                                    <FormItem className='flex-1'>
                                        <FormLabel className='text-xs'>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )} 
                            />

                        <FormField 
                            control={form.control}
                            name="subject"
                            render={({field}) =>(
                                <FormItem>
                                    <FormLabel className='text-xs'>Subject</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
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
                    <Button onClick={form.handleSubmit(onSubmit)} disabled={isPending} className='bg-[#47C9D1] hover:bg-[#106981]'
                    >
                        {!isPending && "Add Announcement"}
                        {isPending && <Loader2 className='animate-spin' /> }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddAnnouncement