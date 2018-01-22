import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SearchBar from './components/search_bar';
import App from './components/app';
import reducers from './reducers';

const API_KEY = 'AIzaSyAmBBuHPeKG_sYLHWyKSFFuZ5tdrJPKHWo';

const App2 = () => {
	return (
    <div>
      <SearchBar />
    </div>
  );
}
ReactDOM.render(<App2 />, document.querySelector('.container'));
