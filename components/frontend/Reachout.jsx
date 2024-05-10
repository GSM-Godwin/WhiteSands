import Image from 'next/image'
import React from 'react'

import map from "@/public/assets/map.png"
import call from "@/public/assets/call-center.png"

const Reachout = () => {
  return (
    <section className="h-[215px] w-[100%] flex items-center px-14 justify-between bg-[#FEFEFE]">
        <div>
          <h1 className='font-bold text-[45px] text-[#FF3514]'>REACH OUT</h1>
        </div>
        <div className="flex items-center gap-5">
          <Image src={call} alt="call center"/>
          <div className="">
            <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Call Center</h3>
            <p className="text-[#000A3E] text-20px">24/7 Support</p>
            <p className="text-[#000A3E] text-20px">+ (123) 1800-567-8990</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Image src={map} alt="map" width={150}/>
          <div className="">
            <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Location</h3>
            <p className="text-[#000A3E] text-20px">USA, New York - 1060</p>
            <p className="text-[#000A3E] text-20px">Str. First Avenue 1</p>
          </div>
        </div>
    </section>
  )
}

export default Reachout
