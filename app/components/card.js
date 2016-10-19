import React from 'react';
import Status from './status.js'

class Card extends React.Component {
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
				<div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <i className="fa fa-user fa-3x" aria-hidden="true"></i>
                                    <p>Smith Jones Junior</p>
                                </div>
                                <div className="col-xs-6 text-right">
                                    <div className="huge">#100</div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body h250">
                        	<div className="row">
                        		<div className="col-lg-12">
                            		<p className="cardheading">Jet health :</p>
                            		<Status colorClass="yellow" size="small">test</Status>
                            		<Status colorClass="yellow" size="small">test</Status>
                            	</div>
                        	</div>
                        	<div className="row">
                        		<div className="col-lg-12">
                            		<Status colorClass="red" size="small">test</Status>
                            	</div>
                        	</div>
                        	<div className="row mt7">
                        		<div className="col-lg-6">
                            		<p className="cardheading">Status :</p>
                            		<Status colorClass="blue" size="small">test</Status>
                            		<Status colorClass="blue" size="small">test</Status>
                            		<Status colorClass="blue" size="small">test</Status>
                            	</div>
                            	<div className="col-lg-6">
                            		<p className="cardheading">Inventory :</p>
                            		<Status colorClass="gray" size="small">test</Status>
                            		<Status colorClass="gray" size="small">test</Status>
                            		<Status colorClass="gray" size="small">test</Status>
                            	</div>
                        	</div>
                        </div>
                    </div>
                </div>
		);
	}
}

export default Card;