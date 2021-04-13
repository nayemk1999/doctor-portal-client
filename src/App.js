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
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import AllPatient from './component/Dashboard/AllPatient/AllPatient';

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
        <Route path ='/dashboard/appointment'>
          <Dashboard/>
        </Route>
        <Route path ='/doctor/dashboard'>
          <Dashboard/>
        </Route>
        <Route path ='/doctor/allPatient'>
          <AllPatient/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;