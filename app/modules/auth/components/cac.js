import React from 'react';
import { Link } from 'react-router'

class Cac extends React.Component {
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
					<Link to="/auth/cac" className="tdnone"><button className="btn upperbtn bgwhite" type="submit">CAC/ECA</button></Link>
					<Link to="/auth/login" className="tdnone"><button className="btn upperbtn b1666" type="submit">PASSWORD</button></Link>
				</div>
				<div id="headLine">
					<h3 className="tacenter">Insert your CAC / ECA to begin login.</h3>
				</div>
				<div id="loginbox">
					<form>
						<img className="cacimg" src="/app/assets/images/cac.jpg"/>
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

export default Cac;