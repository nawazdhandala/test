import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Navigation from './components/navigation.js'
import Squadron from './components/squadron.js'

class Admin extends React.Component {
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
export default(
	<Route path="/admin" component={Admin}>
    	<IndexRoute component={Squadron} />
     	<Route path="squadron" component={Squadron}/>
    </Route>
)