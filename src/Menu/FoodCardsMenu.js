import React from 'react';
import data from './data';

const FoodCardsMenu = (props) => {
  return(
    <div>
      <h1>Menu</h1>
      <div className='menu-card-container'>
      {
        props.data.map((items, index) => {
          return(
            <div className='food-card'>
              <h2>{data.items.name}</h2>
              <h3>{data.items.category}</h3>
              <h3>{data.items.price}</h3>
              <h4>{data.items.spiceLevel}</h4>
              <img src={data.items.img} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}


export default FoodCardsMenu;
