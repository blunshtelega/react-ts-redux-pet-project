import React from 'react';
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    SHOP_ROUTE,
    PRODUCT_ROUTE,
    AUTH_ROUTE,
    REGISTRATION_ROUTE,
    EDIT_PRODUCT,
    FAVOURITES_ROUTE,
} from './constant';
import { Admin } from '../../pages/Admin';
import { Cart } from '../../pages/Cart';
import { Shop } from '../../pages/Shop';
import { Auth } from '../../pages/Auth/Auth';
import { EditProductForm } from '../../features/Products/EditProductForm';
import { Product } from '../../pages/Product';
import { FavouritesProducts } from '../../pages/Favourites/FavouritesProducts';

interface IRoutes {
    path: string
    Component: any
    noAuthPath?: any
}

export const privateRoutes: Array<IRoutes> = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />,
        noAuthPath: <Auth />
    },
    {
        path: BASKET_ROUTE,
        Component: <Cart />,
        noAuthPath: <Auth />
    },
    {
        path: FAVOURITES_ROUTE,
        Component: <FavouritesProducts />,
        noAuthPath: <Auth />
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop />,
    },
    {
        path: PRODUCT_ROUTE + '/:productId',
        Component: <Product />
    },
    {
        path: AUTH_ROUTE,
        Component: <Auth />,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />,
    },
    {   path: EDIT_PRODUCT + '/:productId',
        Component: <EditProductForm />
    },
];
