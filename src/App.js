import React from 'react';
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
        <Menu />
        <Header />
        <WebProjects />
        <Footer />
      </div>
    </body>
  );
}

export default App;
