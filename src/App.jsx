import React, { Component } from 'react';
import './App.css';

class App extends Component {
render() {
  return (
    <div className="App">
      <div className="App-title">Countdown to 'DATA'</div>
      <div>
        <div className="Clock-days">x days</div>
        <div className="Clock-hours">x hours</div>
        <div className="Clock-minutes">x minutes</div>
        <div className="Clock-seconds">x seconds</div>
      </div>
      <div>
      <input placeholder='date Month, year'/>
      <button>Submit</button>
    </div>
  </div>
    )
  }
}

export default App;
