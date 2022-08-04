import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";


class Movies extends React.Component {
    render() {
        return (
            <>
                <Container style={{ width: '300px', height: '150px', display: 'inline' }}>
                    <Row xs={2} md={3} className="g-4">
                        {this.props.movieData.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            {item.image_url === 'http://image.tmdb.org/t/p/w500null' ?
                                                <CardImg src="https://tinyurl.com/26wgb89c" alt="map" />
                                                :
                                                <CardImg src={item.image_url} alt={item.image_url} />
                                            }
                                            <Card.Text>
                                                <Card.Text>{item.overview}</Card.Text>
                                                <Card.Text>release date: {item.release_date}</Card.Text>
                                                <Card.Text>rating: {item.average_votes}</Card.Text>
                                                <Card.Text>popularity: {item.popularity}</Card.Text>
                                                <Card.Text>Total votes: {item.total_votes}</Card.Text>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )
                        }
                    </Row>
                </Container>
            </>
        )
    }
}


export default Movies;