import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/HomePage/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';

const App = () => {

  return (
    <Router >
      <Switch>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
        <Route path ='/appointment'>
          <Appointment/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;