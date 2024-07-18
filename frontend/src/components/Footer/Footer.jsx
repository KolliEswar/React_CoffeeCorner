import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import FooterBg from "../../assets/website/coffee-footer.jpg"


const FooterLinks = [
   {
        title: "Home",
        link: "/#home",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}


const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
        <div className="bg-black/40 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
                {/* company details */}
                <div data-aos="fade-up" className='py-8 px-4'>
                    <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'> Coffee Corner</a>
                    <p className='pt-4'> {" "}
                        Crafted Coffee, Cozy Vibes, Unforgettable Moments - your Perfect Espresso Escape
                    </p>
                    <a href="#" className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 duration-200'>Vist our YouTube Channel</a>
                </div>

                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'> 
                    {/* First-col links */}
                    <div data-aos="fade-up" data-aos-delay="500" className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Footer Links</h1>
                        <ul className='space-y-3'>
                          {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link} 
                                className='inline-block hover:scale-105 duration-200'
                                >{data.title}</a>
                            </li>
                          ))}
                        </ul>
                    </div>

                    {/* Secound Col links */}
                    <div data-aos="fade-up" data-aos-delay="800" className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                          {FooterLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link} 
                                className='inline-block hover:scale-105 duration-200'
                                >{data.title}</a>
                            </li>
                          ))}
                        </ul>
                    </div>


                    {/* company Address section */}
                    <div data-aos="fade-up" data-aos-delay="1000" className='py-8 px-4 col-span-2 sm:col-auto'>
                          <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                          <div>
                            <p className='mb-3'>123, Street</p>
                            <p className='mb-3'>Anytown, India</p>
                            <p>+91 1234567890</p>

                            {/* Social links */}
                            <div className='space-x-3 mt-5 hover:drop-shadow-2xl'>
                            <a href="#"><FaFacebook className='text-3xl inline-block hover:scale-105 duration-200' /></a>
                            <a href="#"><FaInstagram className='text-3xl inline-block hover:scale-105 duration-200' /></a>
                            <a href="#"><FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200' /></a>
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