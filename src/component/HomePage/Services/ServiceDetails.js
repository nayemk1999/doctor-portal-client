import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
                <img  style={{width: '60px'}} src={service.img} alt=""/>
                <h6 className='mt-3 mb-2'>{service.name}</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ducimus.</p>
                <Link to='/appointment' className="btn btn-primary">APPOINTMENT</Link>
        </div>
    );
};

export default ServiceDetails;