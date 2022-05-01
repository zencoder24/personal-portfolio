import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>
            <Particles className=' fixed h-full w-full m-0 p-0 left-0 top-0 -z-10' options={particlesOptions} init={particlesInit}/>
            <h1 className="text-3xl font-bold underline">
                Coming Soon....
            </h1>
        </div>
    );
}

export default App;
