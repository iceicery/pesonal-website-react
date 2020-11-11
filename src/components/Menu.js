import React from 'react';
import developer from '../images/developer.jpg';
import avatar from '../images/head.jpg';
import emoji from '../images/emoji-2.jpg'
export default function Menu() {
    return (
        <header className="header">
            <div className="header__img-box">
                <img
                    src={developer}
                    alt="develope"
                    className="header__develope"
                />
            </div>
            <div className="header__text-box">
                <h2 className="header__title-hi">Hello World!</h2>
                <h2 className="header__title">I am Pinwei Wu.</h2>
                <ul className="header__list">
                    <li className="header__subtitle">Web Developer ,</li>
                    <li className="header__subtitle">Engineer ,</li>
                    <li className="header__subtitle">Statistic Specialist ,</li>
                    <li className="header__subtitle">Physics Background</li>
                </ul>
                <div className="header__container">
                    <img src={emoji} alt="avatar" className="header__emoji" />
                    <img src={avatar} alt="avatar" className="header__selfie" />
                </div>

                <menu className="header__menu">
                    <li className="header__menu-list">Web Projects</li>
                    <li className="header__menu-list">Learning Track</li>
                    <li className="header__menu-list">Before Coding</li>
                    <li className="header__menu-list">Interests</li>
                    <li className="header__menu-list">One Page Summary</li>
                </menu>
            </div>
        </header>
    )
}