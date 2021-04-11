import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BusinessCard.css'
const BusinessCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white info-card mt-5'>
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div className=''>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;