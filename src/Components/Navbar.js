import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHandler = () => {
        setIsOpen(isOpen ? false : true)
        console.log(isOpen)
    }
    return (
        <>
            <div className='flex justify-between items-center px-2 md:px-10 py-3'>
                <div className='text-white font-bold'>
                    Usman
                </div>
                <div className='grow hidden md:block'>
                    <nav>
                        <div>
                            <ul className='flex justify-evenly items-center mx-10 font-semibold text-white cursor-pointer'>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'><Link href="#" className="block text-white py-2">Home</Link></li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>About</li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Projects</li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Skills</li>
                                <li className=' transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg p-3'>Contact Us</li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-between items-center gap-5'>
                    <button className='bg-[#12121d] rounded-lg px-3 py-3 text-white font-semibold flex justify-between items-center gap-3 text-lg'>
                        <ion-icon name="download-outline"></ion-icon>
                        Resume
                    </button>
                    <button onClick={toggleHandler} className='text-4xl text-white md:hidden'><ion-icon name="menu-outline"></ion-icon></button>

                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="bg-blue-500 p-4">
                    <div className='flex justify-between items-center'>
                        <Link href="#" className="block text-white py-2 transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg px-2 grow">Home</Link>
                        <button onClick={toggleHandler} className='text-4xl text-white md:hidden right-0 '><ion-icon name="close-outline"></ion-icon></button>
                    </div>
                    <Link href="#" className="block text-white py-2  transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg px-2">About</Link>
                    <Link href="#" className="block text-white py-2 transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg px-2">Services</Link>
                    <Link href="#" className="block text-white py-2 transition ease-in-out delay-150 duration-700 hover:text-gray-300  hover:bg-[#12121d]  rounded-lg px-2">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar