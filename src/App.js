import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Box from './components/Box';
import global from './styles/global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value })
  }

  onStepsChange(e) {
    console.log(e.target.value);
    this.setState({ steps: e.target.value })
  }

  onTempChange(e) {
    this.setState({ temperature: e.target.value })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water*/}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />
          {/* Walk */}
          <Box
            onChange={this.onStepsChange}
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
          />
          {/* Heart */}
          <Box
            onChange={this.onHeartChange}
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
          />
          {/* Sun */}
          <Box
            onChange={this.onTempChange}
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
          />
        </div>
      </div>
    );
  }
}



export default App;


