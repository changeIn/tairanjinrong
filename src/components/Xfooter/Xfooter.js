import React, {
	Component
} from 'react';
import './Xfooter.css';
import { Link} from "react-router-dom";
class Xfooter extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		return(
			<div>
				<div className="ui-module-bottom_navBar container">
					<ul className="clearfix">
						<li className="col-md-8 item">
							<Link to="/"><span className="nav-icon nav-home"></span></Link>
						</li>
						<li className="col-md-8 item">
							<a href="/product/list"><span className="nav-icon nav-invest"></span></a>
						</li>
						<li className="col-md-8 item">
							<Link className="active" aria-current="page" to="/my"><span className="nav-icon nav-user"></span></Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}

}
export default Xfooter;