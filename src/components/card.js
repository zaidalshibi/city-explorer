import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, CardImg } from "react-bootstrap";


class Cardrender extends React.Component {

    getData = (lat,lon) => {
        let key = `key=${process.env.REACT_APP_A_C}&`;
        let center = `center=${lat},${lon}`;
        let url = 'https://maps.locationiq.com/v3/staticmap?';
        let zoom = '&zoom=13';
        let response =url + key + center + zoom;
        return response;
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {this.props.userData.map((item, index) => {
                            return (
                                <Col key={index} md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.display_name}</Card.Title>
                                            <CardImg src={this.getData(item.lat,item.lon)} alt={item.display_name} />
                                            <Card.Text>
                                            <span>Latitude : {item.lat} <br/> Longitude : {item.lon}</span>
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
        )
    }
}
export default Cardrender;

// class Cardrender extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mapData: [],
//         }
//     }

//     getData = async (index) => {
//         let key=`key=${process.env.REACT_APP_A_C}&`;
//         let urlMap = 'https://maps.locationiq.com/v3/staticmap?'
//         let center = `&center=${this.props.userData[index].lat},${this.props.userData[index].lon}`;
//         let zoom = '&zoom=1';
//         let responseMap = await axios.get(urlMap+key+center+zoom);
//         this.setState({mapData:responseMap});
//         return responseMap;
//         }

//     render() {
//         return (
//             <>
//                 <Container>
//                     <Row>
//                     {this.props.userData.map((data, index) => {
                        
//                     return (
//                         <Col key={index} md={4}>
//                             <Card>
//                                 <CardImg src={this} alt="Card image" />
//                                 <Card.Body>
//                                     <Card.Title>{data.display_name}</Card.Title>
//                                     <Card.Text>
//                                         <p>Latitude : {data.lat}</p>
//                                         <p>Longitude : {data.lon}</p>
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     );
//                     })}
//                     </Row>
//             </Container>
//             </>
//         );
//     }
// }

// export default Cardrender;
