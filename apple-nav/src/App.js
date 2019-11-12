import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNav from './components/mainNav';
import SubNav from './components/subNav';

import { AnimatedSwitch } from 'react-router-transition';

import './App.css';

import { menuItems } from './data'

function App() {
  return (
    <div className="App">
      <header>
        <MainNav menuItems={menuItems} />
      </header>
      
      <div className="subMenu">
        <AnimatedSwitch atEnter={{opacity: 0}} atLeave={{opacity: 0}} atActive={{opacity: 1}} className="switch-wrapper">
          <Route path="/Mac" render={props => <SubNav {...props} />} />
          <Route path="/(iPad|iPhone|Watch|TV|Music|Support|Search|Shop)/" render={props => <SubNav {...props} />} />
        </AnimatedSwitch>
      </div>
    </div>
  );
}

export default App;