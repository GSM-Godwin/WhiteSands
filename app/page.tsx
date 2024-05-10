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
      title: "Few reasons why you should choose us",
      desc: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."
    },
    {
      title: "Few reasons why you should choose us",
      desc: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."
    },
    {
      title: "Few reasons why you should choose us",
      desc: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."
    },
  ]

  return (
    <main>
      <Navbar />
      <section className="h-[800px] w-[100%] flex" id="hero">
        <div className="flex relative h-[70%] w-[100%] bg-[#000A3E]">
          <div className="w-[100%] h-[100%] flex flex-col mt-32">
            <h1 className="text-white text-center font-[700] text-[70px] leading-[82.03px]">WHITESANDS <span className="text-[#FF3514]">AGENCY</span></h1>
            <p className="text-white text-center font-[400] text-[13px] leading-[15.74px]">Whitesands Agency is a global leading logistics provider that provides innovative supply chain <br /> solutions for a multitude of industries worldwide.</p>
          </div>
        </div>
        <div className="absolute top-[455px] w-[100%] flex justify-center">
          <Image src={trucks} alt="trucks" className="flex w-[1000px] absolute" />
        </div>
      </section>
      <section className="h-[215px] w-[100%] flex items-center px-14 justify-between mt-[-100px]">
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
        <div className="flex pl-10 border-l-2 flex-col">
          <h3 className="text-[#000A3E] text-[23px] mb-3 font-medium">Track and Trace</h3>
          <div>
            <form action="" className="flex items-center">
              <input type="number" placeholder="123456" maxLength={50} className="border-2 h-[46px]" /> 
              {/* <button onClick={() => {}} className="bg-[#FF3514] p-3 text-white">Track and Trace</button> */}
              <Button text="Track and Trace" bg="FF3514" />
            </form>
          </div>
        </div>
      </section>
      <section className="flex w-[100%] p-10">
        <div className="flex-1">
          <div className="w-80 h-80 rounded-full flex relative " style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex flex-col absolute top-0 shadow-lg w-32 h-32 rounded-full bg-white border-gray-500 items-center justify-center">
              <span className="text-[#FF3514]">TRUSTED BY</span>
              <p>6,526</p>
          </div>
          <div className="bg-[#FF3514] w-32 h-32 rounded-full flex absolute bottom-0 right-0"/>
          </div>
        </div>
        <div className="flex flex-col flex-1">
         <div className="flex items-center gap-5 mb-5">
          <div className="bg-[#FF3514] w-[20px] h-[20px]" />
          <h3 className="text-[35px] text-[#000A3E]">About Whitesands</h3>
         </div>
         <div>
          <h2 className="font-bold text-[45px] leading-[50px] text-[#000A3E]">We provide the best Logistics services</h2>
          </div>
          <div className="flex gap-5 my-5">
            <div className="bg-[#FF3514] text-[10px] text-white p-3 rounded-lg">
              Solution for smaall <br /> & large businesses
            </div>
            <div className="p-3 text-[10px] border border-black rounded-lg">
              Solution for smaall <br /> & large businesses
            </div>
          </div>
          <div className="flex flex-col gap-3 w-[500px]">
            <p className="font-bold">There are many variations of passagesof Lorem Ipsum available, but the majorit have suffered alteration in some form, by injected humour, or by randomised word.</p>
            <p>You need to be sure there isn't anything embarassing hidden in the middle of text. All the lorem ipsum generators on the internet.</p>
          </div>
        </div>
      </section>
      <section className="p-10 w-full flex flex-col items-center">
        <h1 className="text-[50px] font-medium pb-10">Our Services</h1>
        <div className="flex gap-5 w-[100%] h-60">
          <div className="w-full flex bg-[#0000006f] flex-col justify-end" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Automotive</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Chemicals</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-end bg-[#0000006f]" style={{ backgroundImage: `url(/assets/about-hero.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'color' }}>
            <div className="p-5">
              <h2 className="text-white text-[16px]">Delivery</h2>
              <Button text="Read More" bg="FF3514" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[500px] flex justify-end items-end pr-12" style={{ backgroundImage: `url(/assets/port.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
      <section className="flex relative flex-col w-full">
        <div className="flex">
          <div className="flex flex-col w-[70%] bg-[#FF3514] text-white">
            <h1 className="m-10 mt-14 leading-[70px] font-bold text-[55px]">We give you <br />complete control of <br /> your shipments</h1>
            <div className="flex justify-between px-10">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold">Solution Design</h4>
                <p>Whitesands has a proven methodology for engaging customers using collaborative solution development process to understand business needs and to tailor our solution to specifically deliver</p>
              </div>
              <div className="flex h-full w-[1px] bg-white mx-10" />
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold">Solution Design</h4>
                <p>
                  Providing an independent advice and identifying the right fit for you. Services are sourced and procured based on solution specifications provided by our Supply Chain Solution.                </p>
              </div>
            </div>
            <div className="flex justify-end pr-32 mb-10">
              <a href="" className="cursor-pointer">
                <FaArrowCircleRight className="text-[70px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly py-2">
          <div className="flex items-center gap-1">
            <p>Warehousing</p>
            <a href="" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <p>Get A Quote</p>
            <a href="" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <p>FAQs</p>
            <a href="" className="flex text-10 cursor-pointer">
              <FaArrowRight width={60} height={10} />
            </a>
          </div>
        </div>
        <div className="flex absolute right-0 bottom-14">
          <Image src={pic} alt="pic" width={400} />
        </div>
      </section>
      <section className="w-full flex flex-col bg-[#FAFAFA]">
        <div className="flex flex-col p-10 pb-1">
          <div className="flex flex-col justify-center items-center" style={{ backgroundImage: `url(/assets/map-bg.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <h2 className="text-[35px] text-[#000A3E] mt-20 mb-10">Numbers speak for <span className="font-bold"> themselves</span></h2>
            <div className="flex justify-between gap-20">
              <div className="flex flex-col gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={truck} alt="truck" />
                <span className="text-[#FF3514] text-[35px]">1,408m</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Delivered Packages</h5>
                <p className="text-[12px] text-[#242424]">We strongly support best practice sharing across our operations around the world and across various industrial sectors.</p>
              </div>
              <div className="flex flex-col gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={countries} alt="counties" />
                <span className="text-[#FF3514] text-[35px]">57</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Countries Covered</h5>
                <p className="text-[12px] text-[#242424]">
                  As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={clients} alt="clients" />
                <span className="text-[#FF3514] text-[35px]">784</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Satisfied Clients</h5>
                <p className="text-[12px] text-[#242424]">Whitesands applies its renowned operational expertise to provide best-in-class services across its integrated worldwide network.</p>
              </div>
              <div className="flex flex-col gap-2 shadow-lg bg-white max-w-[500px] p-5">
                <Image src={goods} alt="goods" />
                <span className="text-[#FF3514] text-[35px]">4,500m</span>
                <h5 className="font-medium text-[20px] text-[#000A3E]">Tons of Goods</h5>
                <p className="text-[12px] text-[#242424]">Our commitment to sustainability helps us reduce waste and share the benefits with our customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly w-full bg-white py-3 items-center">
          <div>
            <Image src={techbrand} alt="techbrand" />
          </div>
          <div>
            <Image src={mono} alt="mono"  />
          </div>
          <div>
            <Image src={wolves} alt="wolves" />
          </div>
        </div>
      </section>
      <section className="flex ml-20 mt-10 gap-10 h-screen">
        <div className="flex-1 flex flex-col">
          <div className="flex gap-3 items-center">
            <div className="w-[15px] h-[15px] bg-[#FF3514]"/>
            <h5 className="text-[28px] text-[#FF3514] font-medium">Frequently Asked Questions</h5>
          </div>
          <h1 className="text-[50px] text-[#000A3E] font-semibold leading-[50px] py-5">We're here to change your business look</h1>
          <div className="h-full mr-10">
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
          <div className="flex absolute w-[60%] p-6 bottom-0 rounded-tr-3xl bg-[#FF3514]">
            <p className="flex text-white text-[20px] font-semibold">Our agency is one of the most succesful agencies.</p>
          </div>
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  );
}
