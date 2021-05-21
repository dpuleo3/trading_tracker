import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import '../App.css';

import SideBar from '../components/experience/SideBar';
import ExperienceDescp from '../components/ExperienceDescp';

// import Dashboard from '../components/experience/Dashboard';
// import MetricsExample from '../components/experience/MetricsExample';
// import MetricsExample2 from '../components/experience/MetricsExample2';
// import Breakdown from '../components/experience/Breakdown';
// import Performance from '../components/experience/Performance';





export default function Experience() {

    return (

        <>
            <Router>
                <SideBar />
                
            </Router>
            <ExperienceDescp />
        </>
    );
}