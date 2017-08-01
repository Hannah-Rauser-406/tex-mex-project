import React, { Component } from 'react';
import './App.css';

import FoodCardsMenu from './Menu/FoodCardsMenu';
import NavBar from './Home/NavBar';
import FindUs from './Find-Us/FindUs';
import HomePage from './Home/HomePage';

class App extends Component {
      state = {
        name: null,
        price: null,
        category: null,
        spiceLevel: null,
        img: null,
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
