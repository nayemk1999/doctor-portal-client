import React from 'react';
import { useForm } from "react-hook-form";

import './ContactForm.css'

const ContactForm = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='contactForm mt-5 mb-5'>
            <div className='container '>
                <h4 className='text-center text-brand mt-5 pt-3'>Contact Us</h4>
                <h2 className='text-center text-white mt-1'>Always Connect With Us</h2>
                <form className='mt-4 mb-5'>
                    <input className='form-control m-auto w-50' type="text" name="email" placeholder='Email Address' required id="" /> <br />
                    <input className='form-control m-auto w-50' type="text" name="subject" placeholder='Subject' required id="" /> <br />
                    <input className='form-control m-auto w-50' type="text" name="message" placeholder='Your Message' required id="" /> <br />
                    <input className='form-control m-auto w-50' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;