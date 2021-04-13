import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="container pl-0">
            <div className='row d-flex pt-5 pl-2'>
                <div className="col p-2">
                    <Link className='text-white' to='/doctor/dashboard'>Dashboard</Link>
                </div>
                <div className="col p-2">
                    <Link className='text-white' to='/doctor/appointment'>Appointment</Link>
                </div>
                <div className="col p-2">
                    <Link className='text-white' to='/doctor/allPatient'>Patient</Link>
                </div>
                <div className="col p-2">

                    <Link className='text-white' to='/doctor/prescriptions'>Prescriptions</Link>
                </div>
                <div className="col p-2">
                    <Link className='text-white' to='/doctor/setting'>Setting</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;