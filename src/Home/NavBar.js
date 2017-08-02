import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
    <div>
      <div className='btn-group' role="group" aria-label="...">
        <button type="button" className="btn btn-default"><Link to="/"> Home </Link></button>
        <button type="button" className="btn btn-default"><Link to="/find-us"> Find Us </Link></button>
        <button type="button" className="btn btn-default"><Link to="/food-cards-menu"> Menu </Link></button>
        <button type="button" className="btn btn-default"><Link to="/spicy"> Spice Level over 5 </Link></button>
      </div>
    </div>
  )
}


export default NavBar;
