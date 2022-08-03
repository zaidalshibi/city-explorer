import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FormUser extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userInput(e.target.city.value, e.target.choose.value);
    }


    render() {
        return (
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
        )
    }
}


export default FormUser;