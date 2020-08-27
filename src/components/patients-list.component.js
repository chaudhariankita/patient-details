import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Patient = props => (
  <tr>
    <td>{props.patient.username}</td>
    <td>{props.patient.description}</td>
    <td>{props.patient.duration}</td>
    <td>{props.patient.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.patient._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient(props.patient._id) }}>delete</a>
    </td>
  </tr>
)

export default class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.deletePatient = this.deletePatient.bind(this)

    this.state = {patients: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/patients/')
      .then(response => {
        this.setState({ patients: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePatient(id) {
    axios.delete('http://localhost:5000/patients/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      patients: this.state.patients.filter(el => el._id !== id)
    })
  }

  patientList() {
    return this.state.patients.map(currentpatient => {
      return <Patient patient={currentpatient} deletePatient={this.deletePatient} key={currentpatient._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Patients List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.patientList() }
          </tbody>
        </table>
      </div>
    )
  }
}