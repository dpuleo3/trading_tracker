import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import '../App.css';

import SuperSection from '../components/experience/SuperSection';

import SideBar from '../components/experience/SideBar';

import { SideBarData } from '../components/experience/SideBarData';
// import { NavBarData } from '../components/experience/NavBarData';

import Dashboard from '../components/experience/Dashboard';
import Positions from '../components/experience/Positions';
import RiskMgmt from '../components/experience/RiskMgmt';
import MetricsExample from '../components/experience/MetricsExample';
import MetricsExample2 from '../components/experience/MetricsExample2';
import Breakdown from '../components/experience/Breakdown';
import Performance from '../components/experience/Performance';
import Drawdown from '../components/experience/Drawdown';

import ExperienceDescp from '../components/ExperienceDescp';
import Following from '../components/Following';

export default function Experience() {

    return (

        <Router>
                <SuperSection />
            <SideBar >
                <Switch>
                    <Route path={ SideBarData[0].subNav[0].path } component={Dashboard} />
                    <Route path={ SideBarData[0].subNav[1].path } component={Positions} />
                    <Route path={ SideBarData[0].subNav[2].path } component={RiskMgmt} />

                    <Route path={ SideBarData[1].subNav[0].path } component={MetricsExample} />
                    <Route path={ SideBarData[1].subNav[1].path } component={MetricsExample2} />

                    <Route path={ SideBarData[2].subNav[0].path } component={Breakdown} />

                    <Route path={ SideBarData[3].subNav[1].path } component={Performance} />

                    <Route path={ SideBarData[4].subNav[0].path } component={Drawdown} />
                </Switch>
            </SideBar>
                <ExperienceDescp />
                <Following />
        </Router>

    );
}