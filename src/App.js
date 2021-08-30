import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';
import Products from './components/pages/Products.js';
import Contact from './components/pages/Contact.js';
import AboutMe from './components/pages/AboutMe.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/contact' component={Contact} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
