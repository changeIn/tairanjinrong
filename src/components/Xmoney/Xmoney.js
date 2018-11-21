import React, {
	Component
} from 'react';
import './Xmoney.css';
import { Link} from "react-router-dom";
class Xmoney extends Component {
	constructor(props){
		super(props);
		this.state = {
			ok:false
		}
	}
	
	
	render() {
		return(
			<div className="page-my-wrap" style={{display:this.state.ok==true?"block":"none" }}>
				<div className="row ui-balance-module">
					<div className="col-md-24 clearfix">
						<div className="col-md-10">
							<label className="fs-12 c-333">可用余额
								<div className="eye-logo visible"></div>
							</label><br/>
							<span className="fs-18 c-333">0.00</span>
						</div>
						<div className="col-md-14 txtr">
							<span className="trc-btn trc-btn-outline trc-btn-blue">提现</span>
							<span className="trc-btn trc-btn-inline trc-btn-blue">充值</span>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
export default Xmoney;