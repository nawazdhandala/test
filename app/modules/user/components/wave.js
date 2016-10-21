import React from 'react';
import Card from './card.js'

class Wave extends React.Component {
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
	                               Today's Wave
	                           </h1>
	                       </div>
	                   </div>
	                   {/* /.row */}

	                   <div className="row">
	                       <div className="col-lg-12">
	                       		{/* /.card */}
	                       		<Card></Card>
	                       		<Card></Card>
	                       		<Card></Card>
	                       		<Card></Card>
	                       		<Card></Card>
	                       		<Card></Card>
			                	{/* /card */}
	                       </div>
	                   </div>
	                   {/* /.row */}

	               </div>
	               {/* /.container-fluid */}

	        </div>
		);
	}
}

export default Wave;