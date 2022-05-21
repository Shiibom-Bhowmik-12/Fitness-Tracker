import React from 'react';
import BMI from './Components/BMI';
import BMR from './Components/BMR';
import FAT from './Components/FAT'
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/bmr" component={BMR} exact/>
          <Route path="/bmi" component={BMI} exact/>
          <Route path="/fat" component={FAT} exact/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
