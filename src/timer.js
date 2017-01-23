import React, {Component} from 'react';

class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: props.date || new Date(),
			name: props.name
		}
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	sayHi(){
		console.log(`Hi ${this.state.name}`);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearTimeout(this.timerID);
	}

	render() {
		return (
			<div>
				<p>{this.state.date.toLocaleString()}</p>
				<p onClick={this.sayHi.bind(this)}>{this.state.name}</p>

			</div>
		)
	}
}
export default Timer;