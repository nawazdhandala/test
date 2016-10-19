import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//components
import Navigation from './components/navigation.js'
import Supervisor from './components/supervisor.js'
import Wave from './components/wave.js'
import Plane from './components/plane.js'

//stores
//import Store from './stores/store.js';

class Layout extends React.Component {
	componentWillMount() {

	}
	render() {
	  return (
	  	<div>
		  	<Navigation/>
		  	{ this.props.children }
	  	</div>
	  );
	}
}

ReactDOM.render((
		<Router history={hashHistory}>
		    <Route path="/" component={Layout}>
		    	<IndexRoute component={Supervisor} />
		     	<Route path="supervisor" component={Supervisor}/>
		     	<Route path="wave" component={Wave}/>
		     	<Route path="plane" component={Plane}/>
		    </Route>
		</Router>
), document.getElementById('wrapper'));