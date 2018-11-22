import React, {
    Component
} from "react";
import "./Home.css";



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
               	这是home
            </div> 
        )
    }
}

export default Home;