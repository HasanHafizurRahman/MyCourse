import React from 'react';
import './Service.css'
import {useNavigate} from 'react-router-dom'

const Service = ({ service }) => {
    const { name, id, img, price, description } = service;

    const navigate = useNavigate()
    const NavServiceDetails = id =>{
        navigate(`/service/${id}`)
    }

    return (
        <div className='border'>
            <img style={{height: "300px", width: "300px"}} src={img} alt="" />
            <h2 className='text-primary'>{name}</h2>
            <h5 className='text-danger'>{description}</h5>
            <p className='text-secondary'>Price : ৳{price}</p>
            <button onClick={() => NavServiceDetails(id)} type="button" className="btn btn-primary">Enroll Now</button>
        </div>
    );
};

export default Service;