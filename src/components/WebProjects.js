import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import project1 from '../images/LearningHowToLearn.JPG';
import project2 from '../images/FromPortlandToPortland.JPG';
import project3 from '../images/AroundUs.JPG';
import project4 from '../images/baseCalculator.JPG';
import newsProject from '../images/newsExplorer.JPG';
import personalWP from '../images/PersonalWebSite.JPG';

function WebProjects() {
    return (
        <main className="content">
            <section className="projects">
                <h2 className="projects__text lobster">Web Projects</h2>
                <ul className="projects__box">
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/web_project_4/dist/index.html"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={newsProject} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">News Explorer is a website users could search news by keyword and save them while signing in.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <li className="projects__tech-item">React</li>
                            <li className="projects__tech-item">Azure</li>
                            <li className="projects__tech-item">Full Stack</li>
                            <a
                                href="https://github.com/iceicery/news-explorer-frontend"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Font Code</li>
                            </a>
                            <a
                                href="https://github.com/iceicery/news-explorer-api"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">API Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/web_project_4/dist/index.html"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project3} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">Around the US is a website users could log in, costumize their profiles, share their photos and like others'. </h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <li className="projects__tech-item">React</li>
                            <li className="projects__tech-item">Azure</li>
                            <li className="projects__tech-item">Full StacK</li>
                            <a
                                href="https://github.com/iceicery/react-around-auth"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Font Code</li>
                            </a>
                            <a
                                href="https://github.com/iceicery/react-around-api-full"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">API Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/BaseCaculator/"
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
                                href="https://github.com/iceicery/pesonal-website-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/web_project_1/"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project1} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">A website with info of learning how to learn. This is my very first independent web project from Praticum.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href="https://github.com/iceicery/web_project_1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/web_project_3/"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project2} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">A website with information of a bicycle journey across the USA. This is my second independent project from Practicum.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href="https://github.com/iceicery/web_project_3"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="projects__tech-item projects__tech-link">Code</li>
                            </a>
                        </ul>
                    </li>

                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/BaseCaculator/"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project4} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">A website with different bases calculators including binary, octal and more.</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href="https://github.com/iceicery/BaseCaculator"
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