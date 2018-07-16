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
    this.calculator = this.calculator.bind(this);
  }

  teamUpdate(team){
    this.setState({team});
  }

  applicantUpdate(applicants){
    this.setState({applicants});
  }

  calculator(event){
    event.preventDefault();

    let teamStr = [];
    let teamDex = [];
    let teamInt = [];
    let teamChr = [];

    for (let i=0; i<this.state.team.length; i++){
      teamStr.push(this.state.team[i].attributes.strength);
      teamDex.push(this.state.team[i].attributes.dexterity);
      teamInt.push(this.state.team[i].attributes.intelligence);
      teamChr.push(this.state.team[i].attributes.charisma);
    }

    function arrAverager(arr){
      let total = 0;
      for(let i=0; i<arr.length; i++){
        total += parseInt(arr[i]);
      }
      let avg = total / arr.length;
      return avg;
    }

    let teamAvg = {
      strength: arrAverager(teamStr),
      dexterity: arrAverager(teamDex),
      intelligence: arrAverager(teamInt),
      charisma: arrAverager(teamChr)
    }

    console.log(teamAvg);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>
        <div className="App-body">
          <Team updateAppTeam={this.teamUpdate}/>
          <Applicant updateAppApplicants={this.applicantUpdate}/>
          <form onSubmit={this.calculator}>
            <input type="submit" value="Calculate Scores"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
