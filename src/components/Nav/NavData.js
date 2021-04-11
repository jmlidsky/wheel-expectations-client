import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'

export const NavData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiOutlineHome />,
        className:"nav-text"
    },
    {
        title: 'Bike Guide',
        path: '/bikes',
        icon:<MdIcons.MdDirectionsBike />,
        className:"nav-text"
    },
    {
        title: 'Bike Parts',
        path: '/parts',
        icon: <GiIcons.GiCartwheel />,
        className: "nav-text"
    },
    {
        title: 'Safety & Etiquette',
        path: '/safety',
        icon: <GiIcons.GiRoad />,
        className: "nav-text"
    },
    {
        title: 'Find Shops',
        path: '/find-shops',
        icon: <IoIcons.IoLocationOutline />,
        className: 'nav-text'
    }
]