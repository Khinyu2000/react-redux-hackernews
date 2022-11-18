import React from 'react';
import './App.css';

import SearchStories from './SearchStories';
import Stories from './Stories';


const App = () => 
    <div className="app">
        <SearchStories />
        <Stories />
    </div>

export default App;