import React from 'react';
import data from '../data';



const SpiceLevel = (props) => {
  console.log('spicy', data)
 const newSpice = data.items.filter(function(newSpice, index){
   return newSpice >= 5;
   console.log('spicy filter', data)
 }).map(function(newSpice, index){
   return <li key={index}> {newSpice} </li>
   console.log('spicy map', data)
 })
  return(
    <div>
    <h1>Spicy items over 5</h1>
      <h3>{newSpice}</h3>
    </div>
  )
}

export default SpiceLevel;
