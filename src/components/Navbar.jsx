import React from 'react';
import { Link } from 'react-router-dom';
import {faBars}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className='flex'>  
            <div className='brand'>
                <h1>RTD.</h1>
            </div>
            <FontAwesomeIcon className='md:hidden' icon={faBars}/>
            <div className='links hidden md:block'>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Sklls</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;