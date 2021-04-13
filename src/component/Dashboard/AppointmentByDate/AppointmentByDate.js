import React from 'react';
import AppointmentsShortList from '../AppointmentsShortList/AppointmentsShortList';


const AppointmentByDate = ({ appointmentsData, selectedDate }) => {
    // console.log(appointmentsData);
    return (
         <div className='pt-3'>
            <h3 className='text-center text-brand'>AppointmentByDate</h3>
            <p className='text-center text-brand'>{(selectedDate).toDateString('dd, MMMM, yyyy')}</p>
            {
                appointmentsData.length ? 
                <AppointmentsShortList appointmentsData={appointmentsData}></AppointmentsShortList>
                :
                <div className="p-3">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>

    );
};

export default AppointmentByDate;