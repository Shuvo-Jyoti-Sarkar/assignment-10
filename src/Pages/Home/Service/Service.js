import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = () => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <Link to='/checkout'>
                <button onClick={() => navigateToServiceDetail()} className='btn btn-dark'>Select: {name}</button>
            </Link>

        </div>
    );
};

export default Service;