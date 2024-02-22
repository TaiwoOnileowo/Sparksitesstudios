import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Laptop from "../assets/Laptop.png"
import styles from '../../style'

function ContactForm() {
  
    const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_yo3wc8u', 'template_pj3yxyd', form.current, 'YdAoRX8W6yCSRhU2R')
      .then((result) => {
          e.target.reset();
          console.log('sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
    return (
      <form className="flex flex-col mt-11 text-[16px] pl-0 md:pl-0 sm:pl-20" ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col md:px-0'>
          <div className='flex flex-col md:flex-row w-[300px] md:w-[735px]'>
            <div className='flex flex-col md:pr-4'>
            <label className={`label ${styles.heading3} text-[#A020F0] py-4 text-left`}>Email</label>
            <input className='input h-[50px] w-[320px] sm:w-[600px] md:w-[300px]' type="text" name="organization_email" required/>
            </div>
            <div className='flex flex-col w-[300px] md:w-[420px]'>
             <label className={`label ${styles.heading3} text-[#A020F0] py-4 text-left`}>Name Of Organization</label>
             <input className='input h-[50px] w-[320px] sm:w-[600px] md:w-[400px]' type="e-mail" name="organization_name" required/>
            </div>
         
               </div>
      
      <label className={`label ${styles.heading3} text-[#A020F0] py-4 text-left w-[300px] md:w-[735px]`}>Address</label>
      <input className='input h-[80px] md:w-[725px] sm:w-[600px]' type="text" name="address" required/>
      <label className={`label ${styles.heading3} text-[#A020F0] py-4 text-left w-[735px]`}>Enter Your Message</label>
        <textarea className='input h-[150px] sm:w-[600px] w-[320px] md:w-[725px]' name="message"/>
      <input className={`btn2 py-[15px] my-12 md:my-12 px-[30px] sm:w-[600px] bg-[#A020F0] w-[320px] md:w-[725px] cursor-pointer font-medium text-[24px] text-[#FDFDFD] outline-none rounded-full`} type="submit" value="Send" />
      </div>
    </form>
    )
  }
  
  
  
  
  
  
  
  






const ContactSection = () => {
  return (
    <section className='bg-[#b9b5cf]'>
        <div className='flex md:flex-row-reverse flex-col'>
          <div className='flex w-[355px] sm:w-[500px] md:w-full sm:ml-36 md:ml-0 pt-24 pl-4 pr-4 md:pl-4 md:pr-4 md:pt-64'>
            <img src={Laptop}  className="w-full md:h-[500px]" alt="" />
          </div>
          <div className='flex flex-col md:w-[800px] p-6' >
          <h1 className={`${styles.heading2} text-center text-[#A020F0]`}>Drop Us A line!</h1>
           <ContactForm/>
          </div>
           
        </div>
    </section>
  )
}

export default ContactSection