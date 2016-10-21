import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//modules
import User_Routes from './modules/user/user.js'
import Admin_Routes from './modules/admin/admin.js'
import Auth_Routes from './modules/auth/auth.js'

//stores
//import Store from './stores/store.js';

ReactDOM.render((
		<Router history={hashHistory}>
			{ User_Routes }
			{ Admin_Routes }
			{ Auth_Routes }
		</Router>
), document.getElementById('app'));