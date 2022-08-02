import React from "react";
import axios from 'axios';


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [],
        }
    }
    
    callError = () => {
        <>
            <div className="error">
                <h1>Error</h1>
            </div>
        </>
        }
        dataRender = async()=> {
            if (this.props.userinput === "Amman") {
            this.setState({response :  await axios.get('https://cityexplorerapizaid.herokuapp.com/weather?lat=31.95&lon=35.91&searchQuery=Amman')})
            }
            else if (this.props.userinput === "Seattle") {
                this.setState({response : await axios.get('https://cityexplorerapizaid.herokuapp.com/weather?lat=47.60621&lon=-122.33207&searchQuery=Seattle')})
            }
            else if (this.props.userinput === "Paris") {
                this.setState({response : await axios.get('https://cityexplorerapizaid.herokuapp.com/weather?lat=48.86&lon=-2.35&searchQuery=Paris')})
            }
            else {
                this.callError();
            }
        }
        
    render () {
        return (
            <div>
                <button onClick={this.dataRender}>Get Weather</button>
                {this.state.response && this.state.response.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item.date}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    }
                ) 
                }
            </div>
        )
    }
}

export default Weather;