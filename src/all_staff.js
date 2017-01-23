import React, {Component} from 'react';

function ListItem(props) {
	return <li>{props.value}</li>
}

export class NumberList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numbers: props.numbers || []
		}
	}

	render() {
		const listItems = this.state.numbers.map(number => <ListItem key={number.toString()} value={number}/>);

		return (
			<ul>{listItems}</ul>
		)
	}
}


export class NameForm extends Component{
	constructor(props){
		super(props);

		this.state = {value: ""}
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event){
		console.log(this.state.value);
		event.preventDefault();
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
				</label>
				<br/>
				<input type="submit" value="submit"/>
			</form>
		)
	}
}


export class FlavorForm extends Component{
	constructor(props){
		super(props);

		this.state = {value: props.selected || "coconut"};
		this.flavors = ['coconut', 'grapefruit', 'lime', 'apple'];
	}

	handleChange(event){
		this.setState({
			value: event.target.value
		});
	}

	render(){
		const options = this.flavors.map((flavor, i) => <option key={i} value={flavor}>{flavor}</option>);

		return (
			<form>
				<label>
					Pick ur fav flavor:
					<select value={this.state.value} onChange={this.handleChange.bind(this)}>
						{options}
					</select>
				</label>
			</form>
		)
	}
}
const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};


function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius*9/5) + 32;
}

function tryConvert(value, convert) {
	const input = parseFloat(value);
	if(Number.isNaN(input)){
		return '';
	}
	const output = convert(input);
	const rounded = Math.floor(output*1000)/1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	return props.celsius >= 100
			? <p>The watter would boil.</p>
			: <p>Temperature is not enough for boiling</p>
}

class TemperatureInput extends Component{

	handleChange(e){
		this.props.onChange(e.target.value);
	}

	render(){
		const value = this.props.value;
		const scale = this.props.scale;

		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input type="text" value={value} onChange={this.handleChange.bind(this)}/>
			</fieldset>
		)
	}
}


export class Calculator extends Component{
	constructor(props){
		super(props);

		this.state = {value: '', scale: 'c'}
	}
	handleCelsiusChange(value){
		this.setState({scale: 'c', value})
	}

	handleFahrenheitChange(value){
		this.setState({scale: 'f', value});
	}

	render(){
		const scale = this.state.scale;
		const value = this.state.value;
		const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
		const fahrenheit = scale === 'c'? tryConvert(value, toFahrenheit) : value;
		return (
			<div>
				<TemperatureInput scale={scale} value={celsius} onChange={this.handleCelsiusChange.bind(this)}/>
				<TemperatureInput scale={scale} value={fahrenheit} onChange={this.handleFahrenheitChange.bind(this)}/>
				<BoilingVerdict celsius={Number(celsius)}/>
			</div>
		)
	}
}

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-'+props.color}>
			{props.children}
		</div>
	);
}

function Dialog(props) {
	return (
		<FancyBorder color={props.color || 'black'}>
			<h1>{props.title}</h1>
			<p>{props.message}</p>
			{props.children}
		</FancyBorder>
	)
}

export class WelcomeDialog extends Component{
	render(){
		return (
			<Dialog
				color="red"
				title="Welcome"
				message="The same like transclude property in angular">
				<p>some text more</p>
			</Dialog>
		)
	}
}
