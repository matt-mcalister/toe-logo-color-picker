import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import Logo from "./Logo"
import SavedList from "./SavedList"
import './App.css';
import firebase from "./firebase"

class App extends Component {
  state = {
    note: "",
    background: "#013801",
    foreground: "#fafcfa",
    saved: {}
  }

  componentDidMount(){
    const saved = {}
    firebase.db.collection("colors").get()
      .then(payload => payload.docs.forEach(doc => saved[doc.data().id] = doc.data()))
      .then(() => this.setState({
        saved
      }))
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

  handleChange = (e) => {
    this.setState({
      note: e.target.value
    })
  }

  saveColor = (e) => {
    e.preventDefault()
    const { note, background, foreground } = this.state
    const newColorRef = firebase.db.collection('colors').doc()
    const newColor = {note, background, foreground, id: newColorRef.id}
    newColorRef.set(newColor)
      .then(() => {
        const saved = {...this.state.saved}
        saved[newColorRef.id] = newColor
        this.setState({
          saved
        })
      })
  }

  selectSaved = (background, foreground) => {
    this.setState({
      background,
      foreground
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
            <div>
            <h3>Saved</h3>
            <SavedList saved={Object.values(this.state.saved)} selectSaved={this.selectSaved}/>
            </div>
          </div>
          <button onClick={this.switch}>Switch Foreground/Background</button>
          <form onSubmit={this.saveColor}>
            <input type="text" value={this.state.note} onChange={this.handleChange}/>
            <input type="submit" value="Save Color Combo" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
