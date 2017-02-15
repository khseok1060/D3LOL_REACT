import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Header from './Header';
import SearchComponent from './components/SearchComponent';
import RankComponent from './components/RankComponent';
import ChampionComponent from './components/ChampionComponent';
import MultiSearchComponent from './components/MultiSearchComponent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.js';


const store = createStore(reducers);


const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Header}>
          <Route path='/search' component={SearchComponent}/>
          <Route path='/rank' component={RankComponent}/>
          <Route path='/champion' component={ChampionComponent}/>
          <Route path='/multiSearch' component={MultiSearchComponent}/>
      </Route>
    </Router>
  </Provider>
);

export default App;
