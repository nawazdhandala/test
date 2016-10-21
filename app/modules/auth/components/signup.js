import React from 'react';
import { Link } from 'react-router'

class Signup extends React.Component {
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
					<Link to="/auth/cac" className="tdnone mlm13"><button className="btn upperbtn bFFF tdnone" type="submit"><i className="fa fa-chevron-left" aria-hidden="true"></i> RETURN TO LOGIN</button></Link>
				</div>
				<div id="headLine">
					<h3 className="tacenter">Create an account.</h3>
				</div>
				<div id="loginbox">
					<form>
						<input type="text" className="loginInput" placeholder="Your Username." required />
						<input type="email" className="loginInput" placeholder="Your Email." required />
						<input type="password" className="loginInput" placeholder="Your Password." required />
						<button className="loginbtn" type="submit">
							Signup
						</button>
					</form>
				</div>
				<div className="bottomChoose">
					<Link className="fl btmlink" to="/auth/login">Login</Link>
					<Link className="fr btmlink" to="/auth/cac">Security policy</Link>
				</div>
			</div>
		);
	}
}

export default Signup;