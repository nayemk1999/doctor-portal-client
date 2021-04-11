import React from 'react';
import doctorImg from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='appointment-container mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className='img-fluid' src={doctorImg} alt="" />
                    </div>
                    <div className="col-md-7 mt-5">
                        <h5 style={{ color:'#1CC7C1'}}>APPOINTMENT</h5>
                        <h2 className='text-white'>Make an Appointment Today</h2>
                        <p className='text-white my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, recusandae?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;