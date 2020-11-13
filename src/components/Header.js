import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({ now }) {
    const projects = now === 'projects' ? 'now' : 'header__menu-list-adjust';
    const before = now === 'before' ? 'now' : 'header__menu-list-adjust';
    const learning = now === 'learning' ? 'now' : 'header__menu-list-adjust';
    const interests = now === 'interests' ? 'now' : 'header__menu-list-adjust';
    return (
        <header className="footer__color">
            <div className="footer__box1">
                <h3 className="footer__title lobster">Hello, I am Pinwei Wu, a web developer.</h3>

            </div>
            <menu className="header__menu-adjust">
                <Link to="/personal-website-react" className='header__menu-list-adjust' > Home</Link>
                <Link to="/projects" className={projects} >Web Projects</Link>
                <Link to="/learning" className={learning} >Learning Track</Link>
                <Link to="/before" className={before} >Before Coding</Link>
                <Link to="/interests" className={interests} >Interests</Link>
                <a href="https://iceicery.github.io/pinwei/"
                    target="_blank"
                    rel="noreferrer"><li className="header__menu-list-adjust">One Page Summary</li></a>
            </menu>
        </header>
    )
}