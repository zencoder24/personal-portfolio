import React from 'react';
import WebSkillsItem from '../components/WebSkillsItem';
import skillsData from '../skills.json'
const About = () => {
    return (
        <section className='py-40 px-10 flex flex-col space-y-12 '>
            <div className="about">
                <h3 className=' text-center text-white font-bold uppercase text-sm'>Learn A Little</h3>
                <h1 className=' text-white uppercase font-bold text-center pb-4 mx-0 my-auto text-4xl'>About <span className='text-calm-green'>Me</span></h1>
                <div className='greeting text-white text-justify text-xl leading-9'>
                    <p className='pb-6'>Greetings! My name is Rod Garland hailing from South Georgia. I am very passionate 
                        about Web Development and I love to use Web Technologies to building super cool products and designs. I just want to solve problems for different environments and niches using the power of technology.  
                    </p>
                    <p>Whether its for help, a project, job opportunity, or even just to chat, feel free to reach out. I'd love to hear from you  
                    </p>
                </div>
            </div>
            <div className="skills py-4">
                <h3 className=' text-center text-white font-bold uppercase text-sm'> Check out</h3>
                <h1 className=' text-white uppercase font-bold text-center pb-4 mx-0 my-auto text-4xl'>My <span className='text-calm-green'>Skills</span></h1>
                <div className="skllList py-2 grid grid-cols-2 gap-10">
                    {skillsData
                        .filter((item) => !item.tool)
                        .map((item) => (
                            <WebSkillsItem skillIcon={item.tech}/>
                        ))
                    }
                </div>
            </div>
            <div className="skills py-4">
            <h3 className=' text-center text-white font-bold uppercase text-sm'>Here are the</h3>
                <h1 className=' text-white uppercase font-bold text-center pb-4 mx-0 my-auto text-4xl'>Tools<span className='text-calm-green'> I use</span></h1>
                <div className="skllList py-2 grid grid-cols-2 gap-10">
                    {skillsData
                        .filter((item) => item.tool)
                        .map((item) => (
                            <WebSkillsItem skillIcon={item.tech}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default About;