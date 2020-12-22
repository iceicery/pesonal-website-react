import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import './pages/App.css';
import Menu from './components/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WebProjects from './components/WebProjects/WebProjects';
import Before from './components/Before/Before';
import Learning from './components/Learning/Learning';
//import Intersts from './components/Interests';

function App() {
  return (
    <div className="page">
      <BrowserRouter basename={window.location.pathname || '/personal-website-react'}>
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route exact path="/projects">
            <Header now={'projects'} />
            <WebProjects />
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
