import React, {
    Component
} from "react";
import "./Xbulk.js";
import "../../assets/app.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Xbulk extends Component {
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
                    <div id="lu55p8bfeh8" className="swiper-slide next">
                        <div className="list-wrap rScroll">
                            <ul className="">
                                <li className="loan-pitem finish clearfix"><Link className="block-link" to="/"></Link>
                                    <div className="row clearfix">
                                        <div className="pro-name col-md-24 clearfix">
                                            <span className="fs-14 c-666">泰信宝No.18112176ZY</span>
                                            <label className="statu right">还款中</label>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="pro-val">
                                                <span className="fs-26 c-f63">6<em className="fs-16">.50%</em></span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pro-val">
                                                <span className="fs-16">3个月</span>
                                            </div>
                                        </div>
                                        <div className="col-md-8 txtr">
                                            <div className="pro-val">
                                                <span className="fs-16">1100.00元</span>
                                            </div>
                                        </div>
                                        <div className="progress clearfix">
                                            <div className="bar-inner"></div>
                                            <span className="num">100%</span>
                                        </div>
                                        <div className="col-md-24 other">
                                            <span>每月还息到期还本</span>
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
})(Xbulk);