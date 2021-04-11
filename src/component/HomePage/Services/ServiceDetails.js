import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
                <img  style={{width: '60px'}} src={service.img} alt=""/>
                <h6 className='mt-3 mb-2'>{service.name}</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ducimus.</p>
        </div>
    );
};

export default ServiceDetails;