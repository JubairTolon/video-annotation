import React, { MouseEvent, useContext, useState } from 'react';
import './Navbar.css'
import { BsDot, BsFillPlayFill, BsShare } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import ReactSwitch from 'react-switch';
import { ThemeContext, ThemeContextType } from '../App';


const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleTheme = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsClicked(!isClicked);
        console.log(isClicked);
    };
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
                <div className="flex gap-2 items-center">
                    <label className='theme__text' htmlFor='theme'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch height={18} width={40} uncheckedIcon checkedIcon onColor='' onHandleColor='#151528' id='theme' onChange={toggleTheme} checked={theme === "dark"} />
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