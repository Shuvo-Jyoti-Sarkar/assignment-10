import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, description } = service;

    return (
        <div>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Select: {name}</button>
        </div>
    );
};

export default Service;