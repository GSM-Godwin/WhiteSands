"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { LoginButton } from "@/components/auth/login-button";

import logo from "@/public/assets/footer-logo.jpg"
import Image from 'next/image';
import Button from '@/components/frontend/Button';

const Navbar = () => {
  return (
    <section>
      <div className='flex justify-between w-full border-b-[1.5px] border-gray-300 px-10 md:px-20'>
        <div className=''>
          <a href="/">
            <Image src={logo} width={100} alt='Whitesands Agency logo'/>
          </a>
        </div>
        <div className='hidden md:flex cursor-pointer text-[30px] items-center justify-center gap-5'>
          <LoginButton mode='modal' asChild>
            <FaUserCircle />
          </LoginButton>
          <Button text="Get A Quote" bg="" />
        </div>
      </div>
      <nav className="bg-white py-2 hidden md:flex justify-between px-10">
        <div>
          <div className="flex items-baseline space-x-4">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About Us" />
            <NavItem href="/services" label="Services" />
            <NavItem href="/contact" label="Contact Us" />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <FaSearch />
        </div>
      </nav>
      <nav className='md:hidden'>
        <label id='hamburger-menu' className='mt-5 mr-10' >
          <input type="checkbox"/>
        </label>
        <aside id='sidebar' className='py-5 hidden'>
          <div className='flex flex-col cursor-pointer text-[30px] items-center justify-center gap-5'>
            <LoginButton asChild>
              <FaUserCircle />
            </LoginButton>
            <Button text="Get A Quote" bg="" />
          </div>
          <nav className="bg-white py-2 flex flex-col justify-between px-10">
            <div>
              <div className="flex flex-col items-center space-x-4">
                <NavItem href="/" label="Home" />
                <NavItem href="/about" label="About Us" />
                <NavItem href="/services" label="Services" />
                <NavItem href="/contact" label="Contact Us" />
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <FaSearch />
            </div>
          </nav>
        </aside>
      </nav>
    </section>
  );
};

const NavItem = ({ href, label }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
      <Link legacyBehavior href={href}>
      <a className={`text-blue-900 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-orange-500" : ''}`}>
        {label}
      </a>
    </Link>
  );
};

export default Navbar;
