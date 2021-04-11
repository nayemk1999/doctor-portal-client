import React from 'react';
import doctorImg from '../../../images/doctor.png'
const doctorsData = [
    {
        name: 'Dr.Caudi',
        tel: '+88012345678',
        img: doctorImg
    },
    {
        name: 'Dr.Caudi',
        tel: '+88012345678',
        img: doctorImg
    },
    {
        name: 'Dr.Caudi',
        tel: '+88012345678',
        img: doctorImg
    }
]
const Doctors = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center text-brand'>Our Doctor</h1>
            <div className="row mt-5">
                {
                    doctorsData.map(doctor => {
                        return (
                            <div className="col-md-4 text-center">
                                <img className='img-fluid' src={doctor.img} alt="" />
                                <h5 className='pt-2'>{doctor.name}</h5>
                                <p className='text-description'>{doctor.tel}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Doctors;