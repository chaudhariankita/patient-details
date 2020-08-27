import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import PatientsList from "./components/patients-list.component";
import EditPatient from "./components/edit-patient.component";
import CreatePatient from "./components/create-patient.component";
import CreateUser from "./components/create-user.component";
//import { domainToASCII } from 'url';

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
      <br/>
      <Route path="/" exact component={PatientsList} />
      <Route path="/edit/:id" component={EditPatient} />
      <Route path="/create" component={CreatePatient} />
      <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
