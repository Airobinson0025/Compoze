'use client'
import React from 'react'
import { 
    Form,
    FormControl,
    FormLabel,
    FormMessage,
    FormField,
    FormItem
 } from '@/components/ui/form'
 import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
 import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '../ui/input'

const CreateCustomePaletteForm = () => {

    const customPlaletteFormSchema = z.object({
        name: z.string().min(1, {message: 'Name must be at least one character long'}).max(50),
        project: z.string().min(1, {message: 'Please select a project'}).max(50),
    })

    const form = useForm<z.infer<typeof customPlaletteFormSchema>>({
        resolver: zodResolver(customPlaletteFormSchema),
        defaultValues: {
            name: '',
            project: ''
        }
    })

  return (
    <Form {...form}>
        <form className='flex flex-col gap-5 text-md'>
        <FormField
            control={form.control}
            name='name'
            render={({field}) => (
                    <FormItem className=''>
                        <FormLabel className='text-md'>Name of Palette:</FormLabel>
                        <FormControl>
                            <Input placeholder='Name' className='text-md w-full' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
        )}></FormField>

        <FormField
            control={form.control}
            name='project'
            render={({field}) => (
                    <FormItem className=''>
                        <FormLabel className='text-md'>Assign To Project</FormLabel>
                            <Select>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Project" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Project 1</SelectItem>
                                    <SelectItem value="banana">Project 2</SelectItem>
                                    <SelectItem value="blueberry">Project-3</SelectItem>
                                    <SelectItem value="grapes">Project-4</SelectItem>
                                    <SelectItem value="pineapple">Project 5</SelectItem>
                                </SelectGroup>
                                </SelectContent>
                            </Select>
                        <FormMessage />
                    </FormItem>
        )}></FormField>
        </form>
    </Form>
  )
}

export default CreateCustomePaletteForm