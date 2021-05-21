import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import Experience from './pages/Experience';

import Newsletter from './pages/Newsletter';
import SignUp from './pages/SignUp';
import Integrations from './pages/Integrations';



function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/experience' exact component={Experience} />
          
          <Route path='/integrations' exact component={Integrations} />
          <Route path='/newsletter' exact component={Newsletter} />
          <Route path='/sign-up' exact component={SignUp} />

        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
