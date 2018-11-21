import React, {
    Component
} from "react";
import "./Home.css";

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
                <Xfooter/>
            </div> 
        )
    }
}

export default Home;