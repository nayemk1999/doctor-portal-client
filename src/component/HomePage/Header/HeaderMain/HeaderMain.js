import React from 'react';
import chair from '../../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main  className="row d-flex align-items-center mt-5">
                <div className="col-md-4 offset-md-1">
                    <h2 className='text-description'>Your New Smile <br /> Starts Here</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id a quia maiores pariatur? Ipsa, optio.</p>
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid" src={chair} alt="" />
                </div>
        </main>
    );
};

export default HeaderMain;