import React from 'react';
import data from '../data';

const FoodCardsMenu = (props) => {
  console.log(data)
  const menu = data.items.map(function(menu, index){
    return(
      <div key={index}>
        <div className='food-card'>
          <p>{menu.name}</p>
          <p>Category: {menu.category}</p>
          <p>Price: ${menu.price}</p>
          <p>Spice Level: {menu.spiceLevel}</p>
          <img src={menu.img} />
        </div>
      </div>
    )
  })
  return(
    <div>
    <h1>Menu</h1>
      <div className='menu-card-container'>
        <h3 className='chat-card'>{menu}</h3>

      </div>
    </div>
  )
}


export default FoodCardsMenu;
