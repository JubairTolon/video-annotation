import React, { useState } from 'react';
import './Layers.css'
import { BiCircle } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { HiArrowUpRight } from 'react-icons/hi2';
import { TbArrowWaveRightUp } from 'react-icons/tb';
import { TfiText } from 'react-icons/tfi';
import { IoTrendingDownOutline } from 'react-icons/io5';


const Layers = () => {
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const handleClick = (): void => {
        setIsClicked(true)
    }
    return (
        <div className='layers__container'>
            <div className='layer__heading'>
                <p>Annotaions</p>
                <p>15</p>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><BiCircle /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div onClick={handleClick} className={isClicked ? 'layer__element__active' : 'layer__element'}>
                <span className='layer__element__icon'><HiArrowUpRight /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <div className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </div>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TbArrowWaveRightUp /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><IoTrendingDownOutline /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
            <div className='layer__element'>
                <span className='layer__element__icon'><TfiText /></span>
                <div className='mr-auto'>
                    <span className='layer__element__name'>Circle</span>
                    <span className='layer__element__time'><p>02:00 - 03:15</p></span>
                </div>
                <span className='layer__element__delete'>
                    <button className='layer__element__delete__btn'><RxCross2 /></button>
                </span>
            </div>
        </div>
    );
};

export default Layers;