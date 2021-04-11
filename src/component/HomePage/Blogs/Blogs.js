import React from 'react';
import './Blogs.css'
import wilson3 from '../../../images/Ellipse 3.png';
import wilson2 from '../../../images/Ellipse 2.png';
import wilson1 from '../../../images/Ellipse 1.png';
import BlogCard from './BlogCard';

const BlogsData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson3,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson2,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson1,
        date: '23 April 2019'
    }
]
const Blogs = () => {
    return (

        <section className=' blogs mt-5 mb-5'>
            <div className="container">
                <div className="section-header">
                    <h4  className='text-center' style={{ color: '#1CC7C1' }}>OUR BLOGS</h4>
                    <h3 className='text-center' style={{ color: '#474F62' }}>From Our Blogs News</h3>
                </div>
                <div className="card-deck mt-4">
                    {
                        BlogsData.map(blogCardInfo => <BlogCard blogCardInfo={blogCardInfo}></BlogCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Blogs;