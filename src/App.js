import React, { Component } from 'react';
import './App.css';
import data from './data';
import FoodCardsMenu from './Menu/FoodCardsMenu';
import NavBar from './Home/NavBar';
import FindUs from './Find-Us/FindUs';
import HomePage from './Home/HomePage';
import SpiceLevel from './Spicy/SpiceLevel';

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
         <FoodCardsMenu data={data} />
      </div>
    );
  }

}

export default App;
