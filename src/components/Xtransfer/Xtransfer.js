import React, {
    Component
} from "react";
import "./Xtransfer.js";
import "../../assets/app.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Xtransfer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="swiper-container swiper-container-horizontal">
                <div className="swiper-wrapper clearfinx">
                    <div id="hpci3r5sc0o" className="swiper-slide">
                        <div className="list-wrap rScroll">
                            <ul className="">
                                <li className="loan-pitem  clearfix"><Link className="block-link" to="/"></Link>
                                    <div className="row clearfix">
                                        <div className="pro-name col-md-24 clearfix">
                                            <span className="fs-14 c-666">泰信宝No.180316CT8H</span>
                                            <label className="statu right">转让中</label>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="pro-val">
                                                <span className="fs-26 c-f63">8<em className="fs-16">.20+1.20%</em></span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pro-val">
                                                <span className="fs-16">15个月23天</span>
                                            </div>
                                        </div>
                                        <div className="col-md-8 txtr">
                                            <div className="pro-val">
                                                <span className="fs-16">2.41万份</span>
                                            </div>
                                        </div>
                                        <div className="progress clearfix">
                                            <div className="bar-inner"></div>
                                            <span className="num">0%</span>
                                        </div>
                                        <div className="col-md-24 other">
                                            <span>等本等息</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>           
                            <div> 
                                <div className="drop-statu-box">
                                    下拉加载更多
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xtransfer);