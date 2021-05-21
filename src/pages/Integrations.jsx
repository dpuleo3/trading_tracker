import React from 'react';
import '../App.css';

import IntegrationDescp from '../components/IntegrationDescp';
import IntegrationsComp from '../components/IntegrationsComp';
import PowerSection from '../components/PowerSection';



export default function Integrations () {

    return (

        <>

            <PowerSection />
            <IntegrationDescp />
            <IntegrationsComp />

        </>
    );
}