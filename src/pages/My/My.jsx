import React, {
    Component
} from "react";
import "./My.css";



import Xheader from '../../components/Xmyheader/Xheader';
import Xmoney from '../../components/Xmoney/Xmoney';
import Xmymian from '../../components/Xmymian/Xmymian';
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
                <Xheader />
                <Xmoney/>
                <Xmymian/>
                <Xfooter/>
            </div>
                
            
        )
    }
}

export default Home;