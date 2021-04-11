import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactForm from '../Contact/ContactForm';
import Doctors from '../Doctors/Doctors';
import FeatureServices from '../FeatureServices/FeatureServices';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <FeatureServices></FeatureServices>
           <MakeAppointment></MakeAppointment>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           <Doctors></Doctors>
           <ContactForm></ContactForm>
           <Footer></Footer>
        </div>
    );
};

export default Home;