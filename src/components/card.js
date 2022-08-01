import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";

class Cardrender extends React.Component {
getData = () => {
    let key = `key=${process.env.REACT_APP_A_C}&`;
    let center = `center=${this.props.lat},${this.props.lon}`;
    let url = "https://maps.locationiq.com/v3/staticmap?";
    let zoom = "&zoom=8";
    let response = url + key + center + zoom;
    return response;
};
    render() {
        return (
            <>
            {this.props.display_name &&
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.props.display_name}</Card.Title>
                                <Card.Text>
                                    <CardImg src={this.getData()} alt="map" />
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
export default Cardrender;
