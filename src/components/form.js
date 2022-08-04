import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CityCard from "./cityCard";
import MoviesCards from "./moviesCards";
import WeatherCards from "./weatherCards";


class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            chooseValue: "",
            display_name: "",
            lat: "",
            lon: "",
            image_url: "",
            weatherData: [],
            moviesData: [],
        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let userInput = e.target.city.value;
        this.setState({
            userInput: e.target.city.value,
            chooseValue: e.target.choose.value,
        })
        let key = `key=${process.env.REACT_APP_A_C}`;
        let format = '&format=json';
        let query = `&q=${userInput}`;
        let url = 'https://us1.locationiq.com/v1/search.php?';
        let dataSet = await axios.get(url + key + format + query);
        let display_name = dataSet.data[0].display_name;
        let lat = dataSet.data[0].lat;
        let lon = dataSet.data[0].lon;
        let center = `&center=${lat},${lon}`;
        let url2 = "https://maps.locationiq.com/v3/staticmap?";
        let zoom = "&zoom=8";
        let image_url = url2 + key + center + zoom;
        try {
            this.setState({
                display_name: display_name,
                lat: lat,
                lon: lon,
                image_url: image_url,
            })
        }
        catch (error) {
            console.log(error);
        }
        let weatherData = await axios.get(`https://cityexplorerapizaid.herokuapp.com/weather?lat=${lat}&lon=${lon}&searchQuery=${userInput}`);
        try {
            this.setState({
                weatherData: weatherData.data,
            })
        }
        catch (error) {
            console.log(error);
        }
        let movieData = await axios.get(`https://cityexplorerapizaid.herokuapp.com/movies?title=${userInput}`);
        try {
            this.setState({
                moviesData: movieData.data,
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <>
                <div className="App">
                    <Form onSubmit={this.handleSubmit}>
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
                {this.state.userInput && this.state.chooseValue ?
                    <CityCard display_name={this.state.display_name} lat={this.state.lat} lon={this.state.lon} image_url={this.state.image_url} />
                    : null}
                {this.state.weatherData ?
                    <WeatherCards weatherData={this.state.weatherData} />
                    : null}
                {this.state.userInput ?
                    <MoviesCards movieData={this.state.moviesData} />
                    : null}
            </>
        )
    }
}


export default FormUser;