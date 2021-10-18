import React from 'react';
import Doctors from '../../Doctors/Doctors';
import Pricing from '../../Pricing/Pricing';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
const Home = () => {
    return (
            <div>
                <Banner></Banner>
                <Services></Services>
                <Doctors></Doctors>
                <Pricing></Pricing>
            </div>
    );
};

export default Home;