import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Login from './components/login.js'
import Cac from './components/cac.js'
import Signup from './components/signup.js'

class Auth extends React.Component {
	componentWillMount() {

	}
	render() {
	  return (
	  	<div>
	  		<div className="airlogodiv">
	  			<img src="/app/assets/images/airlogo.png" className="airlogo" />
	  		</div>
	  		{ this.props.children }
	  	</div>
	  );
	}
}

export default (
	<Route path="/auth" component={Auth}>
    	<IndexRoute component={Login} />
     	<Route path="login" component={Login}/>
     	<Route path="cac" component={Cac}/>
     	<Route path="signup" component={Signup}/>
    </Route>
)