import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Controller, FieldValues, Path, Control} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file'
}

const FormField = ({ control, name, label, placeholder, type ="text" }: FormFieldProps<T>) => {
    const fieldId = React.useId();
    
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="label" htmlFor={fieldId}>{label}</FormLabel>
                    <FormControl>
                        <Input
                            id={fieldId}
                            className="input"
                            placeholder={placeholder}
                            type={type}
                            {...field}
                            suppressHydrationWarning
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}


export default FormField
