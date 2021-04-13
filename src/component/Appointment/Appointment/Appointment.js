import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Bookings from '../BookingAppointment/Bookings';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())
    const handleChangeDate = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader selectedDate={selectedDate} handleChangeDate={handleChangeDate}></AppointmentHeader>
            <Bookings selectedDate={selectedDate}></Bookings>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;