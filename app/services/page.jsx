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
      <section className="p-10 lg:p-20 w-full gap-5 flex flex-wrap items-center">
        <div className="w-full md:w-[48%] lg:w-[31%] h-[300px] flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
          <div id='freight' className="p-5">
            <h2 className="text-white text-[16px] font-bold">Freight Forwarding</h2>
            <p className='text-white text-[12px]'>Coordinating the transportation of goods via air, sea, and land to ensure efficient and timely delivery. This includes managing all logistics from the point of origin to the final destination.</p>
            {/* <Button text="Read More" bg="FF3514" /> */}
          </div>
        </div>
        <div id='customs' className="w-full md:w-[48%] lg:w-[32%] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
          <div className="p-5">
            <h2 className="text-white text-[16px]">Customs Brokerage</h2>
            <p className='text-white text-[12px]'>Handling the customs clearance process to facilitate the import and export of goods. This service includes preparing and submitting documentation, ensuring regulatory compliance, and calculating duties and taxes.</p>
            {/* <Button text="Read More" bg="FF3514" /> */}
          </div>
        </div>
        <div className="w-full md:w-[48%] lg:w-[32%] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
          <div className="p-5">
            <h2 className="text-white text-[16px] font-bold">Warehousing and Storage</h2>
            <p className='text-white text-[12px]'>Offering secure storage solutions for goods. This service includes inventory management, order fulfillment, and providing storage space with controlled environments to maintain the quality of goods.</p>
            {/* <Button text="Read More" bg="FF3514" /> */}
          </div>
        </div>
        <div id='transportation' className="w-full md:w-[48%] lg:w-[31%] h-[300px] flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
          <div className="p-5">
            <h2 className="text-white text-[16px] font-bold">Transportation Services</h2>
            <p className='text-white text-[12px]'>Providing various transportation options, such as trucking, rail, air cargo, and ocean freight, to move goods locally and internationally. This service ensures that shipments are delivered efficiently and safely.</p>
            {/* <Button text="Read More" bg="FF3514" /> */}
          </div>
        </div>
        <div className="w-full md:w-[48%] lg:w-[31%] h-[300px] flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
          <div className="p-5">
            <h2 className="text-white text-[16px] font-bold">Distribution and Fulfillment</h2>
            <p className='text-white text-[12px]'>Managing the distribution process to ensure that goods reach their final destination. This includes order processing, picking, packing, and shipping products to customers or retail locations.</p>
            {/* <Button text="Read More" bg="FF3514" /> */}
          </div>
        </div>
      </section>
      <section className='flex'>
        <div className='flex flex-col flex-1 p-10 md:p-20'>
          <h1 className='text-[30px] lg:text-[50px] text-[#000A3E] lg:leading-[60px]'>Dream Big <br />
            <span className='font-bold'>Inspire the World</span>
          </h1>
          <p className='text-[20px] text-[#242424] mt-6'>When it comes to our customers, carriers, and business partners, Whitesands believes in setting proper expectations of what we provide.</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Transparent Communication</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Provide Solutions</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Process Improvement</p>
          <p className='text-[20px] text-[#242424] mt-3'><span className='mr-5 font-semibold'>◎</span>Long-Lasting Relationships</p>
        </div>
        <div className='hidden md:flex flex-1 bg-[#D0E0FF]'></div>
      </section>
      <section className='relative flex items-start'>
        <Image src={bg} />
        <div className='flex absolute bottom-0 left-20 bg-[#000A3E] md:w-[60%]'>
          <p className='text-white md:text-[25px] lg:text-[50px] m-5 md:ml-10 md:mr-20 md:mt-16 md:mb-12'>The Best <span className='font-bold'>Logistics Company</span></p>
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  )
}

export default Services
