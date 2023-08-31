'use client'
import React, { useState } from 'react';
import Btn from '../btn/btn';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or API
    console.log('Form submitted:', name, email, message);
  };

  return (
    <form className="contact-form text-center " onSubmit={handleSubmit}>
      <input className='w-80 bg-blue-200 my-5 mx-auto text-white font-semibold block text-center  '
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input className='w-80 bg-blue-200 my-5 mx-auto text-white font-semibold block text-center  '
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea className='w-80 bg-blue-200 text-white mx-auto font-semibold block text-center  '
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      ></textarea>
     <Btn title='Submit'/ >
    </form>
  );
}

export default ContactForm;