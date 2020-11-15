import React from 'react';
import cousera from '../images/cousera.jpg';
import edx from '../images/edx.jpg';
import practicum from '../images/practicum.jpg';
import Construction from "./Construction"

export default function Learning() {
    return (
        //<Construction isConstructed={true} />
        <main className="content">
            <section className="learning">
                <h2 className="learning__text lobster">Learning Track</h2>
                <ul className="learning__box">
                    <li className="learning__item">
                        <img src={practicum} className="learning__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="learning__item-title lobster">I learned from Practicum by Yandex.</h3>
                            <p>I love coursera that I could access so many courses from lots of top schools. I learned my first programing language there and love coding since.</p>
                            <h4 className="learning__item-subtitle">Certificate I earned</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://coursera.org/share/74a7f31847b93e3090fd3c91031f6a46"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">SQL for Data Science</a> by University of California, Davis</li>
                                <li><a
                                    href="https://coursera.org/share/38dc9e56fc6d6824d27cadbc44a2fb78"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Introduction to Programming with MATLAB</a> by Vanderbilt University</li>
                            </ul>
                            <h4 className="learning__item-subtitle">Courses I completed</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://www.coursera.org/learn/python-databases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Python to Access Web Data</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-network-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Databases with Python</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Python Data Structures</a> by University of Michigan</li>
                            </ul>
                        </div>
                    </li>
                    <li className="learning__item">
                        <img src={cousera} className="learning__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="learning__item-title lobster">I learned from Cousera.</h3>
                            <p>I love coursera that I could access so many courses from lots of top schools. I learned my first programing language there and love coding since.</p>
                            <h4 className="learning__item-subtitle">Certificate I earned</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://coursera.org/share/74a7f31847b93e3090fd3c91031f6a46"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">SQL for Data Science</a> by University of California, Davis</li>
                                <li><a
                                    href="https://coursera.org/share/38dc9e56fc6d6824d27cadbc44a2fb78"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Introduction to Programming with MATLAB</a> by Vanderbilt University</li>
                            </ul>
                            <h4 className="learning__item-subtitle">Courses I completed</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://www.coursera.org/learn/python-databases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Python to Access Web Data</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-network-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Databases with Python</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Python Data Structures</a> by University of Michigan</li>
                            </ul>
                        </div>
                    </li>
                    <li className="learning__item">
                        <img src={edx} className="learning__item-img" alt="project" />
                        <div className="before__item-textbox">
                            <h3 className="learning__item-title lobster">I learned from Cousera.</h3>
                            <p>I love coursera that I could access so many courses from lots of top schools. I learned my first programing language there and love coding since.</p>
                            <h4 className="learning__item-subtitle">Certificate I earned</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://coursera.org/share/74a7f31847b93e3090fd3c91031f6a46"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">SQL for Data Science</a> by University of California, Davis</li>
                                <li><a
                                    href="https://coursera.org/share/38dc9e56fc6d6824d27cadbc44a2fb78"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Introduction to Programming with MATLAB</a> by Vanderbilt University</li>
                            </ul>
                            <h4 className="learning__item-subtitle">Courses I completed</h4>
                            <ul className="learning__item-list">
                                <li><a
                                    href="https://www.coursera.org/learn/python-databases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Python to Access Web Data</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-network-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Using Databases with Python</a> by University of Michigan</li>
                                <li><a
                                    href="https://www.coursera.org/learn/python-data"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="learning__item-link">Python Data Structures</a> by University of Michigan</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </section>
        </main >

    )
}