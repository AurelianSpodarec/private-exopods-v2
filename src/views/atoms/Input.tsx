import React, { forwardRef } from 'react';
import Label from './Label';
  
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
        id,
        name,
        className,
        placeholder,
        variant = 'primary',
        kind = 'outline',
        disabled = false,
        label,
        labelPosition = 'top',
        icon,
        iconPosition = 'right',
        type = 'text',
        autoComplete,
        defaultValue,
        required = false,
        helperText,
        value,
        onChange,
        iconRight,
        autofocus,
        optional,
        ariaLabel,
        as = "Input",
        ...props
    }) => {
    
        const Tag = `${as}` as React.ElementType;

        return (
            <div className="form-group relative">
                
                {label && (
                    <Label
                        label={label}
                        optional={optional}
                        htmlFor={name}
                    />
                )}

                <div className="relative">
                    <Tag
                        id={id}
                        name={name}
                        type={type}
                        required={required}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={onChange}
                        className={`
                            border border-[#464660] px-5 py-4 rounded-lg w-full
                            ${className ? className : ''} 
                        `.trim()}
                        disabled={disabled}
                        aria-label={ariaLabel}
                        autoFocus={autofocus}
                        {...props}
                    />

                    {/* TODO: Make it so the user can choose either left or right */}
                    {iconRight && (
                        <div
                            className="absolute z-10 right-3 top-1/2 -translate-y-1/2"
                            dangerouslySetInnerHTML={{ __html: iconRight }}
                        />
                    )}

                </div>
            </div>
        );
    }
);

export default Input;

interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: 'primary' | 'secondary';
    kind?: 'outline' | 'filled' | 'standard';
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
    icon?: string;
    iconPosition?: 'left' | 'right';
    type?: 'number' | 'email' | 'tel' | 'text' | 'password';
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    iconRight?: any;
    autofocus?: boolean;
    optional?: boolean;
    ariaLabel?: string;
    as?: string | "textarea" | "input";
}