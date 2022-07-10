import React from 'react';
import projectsData from '../projects.json'
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
    return (
        <section className='container py-40 px-8 flex flex-col'>
            <h1 className=' mb-10 text-white text-4xl text-center uppercase font-bold'>Recent <span className=' text-calm-green'>Projects</span></h1>
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
           
        </section>
    );
};

export default Projects;