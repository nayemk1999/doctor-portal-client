import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png'

const AppointmentHeader = ({handleChangeDate}) => {
    
    return (
        <main className="row d-flex align-items-center mt-5">
            <div className="col-md-4 offset-md-1">
                <h2 className='text-description'>Appointment</h2>
                <Calendar
                    onChange={handleChangeDate}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 ">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </main>
    );
};

export default AppointmentHeader;