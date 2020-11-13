import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import './pages/App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import WebProjects from './components/WebProjects';
import Before from './components/Before';
import Learning from './components/Learning';
import Intersts from './components/Interests';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/personal-website-react">
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
          <Route exact path="/interests">
            <Header now={'interests'} />
            <Intersts />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default withRouter(App);
