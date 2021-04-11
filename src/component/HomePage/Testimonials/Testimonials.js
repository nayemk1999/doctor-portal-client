import React from 'react';
import './Testimonials.css';
import Ellipse3 from '../../../images/Ellipse 3.png';
import Ellipse2 from '../../../images/Ellipse 2.png';
import Ellipse1 from '../../../images/Ellipse 1.png';
import Testimonial from './Testimonial';

const TestimonialsData = [
    {
        name: 'winson Herry',
        img: Ellipse3,
        city: 'California'
    },
    {
        name: 'winson Herry',
        img: Ellipse2,
        city: 'California'
    },
    {
        name: 'winson Herry',
        img: Ellipse1,
        city: 'California'
    }
]
const Testimonials = () => {
    return (
        <section className='mt-5 mb-5'>
            <div className="container">
                <div className="section-header">
                    <h3 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h3>
                    <h2 style={{ color: '#474F62' }}>What's Our Patients <br /> Say's</h2>
                </div>
                <div className="card-deck mt-4">
                    {
                        TestimonialsData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;