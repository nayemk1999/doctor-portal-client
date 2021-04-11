import React from 'react';

const Testimonial = ({testimonial}) => {
    const {name, img, city} = testimonial
    return (
        <div className="card shadow-sm mt-4">
            <div className="card-body">
                <p className="card-text text-center" style={{ color: '#474F62'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, laudantium.</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{city}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;