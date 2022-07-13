import React from 'react';
import projectsData from '../projects.json'
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
    return (
        <section className='container py-40 px-8 flex flex-col'>
            <h3 className=' text-center text-white font-bold uppercase text-sm'>These are my</h3>
            <h1 className=' mb-10 text-white text-4xl text-center uppercase font-bold'>Recent <span className=' text-calm-green'>Projects</span></h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4 my-0 mx-auto'>
                {projectsData
                    .map((project) => (
                        <ProjectItem
                            img={project.img}
                            project={project.project}
                            srcCode={project.srcCode}
                            liveSite={project.liveSite}
                            desc = {project.desc}
                        />
                    ))}
            </div>
           
        </section>
    );
};

export default Projects;