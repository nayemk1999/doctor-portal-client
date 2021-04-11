import React from 'react';
import FeatureImg from '../../../images/Feature.png'

const FeatureServices = () => {
    return (
        <section style={{marginBottom: '120px'}} className='feature-container container'>
            <div className='row mt-5 '>
                <div className="col-md-5 m-md-0 mb-4 ">
                    <img className='img-fluid' src={FeatureImg} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h1 style={{ color: '#3A4256'}}>Exceptional Dental <br/> Care, on Your Teams</h1>
                    <p style={{ color: '#B2B2B2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam temporibus totam obcaecati corporis suscipit dolor, laudantium reiciendis impedit veritatis, commodi pariatur alias quaerat ipsam. Distinctio maiores voluptatum ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam temporibus totam obcaecati corporis suscipit dolor, laudantium reiciendis impedit veritatis, commodi pariatur alias quaerat ipsam. Distinctio maiores volupta  reiciendis impedit veritatis, commodi pariatur alias quaerat ipsam. Distinctio maiores volupta  eius tempore.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;