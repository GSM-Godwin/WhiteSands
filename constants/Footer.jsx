import Image from "next/image"

import logo from '@/public/assets/footer-logo.jpg'

const Footer = () => {
  return (
    <>
      <footer className='w-[100%] h-full p-10 bg-[#11023d]'>
        <div className="flex justify-evenly">
          <div>
            <Image src={logo} alt="logo" width={150} />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#FF3514] rounded-full" />
              <h4 className="text-white">Quick Links</h4>
            </div>
            <div>
              <ul className="text-gray-400 text-[10px] flex flex-col items-center">
                <a href="/"><li className="pb-1">Home</li></a>
                <a href="/about"><li className="pb-1">About Us</li></a>
                <a href="/services"><li className="pb-1">Services</li></a>
                <a href="/contact"><li className="pb-1">Contact Us</li></a>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#f0d2ce] rounded-full" />
              <h4 className="text-white">Company</h4>
            </div>
            <div>
              <ul className="text-gray-400 text-[10px] flex flex-col items-center">
                <a><li className="pb-1">Terms</li></a>
                <a><li className="pb-1">Privacy Policy</li></a>
                <a><li className="pb-1">Career</li></a>
                <a><li className="pb-1">Sitemap</li></a>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#7ea1f3] rounded-full" />
              <h4 className="text-white">Socials</h4>
            </div>
            <div>
              <ul className="text-gray-400 text-[10px] flex flex-col items-center">
                <a><li className="pb-1">Twitter</li></a>
                <a><li className="pb-1">LinkedIn</li></a>
                <a><li className="pb-1">Facebook</li></a>
                <a><li className="pb-1">Instagram</li></a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-[100%] h-full bg-white text-[10px] font-extralight flex items-center justify-center py-2">
        Copyright C 2024, Whitesands Agency
      </div>
    </>
  )
}

export default Footer