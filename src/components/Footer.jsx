import React from 'react'
import { FaInstagramSquare,FaGithubSquare,FaFacebook, FaYoutube} from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 '>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-40'  src="https://www.soulstoneshop.com/cdn/shop/files/SoulStone-Horizontal-01_9f2e2d5b-2957-45a7-8a88-3071edc33847.jpg?v=1637638662" alt="" />
                <p className="text-sm tracking-wide text-white">@ Arunkumar.components</p>
                <img className='w-40' src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" alt="" />
                <div className='flex gap-5 text-lg text-gray-500'>
                    <BsTwitterX className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebook className='hover:text-white duration-300 cursor-pointer'/>
                    <FaGithubSquare className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagramSquare className='hover:text-white duration-300 cursor-pointer'/>
                    <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Banglore,India</p>
                    <p>Moblie:89781862572</p>
                    <p>phone:78996310666</p>
                    <p>email:mekalaarun@gmail.com</p>
                </div>
            </div>
            <div>
                 <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                  <div className='flex flex-col gap-2'> 
                     <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span></span>my account</p>
                     <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span></span>checkout</p>
                     <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span></span>order tracking</p>
                     <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span></span>help & support</p>
                  </div>
            </div>
            <div className='flex flex-col justify-center'>
                <input  className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder='email' />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer