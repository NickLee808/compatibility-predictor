import React, { Component } from 'react';

class Team extends Component {
  constructor(props){
    super(props);
    this.state = {
      team: []
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
    console.log(this.state);
    return (
      <div className="Team-component">
        <h2>Team</h2>
        <form>
          <div className="Team-name">
            Team member name:
            <input type="text" name="name" onChange={this.handleInput}/>
          </div>
          <div className="Team-attributes">
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
          <input type="submit" value="Submit Team Member"/>
        </form>
      </div>
    )
  }
}

export default Team;