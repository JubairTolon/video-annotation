import React from 'react';
import './Sidebar.css'
import { FiCrop } from 'react-icons/fi';
import { BiCircle } from 'react-icons/bi';
import { HiArrowUpRight } from 'react-icons/hi2';
import { TbArrowWaveRightUp } from 'react-icons/tb';
import { TfiText } from 'react-icons/tfi';
import { FaCircle } from 'react-icons/fa';
import { IoTrendingDownOutline } from 'react-icons/io5';
import { BsGrid } from 'react-icons/bs';
import { CgMenuMotion } from 'react-icons/cg';


const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <button className='sidebar__expand__button'><BsGrid /></button>
            <ul>
                <li><button className='sidebar__button'><FiCrop /></button></li>
                <li><button className='sidebar__button'><BiCircle /></button></li>
                <li><button className='sidebar__button'><HiArrowUpRight /></button></li>
                <li><button className='sidebar__button'><TbArrowWaveRightUp /></button></li>
                <li><button className='sidebar__button'><TfiText /></button></li>
                <li><button className='sidebar__button'><CgMenuMotion /></button></li>
            </ul>
            <ul>
                <li><button className='sidebar__selected__option'><FaCircle /></button></li>
                <li><button className='sidebar__selected__option'><IoTrendingDownOutline /></button></li>
            </ul>
        </div >
    );
};

export default Sidebar;