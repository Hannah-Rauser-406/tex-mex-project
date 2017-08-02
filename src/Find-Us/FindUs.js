import React from 'react';
import data from '../data';


const FindUs = () => {
return (
  <div>
    <h1> Hello from FindUs </h1>
      <div className='data-card'>
        <h2>{data.title}</h2>
        <h3>{data.address.street}</h3>
        <h3>{data.address.suite}</h3>
        <h3>{data.address.city}</h3>
        <h3>{data.address.state}</h3>
        <h3>{data.address.zip}</h3>
        <h3>{data.phone}</h3>
      </div>
  </div>
  )
}


export default FindUs;
