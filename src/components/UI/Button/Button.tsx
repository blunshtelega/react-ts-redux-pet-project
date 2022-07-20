import * as React from 'react';

export interface IButtonProps {
    style?: string;
    doSmth?: any
}

export function Button({children, ...props }: any) {
    return (
        <button {...props}>{children}</button>
    )
}
