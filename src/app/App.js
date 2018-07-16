import React, { Component } from 'react';
import '../App.css';
import Team from '../forms/Team';
import Applicant from '../forms/Applicant';
import logo from '../assets/logo_260@2x.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      team: [],
      applicants: [],
      scoredApplicants: []
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

    let scoredApplicants = [];

    for (let j=0; j<this.state.applicants.length; j++){
      let absolutes = {};
      let applicantAvgs = 0;

      {/*absolutes.strength = 1 - Math.abs(teamAvg.strength - this.state.applicants[j].attributes.strength) / 10;
      absolutes.dexterity = 1 - Math.abs(teamAvg.dexterity - this.state.applicants[j].attributes.dexterity) / 10;
      absolutes.intelligence = 1 - Math.abs(teamAvg.intelligence - this.state.applicants[j].attributes.intelligence) / 10;
      absolutes.charisma = 1 - Math.abs(teamAvg.charisma - this.state.applicants[j].attributes.charisma) / 10;*/}

      applicantAvgs += 1 - Math.abs(teamAvg.strength - this.state.applicants[j].attributes.strength) / 10;
      applicantAvgs += 1 - Math.abs(teamAvg.dexterity - this.state.applicants[j].attributes.dexterity) / 10;
      applicantAvgs += 1 - Math.abs(teamAvg.intelligence - this.state.applicants[j].attributes.intelligence) / 10;
      applicantAvgs += 1 - Math.abs(teamAvg.charisma - this.state.applicants[j].attributes.charisma) / 10;

      let score = applicantAvgs / 4;

      let applicant = {
        name: this.state.applicants[j].name,
        score
      }

      scoredApplicants.push(applicant);
    }

    console.log(scoredApplicants);

    this.setState({scoredApplicants});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>
        <div className="App-body">
          <Team updateAppTeam={this.teamUpdate}/>
          <Applicant updateAppApplicants={this.applicantUpdate}/>
          <form onSubmit={this.calculator}>
            <input type="submit" value="Calculate Scores"/>
          </form>
          <h1>Applicant Compatibility Results: </h1>
          <div className="All-results">{this.state.scoredApplicants.map(
            function(applicantResult){
              return(
                <div className="Results">
                  <br/><b>Name: {applicantResult.name}</b>
                  <br/>Score: {applicantResult.score}
                </div>
              )
            }  
          )}</div>
        </div>
      </div>
    );
  }
}

export default App;
