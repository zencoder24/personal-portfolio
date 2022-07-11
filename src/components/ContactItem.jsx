import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const icons ={
    envelope: faEnvelope,
    github: faGithub,
    linkedIn: faLinkedinIn
}

const ContactItem = ({icon, contactData}) => {
    const contactIcon = icons[icon]
    return (
        <div className="contactItem my-4 space-x-4 rounded-lg py-2 px-4 flex row items-center bg-slate-800 text-calm-green">
            <div className=' icon-container bg-calm-green py-2 px-3 rounded-full'>
                <FontAwesomeIcon className=' text-slate-800' icon={contactIcon}/>
            </div>
            <div className="contact-data">{contactData}</div>
        </div>
    );
};

export default ContactItem;