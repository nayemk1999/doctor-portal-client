import React from 'react';
import ServiceDetails from './ServiceDetails';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Teeth from '../../../images/Teeth.png';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Teeth
    }
]
const Services = () => {
    return (
        <section className='text-center mt-5'>
            <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
            <h4>Services We Provide</h4>
            <div className="d-flex justify-content-center">
                <div className=" w-75 row mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;