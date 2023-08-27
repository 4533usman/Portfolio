import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='flex justify-between items-center px-20 py-3'>
            <div className='text-white font-bold'>
                Usman
            </div>
            <div className='grow'>
                <nav>
                    <div>
                        <ul className='flex justify-evenly items-center mx-10 font-semibold text-white cursor-pointer'>
                            <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Home</li>
                            <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>About</li>
                            <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Projects</li>
                            <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Skills</li>
                            <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Contact Us</li>
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
                    <button onClick={toggleMenu}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Portfolio</a>
                <a href="#" className="text-white">Contact</a>
            </div>
        </div>
    )
}

export default Navbar