import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import FoodCardsMenu from './Menu/FoodCardsMenu';
import NavBar from './Home/NavBar';
import FindUs from './Find-Us/FindUs';
import HomePage from './Home/HomePage';
import SpiceLevel from './Spicy/SpiceLevel';


ReactDOM.render((
  <Router>
    <div>

        <NavBar />
        <Route exact path="/food-cards-menu" component={FoodCardsMenu}/>
        <Route path="/find-us" component={FindUs} />
        <Route exact path="/" component={HomePage}/>
        <Route path="/spicy" component={SpiceLevel} />

    </div>
  </Router>
), document.getElementById('root'));
