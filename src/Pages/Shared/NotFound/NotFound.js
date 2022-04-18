import React from 'react';
import unavilable from '../../../images/unavilable.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-info'>Page Not found</h2>
            <img className='d-block mx-auto' src={unavilable} alt="" />
        </div>
    );
};

export default NotFound;