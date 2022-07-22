import * as React from 'react';

export interface IInputProps {
    type: string
    placeholder: string
    value: any
    onChange: any
    style: string
}

export function Input (props: any) {
    return (
        <input {...props}>

        </input>
    );
}