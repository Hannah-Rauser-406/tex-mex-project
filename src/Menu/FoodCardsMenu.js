import React from 'react';
import data from '../data';

const FoodCardsMenu = (props) => {
  console.log(data)
  const menu = data.items.map(function(menu, index){
    return(
      <div key={index} className='food-card-container'>
        <div className='food-card'>
          <img src={menu.img} />
          <div className='card-text-info'>
            <p>{menu.name}</p>
            <p>Category: {menu.category}</p>
            <p>Price: ${menu.price}</p>
            <p>Spice Level: {menu.spiceLevel}</p>
          </div>

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
