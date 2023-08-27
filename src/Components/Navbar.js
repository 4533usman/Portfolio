import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen ? true : false)
        console.log(isOpen)
    };
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
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'><Link to='/'>Home</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'><Link to='/about'>About</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'><Link to='/projects'>Projects</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-center gap-5 items-center'>
                    <button className='bg-[#12121d] rounded-2xl px-3 py-3 text-white font-semibold text-sm flex justify-between items-center gap-3'>
                        <ion-icon className="text-xl" name="download-outline"></ion-icon>
                        Download Resume
                    </button>
                    <div className='text-5xl text-white font-semibold'>
                        <button onClick={toggleMenu} className='block md:hidden'>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col text-black bg-white p-5`}>
                <button onClick={toggleMenu} className='text-5xl font-semibold'>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <Link to="/" className="transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3">Home</Link>
                <Link to="/about" className="transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3">About</Link>
                <Link to="/projects" className="transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3">Projects</Link>
                <Link to="/contact" className="transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3">Contact</Link>
            </div>
        </>
    )
}

export default Navbar