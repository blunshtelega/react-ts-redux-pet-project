import * as React from 'react';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
    return (
        <footer className='footer'>
            <div className="footer__logo"></div>
            <div className="foooter__info"></div>
        </footer>
    );
}
