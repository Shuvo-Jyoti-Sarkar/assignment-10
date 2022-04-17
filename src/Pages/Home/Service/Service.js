import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Select: {name}</button>
        </div>
    );
};

export default Service;