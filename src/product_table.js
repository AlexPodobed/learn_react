import React, {Component} from 'react';

const PRODUCTS = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class SearchBar extends Component {
	handleChange() {
		this.props.onChange(
			this.filterTextInput.value,
			this.inStockOnlyInput.checked
		)
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Search..."
				       value={this.props.filterText}
				       ref={(input)=> this.filterTextInput   = input}
				       onChange={this.handleChange.bind(this)}/><br/>
				<label>
					<input type="checkbox"
					       checked={this.props.isStockOnly}
					       ref={(input)=> this.inStockOnlyInput = input}
					       onChange={this.handleChange.bind(this)}/>
					Only show products in stock
				</label>
			</form>
		)
	}
}


class ProductTable extends Component {
	static propTypes = {
		data: React.PropTypes.array,
		filterText: React.PropTypes.string,
		isStockOnly: React.PropTypes.bool
	};

	getTableRows(){
		let lastCategory = null;
		let rows = [];
		this.props.data.forEach((product, index) => {
			if((this.props.isStockOnly && !product.stocked) || product.name.toLowerCase().indexOf(this.props.filterText) === -1){
				return
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
			}
			rows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} key={index}/>);
			lastCategory = product.category;
		});
		return rows;
	}

	render() {
		console.log('render ProductTable')
		return (
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>
				{this.getTableRows()}
				</tbody>
			</table>
		)
	}
}

class ProductCategoryRow extends Component {
	render() {
		return (
			<tr>
				<th colSpan="2">{this.props.category}</th>
			</tr>
		)
	}
}

class ProductRow extends Component {
	render() {
		const name = !this.props.stocked
			? <span style={{color: 'red'}}>{this.props.name}</span>
			: <span>{this.props.name}</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.price}</td>
			</tr>
		)
	}
}

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterText: "",
			isStockOnly: false
		}
	}

	handleUserInput(filterText, isStockOnly) {
		this.setState({filterText, isStockOnly});
	}

	render() {
		return (
			<div className="product-table">
				<SearchBar filterText={this.state.filterText}
				           isStockOnly={this.state.isStockOnly}
				           onChange={this.handleUserInput.bind(this)}/>
				<ProductTable data={PRODUCTS}
				              filterText={this.state.filterText}
				              isStockOnly={this.state.isStockOnly}/>
			</div>
		)
	}
}

export default  FilterableProductTable;