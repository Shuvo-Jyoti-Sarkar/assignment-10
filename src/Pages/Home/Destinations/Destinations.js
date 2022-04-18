import React from 'react';
import des1 from '../../../images/destinations/des1.jpg';
import des2 from '../../../images/destinations/des2.jpg';
import des3 from '../../../images/destinations/des3.jpg';
import Destination from '../Destination/Destination';


const destinations = [
    { id: 1, country: 'Nepal', img: des1 },
    { id: 2, country: 'India', img: des2 },
    { id: 3, country: 'Bhutan', img: des3 }

]

const Destinations = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-dark text-center mt-5'>Our International destinations</h2>
            <div className="row">
                {
                    destinations.map(destination =>
                        <Destination
                            key={destination.id}
                            destination={destination}
                        ></Destination>)
                }
            </div>
        </div>
    )

};

export default Destinations;