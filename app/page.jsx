"use client"

// import { Poppins } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import {FaArrowRight, FaArrowCircleRight } from "react-icons/fa"

import Navbar from "@/constants/Navbar";
import FaqItem from "@/components/frontend/FaqItem";
import Reachout from "@/components/frontend/Reachout"
import Footer from "@/constants/Footer";

import trucks from "@/public/assets/trucks.png"
import faq from "@/public/assets/faq-svg.svg"
import map from "@/public/assets/map.png"
import call from "@/public/assets/call-center.png"
import Button from "@/components/frontend/Button";
import pic from "@/public/assets/pic.png"
import clients from "@/public/assets/Clients-svg.png"
import goods from "@/public/assets/Goods-svg.png"
import truck from "@/public/assets/truck-svg.png"
import countries from "@/public/assets/countries-svg.png"
import mono from "@/public/assets/Mono.png"
import techbrand from "@/public/assets/Techbrand.png"
import wolves from "@/public/assets/Wolves.png"
import woodvine from "@/public/assets/woodvine.jpg"
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index) {
      return setOpen(false)
    }

    setOpen(index)
  }

  const faqData = [
    {
      title: "What services does your freight forwarding and transportation company offer?",
      desc: `We provide a comprehensive range of logistics services including:<br />
        <ul>
          <li><span class="font-bold">Freight Forwarding:</span> Coordinating the shipment of goods via air, sea, and land to ensure timely and efficient delivery.</li>
          <li><span class="font-bold">Customs Brokerage:</span> Handling all customs clearance processes to facilitate smooth import and export operations.</li>
          <li><span class="font-bold">Transportation:</span> Providing reliable transportation options for local and international shipments, including trucking and cargo handling.</li>
        </ul>`
    },
    {
      title: "How do you ensure the safety and security of my shipments?",
      desc: `At Whitesands Agency, we prioritize the safety and security of your shipments through:<br />
        <ul>
          <li><span class="font-bold">State-of-the-Art Tracking Systems:</span> Utilizing advanced technology to monitor and track your shipments in real-time.</li>
          <li><span class="font-bold">Professional Handling:</span> Employing experienced staff trained in best practices for handling and transporting goods.</li>
        </ul>`
    },
    {
      title: "Can you assist with the customs clearance process?",
      desc: `Yes, we can! Our dedicated customs brokerage team is well-versed in trade regulations and procedures. We offer:<br />
        <ul>
          <li><span class="font-bold">Documentation Preparation:</span> Assisting with the preparation and submission of all necessary customs documents.</li>
          <li><span class="font-bold">Regulatory Compliance:</span> Ensuring your shipments comply with all relevant customs regulations and requirements.</li>
          <li><span class="font-bold">Expedited Clearance:</span> Facilitating the swift clearance of goods to minimize delays and ensure timely delivery.</li>
        </ul>`
    }
  ];
  

  return (
    <main>
      <Navbar />
      <section className="relative w-[100%] flex" id="hero">
        <div className="p-5 flex h-[380px] md:h-[410px] lg:h-[500px] w-[100%] bg-[#000A3E]">
          <div className="w-[100%] h-[100%] flex flex-col mt-10 lg:mt-16">
            <h1 className="text-white text-center font-[700] text-[40px] md:text-[50px] lg:text-[70px] leading-[60px] md:leading-[82.03px]">WHITESANDS <span className="text-[#FF3514]">AGENCY</span></h1>
            <p className="text-white text-center font-[400] text-[13px] leading-[15.74px]">Whitesands Agency is a global leading logistics provider that provides innovative <br /> solutions for a multitude of industries worldwide.</p>
          </div>
        </div>
        <div className="absolute top-[300px] md:top-[230px] lg:top-[260px] w-[100%] flex justify-center">
          <Image src={trucks} alt="trucks" className="flex w-[1000px] absolute" />
        </div>
      </section>
      <section className="lg:h-[215px] w-[100%] md:flex flex-wrap lg:items-center px-5 md:px-14 lg:px-14 justify-between mt-[90px] md:mt-[140px] lg:mt-[150px]">
        <div className="flex flex-col lg:w-[70%] md:flex-row gap-10 lg:gap-0">
          {/* <div className="flex items-center gap-5">
            <Image src={call} alt="call center"/>
            <div className="">
              <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Call Center</h3>
              <p className="text-[#000A3E] text-20px">24/7 Support</p>
              <p className="text-[#000A3E] text-20px">+ (123) 1800-567-8990</p>
            </div>
          </div> */}
          <div className="flex items-center gap-5">
            <Image src={map} alt="map" width={150}/>
            <div className="">
              <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Location</h3>
              <p className="text-[#000A3E] text-20px">201 Owen Roberts Drive,</p>
              <p className="text-[#000A3E] text-20px">Grand Cayman</p>
            </div>
          </div>
        </div>
        <div className="flex lg:w-[29%] px-5 md:px-0 lg:pl-5 lg:border-l-2 flex-col mt-10 lg:mt-0">
          <h3 className="text-[#000A3E] text-[23px] md:mb-3 font-medium">Track and Trace</h3>
          <div>
            <form action="" className="flex flex-col md:items-start">
              <input type="number" placeholder="123456" maxLength={50} className="border-2 h-[46px] w-full" /> 
              <Link href="">
                <Button text="Track and Trace" bg="FF3514" />
              </Link>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row w-[100%] lg:px-20 px-10 mt-20 lg:mt-10">
        <div className="flex-1 md:flex">
          <div className="w-60 h-60 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full flex relative " style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-col absolute top-0 shadow-lg w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white border-gray-500 items-center justify-center">
              <div className="flex flex-col w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-[#FF3514] border-dashed border-[2px] items-center justify-center">
                <span className="text-[#FF3514] text-[12px] md:text-[16px]">TRUSTED</span>
                <p className="text-[12px] md:text-[16px]">Globally</p>
              </div>
            </div>
            <div className="bg-[#FF3514] w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full flex absolute bottom-0 right-0" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
         <div className="flex items-center gap-5 mb-5">
          <div className="bg-[#FF3514] w-[20px] h-[20px]" />
          <h3 className="lg:text-[35px] text-[20px] text-[#000A3E]">About Whitesands Agency</h3>
         </div>
         <div>
          <h2 className="font-bold text-[30px] leading-[40px] lg:text-[45px] lg:leading-[50px] text-[#000A3E]">We provide the best Logistics services</h2>
          </div>
          <div className="flex gap-5 my-5">
            <div className="bg-[#FF3514] text-[10px] text-white p-3 rounded-lg">
              Solution for Individuals
            </div>
            <div className="p-3 text-[10px] border border-black rounded-lg">
              Solution for Businesses
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:w-[500px]">
            <p className="font-bold md:text-[17px]">Whitesands Agency, the leading logistics provider in the Cayman Islands. With our extensive experience and commitment to excellence, we offer comprehensive logistics solutions tailored to meet the unique needs of our clients. Our services include freight forwarding, customs brokerage, warehousing, and distribution, ensuring seamless and efficient supply chain management.</p>
            <p className="md:text-[16px] font-bold">At Whitesands Agency, we pride ourselves on our dedication to customer satisfaction and our ability to deliver reliable, timely, and cost-effective logistics solutions. Partner with us for all your logistics needs and experience the difference of working with a trusted industry leader.</p>
          </div>
        </div>
      </section>
      <section className="lg:pt-10 px-10 lg:px-20 w-full flex flex-col items-center">
        <h1 className="lg:text-[50px] text-[40px] mt-10 font-medium pb-10">Our Services</h1>
        <div className="flex gap-5 flex-wrap w-[100%]">
          <div className="w-full md:w-[48%] lg:w-[31%] h-[300px] flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Freight Forwarding</h2>
              <Link href="/services#freight">
                <Button text="Read More" bg="FF3514" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Customs Brokerage</h2>
              <Link href="/services#customs">
                <Button text="Read More" bg="FF3514" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[48%] lg:w-[32%] h-[300px] flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Transportation</h2>
              <Link href="/services#transportation">
                <Button text="Read More" bg="FF3514" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[500px] flex justify-end items-end pr-12 mt-14" style={{ backgroundImage: `url(/assets/port.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-[450px] h-[250px] bg-[#000000c4] px-8 text-white flex flex-col justify-end pb-8">
          <div>
            <h4>Logistics</h4>
            <p>Combining transport & logistics execution and management services to meet all your needs</p>
          </div>
          <div className="flex items-end justify-end gap-1">
            <div className="rounded-full bg-[#FF3514] w-3 h-3"/>
            <div className="rounded-full bg-white w-3 h-3"/>
            <div className="rounded-full bg-[#bdd7ed] w-3 h-3"/>
          </div>
        </div>
      </section>
      <section className="flex relative flex-col w-full mt-5">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-[70%] bg-[#FF3514] text-white">
            <h1 className="m-10 mt-14 lg:leading-[70px] leading-[40px] font-bold text-[30px] md:text-[38px] lg:text-[55px]">We give you <br />complete control of <br /> your shipments</h1>
            <div className="flex flex-col lg:flex-row justify-between px-10">
              <div className="flex md:w-[45%] lg:w-full flex-col gap-4">
                <h4 className="font-semibold">Solution Design</h4>
                <p>Whitesands has a proven methodology for engaging customers using collaborative solution development process to understand business needs and to tailor our solution to specifically deliver</p>
              </div>
              <div className="flex h-full w-[1px] bg-white mx-10" />
              <div className="flex md:w-[45%] lg:w-full flex-col gap-4">
                <h4 className="font-semibold">Solution Design</h4>
                <p>
                  Providing an independent advice and identifying the right fit for you. Services are sourced and procured based on solution specifications provided by our Supply Chain Solution.                </p>
              </div>
            </div>
            <div className="flex justify-end pr-10 lg:pr-32 mb-10">
              <a href="/services" className="cursor-pointer">
                <FaArrowCircleRight className="text-[70px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly py-2">
          <div className="flex items-center gap-1">
            <p>Warehousing</p>
            <a href="/services" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <p>Get A Quote</p>
            <a href="/contact" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <p>FAQs</p>
            <a href="/#faq" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex absolute right-0 bottom-14 md:bottom-1/3">
          <Image src={pic} alt="pic" width={400} />
        </div>
      </section>
      <section className="flex flex-col bg-[#FAFAFA] mx-10 lg:mx-20">
        {/* <div className="flex flex-col lg:pt-10 pb-1">
          <div className="flex flex-col justify-center items-center" style={{ backgroundImage: `url(/assets/map-bg.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <h2 className="text-[35px] text-[#000A3E] mt-20 mb-10">Numbers speak for <span className="font-bold"> themselves</span></h2>
            <div className="flex flex-wrap justify-between gap-10 lg:gap-20">
              <div className="flex flex-col md:w-[47%] lg:w-[45%] gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={truck} alt="truck" />
                <span className="text-[#FF3514] text-[35px]">1,408m</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Delivered Packages</h5>
                <p className="text-[12px] text-[#242424]">We strongly support best practice sharing across our operations around the world and across various industrial sectors.</p>
              </div>
              <div className="flex flex-col md:w-[47%] lg:w-[45%] gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={countries} alt="counties" />
                <span className="text-[#FF3514] text-[35px]">57</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Countries Covered</h5>
                <p className="text-[12px] text-[#242424]">
                  As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.
                </p>
              </div>
              <div className="flex flex-col md:w-[47%] lg:w-[45%] gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={clients} alt="clients" />
                <span className="text-[#FF3514] text-[35px]">784</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Satisfied Clients</h5>
                <p className="text-[12px] text-[#242424]">Whitesands applies its renowned operational expertise to provide best-in-class services across its integrated worldwide network.</p>
              </div>
              <div className="flex flex-col md:w-[47%] lg:w-[45%] gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={goods} alt="goods" />
                <span className="text-[#FF3514] text-[35px]">4,500m</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Tons of Goods</h5>
                <p className="text-[12px] text-[#242424]">Our commitment to sustainability helps us reduce waste and share the benefits with our customers</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col pt-10 justify-between md:justify-evenly w-full bg-white py-3 items-center">
          <h1 className="text-[30px] font-bold">Partnered with</h1>
          <div>
            <Image src={woodvine} alt="woodvine" width={200} />
          </div>
          {/* <div>
            <Image src={mono} alt="mono"  />
          </div>
          <div>
            <Image src={wolves} alt="wolves" />
          </div> */}
        </div>
      </section>
      <section id="faq" className="flex flex-col md:flex-row mx-10 lg:mx-20 mt-10 gap-10">
        <div className="flex-1 flex flex-col">
          <div className="flex gap-3 items-center">
            <div className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-[#FF3514]"/>
            <h5 className="text-[18px] md:text-[20px] lg:text-[28px] text-[#FF3514] font-medium">Frequently Asked Questions</h5>
          </div>
          <h1 className="text-[25px] md:text-[35px] lg:text-[50px] leading-9 text-[#000A3E] font-semibold lg:leading-[50px] py-5">We&apos;re here to change your business look</h1>
          <div className="h-full lg:mr-10">
            <div className="max-w-[800px] text-black">
              {faqData.map((data, index) => {
                return (
                  <FaqItem 
                    key={index} 
                    open={index === open} 
                    title={data.title} 
                    desc={data.desc} 
                    toggle={() => toggle(index)} 
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-1 relative">
          <Image src={faq} alt="faq" />
          <div className="flex absolute lg:w-[60%] p-6 bottom-0 rounded-tr-3xl bg-[#FF3514]">
            <p className="flex text-white text-[14px] lg:text-[20px] font-semibold">Our agency is one of the most succesful agencies.</p>
          </div>
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  );
}
