import React, { Component } from 'react';
import '../App.css';
import Team from '../components/Team';
import Applicant from '../components/Applicant';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      team: [],
      applicants: []      
    };
    this.teamUpdate = this.teamUpdate.bind(this);
    this.applicantUpdate = this.applicantUpdate.bind(this);
  }

  teamUpdate(team){
    this.setState({team});
  }

  applicantUpdate(applicants){
    this.setState({applicants});
  }

  render() {
    console.log('this.state: ', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>
        <div className="App-body">
          <Team updateAppTeam={this.teamUpdate}/>
          <Applicant updateAppApplicants={this.applicantUpdate}/>
        </div>
      </div>
    );
  }
}

export default App;
