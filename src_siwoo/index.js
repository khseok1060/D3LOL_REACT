import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SearchComponent from './components/SearchComponent';
import RankComponent from './components/RankComponent';
import ChampionComponent from './components/ChampionComponent';
import MultiSearchComponent from './components/MultiSearchComponent';
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
  	<Route path='/' component={App}>
		  	<Route path='/search' component={SearchComponent}/>
		  	<Route path='/rank' component={RankComponent}/>
		  	<Route path='/champion' component={ChampionComponent}/>
		  	<Route path='/multiSearch' component={MultiSearchComponent}/>
  	</Route>
  </Router>
  , document.getElementById('root')
);

