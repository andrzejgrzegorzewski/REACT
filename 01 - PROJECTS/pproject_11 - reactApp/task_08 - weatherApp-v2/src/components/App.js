import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

// API KEY
const APIKey = '0d80361aa587ead7f294ef50b01c24c5'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){

    if(this.state.value.length === 0) return

    if(prevState !== this.state.value){
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
          .then(response => {
            if (response.ok) {
              return response
            }
            throw Error("Error - no data")
          })
          .then(response => response.json())
          .then(data => {
            const time = new Date().toLocaleString()
            this.setState(state => ({
              err: false,
              date: time,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              temp: data.main.temp,
              pressure: data.main.pressure,
              wind: data.wind.speed,
              city: state.value.charAt(0).toUpperCase() + state.value.slice(1),
            }))
          })
          .catch(err => {
            console.log(err);
            this.setState(prevState => ({
              err: true,
              city: prevState.value.charAt(0).toUpperCase() + prevState.value.slice(1),
            }))
          })
      }
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;