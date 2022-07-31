import "./App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
        }
    }
    data = async (e) => {
    e.preventDefault();
    let key=`key=${process.env.REACT_APP_A_C}&`;
    let search =e.target.city.value;
    let url = 'https://us1.locationiq.com/v1/search.php?';
    let format = '&format=json';
    let query = `${key}q=${search}${format}`;
    let response =await axios.get(url+query);
    this.setState({userData:response.data});
  }
  

  render() {
    return (
      <>
        <div className="App">
          <Form onSubmit={this.data}>
            <Form.Group controlId="city">
              <Form.Label>City Name : </Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Button variant="primary" type="submit" value="Submit">Explore!</Button>
          </Form>
        </div>
        <Container>
          <Row>
            {this.state.userData.map((data,index)=>{
              return(
                <Col key={index} md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{data.display_name}</Card.Title>
                      <Card.Text>
                        <p>Latitude : {data.lat}</p>
                        <p>Longitude : {data.lon}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
            )}
          </Row>
        </Container>
        </>
    );
  }
}

export default App;
