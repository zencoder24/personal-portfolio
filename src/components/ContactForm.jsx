import React from 'react';
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <>
            <form className='w-full my-4' action="">
                <div className="form-group w-full mb-8">
                    <label className=' text-xl text-calm-green font-bold' htmlFor="name">Your Name</label>
                    <input
                        className='w-full text-lg p-5  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4'
                        type='text'
                        id='name'
                        name='name'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group w-full mb-8">
                    <label className=' text-xl text-calm-green font-bold' htmlFor="email">Your Email</label>
                    <input
                        className='w-full text-lg p-5  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4'
                        type='text'
                        id='email'
                        name='email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group w-full mb-8">
                    <label className=' text-xl text-calm-green font-bold' htmlFor="message">Message</label>
                    <textarea
                        className='w-full text-base p-5 min-h-[15rem] resize-y  text-calm-green bg-slate-800 outline-none border-none rounded-lg mt-4'
                        type='text'
                        id='message'
                        name='message'
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className='bg-slate-800 my-auto mx-0 text-calm-green hover:bg-calm-green hover:text-slate-800 text-lg outline-none border-none py-4 px-16 rounded-lg cursor-pointer ' type='submit'>Send Message</button>
            </form>
        </>
    );
};

export default ContactForm;