import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';


export const SideBarData = [
  {
    title: 'Live View',
    path: '/live-view',
    icon: <AiIcons.AiOutlineFundView />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dashboard',
        path: '/live-view/dashboard',
        icon: <RiIcons.RiDashboardFill />
      },
      {
        title: 'Positions',
        path: '/live-view/positions',
        icon: <FaIcons.FaClipboardList />
      },
      {
        title: 'Risk Management',
        path: '/live-view/risk-management',
        icon: <FaIcons.FaBlackTie />
      },
    ]
  },
  {
    title: 'Trackers',
    path: '/performance-tracker',
    icon: <IoIcons.IoIosCompass />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Monthly Tracker',
        path: '/performance-tracker/monthly-tracker',
        icon: <FaIcons.FaPencilRuler />
      },
      {
        title: 'Monthly Metrics',
        path: '/performance-tracker/monthly-metrics',
        icon: <FaIcons.FaPencilRuler />
      },
    ]
  },
  {
    title: 'Breakdown',
    path: '/breakdown',
    icon: <BiIcons.BiDoughnutChart />
  },
  {
    title: 'Performance',
    path: '/performance',
    icon: <FaIcons.FaSearchDollar />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'MoM',
        path: '/performance/mom',
        icon: <FaIcons.FaRegCalendarAlt />
      },
      {
        title: 'QoQ',
        path: '/performance/qoq',
        icon: <FaIcons.FaRegCalendarAlt />
      },
      {
        title: 'YoY',
        path: '/performance/yoy',
        icon: <FaIcons.FaRegCalendarAlt />
      }
    ]
  },
  {
    title: 'Drawdown',
    path: '/drawdown',
    icon: <BsIcons.BsGraphDown />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'MoM',
        path: '/performance/mom',
        icon: <FaIcons.FaRegCalendarAlt />
      },
      {
        title: 'QoQ',
        path: '/performance/qoq',
        icon: <FaIcons.FaRegCalendarAlt />
      },
      {
        title: 'YoY',
        path: '/performance/yoy',
        icon: <FaIcons.FaRegCalendarAlt />
      }
    ]
  },
];

