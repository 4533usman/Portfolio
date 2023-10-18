import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';

const Project = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // console.log(modelData)

    }, [])
    const data = [
        {
            id: 1,
            name: "Blog App",
            category: 'reactjs',
            description: "Blog App In Mern Stack. You can create your account on this App and login for the next time. You can also add your blog and read other blogs. You can also write comments on others Blogs. And also reacts on other blogs. You can recover your password through recovery email. You can also change your password while logged in.",
            link: "https://github.com/4533usman/BlogApp_MERN-Stack"
        },
        {
            d: 2,
            name: "News App",
            category: 'reactjs',
            description: "Fetch News Articles from the Google News Api. Here is Different category of news you can apply the filter to find specific articles. For example technologies, sports, events, policies etc.",
            link: "https://github.com/4533usman/News"
        },
        {
            id: 3,
            name: "Notes App",
            category: 'reactjs',
            description: "You can creata an account on notes web application. You can again login with credentials.You can add notes create and update your notes. You can also delete notes",
            link: "https://github.com/4533usman/MERN-STACK"
        },
        {
            id: 4,
            name: "TextUtility App",
            category: 'react',
            description: "This is a text analyzer Web application. You can type text inside text box. Below the box you can see different button. Such as remove extra spaces, uppercase convert, lowercase convert, copy to clipboard, delete etc.",
            link: "https://github.com/4533usman/Text-Utils"
        },
        {
            id: 5,
            name: "Online Store Apis",
            category: 'nodejs',
            description: "Here is E-Comerece Store API. For creating new products and user. A User can create an account on this store and then after log In and recover password",
            link: "https://github.com/4533usman/E-Commerece-APIS"
        },
        {
            id: 6,
            name: "Library Management System",
            category: 'nodejs',
            description: "Student Library Management System Api. An admin can add students to a library management system. And issues differrent book to them. if they did not return book with in due time. They got finned",
            link: "https://github.com/4533usman/E-Commerece-APIS"
        },
        {
            id: 7,
            name: "TextUtil",
            category: 'reactnative',
            description: "This is the android app similar to the web text analysis app. You can convert your text into uppercase and lowercase. You can also remove extra spaces from the text.",
            link: "https://github.com/4533usman/TextUtilApp"
        },
        {
            id: 8,
            name: "To Do App",
            category: 'reactnative',
            description: "To Do App in react native. You can add different task you have to do on current day. Ann remove them from the the to do after done this task.",
            link: "https://github.com/4533usman/Todoapp"
        },
        {
            id: 9,
            name: "Travel App",
            category: 'reactnative',
            description: "This is the traval app which is build using the google API. You can search differnt hotels during travelling and book an appiontment online",
            link: "https://github.com/4533usman/TravelApp-ReactNative"
        },
    ]
    const toggleDropdown = () => {
        setIsOpen(isOpen ? false : true);
        console.log(isOpen)
    }

    const [allProjects, setAllProjects] = useState(true);
    const [reactProjects, setReactProjects] = useState(false);
    const [reactnativeProjects, setReactNativeProjects] = useState(false);
    const [mernProjects, setMernProjects] = useState(false);
    const AllProjects = () => {
        setMernProjects(false);
        setReactNativeProjects(false);
        setReactProjects(false)
        setAllProjects(true);
    }
    const AllReactNativeProjects = () => {
        setAllProjects(false);
        setMernProjects(false);
        setReactProjects(false)
        setReactNativeProjects(true);
    }
    const AllReactProjects = () => {
        setAllProjects(false);
        setMernProjects(false);
        setReactNativeProjects(false);
        setReactProjects(true)
    }
    const Nodejs = () => {
        setAllProjects(false);
        setReactNativeProjects(false);
        setReactProjects(false)
        setMernProjects(true);
    }
    return (

        <div className=''>
            <Navbar />
            <p className='text-center mt-10 text-5xl font-semibold text-[#7ED957]'>PROJECTS</p>
            <p className='text-center text-2xl mb-10 text-[#7ED957]'>________</p>
            {/* Navigation for large screen  */}
            <div className=' px-2 md:px-10 hidden md:block'>
                <nav>
                    <ul className='flex justify-evenly font-semibold text-[black]'>
                        <li onClick={AllProjects}>
                            <Link className={`${allProjects ? 'bg-[#7ED957]' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>All</Link>
                        </li>
                        <li onClick={AllReactNativeProjects}>
                            <Link className={`${reactnativeProjects ? 'bg-[#7ED957]' : 'bg-none'}  transition ease-in-out delay-150 duration-700 px-4 py-2 `}>React Native</Link>
                        </li>
                        <li onClick={AllReactProjects}>
                            <Link className={`${reactProjects ? 'bg-[#7ED957]' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>React Js</Link>
                        </li>
                        <li onClick={Nodejs}>
                            <Link className={`${mernProjects ? 'bg-[#7ED957]' : 'bg-none'} transition ease-in-out delay-150 duration-700 px-4 py-2 `}>Node Js</Link>
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
                            <p>Node Js</p>
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
                                Nodejs()
                                toggleDropdown()
                            }}>
                                <Link className='transition ease-in-out delay-150 duration-700 px-4 py-2'>Node Js</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2   gap-4 my-10 px-2 md:px-10 ">
                {allProjects &&
                    data.map((e) => (

                        <div className='flex flex-col gap-4 items-start shadow-xl px-2 py-3 hover:shadow-inner '>
                            <h className="font-bold">{e.name}</h>
                            <p className='text-justify'>{e.description}</p>
                            <Link to={e.link} target='_blank' className='bg-[#7ED957] text-white px-3 py-2 rounded-md '>Read More ....</Link>
                        </div>

                    ))
                }

                {reactProjects && (
                    data
                        .filter((item) => item.category === 'reactjs')
                        .map((e) => (

                            <div className='flex flex-col gap-4 items-start shadow-xl px-2 py-3 hover:shadow-inner '>
                            <h className="font-bold">{e.name}</h>
                            <p className='text-justify'>{e.description}</p>
                            <Link to={e.link} target='_blank' className='bg-[#7ED957] text-white px-3 py-2 rounded-md '>Read More ....</Link>
                        </div>

                        ))
                )}
                {reactnativeProjects &&
                    data
                        .filter((item) => item.category === 'reactnative')
                        .map((e) => (

                            <div className='flex flex-col gap-4 items-start shadow-xl px-2 py-3 hover:shadow-inner '>
                            <h className="font-bold">{e.name}</h>
                            <p className='text-justify'>{e.description}</p>
                            <Link to={e.link} target='_blank' className='bg-[#7ED957] text-white px-3 py-2 rounded-md '>Read More ....</Link>
                        </div>

                        ))
                }

                {mernProjects &&
                    data
                        .filter((item) => item.category === 'nodejs')
                        .map((e) => (

                            <div className='flex flex-col gap-4 items-start shadow-xl px-2 py-3 hover:shadow-inner '>
                            <h className="font-bold">{e.name}</h>
                            <p className='text-justify'>{e.description}</p>
                            <Link to={e.link} target='_blank' className='bg-[#7ED957] text-white px-3 py-2 rounded-md '>Read More ....</Link>
                        </div>

                        ))
                }

            </div>
            <FooterLinks />
        </div >

    )
}

export default Project