import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import '../App.css';

import SideBar from '../components/experience/SideBar';
import {SideBarData} from '../components/experience/SideBarData';

import Dashboard from '../components/experience/Dashboard';
import MetricsExample from '../components/experience/MetricsExample';
import MetricsExample2 from '../components/experience/MetricsExample2';
import Breakdown from '../components/experience/Breakdown';
import Performance from '../components/experience/Performance';

import ExperienceDescp from '../components/ExperienceDescp';
import PresentationCard from '../components/PresentationCard';



export default function Experience() {

    return (

        <Router>
            <SideBar >
                <Switch>
                    <Route path={ SideBarData[0].subNav[0].path} component={Dashboard} />
                    <Route path={ SideBarData[1].subNav[0].path} component={MetricsExample} />
                    <Route path={ SideBarData[1].subNav[1].path} component={MetricsExample2} />
                    <Route path={ SideBarData[2].subNav[0].path} component={Breakdown} />
                    <Route path={ SideBarData[3].subNav[1].path} component={Performance} />
                </Switch>
            </SideBar>
                <ExperienceDescp />
                <PresentationCard />
        </Router>
    );
}