import React from 'react'
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

const Contact = () => {
  return (
    <main>
      <Navbar />
      <Hero headingText="Contact Us" backgroundImage="/assets/hero.png" />
      <section className='flex m-20 gap-10'>
        <div className='w-[60%] flex'>
          <Image src={location} />
        </div>
        <div className='w-[40%] flex gap-5 flex-col'>
          <h2 className='font-bold text-[#000A3E] text-[50px]'>Get in touch with Us</h2>
          <div className='flex gap-5 flex-col bg-[#D9D9D9] rounded-xl p-10 pb-24'>
            <div className='flex gap-2 items-center'>
              <Image src={Melbourne} />
              <h3 className='text-[#FF5C00] text-[40px] font-semibold'>Melbourne</h3>
            </div>
            <p className='text-[28px] text-black'>5 Mendie Road, Melbourne Airport Suite, Australia</p>
            <div className='flex gap-5'>
              <div className='bg-[#FF5C00] w-[18px] h-[18px] rounded-full' />
              <div className='border-[#FF5C00] border w-[18px] h-[18px] rounded-full' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Image src={map} />
      </section>
      <section className='flex m-20 relative items-center'>
        <div className='text-white bg-[#000A3E] w-[60%] px-10 py-20 flex flex-col gap-10'>
          <h1 className='font-bold text-[48px]'>Got a Delivery? <br />Let&apos;s talk</h1>
          <p className='text-[25px] font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
        </div>
        <div className='bg-[#FF5C00] w-[405px] h-[411px]'></div>
        <div className='absolute bottom-[-50px] right-20'>
          <Image src={contact} className='w-[405px] h-[411px]' />
        </div>
      </section>
      <section className="flex flex-col p-20">
        <h1 className='flex font-bold justify-center pb-24 text-[50px] text-[#000A3E]'>Write Us a Message</h1>
        <div className='flex'>
          <div className='flex-1 flex flex-col gap-8'>
            <div className='flex gap-4 items-center'>
              <div className='w-[79px] h-[79px] bg-[#FF3514] items-center justify-center'>

              </div>
              <div className='flex flex-col'>
                <h4 className='text-[35px] text-[#000A3E]'>Call <span className='font-bold'>Us</span></h4>
                <p className='text-[25p] text-[#000A3E]'>123 456 789</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[79px] h-[79px] bg-[#FF3514] items-center justify-center'>

              </div>
              <div className='flex flex-col'>
                <h4 className='text-[35px] text-[#000A3E]'>Mail <span className='font-bold'>Us</span></h4>
                <p className='text-[25p] text-[#000A3E]'>info@whitesands.com</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[79px] h-[79px] bg-[#FF3514] items-center justify-center'>

              </div>
              <div className='flex flex-col'>
                <h4 className='text-[35px] text-[#000A3E]'>Work <span className='font-bold'>Hours</span></h4>
                <p className='text-[25p] text-[#000A3E]'>Mon - Fri | 8am - 5pm</p>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <form action="" className='w-full'>
              <div className='flex justify-between pb-6'>
                <input type='text' name='first-name' placeholder='First Name' className='border border-red-500 w-[47%] p-2 font-medium bg-[#eae8e8]' />
                <input type='text' name='last-name' placeholder='Last Name' className='border border-red-500 w-[47%] p-2 font-medium bg-[#eae8e8]' />
              </div>
              <div className='flex justify-between pb-6'>
                <input type='email' name='email' placeholder='Email address' className='border border-red-500 w-[47%] p-2 font-medium bg-[#eae8e8]' />
                <input type='tel' name='tel' placeholder='Phone number' className='border border-red-500 w-[47%] p-2 font-medium bg-[#eae8e8]' />
              </div>
              <div className='flex w-[100%] pb-6 pt-3'>
                <textarea name="message" id="message" placeholder='Tell us your thought' className='border border-red-500 w-full p-2 font-medium bg-[#eae8e8]' ></textarea>
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
