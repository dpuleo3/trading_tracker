import React from 'react';
import '../App.css';

import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Quote from '../components/Quote';
import Ranking from '../components/Ranking';
import RankTable from '../components/RankTable';


export default function Home () {

    return (
        <>

            <HeroSection />
            <Cards />
            <Quote />
            <Ranking />
            <RankTable />

        </>
    );
    
}

