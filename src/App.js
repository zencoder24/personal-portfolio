import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import TypeIt from "typeit-react";


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className='flex justify-center align-middle h-screen'>
            <Particles className='bg-page-image bg-cover fixed h-full w-full m-0 p-0 left-0 top-0 -z-10' options={particlesOptions} init={particlesInit}/>
            <div  className="text-3xl m-auto text-center text-white">
                <h1>
                   <TypeIt>Personal Portfolio Coming Soon....</TypeIt> 
                </h1>
                <a href='https://github.com/zencoder24/personal-portfolio'>
                    <FontAwesomeIcon icon={faGithub}  />
                </a>
               
            </div>


        </div>
    );
}

export default App;
