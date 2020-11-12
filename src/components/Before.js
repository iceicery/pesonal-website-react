import React from 'react';
import project1 from '../images/LearningHowToLearn.JPG';
import project2 from '../images/FromPortlandToPortland.JPG';
import project3 from '../images/AroundUs.JPG';
import project4 from '../images/baseCalculator.JPG';
export default function Before() {
    return (
        <main className="content">
            <section className="projects">
                <h2 className="projects__text lobster">Before Coding</h2>
                <ul className="projects__box">
                    <li className="projects__item">
                        <a
                            href="https://iceicery.github.io/web_project_1/"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project1} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">Informitive website</h3>
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
                        <h3 className="projects__title">Informitive website</h3>
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
                            href="https://iceicery.github.io/web_project_4/dist/index.html"
                            target="_blank"
                            rel="noreferrer"
                        ><img src={project3} className="projects__img" alt="project"
                            /></a>
                        <h3 className="projects__title">Informitive website</h3>
                        <ul className="projects__tech">
                            <li className="projects__tech-item">Html</li>
                            <li className="projects__tech-item">CSS</li>
                            <li className="projects__tech-item">JavaScript</li>
                            <a
                                href="https://github.com/iceicery/web_project_4"
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
                        <h3 className="projects__title">Informitive website</h3>
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