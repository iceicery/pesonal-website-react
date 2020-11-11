import logo from './logo.svg';
import './pages/App.css';

function App() {
  return (
    <body>
      <div className="page">
        <div className="overlay">
          <div className="construction">
            <h1 className="construction__title">
              Under construction.<br />Please come back later.
          </h1>
          </div>
        </div>
        <header className="header">
          <div className="header__img-box">
            <img
              src="images/developer.jpg"
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
              <img src="images/emoji-2.jpg" alt="avatar" className="header__emoji" />
              <img src="images/head.jpg" alt="avatar" className="header__selfie" />
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
        <main className="content">
          <section className="projects">
            <h2 className="proects__text">Pinwei's Web Projects</h2>
            <ul className="projects__box">
              <li className="projects__item">
                <a
                  href="https://iceicery.github.io/web_project_1/"
                  target="_blank"
                ><img src="images/LearningHowToLearn.JPG" className="projects__img"
                  /></a>
                <h3 className="projects__title">Informitive website</h3>
                <ul className="projects__tech">
                  <li className="projects__tech-item">Html</li>
                  <li className="projects__tech-item">CSS</li>
                  <li className="projects__tech-item">JavaScript</li>
                  <a
                    href="https://github.com/iceicery/web_project_1"
                    target="_blank"
                  >
                    <li className="projects__tech-item projects__tech-link">Code</li>
                  </a>
                </ul>
              </li>
              <li className="projects__item">
                <a
                  href="https://iceicery.github.io/web_project_3/"
                  target="_blank"
                ><img src="images/LearningHowToLearn.JPG" className="projects__img"
                  /></a>
                <h3 className="projects__title">Informitive website</h3>
                <ul className="projects__tech">
                  <li className="projects__tech-item">Html</li>
                  <li className="projects__tech-item">CSS</li>
                  <li className="projects__tech-item">JavaScript</li>
                  <a
                    href="http s://github.com/iceicery/web_project_1"
                    target="_blank"
                  >
                    <li className="projects__tech-item projects__tech-link">Code</li>
                  </a>
                </ul>
              </li>
              <li className="projects__item">
                <a
                  href="https://iceicery.github.io/web_project_1/"
                  target="_blank"
                ><img src="images/LearningHowToLearn.JPG" className="projects__img"
                  /></a>
                <h3 className="projects__title">Informitive website</h3>
                <ul className="projects__tech">
                  <li className="projects__tech-item">Html</li>
                  <li className="projects__tech-item">CSS</li>
                  <li className="projects__tech-item">JavaScript</li>
                  <a
                    href="https://github.com/iceicery/web_project_1"
                    target="_blank"
                  >
                    <li className="projects__tech-item projects__tech-link">Code</li>
                  </a>
                </ul>
              </li>
              <li className="projects__item">
                <a
                  href="https://iceicery.github.io/web_project_1/"
                  target="_blank"
                ><img src="images/LearningHowToLearn.JPG" className="projects__img"
                  /></a>
                <h3 className="projects__title">Informitive website</h3>
                <ul className="projects__tech">
                  <li className="projects__tech-item">Html</li>
                  <li className="projects__tech-item">CSS</li>
                  <li className="projects__tech-item">JavaScript</li>
                  <a
                    href="https://github.com/iceicery/web_project_1"
                    target="_blank"
                  >
                    <li className="projects__tech-item projects__tech-link">Code</li>
                  </a>
                </ul>
              </li>
            </ul>
            <footer className="footer">
              <div className="footer__box1">
                <h3 className="footer__title">I can do:</h3>
                <h3 className="footer__subtitle">
                  HTML, CSS, JavaScript, Git, React, Node.js, SAS, R
              </h3>
              </div>
              <div className="footer__box2">
                <h3 className="footer__title">Contact Me:</h3>
                <h3 className="footer__subtitle">&#9993; pw.amy.wu@gmail.com</h3>
                <ul className="footer__icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pinwei-wu-514713120/"
                      target="_blank"
                    >
                      <div className="footer__icon-linkedin"></div>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/iceicery" target="_blank">
                      <div className="footer__icon-github"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__box1">
            <h3 className="footer__title">I can do:</h3>
            <h3 className="footer__subtitle">
              HTML, CSS, JavaScript, Git, React, Node.js, SAS, R
          </h3>
          </div>
          <div className="footer__box2">
            <h3 className="footer__title">Contact Me:</h3>
            <h3 className="footer__subtitle">&#9993; pw.amy.wu@gmail.com</h3>
            <ul className="footer__icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/pinwei-wu-514713120/"
                  target="_blank"
                >
                  <div className="footer__icon-linkedin"></div>
                </a>
              </li>
              <li>
                <a href="https://github.com/iceicery" target="_blank">
                  <div className="footer__icon-github"></div>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default App;
