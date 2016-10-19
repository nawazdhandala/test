import React from 'react';
import Card from './card.js'

class Plane extends React.Component {
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
			<div id="page-wrapper">

	               <div className="container-fluid">

	                   {/* Page Heading */}
	                   <div className="row">
	                       <div className="col-lg-12">
	                           <h1 className="page-header">
	                               Plane View
	                           </h1>
	                       </div>
	                   </div>
	                   {/* /.row */}

	                   <div className="row">
	                       <div className="col-lg-12">
			                    <div className="panel panel-default pvborder">
			                        <div className="panel-heading pvh">
			                            <div className="row">
			                                <div className="col-lg-3 pbbr">
			                                	<i className="fa fa-user fa-4x fl pbi" aria-hidden="true"></i>
                                    			<p className="pbname">Smith Jones Junior <i className="fa fa-caret-down pbcrate" aria-hidden="true"></i></p>
			                                </div>
			                                <div className="col-lg-9">
			                                	<button className="btn flighthistory">Flight History</button>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="panel-body">
			                        	<div className="row">
			                        		<div className="col-lg-12 pubc">
			                            	</div>
			                        	</div>
			                        	<div className="row">
			                        		<div className="col-lg-12">
			                            	</div>
			                        	</div>
			                        </div>
				                </div>
	                       </div>
	                   </div>
	                   {/* /.row */}

	               </div>
	               {/* /.container-fluid */}

	        </div>
		);
	}
}

export default Plane;