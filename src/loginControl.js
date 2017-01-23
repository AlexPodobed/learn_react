import React, { Component } from 'react';

function UserGreeting(props) {
	return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
	return <h1>Please sign up</h1>
}

class Greeting extends Component{
	render () {
		return this.props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
	}
}

class LoginBtn extends Component{
	render () {
		return (
			<button onClick={this.props.onClick}>Login</button>
		)
	}
}

class LogoutBtn extends Component{
	render () {
		return (
			<button onClick={this.props.onClick}>Logout</button>
		)
	}
}

class LoginControl extends Component{
	constructor(props){
		super(props);

		this.state = {
			isLoggedIn: false
		}
	}

	handleLoginClick(){
		this.setState({isLoggedIn: true})
	}

	handleLogoutClick(){
		this.setState({isLoggedIn: false})
	}

	render () {
		const isLoggedIn = this.state.isLoggedIn;
		let button = isLoggedIn ? <LogoutBtn onClick={this.handleLogoutClick.bind(this)}/>
								: <LoginBtn onClick={this.handleLoginClick.bind(this)}/>;

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn}/>
				{button}
			</div>
		)
	}
}

export default LoginControl;