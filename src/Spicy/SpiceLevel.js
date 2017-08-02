import React from 'react';
import data from '../data';



const SpiceLevel = (props) => {
  console.log('spicy')
 const newSpice = props.items
 .filter(function(item){
   return item >= 5;
   console.log('spicy filter')
 }).map(function(item, index){
   return <li key={index} > {item} </li>
   console.log('spicy map')
 })
  return(
    <div>
    <h1>Spicy items</h1>
      <ul>
        {SpiceLevel}
      </ul>
      <ul>
        {newSpice}
      </ul>
    </div>
  )
}

export default SpiceLevel;
