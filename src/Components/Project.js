import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import gimg from '../Images/download.jpeg'
import { Link } from 'react-router-dom';
const Project = () => {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        { id: 1, name: "Usman", category: 'reactjs' },
        { id: 2, name: "Usman2", category: 'reactjs' },
        { id: 3, name: "Usman3", category: 'reactnative' },
        { id: 4, name: "Usman4", category: 'reactnative' },
        { id: 5, name: "Usman5", category: 'mern' },
        { id: 6, name: "Usman6", category: 'mern' },
        { id: 7, name: "Usman7", category: 'python' },
        { id: 8, name: "Usman8", category: 'python' },
        { id: 9, name: "Usman", category: 'reactjs' },
        { id: 10, name: "Usman2", category: 'reactjs' },
        { id: 11, name: "Usman3", category: 'reactnative' },
        { id: 12, name: "Usman4", category: 'reactnative' },
        { id: 13, name: "Usman5", category: 'mern' },
        { id: 14, name: "Usman6", category: 'mern' },
        { id: 15, name: "Usman7", category: 'python' },
        { id: 16, name: "Usman8", category: 'python' },
    ]
    const toggleDropdown = () => {
        setIsOpen(isOpen ? false : true);
        console.log(isOpen)
    }
    useEffect(() => {

    }, [])
    const [allProjects, setAllProjects] = useState(true);
    const [reactProjects, setReactProjects] = useState(false);
    const [reactnativeProjects, setReactNativeProjects] = useState(false);
    const [mernProjects, setMernProjects] = useState(false);
    const [pythonProjects, setPythonProjects] = useState(false);
    const AllProjects = () => {
        setMernProjects(false);
        setReactNativeProjects(false);
        setReactProjects(false)
        setPythonProjects(false);
        setAllProjects(true);
    }
    const AllPythonProjects = () => {
        setAllProjects(false);
        setMernProjects(false);
        setReactNativeProjects(false);
        setReactProjects(false)
        setPythonProjects(true);
    }
    const AllReactNativeProjects = () => {
        setAllProjects(false);
        setMernProjects(false);
        setReactProjects(false)
        setPythonProjects(false);
        setReactNativeProjects(true);
    }
    const AllReactProjects = () => {
        setAllProjects(false);
        setMernProjects(false);
        setReactNativeProjects(false);
        setPythonProjects(false);
        setReactProjects(true)
    }
    const AllMernProjects = () => {
        setAllProjects(false);
        setReactNativeProjects(false);
        setReactProjects(false)
        setPythonProjects(false);
        setMernProjects(true);
    }
    return (
        <div className='bg-gradient-to-r from-violet-700 to-violet-500'>
            <Navbar />
            <p className='text-center mt-10 text-5xl font-semibold text-white'>PROJECTS</p>
            <p className='text-center text-2xl mb-10 text-white'>________</p>
            {/* Navigation for large screen  */}
            <div className=' px-2 md:px-10 hidden md:block'>
                <nav>
                    <ul className='flex justify-evenly font-semibold text-white'>
                        <li onClick={AllProjects}>
                            <Link className={`${allProjects ? 'bg-black' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>All</Link>
                        </li>
                        <li onClick={AllReactNativeProjects}>
                            <Link className={`${reactnativeProjects ? 'bg-black' : 'bg-none'}  transition ease-in-out delay-150 duration-700 px-4 py-2 `}>React Native</Link>
                        </li>
                        <li onClick={AllReactProjects}>
                            <Link className={`${reactProjects ? 'bg-black' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>React Js</Link>
                        </li>
                        <li onClick={AllMernProjects}>
                            <Link className={`${mernProjects ? 'bg-black' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>MERN Stack</Link>
                        </li>
                        <li onClick={AllPythonProjects}>
                            <Link className={`${pythonProjects ? 'bg-black' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>Python</Link>
                        </li>
                    </ul>
                </nav>
                <div>

                </div>
            </div>
            {/* Navigation for the screen md and after */}
            <div className=' block md:hidden'>
                <div className='flex flex-col mx-10 py-2  px-3 rounded-md  bg-white'>
                    <div className='flex items-center font-semibold justify-between px-3 cursor-pointer' onClick={toggleDropdown}>

                        {allProjects &&
                            <p>All</p>
                        }
                        {reactnativeProjects &&
                            <p>React Native</p>
                        }
                        {reactProjects &&
                            <p>React Js</p>
                        }
                        {mernProjects &&
                            <p>MERN Stack</p>
                        }
                        {pythonProjects &&
                            <p>Python</p>
                        }

                        <p><ion-icon className='cursor-pointer' name="chevron-down-outline"></ion-icon></p>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col font-semibold text-black gap-4 mt-2 '>
                            <li className='' onClick={() => {
                                AllProjects()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>All</Link>
                            </li>
                            <li onClick={() => {
                                AllReactNativeProjects()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>React Native</Link>
                            </li>
                            <li onClick={() => {
                                AllReactProjects()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>React Js</Link>
                            </li>
                            <li onClick={() => {
                                AllMernProjects()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>MERN Stack</Link>
                            </li>
                            <li onClick={() => {
                                AllPythonProjects()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>Python</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2   gap-4 my-10 px-2 md:px-10 ">
                {allProjects &&
                    data.map((e) => (
                        <div className='flex flex-col rounded-lg gap-3 p-5 '>
                            <img className="h-auto max-w-full rounded-lg" src={gimg} alt="" />
                            <p className='text-white px-2'>{e.name}</p>
                        </div>
                    ))
                }

                {reactProjects && (
                    data
                        .filter((item) => item.category === 'reactjs')
                        .map((e) => (
                            <div className='flex flex-col rounded-lg gap-3 p-5' key={e.id}>
                                <img className="h-auto max-w-full rounded-lg" src={gimg} alt="" />
                                <p className='text-white px-2'>{e.name}</p>
                            </div>
                        ))
                )}
                {reactnativeProjects &&
                    data
                        .filter((item) => item.category === 'reactnative')
                        .map((e) => (
                            <div className='flex flex-col rounded-lg gap-3 p-5' key={e.id}>
                                <img className="h-auto max-w-full rounded-lg" src={gimg} alt="" />
                                <p className='text-white px-2'>{e.name}</p>
                            </div>
                        ))
                }

                {mernProjects &&
                    data
                        .filter((item) => item.category === 'mern')
                        .map((e) => (
                            <div className='flex flex-col rounded-lg gap-3 p-5' key={e.id}>
                                <img className="h-auto max-w-full rounded-lg" src={gimg} alt="" />
                                <p className='text-white px-2'>{e.name}</p>
                            </div>
                        ))
                }

                {pythonProjects &&
                    data
                        .filter((item) => item.category === 'python')
                        .map((e) => (
                            <div className='flex flex-col rounded-lg gap-3 p-5' key={e.id}>
                                <img className="h-auto max-w-full rounded-lg" src={gimg} alt="" />
                                <p className='text-white px-2'>{e.name}</p>
                            </div>
                        ))
                }

            </div>

        </div >
    )
}

export default Project