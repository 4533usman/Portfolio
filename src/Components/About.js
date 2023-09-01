import React from 'react'
import Navbar from './Navbar'
import PortfolioImage from '../Images/Portfolio.png'
import Footer from './Footer'

const About = () => {
    return (
        // <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 w-full'>
        <div className='bg-gradient-to-r from-slate-900 to-slate-800'>
            <Navbar />
            <p className='text-center mt-10 text-5xl font-semibold text-white'>ABOUT</p>
            <p className='text-center text-2xl mb-10 text-white'>________</p>
            <div>
                <div className='flex px-2 md:px-10 justify-evenly   items-center mb-10 flex-col md:flex-row gap-4 md:gap-0 text-center text-white'>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className='transition ease-in-out delay-150 duration-700 sh-40 w-40 text-9xl flex flex-col justify-center items-center text-white hover:text-[#05BDC5] p-5'>
                            <ion-icon name="speedometer-outline"></ion-icon>
                        </div>
                        <p className='w-60'>Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className='transition ease-in-out delay-150 duration-700 h-40 w-40 text-9xl flex flex-col justify-center items-center text-white p-5 hover:text-[#05BDC5]'>
                            <ion-icon name="tablet-landscape-outline"></ion-icon>
                        </div>
                        <p className='w-60'>My layouts will work on any device, big or small.</p>
                    </div>
                    <div className='  flex flex-col justify-center items-center'>
                        <div className='transition ease-in-out delay-150 duration-700 h-40 w-40 text-9xl flex flex-col justify-center items-center text-white p-5 hover:text-[#05BDC5]'>
                            <ion-icon name="bulb-outline"></ion-icon>
                        </div>
                        <p className='w-60'>Strong preference for easy to use, intuitive UX/UI.
                        </p>
                    </div>
                    <div className='  flex flex-col justify-center items-center'>
                        <div className=' transition ease-in-out delay-150 duration-700 h-40 w-40 text-9xl flex flex-col justify-center items-center text-white p-5 hover:text-[#05BDC5]'>
                            <ion-icon name="rocket-outline"></ion-icon>
                        </div>
                        <p className='w-60'>Websites don't have to be static, I love making pages come to life.
                        </p>
                    </div>
                </div>
                <div className='flex px-2 md:px-10 gap-5 justify-center items-center md:flex-row flex-col mb-10'>
                    <img src={PortfolioImage} alt='Image Not Found' height={300} width={300} className='rounded-full ' />
                    <div className='flex flex-col gap-4'>
                        <p className=' text-2xl font-semibold text-white'>Who's this Guy?</p>
                        <p className='text-white text-justify'>
                            Hi, I am Muhammad Usman Khalil graduated in Software Engineering from Government College University Faisalabad.
                            Within four years of my university career, I have done different semester-level projects which include blinds stick, LMS(Library Management System), and PaCMan Game.
                            I have knowledge of HTML, CSS, and JavaScript. I developed many web apps using frameworks like react js, expressJs, and MongoDB as a database. I am familiar with CSS libraries and frameworks such as Bootstrap, MUI, tailwindcss etc. I also have experience in hybrid app development. I developed apps Using React Native for both Android and IOS.
                            As a junior software engineer, I have coding experience in JAVA. I am familiar with and have practical experience in DSA and OOPs. I can solve real-world problems via my DSA and OOPs skills., I'm eager to apply my skills to real-world projects. My passion for creating high-quality products that positively impact businesses and their customers drives me to continually learn and stay up-to-date with the latest technologies and industry trends.
                            If you are looking for a passionate software engineer who can solve real-world problems and develops quality products for customers. Then I am excited to connect and discuss opportunities with you
                        </p>
                    </div>
                </div>

            </div>
            <p className='text-center mt-10 text-3xl font-semibold text-white'>MY SkILLS</p>
            <p className='text-center text-xl mb-10 text-white'>________</p>
            <div className='flex flex-col md:flex-row px-2 md:px-10 gap-0 md:gap-5'>
                <div className='grow'>
                    <div>
                        <p className='font-semibold text-white my-2'>HTML</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>CSS</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>Bootstrap</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>MUI</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>Tailwind CSS</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grow'>

                    <div>
                        <p className='font-semibold text-white my-2'>JavaScript</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>React Js</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>React Native</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>Node Js</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white my-2'>MongoDB</p>
                        <div class=" bg-neutral-200 dark:bg-neutral-600 ">
                            <div
                                class=" bg-[#05BDC5] text-center text-white text-xs font-medium leading-none text-primary-100"
                                style={{ width: "99%" }}>
                                99%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About