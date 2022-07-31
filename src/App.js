import "./App.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cardrender from "./components/card";
import Swal from "sweetalert2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
        }
    }
    data = async (e) => {
    let url = '';
    e.preventDefault();
    if (e.target.city.value){
    let key=`key=${process.env.REACT_APP_A_C}&`;
    if (e.target.choose.value === "US") {;
      url = 'https://us1.locationiq.com/v1/search.php?';
    } else if (e.target.choose.value === "EU") {
      url = 'https://eu1.locationiq.com/v1/search.php?';
    }
    let search =e.target.city.value;
    let format = '&format=json';
    let query = `q=${search}`;
    let response = await axios.get(url+key+query+format);
    this.setState({userData:response.data});
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a valid city!',
    })
  }
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
        <Cardrender userData={this.state.userData}/>
        </>
    );
  }
}

export default App;
