import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		err: state.requestRobots.err
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filterRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1 className="tc">Loading</h1>
		) : (
			<div className="tc">
				<h1 className="f1">Robo Friends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filterRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
