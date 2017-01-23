import React, {Component} from 'react';
import logo from './logo.svg';

// import Timer from './timer';
// import LoginControl from './loginControl';
// import {NumberList, NameForm, FlavorForm, Calculator, WelcomeDialog} from './all_staff';
import FilterableProductTable from  './product_table';
import './App.css';

const header = (
	<div className="App-header">
		<img src={logo} className="App-logo" alt="logo"/>
		<h2>Welcome to React </h2>
	</div>
);


const intro = (
	<p className="App-intro">
		To get started, edit  <code>src/App.js</code> and save to reload...
	</p>
);


class App extends Component {
	render() {
		return (
			<div className="App">
				{header}
				{intro}
				<FilterableProductTable/>
			</div>
		);
	}
}

/*
 <LoginControl/>
 <hr/>
 <NumberList numbers={[1,2,3,4,5]}/>
 <hr/>
 <NameForm />
 <hr/>
 <FlavorForm selected="lime"/>
 <hr/>
 <Calculator />
 <hr/>
 <WelcomeDialog />
* */

export default App;
