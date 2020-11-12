import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className="footer__color">
            <div className="footer__box1">
                <h3 className="footer__title lobster">Hello, I am Pinwei Wu, a web developer.</h3>

            </div>
            <menu className="header__menu-adjust">
                <Link to="/" className="header__menu-list-adjust">Home</Link>
                <li className="now">Web Projects</li>
                <li className="header__menu-list-adjust">Learning Track</li>
                <li className="header__menu-list-adjust">Before Coding</li>
                <li className="header__menu-list-adjust">Interests</li>
                <a href="https://iceicery.github.io/pinwei/"
                    target="_blank"
                    rel="noreferrer"><li className="header__menu-list-adjust">One Page Summary</li></a>
            </menu>
        </header>
    )
}