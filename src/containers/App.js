import React, { Component } from 'react';
import CardList from '../components/CardList';
import "./App.css"
import Scroll from "../components/Scroll"
import SearchBox from "../components/SearchBox"
import ErrorBoundary from "../components/ErrorBoundary"

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchField:""
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(res=>res.json())
		.then(users=>this.setState({robots:users}))
	}

	onSearchChange=(e)=>{
		this.setState({searchField:e.target.value})
		
	}

	render(){
		const {robots, searchField}=this.state
		const filterRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length?
			<h1 className="tc">Loading</h1>:
			(
				<div className="tc">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		
	}
};

export default App;
