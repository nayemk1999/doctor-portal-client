import React from 'react';
import BusinessCard from './BusinessCard';
import { faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



const BusinessData = [
    {
        title: 'Opening Hours',
        description: 'Service in 24 Hours Open.',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Dhaka, Bangladesh',
        icon: faMapMarker,
        background: 'secondary'
    },
    {
        title: 'Contact us now',
        description: '+88012345678',
        icon: faPhoneAlt,
        background: 'primary'
    }
    
]
const BusinessInfo = () => {

    return (
        <section className='d-flex justify-content-center mt-5'>
            <div className="row mt-4 w-75">
                {
                   BusinessData.map(info => <BusinessCard info={info}></BusinessCard>) 
                }
            </div>
        </section>
    );
};

export default BusinessInfo;