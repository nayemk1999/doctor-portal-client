import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const Booking = ({booking}) => {
    
    const {subject, visitingHour, totalSpace} = booking

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 text-center p-3 mt-5'>
            <h5 className='text-brand'>{subject}</h5>
            <h6>{visitingHour}</h6>
            <p>{totalSpace} Space Available</p>
            <button onClick={openModal} className="btn btn-primary">BOOKING APPOINTMENT</button>
            <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking}></AppointmentForm>
        </div>
    );
};

export default Booking;