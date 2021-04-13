import React, { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointmentsData, setAppointmentData] = useState([]);

    const handleChangeDate = date => {
        setSelectedDate(date); 
    }
    useEffect( () => {
        const url = 'http://localhost:3002/appointmentsByDate'
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data => setAppointmentData(data))
    }, [selectedDate])
    

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="sidebar col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 pt-3">
                    <h3>Appointment</h3>
                    <div className='p-4'>
                        <Calendar
                            onChange={handleChangeDate}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <AppointmentByDate selectedDate={selectedDate} appointmentsData={appointmentsData}></AppointmentByDate>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;