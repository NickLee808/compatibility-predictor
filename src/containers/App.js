import React, { Component } from 'react';
import '../App.css';
import Team from '../components/Team';
import Applicant from '../components/Applicant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>
        <div className="App-body">
          <Team/>
          <Applicant/>
        </div>
      </div>
    );
  }
}

export default App;
