"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaUserCircle } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { LoginButton } from "@/components/auth/login-button";
import { useCurrentUser } from '@/hooks/use-current-user';

import logo from "@/public/assets/footer-logo.jpg"
import Image from 'next/image';
import Button from '@/components/frontend/Button';
import { UserIcon } from '@/components/auth/user-icon';

const Navbar = () => {
  const user = useCurrentUser()
  return (
    <section>
      <div className='flex justify-between w-full border-b-[1.5px] border-gray-300 px-0 md:px-20'>
        <div className=''>
          <a href="/">
            <Image src={logo} width={100} alt='Whitesands Agency logo'/>
          </a>
        </div>
        <div className='md:flex mr-[70px] md:mr-0 mt-6 md:mt-0 cursor-pointer text-[30px] items-center justify-center gap-5'>
          {user ? 
            <UserIcon /> :
            <LoginButton asChild>
              <FaUserCircle />
            </LoginButton>
          }
          <a href="/contact" className='hidden md:flex'>
            <Button text="Get A Quote" bg="" />
          </a>
        </div>
      </div>
      <nav className="bg-white py-2 hidden md:flex justify-around px-10">
        <div className='flex items-baseline space-x-4'>
          <div className="flex items-baseline space-x-4">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About Us" />
            <NavItem href="/services" label="Services" />
            <NavItem href="/contact" label="Contact Us" />
          </div>
          {user ? <a href="/settings" className='bg-[#FF3514] p-2 text-white'>Register</a> : <a href="/auth/register" className='bg-[#FF3514] p-2 text-white'>Register</a>}
          </div>
        {/* <div className='flex items-center justify-center'>
          <FaSearch />
        </div> */}
      </nav>
      <nav className='md:hidden'>
        <label id='hamburger-menu' className='mt-5 mr-5' >
          <input type="checkbox"/>
        </label>
        <aside id='sidebar' className='py-5 hidden'>
          <div className='flex flex-col cursor-pointer text-[30px] items-center justify-center gap-5'>
            <Button text="Get A Quote" bg="" href="/contact" />
          </div>
          <nav className="bg-white py-2 flex flex-col justify-between px-10">
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center items-center">
                <NavItem href="/" label="Home" />
                <NavItem href="/about" label="About Us" />
                <NavItem href="/services" label="Services" />
                <NavItem href="/contact" label="Contact Us" />
              </div>
              {user ? <a href="/settings" className='bg-[#FF3514] p-2 text-white'>Register</a> : <a href="/auth/register" className='bg-[#FF3514] p-2 text-white'>Register</a>}
              </div>
            {/* <div className='flex items-center justify-center'>
              <FaSearch />
            </div> */}
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
        <a className={`text-blue-900 hover:text-[#FF3514] px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-customOrange" : ''}`}>
          {label}
        </a>
    </Link>
  );
};

export default Navbar;
