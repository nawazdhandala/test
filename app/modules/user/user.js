import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Navigation from './components/navigation.js'
import Supervisor from './components/supervisor.js'
import Wave from './components/wave.js'
import Plane from './components/plane.js'

class User extends React.Component {
	componentWillMount() {

	}
	render() {
	  return (
	  	<div id="wrapper">
		  	<Navigation/>
		  	{ this.props.children }
	  	</div>
	  );
	}
}

export default (
	<Route path="/" component={User}>
    	<IndexRoute component={Supervisor} />
     	<Route path="supervisor" component={Supervisor}/>
     	<Route path="wave" component={Wave}/>
     	<Route path="plane" component={Plane}/>
    </Route>
)