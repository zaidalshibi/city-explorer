import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import axios from "axios";
import broken from "../assets/broken.png";

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
        this.handleMovies();
    }
    handleMovies = async () => {
        await axios.get(`https://cityexplorerapizaid.herokuapp.com/movies?title=${this.props.cityName}`).then(res => {
        this.setState({
            response: res.data,
        });
    }
    ).catch(err => {
        console.log(err, 'from movies');
    }
    )
    }
    render() {
        return (
            <>
                {this.props.cityName &&
                    <Container style={{width : '300px' , height : '150px', display : 'inline'}}>
                        <Row xs={2} md={3} className="g-4">
                            {this.state.response.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                {item.image_url.includes('null') ? <CardImg src={broken} alt={item.title} /> : <CardImg src={item.image_url} alt={item.image_url} />}
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
                }
            </>
        )
    }
}


export default Movies;