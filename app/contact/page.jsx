'use client'

import {useState} from 'react'
import Navbar from '@/constants/Navbar'
import Hero from "../../components/frontend/Hero"
import Reachout from "../../components/frontend/Reachout"
import Footer from '@/constants/Footer'
import Button from '@/components/frontend/Button'

import location from '@/public/assets/location.svg'
import map from '@/public/assets/googlemap.svg'
import contact from '@/public/assets/contact.svg'
import Melbourne from '@/public/assets/melbourne.svg'
import Image from 'next/image'
import { MdPhone, MdMail, MdAlarm } from 'react-icons/md'

import emailjs from "emailjs-com"
const Contact = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalAddress: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const resetForm = () => {
    setFormData(initialFormState);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w4mg9nn', 'template_x460oqp', e.target, 'sOd38S1D-NMdpQdAw')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        resetForm()
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <main>
      <Navbar />
      <Hero headingText="Contact Us" backgroundImage="/assets/hero.png" />
      <section className='flex md:flex-row flex-col m-10 md:m-20 gap-10'>
        <div className='w-full md:w-[50%] lg:w-[60%] flex'>
          <Image src={location} />
        </div>
        <div className='md:w-[50%] lg:w-[40%] flex gap-5 flex-col'>
          <h2 className='font-bold text-[30px] text-[#000A3E] lg:text-[50px]'>Get in touch with Us</h2>
          <div className='flex gap-5 flex-col bg-[#D9D9D9] rounded-xl p-10 md:pb-24'>
            <div className='flex gap-2 md:w-[20%] items-center'>
              <Image src={Melbourne} />
              <h3 className='text-[#FF5C00] text-[24px] lg:text-[40px] font-semibold'>Cayman Islands</h3>
            </div>
            <p className='lg:text-[28px] text-black'>201 Owen Roberts Drive, George Town, Grand Cayman</p>
            <div className='flex lg:gap-5 gap-3'>
              <div className='bg-[#FF5C00] w-[18px] h-[18px] rounded-full' />
              <div className='border-[#FF5C00] border w-[18px] h-[18px] rounded-full' />
            </div>
          </div>
        </div>
      </section>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7531.397280732891!2d-81.3588813!3d19.2954672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25863f0767b6af%3A0x17269da71fdb4d83!2s201%20Roberts%20Dr%2C%20George%20Town%2C%20Cayman%20Islands!5e0!3m2!1sen!2sus!4v1717395966033!5m2!1sen!2sus" className='w-full h-[500px]' allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <section className='flex md:flex-row flex-col md:m-20 m-10  items-center'>
        <div className='text-white bg-[#000A3E] lg:w-[60%] px-10 py-20 flex flex-col gap-10'>
          <h1 className='font-bold text-[28px] lg:text-[48px]'>Got a Delivery? <br />Let&apos;s talk</h1>
          <p className='lg:text-[25px] md:font-medium'> At Whitesands Agency, your satisfaction is our top priority. Whether you need assistance with freight forwarding, customs brokerage, logistics, or transportation, our dedicated team is here to help.</p>
        </div>
        <div className='bg-[#FF5C00] relative md:flex w-[240px] mt-5 md:mt-0 h-[270px] md:w-[405px] md:h-[411px]'>
          <div className='absolute md:w-[200px] md:top-[-100px] md:right-0 lg:w-full lg:flex lg:top-10 lg:right-10'>
            <Image src={contact} className='md:w-[405px] w-full md:h-[411px]' />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:px-20 mt-20 px-10">
        <h1 className='flex font-bold justify-center pb-10 lg:pb-24 text-[30px] lg:text-[50px] text-[#000A3E]'>Write Us a Message</h1>
        <div className='flex md:flex-row flex-col'>
          <div className='flex-1 flex flex-col gap-8'>
            <div className='flex gap-4 items-center'>
              <div className='lg:w-[79px] lg:h-[79px] w-[40px] h-[40px] bg-[#FF3514] flex items-center justify-center'>
                <MdPhone color='white' size={"50"} />
              </div>
              <div className='flex flex-col'>
                <h4 className='lg:text-[35px] text-[24px] text-[#000A3E]'>Call <span className='font-bold'>Us</span></h4>
                <p className='text-[#000A3E]'>(345)922-3922</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='lg:w-[79px] lg:h-[79px] w-[40px] h-[40px] bg-[#FF3514] flex items-center justify-center'>
              <MdMail color='white' size={"50"} />
              </div>
              <div className='flex flex-col'>
                <h4 className='lg:text-[35px] text-[24px] text-[#000A3E]'>Mail <span className='font-bold'>Us</span></h4>
                <p className='text-[25p] text-[#000A3E]'>whitesandsky@outlook.com</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='lg:w-[79px] lg:h-[79px] w-[40px] h-[40px] bg-[#FF3514] flex items-center justify-center'>
              <MdAlarm color='white' size={"50"} />
              </div>
              <div className='flex flex-col'>
                <h4 className='lg:text-[35px] text-[24px] text-[#000A3E]'>Work <span className='font-bold'>Hours</span></h4>
                <p className='text-[25p] text-[#000A3E]'>Mon - Fri | 9am - 5pm</p>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-10 md:mt-0'>
          <form onSubmit={handleSubmit} className='w-full flex flex-col pt-8'>
            <div className='flex md:flex-row flex-col w-full gap-5 md:justify-between pb-6'>
              <input type='text' name='firstName' placeholder='First Name' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.firstName} onChange={handleChange} />
              <input type='text' name='lastName' placeholder='Last Name' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.lastName} onChange={handleChange} />
            </div>
            <div className='flex md:flex-row flex-col w-full gap-5 md:justify-between pb-6'>
              <input type='email' name='email' placeholder='Email address' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.email} onChange={handleChange} />
              <input type='tel' name='phone' placeholder='Phone number' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.phone} onChange={handleChange} />
            </div>
            <div className='flex md:flex-row flex-col w-full gap-5 md:justify-between pb-6'>
              <input type='text' name='address' placeholder='Address' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.address} onChange={handleChange} />
              <input type='text' name='postalAddress' placeholder='Postal Address' className='border border-red-500 md:w-[47%] p-2 font-medium' value={formData.postalAddress} onChange={handleChange} />
            </div>
            <div className='flex md:w-[100%] pb-6 pt-3'>
              <textarea name="message" id="message" placeholder='Tell us your thought' className='border border-red-500 w-full p-2 font-medium' value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className='flex w-full justify-center'>
              <Button text="Send Message" bg="FF3514" />
            </div>
          </form>
          </div>
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  )
}

export default Contact
