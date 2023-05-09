import './App.css';
import React, { Component } from 'react'
import Step1 from './component/step1';
import Step2 from './component/step2';
import Step3 from './component/step3';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter:    0,
      first_name: '',
      last_name:  '',
      age:        '',
      email:      ''
    }
    this.NextPage = this.NextPage.bind(this);
    this.PrevPage = this.PrevPage.bind(this);
  }

  NextPage(e) {
    this.state.counter++;
    this.setState({
      counter: this.state.counter
    })
  }

  PrevPage(e) {
    this.state.counter--;
    this.setState({
      counter: this.state.counter
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.counter === 0 && <Step1/>}
        {this.state.counter === 1 && <Step2/>}
        {this.state.counter === 2 && <Step3/>}

        <button type='button' disabled={this.state.counter === 0} onClick={this.PrevPage}>Previous</button>
        <button type='button' disabled={this.state.counter === 2} onClick={this.NextPage}>Next</button>
      </div>
    )
  }
}

export default App
