import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";


class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_name: "",
            lat: "",
            lon: ""
        }
        this.weatherCall(this.props.userInput, this.props.chooseValue);
    }

    weatherCall = async(userInput, chooseValue) => {
        let url = '';
        if (chooseValue === "US") {
            url = 'https://us1.locationiq.com/v1/search.php?';
        }
        else if (chooseValue === "EU") {
            url = 'https://eu1.locationiq.com/v1/search.php?';
        }
        let search = userInput;
        let key = `key=${process.env.REACT_APP_A_C}` ;
        let format = '&format=json';
        let query = `&q=${search}`;
        await  axios.get(url + key + query + format).then(res => {
        this.setState({
            display_name: res.data[0].display_name,
            lat: res.data[0].lat,
            lon: res.data[0].lon,
            searchName: search,
            });
        }
        )
        .catch(err => {
            console.log(err, 'from weather');
        }
        )
    }

        getData = () => {
            let key = `key=${process.env.REACT_APP_A_C}&`;
            let center = `center=${this.state.lat},${this.state.lon}`;
            let url = "https://maps.locationiq.com/v3/staticmap?";
            let zoom = "&zoom=8";
            let response = url + key + center + zoom;
            this.props.latAndLon(this.state.lat, this.state.lon);
            return response;
        };
        
        
        render() {
            return (
                <>
                {this.state.display_name &&
                <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.state.display_name}</Card.Title>
                                <Card.Text>
                                    <CardImg src={this.getData()} alt="map" />
                                    <span>Latitude: {this.state.lat} and Longitude : {this.state.lon}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            }

            </>
            );
        }
        
}


export default WeatherCard;