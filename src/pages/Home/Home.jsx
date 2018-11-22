import React, {
    Component
} from "react";
import "./Home.jsx";
import "../../assets/webStatistics.css";

import Terran from '../Terran/Terran.jsx';
// import Contact from '../Contact/Contact.jsx';

import Xfooter from '../../components/Xfooter/Xfooter.js';
import { Route } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path="/home" component={Terran} />

                <Xfooter/>
            </div>
        )
    }
}

export default Home;