import React from 'react';
import { Link } from 'react-router'

class Login extends React.Component {
	constructor(){
		super()
		this.state = {

		}
	}
	changeHandler(which,e){
		this.state[which] = e.target.value
		this.setState(this.state)
	}
	render() {
		return (
			<div id="auth">
				<div className="headChoose">
					<Link to="/auth/cac" className="tdnone"><button className="btn upperbtn b1666" type="submit">CAC/ECA</button></Link>
					<Link to="/auth/login" className="tdnone"><button className="btn upperbtn bgwhite" type="submit">PASSWORD</button></Link>
				</div>
				<div id="headLine">
					<h3 className="tacenter">Login with username and password.</h3>
				</div>
				<div id="loginbox">
					<form>
						<input type="email" className="loginInput" placeholder="Your Email." required />
						<input type="password" className="loginInput" placeholder="Your Password." required />
						<p className="fgtpwd">Forgot Password ?</p>
						<button className="loginbtn" type="submit">
							<i className="fa fa-lock" aria-hidden="true" style={{marginRight:"5px"}}></i>
							Login
						</button>
					</form>
				</div>
				<div className="bottomChoose">
					<Link className="fl btmlink" to="/auth/signup">Create an account</Link>
					<Link className="fr btmlink" to="/auth/cac">Security policy</Link>
				</div>
			</div>
		);
	}
}

export default Login;