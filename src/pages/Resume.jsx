import React from 'react';
import { useState } from 'react';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/resume/Rodderick Garland_Web_Devleoper_Resume.pdf'



const Resume = () => {


    return (
        <div className='flex flex-col items-center justify-center'>
            <Document  file={resume}>
                <Page className='mx-4 mt-24 mb-8' height="450" pageNumber={1}/>
            </Document>
            <a className='text-white border-none w-1/2 text-center p-2 rounded-xl mx-0 my-auto bg-slate-600 hover:bg-[#ACE6E6]' href={resume} download="Rod_Garland_Resume" target='_blank' rel='noreferrer'>
                <button className='uppercase font-bold' >Download Resume</button>
           </a>
        </div>
    );
};

export default Resume;