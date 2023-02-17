import React from 'react';
import './MediaArea.css'
import { BsFillPlayFill } from 'react-icons/bs';


const MediaArea = () => {
    return (
        <div className='media__container'>
            <div>
                <button className='play__btn'><BsFillPlayFill /></button>
            </div>
        </div>
    );
};

export default MediaArea;