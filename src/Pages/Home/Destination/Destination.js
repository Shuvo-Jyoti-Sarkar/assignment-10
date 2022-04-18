import React from 'react';

const Destination = ({ destination }) => {
    const { id, country, img } = destination;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{country}</h5>
                </div>
            </div>
        </div>
    );
};

export default Destination;