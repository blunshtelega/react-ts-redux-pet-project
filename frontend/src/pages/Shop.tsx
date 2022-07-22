import * as React from 'react';
import { ProductsList } from '../features/Products/ProductsList';
import { User } from '../features/User/User';

export interface IShopProps {

}

export function Shop() {
    return (
        <div>
        <ProductsList></ProductsList>
        <User></User>
        </div>
    )
}
