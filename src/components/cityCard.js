import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";



class CityCard extends React.Component {
    render() {
        return (
            <>
                <Container style={{ width: '400px', height: '300px', display: 'inline' }}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.props.display_name}</Card.Title>
                                    <Card.Text>
                                        <CardImg src={this.props.image_url} alt="map" />
                                        <span>Latitude: {this.props.lat} and Longitude : {this.props.lon}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}


export default CityCard;