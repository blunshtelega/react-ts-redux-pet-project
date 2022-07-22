import * as React from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, FAVOURITES_ROUTE, SHOP_ROUTE } from '../../common/utils/constant';
import { setIsAuth } from '../../features/User/UserSlice';


export interface INavigationProps {
    scssClass: string
}


export function Navigation (props: INavigationProps) {
    const isAuth = useAppSelector(state => state.user.isAuth)
    const favouritesProducts = useAppSelector(state => state.products)
    const counter: any = []
    favouritesProducts.map(product => {
        if (product.favourite === '❤️'){
            counter.push(product)
            console.log(counter)
        }

    })

    const dispatch = useAppDispatch()

    const logout = () => dispatch(setIsAuth(false))

    return (
        (
            !isAuth
            ?
            <nav className={`navbar ${props.scssClass}__navbar`}>
                <Link className='navbar__link' to={SHOP_ROUTE}>На главную</Link>
                <Link className='navbar__link' to={AUTH_ROUTE}>Войти</Link>
            </nav>
            :
            <nav className={`navbar ${props.scssClass}__navbar`}>
                <Link className='navbar__link' to={SHOP_ROUTE}>На главную</Link>
                <Link className='navbar__link' to={ADMIN_ROUTE}>Админ панель</Link>
                <Link className='navbar__link' to={BASKET_ROUTE}>Корзина</Link>
                <Link className='navbar__link' to={FAVOURITES_ROUTE}>Избранное ({counter.length})</Link>
                <Link className='navbar__link' to={AUTH_ROUTE} onClick={logout}>Выйти</Link>
            </nav>
        )
    )
}
