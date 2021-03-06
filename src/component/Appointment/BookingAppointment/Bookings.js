import React from 'react';
import Booking from './Booking';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]
const Bookings = ({selectedDate}) => {
    return (
        <div className = 'container mt-5 mb-5'>
            <h2 className='text-center text-brand'>Available Appointments on {(selectedDate).toDateString('dd, MMMM, yyyy')}</h2>
            <div className='row'>
        {
            bookingData.map(booking => <Booking key={booking.id} selectedDate={selectedDate} booking = {booking}></Booking>)
        }
            </div>
        </div>
    );
};

export default Bookings;