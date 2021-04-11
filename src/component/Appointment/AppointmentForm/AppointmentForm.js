import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, booking }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal()
    };

    return (
        <div >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 className='text-center text-brand'>{booking.subject}</h4>
                <form className='p-4 rounded' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-row justify-content-center">
                        <div class="form-group col-md-12">
                            <select id="inputState" class="form-control">
                                <option selected>Select Time</option>
                                <option value={booking.visitingHour}>{booking.visitingHour}</option>
                                <option value={booking.visitingHour}>{booking.visitingHour}</option>
                                <option value={booking.visitingHour}>{booking.visitingHour}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <input class="form-control" placeholder='Your Name' {...register("name", { required: true })} />
                            {errors.name && <span className='error'>This field is required</span>}
                        </div>
                        <div class="form-group col-md-12">
                            <input type='tel' class="form-control" placeholder='Phone Number' {...register("number", { required: true })} />
                            {errors.exampleRequired && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        <select class="form-group form-control col-md-4 ">
                            <option selected>Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                        <div class="form-group col-md-4">
                            <input type='number' className='form-control' placeholder='Your Age' {...register("age", { required: true })} />
                            {errors.exampleRequired && <span className='error'>This field is required</span>}
                        </div>
                        <div class="form-group col-md-4">
                            <input className='form-control' placeholder='Weight' {...register("weight", { required: true })} />
                            {errors.exampleRequired && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Send</button>
                    <button className="btn btn-primary" onClick={closeModal}>close</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;