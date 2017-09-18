import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZs1LCgYEST_DJCmL3hAiXyNuE3znYqHs';

YTSearch({key: API_KEY, term: 'boku no pico'}, function() {
	console.log(data);
})


// Create a new component to produce some HTML
const App = () => {
	return ( 
	<div>
		<SearchBar />
	</div>
	);
}

// Insert into DOM
ReactDOM.render(<App />, document.querySelector('.container'));