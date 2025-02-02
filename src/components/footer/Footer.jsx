import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import {  FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
const FooterLinks =[
    {
        title:"Home",
        link:"/"
    },
    {
        title:"About",
        link:"/about"
    },
    {
        title:"Contact",
        link:"/contact"
    },
    {
        title:"Blog",
        link:"/blogs"
    },
]
const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container '>
<div className="grid md:grid-cols-3 pb-20 pt-5">
    {/* company details */}

    <div className='py-8 px-4'>
    <a href="#"
className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
  >Eshop</a>
  <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Eshop is a dynamic online shopping platform designed to 
  offer a seamless and enjoyable shopping experience. It features a diverse range of products, including electronics, fashion,
   home decor, and more, 
  catering to various customer needs and preferences.</p>
    <p className='text-gray-500  mt-4'>Made With ❤️ by Divya</p>
    <a href="https://youtube.com/@princysingh7550?si=UIpYUR60JIp9Immo" target="_blank"
    className='inline-block bg-primary/90 text-white py-2 px-4 text-5m rounded-full'
    > Visit Our YouTube Channel</a>
    </div>
    {/* footer links */}
<div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
    <div className='py-8 px-4'>
        <h1 className=' text-xl font-bold sm:text-left mb-3'>Important Links</h1>
        <ul className='space-y-3'>
            {
                FooterLinks.map(
                    (data,index)=>(
                        <li key={index}>
                      <Link to={data.link}
                      className=' text-gray-600 dark:text-gray-400
                       hover:dark:text-white
                      hover:text-black duration-300'>
                      {data.title}
                      </Link>
                     </li>
                    )
                )
            }
        </ul>
    </div>
     {/* second column links */}

    <div className='py-8 px-4'>
        <h1 className=' text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
        <ul className='space-y-3'>
            {
                FooterLinks.map(
                    (data,index)=>(
                        <li key={index}>
                      <Link to={data.link}
                      className=' text-gray-600 dark:text-gray-400
                       hover:dark:text-white
                      hover:text-black duration-300'>
                      {data.title}
                      </Link>
                     </li>
                    )
                )
            }
        </ul>
    </div>

{/* company address */}
<div className='py-8 px-4 col-span-2 sm:col-auto'>
<h1 className='text-xl font-bold sm:text-left mb-3'>
    Address
</h1>
<div>
   <div className='flex items-center gap-3'>
       <FaLocationArrow/>
        <p>Noida, Uttar Pradesh</p>
   </div>
        <div className="flex items-center gap-3 mt-6 ">
            <FaMobileAlt/>
           
            <p>+91 8795751407</p>
            </div>


       {/* social links */}
        <div className='flex items-center gap-3 mt-6'>
            <a href="#">
                <FaInstagram className='text-3xl
                 hover:text-primary duration-300'/>
            </a>

            <a href="#">
                <FaGithub className='text-3xl
                 hover:text-primary duration-300'/>
            </a>

            <a href="#">
                <FaLinkedin className='text-3xl
                 hover:text-primary duration-300'/>
            </a>
        </div>
</div>
</div>
</div>

</div>

      </div>
    </div>
  )
}

export default Footer
