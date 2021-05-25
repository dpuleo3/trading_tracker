import React from 'react';
import '../App.css';

import WarriorSection from '../components/WarriorSection';
import NewsAPI from '../components/NewsAPI';
import NewsletterDescp from '../components/NewsletterDescp';


export default function Newsletter() {

    return (

        <>
            
            <WarriorSection />
            <NewsAPI />
            <NewsletterDescp />

        </>
    );
}
