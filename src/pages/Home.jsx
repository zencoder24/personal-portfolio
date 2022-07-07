import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1'>
            <h2 className=' text-center uppercase font-bold text-3xl text-white '>Hello!<span>&#9996;</span></h2>
            <h2 className='text-center uppercase font-bold text-3xl text-white '>I'm <span className='text-[#ACE6E6]'>Rod Garland</span></h2>
            <p className='font-bold text-[#ACE6E6] uppercase text-center text-xl'>Full Stack Web Developer</p>
            <div className='social icons justify-center space-x-3 flex'>
                <div className=' bg-white/[.1] hover:bg-[#ACE6E6] p-2 rounded-full flex justify-center cursor-pointer'>
                    <FontAwesomeIcon className=' text-xl text-white' icon={faGithub}/>
                </div>
                <div className=' bg-white/[.1] hover:bg-[#ACE6E6] p-2 rounded-full flex justify-center cursor-pointer'>
                <FontAwesomeIcon className=' text-xl text-white' icon={faLinkedinIn}/>
                </div>
            </div>   
        </div>
    );
};

export default Home;