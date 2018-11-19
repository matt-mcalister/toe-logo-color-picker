import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import Logo from "./Logo"
import './App.css';

class App extends Component {
  state = {
    background: "#013801",
    foreground: "#fafcfa"
  }

  handleChange = (color, name) => {
    this.setState({
      [name]: color.hex
    })
  }

  switch = (e) => {
    this.setState({
      background: this.state.foreground,
      foreground: this.state.background
    })
  }

  render() {
    return (
      <div className="App">
        <Logo {...this.state}/>
        <div>
          <div className="color-pickers">
            <div>
              <h3>Background</h3>
              <SketchPicker
                color={ this.state.background }
                onChangeComplete={(color) => this.handleChange(color, "background")}
              />
            </div>
            <div>
            <h3>Foreground</h3>
              <SketchPicker
                color={ this.state.foreground }
                onChangeComplete={(color) => this.handleChange(color, "foreground")}
              />
            </div>
          </div>
          <button onClick={this.switch}>Switch Foreground/Background</button>
        </div>
      </div>
    );
  }
}

export default App;
