import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUser from "./components/form";
import WeatherCard from "./components/mainWeatherCard";
import SubWeatherCard from "./components/subWeatherCard";
import Movies from "./components/movies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : "",
      chooseValue : "",
      rendered : false,
      lat : "",
      lon : "",
    }
  }

  handleInput = (formValue,chooseValue) => {
    this.setState({
      userInput: formValue,
      chooseValue: chooseValue
    })
  }


  handleLat = (lat, lon) => {
    this.setState({
      lat: lat,
      lon: lon,
      renderedData: true
    })
  }
  render() {
    return (
      <>
        <FormUser userInput={this.handleInput}/>
        {this.state.userInput &&
          <WeatherCard userInput={this.state.userInput} chooseValue={this.state.chooseValue} latAndLon={this.handleLat}/>
        }
        { this.state.renderedData &&
          <SubWeatherCard lat={this.state.lat} lon={this.state.lon}/>
        }
        { this.state.renderedData &&
          <Movies cityName={this.state.userInput}/>
        }
      </>
    );
  }
}

export default App;