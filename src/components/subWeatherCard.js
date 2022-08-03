import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import clearSky from "../assets/clearSky.jpg";
import fewClouds from "../assets/fewClouds.jpg";
import scatteredClouds from "../assets/scatteredClouds.jpg";
import brokenClouds from "../assets/brokenClouds.jpg";
import showerRain from "../assets/showerRain.jpg";
import rain from "../assets/rain.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";
import snow from "../assets/snow.jpg";
import mist from "../assets/mist.jpg";





class SubWeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.renderWeather();
    }

    renderWeather = async () => {
        await axios.get(`https://cityexplorerapizaid.herokuapp.com/weather?lat=${this.props.lat}&lon=${this.props.lon}`).then(res => {
        this.setState({
            data: res.data,
        });
    }
    )
    }
    render() {
        return (
            <>
                {this.state.data &&
                    <Container style={{width : '300px' , height : '150px', display : 'inline'}}>
                        <Row xs={3} md={4} className="g-4">
                            {this.state.data.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.date}</Card.Title>
                                                {item.description.includes('Clear Sky') ? <CardImg style={{width : '300px' , height : '150px'}} src={clearSky} alt={item.description} /> :
                                                item.description.includes('Few clouds') ? <CardImg style={{width : '300px' , height : '150px'}} src={fewClouds} alt={item.description} /> :
                                                item.description.includes('Scattered clouds') ? <CardImg style={{width : '300px' , height : '150px'}} src={scatteredClouds} alt={item.description} /> :
                                                item.description.includes('broken clouds') ? <CardImg style={{width : '300px' , height : '150px'}} src={brokenClouds} alt={item.description} /> :
                                                item.description.includes('shower rain') ? <CardImg style={{width : '300px' , height : '150px'}} src={showerRain} alt={item.description} /> :
                                                item.description.includes('rain') ? <CardImg style={{width : '300px' , height : '150px'}} src={rain} alt={item.description} /> :
                                                item.description.includes('thunderstorm') ? <CardImg style={{width : '300px' , height : '150px'}} src={thunderstorm} alt={item.description} /> :
                                                item.description.includes('snow') ? <CardImg style={{width : '300px' , height : '150px'}} src={snow} alt={item.description} /> :
                                                item.description.includes('mist') ? <CardImg style={{width : '300px' , height : '150px'}} src={mist} alt={item.description} /> :
                                                <CardImg style={{width : '300px' , height : '150px'}} src={brokenClouds} alt={item.description} />}
                                                <Card.Text>{item.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                            )
                            }
                        </Row>
                    </Container>
                }
            </>
        )
    }
}

export default SubWeatherCard;
