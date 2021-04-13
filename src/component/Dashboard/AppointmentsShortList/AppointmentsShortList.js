import React from 'react';

const AppointmentsShortList = ({ appointmentsData}) => {
    console.log(appointmentsData);
    return (
        <div className='pr-5 pt-3'>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointmentsData.map((appointment, index) => 
                            <tr>
                                <td>{appointment.name}</td>
                                <td>7.00PM</td>
                                <td>NotVisited</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsShortList;