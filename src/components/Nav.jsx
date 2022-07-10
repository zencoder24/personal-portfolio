import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

//TODO: ADD Framer styles to the menu button open/close 
//TODO: ADD Menu

const variants ={
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: "100%"}
}


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
            animate={menuOpen? "open" : "closed"}
            variants={variants}
            transition={{duration: 0.5}}
            className='font-LeagueSpartan fixed top-0 right-0 bottom-0 w-72 z-[100] shadow-xl  text-white text-right '>  
                <div className='absolute top-0 right-0 bottom-0 w-full bg-[#141414] opacity-100'>
                    <div className='link-menu-container h-full flex flex-col space-y-5 justify-center text-center'>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/">Home</Link>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/about">About</Link>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/resume">Resume</Link>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/projects">Projects</Link>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/blog">Blog</Link>
                        <Link onClick={(e) => setMenuOpen(!menuOpen)} className=' text-2xl uppercase hover:text-[#ACE6E6]' to="/contact">Contact Me</Link>
                    </div>
                </div>
                </motion.nav>
                <motion.div 
                    onClick={(e) => setMenuOpen(!menuOpen)} 
                    className='fixed space-x-2 top-4 right-4 cursor-pointer z-[101] md:hidden'
                >
                    <FontAwesomeIcon className={` ${menuOpen ? 'hidden': ''} h-6 text-[#ACE6E6]`} icon={faBars}/>
                </motion.div>
                <motion.div 
                    onClick={(e) => setMenuOpen(!menuOpen)} 
                    className='fixed space-x-2 top-4 right-4 cursor-pointer z-[101] md:hidden'
                >
                    <FontAwesomeIcon className={` ${menuOpen ? '': 'hidden'} h-6 text-[#ACE6E6]`} icon={faXmark}/>
                </motion.div>
           
        </>
    );
};

export default Nav;