import Image from 'next/image'
import React from 'react'

import map from "@/public/assets/map.png"
import call from "@/public/assets/call-center.png"

const Reachout = () => {
  return (
    <section className="w-[100%] flex lg:flex-row flex-col lg:items-center lg:justify-evenly px-10 lg:px-20 bg-[#FEFEFE] mt-10">
        <div className='flex items-start justify-start'>
          <h1 className='font-bold lg:text-[45px] text-[#FF3514]'>REACH OUT</h1>
        </div>
        <div className='flex md:flex-row flex-col justify-between gap-10'>
          <div className="flex items-center gap-5">
            <Image src={map} alt="map" width={150}/>
            <div className="">
              <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Location</h3>
              <p className="text-[#000A3E] text-20px">201 Owen Roberst Drive,</p>
              <p className="text-[#000A3E] text-20px">Grand Cayman</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Reachout
