import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route , Redirect} from "react-router-dom";
import './index.css';

import Signin from './pages/Signin/signin.jsx';
import Login from './pages/Login/Login.jsx';
import Terran from './pages/Terran/Terran.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Fund from './pages/Fund/Fund.jsx';
import Xshenfen from './components/Xshenfen/Xshenfen.jsx';
import Record from './pages/Record/Record.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<div >
			<Route path="/" exact component={Terran} />
			<Route path="/signin" component={Signin} />
			<Route path="/login" component={Login} />
			<Route path="/terran/" component={Terran} />
			<Route path="/profile" component={Profile} />
			<Route path="/fund" component={Fund} />
			<Route path="/Xshenfen" component={Xshenfen} />
			<Route path="/record/" component={Record} />
			
			
			
			
			

		</div>
	</Router>
	,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();