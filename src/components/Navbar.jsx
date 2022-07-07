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


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
            animate={menuOpen? "open" : "closed"}
            variants={variants}
            transition={{duration: 0.5}}
            className='font-LeagueSpartan fixed top-0 right-0 bottom-0 w-72 z-[100] shadow-xl  text-white text-right '>  
                <div className='absolute top-0 right-0 bottom-0 w-full bg-white opacity-95'>
                    <div className='link-menu-container h-full flex flex-col space-y-5 justify-center text-center'>
                        <Link className=' text-green-300 cursor-pointer' to="/about">About</Link>
                        <Link className=' text-green-300 cursor-pointer' to="/projects">Projects</Link>
                        <Link className=' text-green-300 cursor-pointer' to="/skills">Sklls</Link>
                        <Link className=' text-green-300 cursor-pointer' to="/blog">Blog</Link>
                        <Link className=' text-green-300 cursor-pointer' to="/contact">Contact</Link>
                    </div>
                </div>
                </motion.nav>
                <motion.div 
                    onClick={(e) => setMenuOpen(!menuOpen)} 
                    className='fixed space-x-2 top-4 right-4 cursor-pointer z-[101] md:hidden'
                >
                    <FontAwesomeIcon className='h-6 text-[#ACE6E6]' icon={faBars}/>
                </motion.div>
           
        </>
    );
};

export default Navbar;