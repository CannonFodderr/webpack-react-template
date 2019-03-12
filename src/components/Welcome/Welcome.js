import React, {Component} from 'react';
import '../../assets/images/react.png';
import './Welcome.css';

class Welcome extends Component{
    render(){
        return(
            <div className="wrapper">
                <h1 className="title">Hello From React</h1>
                <img className="banner" src="assets/images/react.png"/>
            </div>
        )
    }
}

export default Welcome;