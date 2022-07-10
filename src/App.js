import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Resume from './pages/Resume';


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>
            <Particles className='fixed h-full w-full m-0 p-0 left-0 top-0 -z-10' options={particlesOptions} init={particlesInit}/>
                <Nav/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            
        </div>
    );
}

export default App;
