import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Lawyers from '../../Components/Lawyers/Lawyers';
import Testimoinal from '../../Components/Testimonial/Testimoinal';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <Testimoinal></Testimoinal>
        </div>
    );
};

export default Home;