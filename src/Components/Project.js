import React from 'react'
import Navbar from './Navbar'
import PortfolioImage from '../Images/Portfolio.png'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <div className='bg-gradient-to-r from-violet-700 to-violet-500'>
            <Navbar />
            <p className='text-center mt-10 text-5xl font-semibold text-white'>PROJECTS</p>
            <p className='text-center text-2xl mb-10 text-white'>________</p>
            {/* Navigation for large screen  */}
            <div className=' px-2 md:px-10 hidden md:block'>
                <nav>
                    <ul className='flex justify-evenly font-semibold text-white'>
                        <li>
                            <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2 hover:bg-black hover:text-white'>All</Link>
                        </li>
                        <li>
                            <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2 hover:bg-black hover:text-white'>React Native</Link>
                        </li>
                        <li>
                            <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2 hover:bg-black hover:text-white'>React Js</Link>
                        </li>
                        <li>
                            <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2 hover:bg-black hover:text-white'>MERN Stack</Link>
                        </li>
                        <li>
                            <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2 hover:bg-black hover:text-white'>Python</Link>
                        </li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
            {/* Navigation for the screen md and after */}
            <div className='flex justify-between items-center mx-10 px-5 py-2 rounded-md  bg-white '>
                <p>Dropdown</p>
                <button><ion-icon className='cursor-pointer' name="chevron-down-outline"></ion-icon></button>
            </div>
        </div>
    )
}

export default Project