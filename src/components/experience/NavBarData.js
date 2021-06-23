import React from 'react';

import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';


export const NavBarData = [

    {
        title: 'Following',
        path: '/following',
        icon: <RiIcons.RiUserFollowFill />,
    },
    {
        title: 'Followers',
        path: '/followers',
        icon: <BsIcons.BsPeopleFill />,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <BiIcons.BiMessageDetail />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <BsIcons.BsPersonLinesFill />,
    },

]
