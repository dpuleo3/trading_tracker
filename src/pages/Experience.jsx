import React from 'react'
import '../App.css';

import Dashboard from '../components/Dashboard';
import MetricsExample from '../components/MetricsExample';
import ServicesComp from '../components/ServicesComp';



export default function Experience() {

    return (

        <>
            <h1 className="services-head">Stay ahead of the curve</h1>
            <Dashboard />
            <MetricsExample />
            <ServicesComp />

        </>
    
    );
}


