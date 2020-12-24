import React, { useState } from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import './pages/App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WebProjects from './components/WebProjects/WebProjects';
import Before from './components/Before/Before';
import Learning from './components/Learning/Learning';
import ProjectsPopup from './ProjectsPopup/ProjectsPopup';
import testUtils from 'react-dom/test-utils';
//import Intersts from './components/Interests';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState('');
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  function handleProject(projectName) {
    setProject(projectName)
  }
  return (
    <div className="page">
      <BrowserRouter basename={window.location.pathname || '/personal-website-react'}>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/projects">
            <Header now={'projects'} />
            <ProjectsPopup isOpen={isOpen} project={project} handleClose={handleClose} />
            <WebProjects handleOpen={handleOpen} handleProject={handleProject} />
          </Route>
          <Route exact path="/learning">
            <Header now={'learning'} />
            <Learning />
          </Route>
          <Route exact path="/before">
            <Header now={'before'} />
            <Before />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default withRouter(App);
