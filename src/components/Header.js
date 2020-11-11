import React from 'react';
export default function Header() {
    return (
        <header className="footer__color">
            <div className="footer__box1">
                <h3 className="footer__title lobster">Hello, I am Pinwei Wu, a web developer.</h3>

            </div>
            <menu className="header__menu header__menu-adjust">
                <li className="header__menu-list">Web Projects</li>
                <li className="header__menu-list">Learning Track</li>
                <li className="header__menu-list">Before Coding</li>
                <li className="header__menu-list">Interests</li>
                <li className="header__menu-list">One Page Summary</li>
            </menu>
        </header>
    )
}