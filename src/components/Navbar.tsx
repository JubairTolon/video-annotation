import React from 'react';
import './Navbar.css'
import { BsDot, BsFillPlayFill, BsShare } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className='navbar__container'>
            <div>
                <h1 className='nav__media__header'>Jellyfish for beginner</h1>
                <p className='nav__media__info'>28 Feb<span className='mx-1 text-3xl'><BsDot /></span>256 MB<span className='mx-1 text-3xl'><BsDot /></span>00:05:23</p>
            </div>
            <div>
                <button className='nav__btn'><BsFillPlayFill /></button>
            </div>
            <div className='nav__right'>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="mr-2">Theme</span>
                        <input type="checkbox" className="toggle border-green-800" />
                    </label>
                </div>
                <div className='flex gap-5'>
                    <button className='nav__btn'><AiFillDelete /></button>
                    <button className='nav__btn'><BsShare /></button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;