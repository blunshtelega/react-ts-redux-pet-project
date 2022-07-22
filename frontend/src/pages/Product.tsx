import * as React from 'react';
import { SingleProduct } from '../features/Products/SingleProductPage';

export interface IProductProps {
}

export function Product (props: IProductProps) {
    return (
        <SingleProduct></SingleProduct>
    );
}
