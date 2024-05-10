import React from 'react'
import Navbar from '@/constants/Navbar'
import Hero from "../../components/frontend/Hero"
import Reachout from "../../components/frontend/Reachout"
import Footer from '@/constants/Footer'
import Button from '@/components/frontend/Button'

import bg from "@/public/assets/servicesbg.svg"
import Image from 'next/image'

const Services = () => {
  return (
    <main>
      <Navbar />
      <Hero headingText="Our Services" backgroundImage="/assets/hero.png" />
      <section className="p-20 flex flex-wrap gap-5 items-center justify-between">
          <div className="flex flex-grow-1 w-[345px] h-[300px] bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Automotive</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="flex-grow-1 w-[345px] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Chemicals</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="flex-grow-1 w-[345px] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Delivery</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="flex-grow-1 w-[345px] h-[300px] flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Automotive</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="flex-grow-1 w-[345px] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Chemicals</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="flex-grow-1 w-[345px] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white">Delivery</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
      </section>
      <section className='flex'>
        <div className='flex flex-col flex-1 p-20'>
          <h1 className='text-[50px] text-[#000A3E] leading-[60px]'>Dream Big <br />
            <span className='font-bold'>Inspire the World</span>
          </h1>
          <p className='text-[20px] text-[#242424] mt-6'>When it comes to our customers, carriers, and business partners, Whitesands believes in setting proper expectations of what we provide.</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Transparent Communication</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Provide Solutions</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Process Improvement</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Long-Lasting Relationships</p>
        </div>
        <div className='flex flex-1 bg-[#D0E0FF]'></div>
      </section>
      <section className='relative flex h-screen items-start'>
        <Image src={bg} />
        <div className='flex absolute bottom-0 left-20 bg-[#000A3E] w-[60%]'>
          <p className='text-white text-[50px] ml-10 mr-20 mt-16 mb-12'>The Best <span className='font-bold'>Logistics Company</span></p>
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  )
}

export default Services
