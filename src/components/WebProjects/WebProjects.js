import React from 'react';
import { withRouter } from 'react-router-dom';
import './WebProjects.css';
import project1 from '../../images/LearningHowToLearn.JPG';
import project2 from '../../images/FromPortlandToPortland.JPG';
import project3 from '../../images/AroundUs.JPG';
import project4 from '../../images/baseCalculator.JPG';
import newsProject from '../../images/newsExplorer.JPG';
import personalWP from '../../images/PersonalWebSite.JPG';

function WebProjects({ handleOpen, link, handleProject, handleLink }) {
    const Link = {
        news: {
            demo: 'https://embed.storyxpress.co/embed/kj31jyw7cpsekf5a4',
            website: 'https://newsfinder.students.nomoreparties.site',
            code: {
                font: 'https://github.com/iceicery/news-explorer-frontend',
                end: 'https://github.com/iceicery/news-explorer-api',
            }

        },
        around: {
            demo: 'https://embed.storyxpress.co/embed/kj95tq0f7o6qb46ns',
            website: 'https://iceicery.github.io/web_project_4/dist/index.html',
            code: {
                font: "https://github.com/iceicery/react-around-auth",
                end: "https://github.com/iceicery/react-around-api-full",
            }
        },
        learning: {
            demo: 'https://embed.storyxpress.co/embed/kj3el123oabr2qwxh',
            website: 'https://iceicery.github.io/web_project_1/',
            code: 'https://github.com/iceicery/web_project_1'
        },
        bicycle: {
            demo: 'https://embed.storyxpress.co/embed/kj949ce472p1dx41e',
            website: 'https://iceicery.github.io/web_project_3/',
            code: 'https://github.com/iceicery/web_project_3'
        },
        calculators: {
            demo: 'https://embed.storyxpress.co/embed/kj94l1vir0iwv2myx',
            website: 'https://iceicery.github.io/BaseCaculator/',
            code: 'https://github.com/iceicery/BaseCaculator'
        },
        personal: {
            website: 'https://iceicery.github.io/pesonal-website-react',
            code: 'https://github.com/iceicery/pesonal-website-react'
        }
    }
    function getProjectNews() {
        handleProject(Link.news.demo);
        handleOpen();
        handleLink(Link.news.website);
    }
    function getProjectAround() {
        handleProject(Link.around.demo);
        handleOpen();
        handleLink(Link.around.website);
    }
    function getProjectLearning() {
        handleProject(Link.learning.demo);
        handleOpen();
        handleLink(Link.learning.website);
    }
    function getProjectBicycle() {
        handleProject(Link.bicycle.demo);
        handleOpen();
        handleLink(Link.bicycle.website);
    }
    function getProjectCalculator() {
        handleProject(Link.calculators.demo);
        handleOpen();
        handleLink(Link.calculators.website);
    }
    console.log(Link.bicycle.demo);
    console.log(Link.calculators.demo);

    return (
        <main className="content">
            <section className="projects">
                <h2 className="projects__text lobster">Web Projects</h2>
                <ul className="projects__box">
                    <li className="projects__item">
                        <div className="projects__img-box">
                            <img src={newsProject} className="projects__img" alt="project" />
                            <div className="projects__button-box">
                                <button className="projects__button" onClick={getProjectNews}>Demo</button>
                                <a
                                    href={Link.news.website}
                                    target="_blank"
                                    rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                            </div>
                        </div>
                        <h3 className="projects__title">News Explorer is a website users could search news by keyword and save them while signing in.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <li className="projects__tech-item">React</li>
                            <li className="projects__tech-item">Azure</li>
                            <li className="projects__tech-item">Full Stack</li>
                            <a
                                href={Link.news.code.font}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Font Code</li>
                            </a>
                            <a
                                href={Link.news.code.end}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">API Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <div className="projects__img-box">
                            <img src={project3} className="projects__img" alt="project" />
                            <div className="projects__button-box">
                                <button className="projects__button" onClick={getProjectAround}>Demo</button>
                                <a
                                    href={Link.around.website}
                                    target="_blank"
                                    rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                            </div>
                        </div>
                        <h3 className="projects__title">Around the US is a website users could log in, costumize their profiles, share their photos and like others'. </h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <li className="projects__tech-item">React</li>
                            <li className="projects__tech-item">Azure</li>
                            <li className="projects__tech-item">Full StacK</li>
                            <a
                                href={Link.around.code.font}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Font Code</li>
                            </a>
                            <a
                                href={Link.around.code.end}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">API Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <a
                            href={Link.personal.website}
                            target="_blank"
                            rel="noreferrer"
                        ><img src={personalWP} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">This is my personal website with the info of my web project profolios, work experiences, and learning tracks.  </h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href={Link.personal.code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <div className="projects__img-box">
                            <img src={project1} className="projects__img" alt="project" />
                            <div className="projects__button-box">
                                <button className="projects__button" onClick={getProjectLearning}>Demo</button>
                                <a
                                    href={Link.learning.website}
                                    target="_blank"
                                    rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                            </div>
                        </div>
                        <h3 className="projects__title">A website with info of learning how to learn. This is my very first independent web project from Praticum.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href={Link.learning.code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <div className="projects__img-box">
                            <img src={project2} className="projects__img" alt="project" />
                            <div className="projects__button-box">
                                <button className="projects__button" onClick={getProjectBicycle}>Demo</button>
                                <a
                                    href={Link.bicycle.website}
                                    target="_blank"
                                    rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                            </div>
                        </div>
                        <h3 className="projects__title">A website with information of a bicycle journey across the USA. This is my second independent project from Practicum.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href={Link.bicycle.code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>

                    <li className="projects__item">
                        <div className="projects__img-box">
                            <img src={project4} className="projects__img" alt="project" />
                            <div className="projects__button-box">
                                <button className="projects__button" onClick={getProjectCalculator}>Demo</button>
                                <a
                                    href={Link.calculators.website}
                                    target="_blank"
                                    rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                            </div>
                        </div>
                        <h3 className="projects__title">A website with different bases calculators including binary, octal and more.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href={Link.calculators.code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default withRouter(WebProjects);