import React from 'react';

class Status extends React.Component {
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
			<button className={'btn squareButton '+ this.props.colorClass + ' ' + this.props.size}>{ this.props.children }</button>
		);
	}
}

export default Status;