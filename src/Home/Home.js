import React from 'react';
import PageTitle from '../Pages/Shared/PageTitle';
import Banner from './Banner';
import BSummary from './BSummary';
import Contact from './Contact';
import Counters from './Counters';
import Tools from './Product/Tools';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Tools></Tools>
            <BSummary></BSummary>
            <Counters></Counters>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;