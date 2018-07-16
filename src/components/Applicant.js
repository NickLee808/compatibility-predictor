import React, { Component } from 'react';

class Applicant extends Component {
  constructor(props){
    super(props);
    this.state = {
      applicants: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(event){
    event.preventDefault();

    let newPerson = {
      name: this.state.name,
      attributes: {
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        intelligence: this.state.intelligence,
        charisma: this.state.charisma
      }
    }

    let newApplicants = this.state.applicants.concat(newPerson);

    this.setState({
      applicants: newApplicants
    });
  }

  render(){
    console.log(this.state);
    return (
      <div className="Applicant-component">
        <h2>Applicant</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="Applicant-name">
            Applicant name:
            <input type="text" name="name" onChange={this.handleInput}/>
          </div>
          <div className="Applicant-attributes">
            Strength:
            <select name="strength" onChange={this.handleInput}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            Dexterity:
            <select name="dexterity" onChange={this.handleInput}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            Intelligence:
            <select name="intelligence" onChange={this.handleInput}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            Charisma:
            <select name="charisma" onChange={this.handleInput}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <input type="submit" value="Submit Applicant"/>
        </form>
        <div className="Applicant-list">
          <h2>Current Applicants:</h2>
          <div>{this.state.applicants.map(
            function(person){
              return (
                <div className="results">
                  <br/><b>Name: {person.name}</b>
                  <br/>Strength: {person.attributes.strength}
                  <br/>Dexterity: {person.attributes.dexterity}
                  <br/>Intelligence: {person.attributes.intelligence}
                  <br/>Charisma: {person.attributes.charisma}
                </div>
              )
            }
          )}</div>
        </div>
      </div>
    )
  }
}

export default Applicant;