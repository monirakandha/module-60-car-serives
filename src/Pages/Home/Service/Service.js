import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description , price} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>SERVICE NAME: {name}</h2>
            <p>PRICE{price}</p>
            <p>{description}</p>
            <button>BOOK:{name}</button>
        </div>
    );
};

export default Service;