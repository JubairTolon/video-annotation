import React from 'react';
import './Home.css'
import Layers from './Layers';
import MediaArea from './MediaArea';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__wrapper'>
                <Sidebar></Sidebar>
                <div className='home__contents'>
                    <Navbar></Navbar>
                    <div className='media__content'>
                        <MediaArea></MediaArea>
                        <Layers></Layers>
                    </div>
                    <div className='video__deration'>
                        <span>video duration</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;