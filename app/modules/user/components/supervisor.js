import React from 'react';
import Status from './status.js'

class Supervisor extends React.Component {
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
	                               Supervisor View
	                           </h1>
	                       </div>
	                   </div>
	                   {/* /.row */}

	                   <div className="row">
	                       <div className="col-lg-12">
	                           <div className="panel panel-default">
	                               <div className="panel-heading">
	                                   <h3 className="panel-title"><i className="fa fa-fw fa-bars"></i> All Plane's information at a glance.</h3>
	                               </div>
	                               <div className="panel-body">
	                                   <div className="table-responsive">
	                                       <table className="table table-bordered table-hover table-striped">
	                                           <thead>
	                                               <tr className="tacenterth">
	                                               	   <th>#</th>
	                                                   <th>Tail #</th>
	                                                   <th>Pilot</th>
	                                                   <th>Issues</th>
	                                                   <th>Status</th>
	                                                   <th>Inventory</th>
	                                               </tr>
	                                           </thead>
	                                           <tbody>
	                                               <tr className="stdheight tacentertd">
	                                               		<td className="wd5p"><i className="fa fa-caret-down textTable" aria-hidden="true"></i></td>
														<td className="wd10p"><p className="textTable">3326</p></td>
														<td className="wd10p"><p className="textTable">Smith J</p></td>
														<td className="wd25p">
															<Status colorClass="yellow" >test</Status>
															<Status colorClass="yellow" >test</Status>
															<Status colorClass="red" >test</Status>
															<Status colorClass="red" >test</Status>
														</td>
														<td className="wd25p">
															<Status colorClass="blue" >test</Status>
															<Status colorClass="blue" >test</Status>
															<Status colorClass="blue" >test</Status>
															<Status colorClass="blue" >test</Status>
														</td>
														<td className="wd25p">
															<Status colorClass="gray" >test</Status>
															<Status colorClass="gray" >test</Status>
															<Status colorClass="gray" >test</Status>
															<Status colorClass="gray" >test</Status>
														</td>
	                                               </tr>
	                                               <tr className="stdheight tacentertd">
														<td className="wd5p"><i className="fa fa-caret-down textTable" aria-hidden="true"></i></td>
														<td className="wd10p"><p className="textTable">3326</p></td>
														<td className="wd10p"><p className="textTable">Smith J</p></td>
	                                                   <td className="wd25p">
	                                                		<Status colorClass="yellow" >test</Status>
	                                                		<Status colorClass="yellow" >test</Status>
	                                                		<Status colorClass="red" >test</Status>
	                                                		<Status colorClass="red" >test</Status>
	                                                   </td>
	                                                   <td className="wd25p">
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                   </td>
	                                                   <td className="wd20p">
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                   </td>
	                                               </tr>
	                                               <tr className="stdheight tacentertd">
														<td className="wd5p"><i className="fa fa-caret-down textTable" aria-hidden="true"></i></td>
														<td className="wd10p"><p className="textTable">3326</p></td>
														<td className="wd10p"><p className="textTable">Smith J</p></td>
	                                                   <td className="wd25p">
	                                                		<Status colorClass="yellow" >test</Status>
	                                                		<Status colorClass="yellow" >test</Status>
	                                                		<Status colorClass="red" >test</Status>
	                                                		<Status colorClass="red" >test</Status>
	                                                   </td>
	                                                   <td className="wd25p">
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                		<Status colorClass="blue" >test</Status>
	                                                   </td>
	                                                   <td className="wd20p">
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                		<Status colorClass="gray" >test</Status>
	                                                   </td>
	                                               </tr>
	                                           </tbody>
	                                       </table>
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

export default Supervisor;