
import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'

const formSchema = authFormSchema('sign-up');
interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    type: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string,
    label: string
}

const CustomInput = ({control, type, placeholder, label}: CustomInputProps) => {
  return (
    <FormField
    control= {control}
    name={type}
    render={({ field }) => 
    (
        <div className='form-item'>
            <FormLabel className='form-label'>
                {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input placeholder={placeholder} className='input-class' {...field} type = {type === "password" ? "password" : "text"} />
                 </FormControl>
                <FormMessage className='form-message mt-2' />
            </div>

         </div>
    )}
    />
  )
}

export default CustomInput