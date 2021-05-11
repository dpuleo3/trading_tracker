import React from 'react';
import '../App.css';

import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Quote from '../components/Quote';
import IntegrationsComp from '../components/IntegrationsComp';


export default function Home () {

    return (
        <>

            <HeroSection />
            <Cards />
            <Quote />
            <IntegrationsComp />

        </>
    );
    
}

