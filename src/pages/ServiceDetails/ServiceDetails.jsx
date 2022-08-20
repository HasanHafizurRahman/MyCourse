import React from 'react';
import {useParams, Link} from 'react-router-dom'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    // const [service] = useServiceDetail(serviceId)
    return (
        <div className='text-center'>
           <h2>welcome to {serviceId}.</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-secondary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;