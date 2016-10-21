import React from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component {
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
			<nav className="navbar navbar-inverse navbar-fixed-top navyblue" role="navigation">
	            {/* Brand and toggle get grouped for better mobile display */}
	            <div className="navbar-header ml43p">
	                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <a className="navbar-brand white" href="">Admin View</a>
	            </div>
	            {/* Top Menu Items */}
	            <ul className="nav navbar-right top-nav">
	                <li className="dropdown">
	                    <a href="#" className="dropdown-toggle white" data-toggle="dropdown"><i className="fa fa-user"></i> Admin <b className="caret"></b></a>
	                    <ul className="dropdown-menu">
	                        <li>
	                            <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
	                        </li>
	                        <li>
	                            <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
	                        </li>
	                        <li>
	                            <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
	                        </li>
	                        <li className="divider"></li>
	                        <li>
	                            <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
	            {/* Sidebar Menu Items - These collapse to the responsive navigation menu on small screens */}
	            <div className="collapse navbar-collapse navbar-ex1-collapse">
	                <ul className="nav navbar-nav side-nav navyblue widthNav">
	                    <li className="w100">
	                        <Link to="/squadron" className="white navA w100"><i className="fa fa-bars fs-60"></i> <p className="sidenavp">Squadron</p></Link>
	                    </li>
	                    <li className="w100">
	                        <Link to="/pilot" className="white navA w100"><i className="fa fa-th-large fs-60"></i> <p className="sidenavp">Pilots</p></Link>
	                    </li>
	                </ul>
	            </div>
	            {/* /.navbar-collapse */}
	        </nav>
		);
	}
}

export default Navigation;
