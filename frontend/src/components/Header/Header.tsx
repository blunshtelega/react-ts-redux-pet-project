import * as React from 'react';
import { useAppSelector } from '../../common/hooks/hooks';
import { MiniCart } from '../MiniCart/MiniCart';
import { Navigation } from '../Navigation/Navigation';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    const darkTheme = true;
    const isAuth = useAppSelector(state => state.user.isAuth)
    return (
        <header className='header'>
            <div className="header__logo">LOGO</div>
            <div className="header__nav">
                <Navigation scssClass='header'></Navigation>
            </div>
            {
                isAuth
                ?
                <div className="header__mini-cart">
                    <MiniCart></MiniCart>
                </div>
                :
                <div className="header__mini-cart"></div>
            }

        </header>
    );
}
