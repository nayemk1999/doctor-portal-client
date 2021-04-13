import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllPatient = () => {
    const [allPatient, setAllPatient] = useState([])
    useEffect(() => {
        const url = 'http://localhost:3002/allPatient';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPatient(data))
    }, [])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="sidebar col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h3 className='text-center text-brand'>All Patients</h3>
                    <div className='pr-5 pt-3'>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">SL-No</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allPatient.map((patient, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{patient.name}</td>
                                            <td>{patient?.age}</td>
                                            <td>{patient?.weight}</td>
                                            <td>{patient?.number}</td>
                                            <td>{patient?.address}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllPatient;