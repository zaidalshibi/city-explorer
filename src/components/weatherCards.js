import React from "react";
import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap";





class WeatherCards extends React.Component {
    render() {
        return (
            <>
                {this.props.weatherData &&
                    <Container style={{width : '300px' , height : '150px', display : 'inline'}}>
                        <Row xs={3} md={4} className="g-4">
                            {this.props.weatherData.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.date}</Card.Title>
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

export default WeatherCards;
