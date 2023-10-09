import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(isOpen ? false : true)
        console.log(isOpen)
    };
    const Cv_link = "https://docs.google.com/document/d/1-GqlwTEVML6T30GhYt7Arqjv5LsIza4g/edit?usp=sharing&ouid=100264052160316796644&rtpof=true&sd=true"
    return (
        <>
            <div className='flex justify-between items-center px-5 md:px-10 py-3'>
                <div className='text-white font-bold'>
                    Usman
                </div>
                <div className='grow hidden md:block'>
                    <nav>
                        <div>
                            <ul className='flex justify-evenly items-center mx-10 font-semibold text-white cursor-pointer'>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:bg-[#05BDC5]  rounded-sm px-3 py-1'><Link to='/'>Home</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:bg-[#05BDC5]  rounded-sm px-3 py-1'><Link to='/about'>About</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:bg-[#05BDC5]  rounded-sm px-3 py-1'><Link to='/project'>Projects</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:bg-[#05BDC5]  rounded-sm px-3 py-1'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-center gap-5 items-center'>
                    <Link to={Cv_link} target='_blank' className=' transition ease-in-out delay-150 duration-700 bg-[#05BDC5] rounded-sm px-3 py-3 text-white font-semibold text-sm flex justify-between items-center gap-3'>
                        <ion-icon className="text-xl" name="download-outline"></ion-icon>
                        Download Resume
                    </Link>
                    <div className='text-5xl text-white font-semibold'>
                        <button onClick={toggleMenu} className='block md:hidden'>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col text-black bg-white p-5  font-semibold`}>
                <button onClick={toggleMenu} className=' transition ease-in-out delay-150 duration-700 text-5xl font-semibold hover:text-[#05BDC5]'>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <Link to="/" className="transition ease-in-out delay-150 duration-700  hover:bg-[#05BDC5]  rounded-sm  px-3 py-1">Home</Link>
                <Link to="/about" className="transition ease-in-out delay-150 duration-700   hover:bg-[#05BDC5]  rounded-sm  px-3 py-1">About</Link>
                <Link to="/project" className="transition ease-in-out delay-150 duration-700  hover:bg-[#05BDC5]  rounded-sm px-3 py-1">Projects</Link>
                <Link to="/contact" className="transition ease-in-out delay-150 duration-700   hover:bg-[#05BDC5]  rounded-sm  px-3 py-1">Contact</Link>
            </div>
        </>
    )
}

export default Navbar