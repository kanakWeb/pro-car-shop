import React from 'react';
import Slider from '../../Images/Slider/Slider';
import Services from '../Services/Services';
import Landing from './Landing';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Services/>
            <Slider/>
        </div>
    );
};

export default Home;