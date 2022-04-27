import React, {
    Component
} from "react";
import "./Home.css";
import logo from './../../logo.svg';

import Xfooter from '../../components/Xfooter/Xfooter';

import { Route } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div >
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>欢迎来到金融項目</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                    </header>
                </div>
                <Xfooter/>
            </div> 
        )
    }
}

export default Home;