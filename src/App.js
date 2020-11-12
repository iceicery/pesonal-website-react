import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import './pages/App.css';
import Menu from './components/Menu';
import Construction from './components/Construction';
import Header from './components/Header';
import Footer from './components/Footer';
import WebProjects from './components/WebProjects';

function App() {
  return (
    <body>
      <div className="page">
        <Construction isConstructed={false} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route exact path="/projects">
              <Header />
              <WebProjects />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </body>
  );
}

export default withRouter(App);
