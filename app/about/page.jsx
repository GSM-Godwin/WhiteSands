import Image from 'next/image'

import Hero from "../../components/frontend/Hero"
import Sliders from "../../components/frontend/Sliders"
import Reachout from "../../components/frontend/Reachout"
import Button from "../../components/frontend/Button"
import Navbar from '@/constants/Navbar'
import Footer from '@/constants/Footer'

import about from '@/public/assets/snow-truck.svg'
import ocean from '@/public/assets/ocean.svg'
import air from '@/public/assets/air.svg'
import land from '@/public/assets/land.svg'
import clients from "@/public/assets/Clients-svg.png"
import truck from "@/public/assets/truck-svg.png"
import countries from "@/public/assets/countries-svg.png"
import seaport from "@/public/assets/seaport.svg"
import expertise from "@/public/assets/Header-Expertise.svg"

const About = () => {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero headingText="About us" backgroundImage="/assets/about-hero.png" />
      <section className='flex flex-col md:flex-row mx-5 m-10 md:mx-20 gap-5'>
        <div className='md:w-[50%] lg:flex-2 hidden md:flex border-red-500 '>
          <Image src={about} className='bg-cover w-full lg:w-[736px] lg:h-[538px]'  />
        </div>
        <div className='flex flex-col md:flex-1 items-start justify-center'>
          <h1 className='text-[50px] text-[#000A3E]'>About <span className='font-bold'>Us</span></h1>
          <div className='flex w-[102px] bg-[#FF3514] h-1 mt-2 mb-8' />
          <p className='text-[18px]'>Whitesands Agency is a global leading logistics provider that provides innovative suply chain solutions for a multitude of industries worldwide.</p>
          <Button text="View More" bg="FF3514" />
        </div>
      </section>
      <section className='flex flex-col md:flex-row md:mx-20 mx-10 lg:gap-16 gap-10 py-10 text-[#000A3E]'>
        <div className='flex flex-1'>
          <h2 className='font-semibold lg:leading-[60px] text-[30px] lg:text-[45px]'>The Whitesands Agency is one of the world&apos;s leading providers of Logistics solutions.</h2>
        </div>
        <div className='flex flex-1'>
          <p className='text-justify lg:text-[25px]'>The company combines its core products of Air Freight, Ocean Freight and logistics to deliver globally integrated, tailor-made end-to-end solutions for eleven core industries. Drawing on in-depth industry know-how and customized IT systems, Whitesands Agency manages the needs of its customers supply chains, no matter how demanding they might be.</p>
        </div>
      </section>
      <section className='md:mx-20 mx-10 my-10'>
        <Sliders />
      </section>
      <section className="w-full flex flex-wrap bg-[#FAFAFA] justify-evenly items-center gap-20 p-20" style={{ backgroundImage: `url(/assets/map-bg.png)`, backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
        <div className="flex flex-col gap-2 max-w-[500px] p-5">
          <Image src={truck} alt="truck" />
          <span className="text-[#FF3514] text-[35px]">1,408m</span>
          <h5 className="font-medium text-[20px] text-[#000A3E]">Delivered Packages</h5>
          <p className="text-[12px] text-[#242424]">We strongly support best practice sharing across our operations around the world and across various industrial sectors.</p>
        </div>
        <div className="flex flex-col gap-2 max-w-[500px] p-5">
          <Image src={countries} alt="counties" />
          <span className="text-[#FF3514] text-[35px]">57</span>
          <h5 className="font-medium text-[20px] text-[#000A3E]">Countries Covered</h5>
          <p className="text-[12px] text-[#242424]">
            As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-[500px] p-5">
          <Image src={clients} alt="clients" />
          <span className="text-[#FF3514] text-[35px]">784</span>
          <h5 className="font-medium text-[20px] text-[#000A3E]">Satisfied Clients</h5>
          <p className="text-[12px] text-[#242424]">Whitesands applies its renowned operational expertise to provide best-in-class services across its integrated worldwide network.</p>
        </div>
      </section>
      <section className='p-20 flex bg-[#000A3E] w-full justify-center items-center'>
        <div className='flex flex-wrap justify-between items-center w-full'>
          <div className='min-w-[200px] mb-5'>
            <div className=''>
              <Image src={ocean}/>
            </div>
            <div className='flex bg-white'>
              <span className='text-[#FF3514] text-[35px] flex m-auto py-2'>Ocean</span>
            </div>
          </div>

          <div className='min-w-[200px] mb-5'>
            <div className=''>
              <Image src={air}/>
            </div>
            <div className='flex bg-white'>
              <span className='text-[#FF3514] text-[35px] flex m-auto py-2'>Air</span>
            </div>
          </div>

          <div className='min-w-[200px] mb-5'>
            <div className=''>
              <Image src={land} />
            </div>
            <div className='flex bg-white'>
              <span className='text-[#FF3514] text-[35px] flex m-auto py-2'>Land</span>
            </div>
          </div>

          <div className='min-w-[200px] mb-5'>
            <div className=''>
              <Image src={land}/>
            </div>
            <div className='flex bg-white'>
              <span className='text-[#FF3514] text-[35px] flex m-auto py-2'>Groupage</span>
            </div>
          </div>
        </div>
      </section>
      <section className='p-20 flex flex-wrap bg-white w-full justify-evenly gap-5'>
        <div className='flex justify-end items-end w-[200px] h-[230px] mb-5 pb-5 border-black' style={{ backgroundImage: `url(/assets/1.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}>
          <div className='flex flex-col text-center bg-transparent'>
            <p className='text-[#FF3514] text-[20px] font-medium flex m-auto py-2'>Mission</p>
            <p className='text-[12px] text-[#000A3E] font-light'>As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.</p>
          </div>
        </div>
        <div className='flex justify-end items-end w-[200px] h-[230px] mb-5 pb-5 border-black' style={{ backgroundImage: `url(/assets/2.1.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}>
          <div className='flex flex-col text-center bg-transparent'>
            <p className='text-[#FF3514] text-[20px] font-medium flex m-auto py-2'>Vision</p>
            <p className='text-[12px] text-[#000A3E] font-light'>As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.</p>
          </div>
        </div>
        <div className='flex justify-end items-end w-[200px] h-[230px] mb-5 pb-5 border-black' style={{ backgroundImage: `url(/assets/3.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}>
          <div className='flex flex-col text-center bg-transparent'>
            <p className='text-[#FF3514] text-[20px] font-medium flex m-auto py-2'>Value</p>
            <p className='text-[12px] text-[#000A3E] font-light'>As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions.</p>
          </div>
        </div>
      </section>
      <section className='p-10 md:p-20 flex md:flex-row flex-col-reverse bg-[#F2F2F2] items-center'>
        <div className='bg-white p-10 w-full lg:w-[50%] h-max'>
          <h1 className='lg:text-[50px] text-[30px] text-[#000A3E] lg:leading-[60px]'>Ethics <span className='font-bold'>& <br />Compliance</span></h1>
          <div className='flex w-[102px] bg-[#FF3514] h-1 mt-4 mb-8' />
          <p>At Whitesands we make a commitment to pursue our business with integrity, respecting different cultures and the dignity and rights of individuals in all countries. We support the principles outlined in the UN Universal Declaration of Human Rights and commit ourselves to the observance of fundamental labor and environmental standards.</p>
        </div>
        <div className='flex justify-end'>
          <Image src={expertise} />
        </div>
      </section>
      <section className='flex md:flex-row flex-col px-10 md:pl-20'>
        <div className='flex flex-col md:flex-1 py-10 md:pr-10'>
          <h1 className='lg:text-[50px] text-[30px] text-[#000A3E] lg:leading-[60px]'>First things <span className='font-bold'>first</span></h1>
          <div className='flex w-[102px] bg-[#FF3514] h-1 mt-4 mb-8' />
          <p>All the aspects of our work processes, organization and operations are oriented towards our customers’ needs.</p>
          <form action="" className='w-full flex flex-col pt-8'>
              <div className='flex md:flex-row flex-col w-full gap-5 md:justify-between pb-6'>
                <input type='text' name='first-name' placeholder='First Name' className='border border-red-500 md:w-[47%] p-2 font-medium' />
                <input type='text' name='last-name' placeholder='Last Name' className='border border-red-500 md:w-[47%] p-2 font-medium' />
              </div>
              <div className='flex md:flex-row flex-col w-full gap-5 md:justify-between pb-6'>
                <input type='email' name='email' placeholder='Email address' className='border border-red-500 md:w-[47%] p-2 font-medium' />
                <input type='tel' name='tel' placeholder='Phone number' className='border border-red-500 md:w-[47%] p-2 font-medium' />
              </div>
              <div className='flex md:w-[100%] pb-6 pt-3'>
                <textarea name="message" id="message" placeholder='Tell us your thought' className='border border-red-500 w-full p-2 font-medium' ></textarea>
              </div>
              <div className='flex w-full justify-center'>
                <Button text="Send Message" bg="FF3514" />
              </div>
            </form>
        </div>
        <div className='flex md:flex-1'>
          <Image src={seaport} />
        </div>
      </section>
      <Reachout />
      <Footer />
    </main>
  )
}

export default About
