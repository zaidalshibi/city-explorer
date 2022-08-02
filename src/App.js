import "./App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cardrender from "./components/card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      error: true,
      searchName: "",
      data: "",
      response: [],
      errorMessage: ""
    }
  }
  data = async (e) => {
    e.preventDefault();
    this.renderMap(e);
    this.renderWeather(this.state.lat, this.state.lon);
    this.renderMovie(this.state.searchName);
  }

  renderMap = async (e) => {
    let url = '';
    let key = `key=${process.env.REACT_APP_A_C}&`;
    if (e.target.choose.value === "US") {
      url = 'https://us1.locationiq.com/v1/search.php?';
    } else if (e.target.choose.value === "EU") {
      url = 'https://eu1.locationiq.com/v1/search.php?';
    }
    let search = e.target.city.value;
    let format = '&format=json';
    let query = `q=${search}`;
    try {
      const response = await axios.get(url + key + query + format);
      this.setState({
        display_name: response.data[0].display_name,
        lat: response.data[0].lat,
        lon: response.data[0].lon,
        searchName: search,
      });
    }
    catch (error) {
      this.setState({
        error: false,
        errorMessage: error.message
      });
    }
  }
  renderWeather = async () => {
    try {
    const response2 = await axios.get(`https://cityexplorerapizaid.herokuapp.com/weather?lat=${this.state.lat}&lon=${this.state.lon}`);
      this.setState({
        data: response2.data,
      }
      );
    }
    catch (error) {
      this.setState({
        error: false,
        errorMessage: error.message
      });
    }
  }

  renderMovie = async (e) => {
    try {
    const response3 = await axios.get(`https://cityexplorerapizaid.herokuapp.com/movie?title=${e.target.city.value}`);
      this.setState({
        response: response3.data,
      }
      );
    }
    catch (error) {
      this.setState({
        error: false,
        errorMessage: error.message
      });
    }
  }
  render() {
    return (
      <>
        <div className="App">
          <Form onSubmit={this.data}>
            <Form.Group controlId="city">
              <Form.Label>City Name : </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="choose">
              <Form.Label>Choose : </Form.Label>
              <Form.Control as="select">
                <option>Choose</option>
                <option>US</option>
                <option>EU</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" value="Submit">Explore!</Button>
          </Form>
        </div>
        {this.state.error &&
          <>
            <Cardrender display_name={this.state.display_name} lat={this.state.lat} lon={this.state.lon} />
          </>
        }
      </>
    );
  }
}

export default App;