import * as React from 'react';
import { MiniCart } from '../MiniCart/MiniCart';
import { Navigation } from '../Navigation/Navigation';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    const darkTheme = true;

    return (
        <header className='header'>
            <div className="header__logo">LOGO</div>
            <div className="header__nav">
                <Navigation scssClass='header'></Navigation>
            </div>
            <div className="header__mini-cart">
                <MiniCart></MiniCart>
            </div>
        </header>
    );
}
