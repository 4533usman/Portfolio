import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
    return (
        <div className=' bg-slate-900'>
            <Navbar />
            <div className=' px-2 md:px-10  h-screen flex justify-center items-center flex-col gap-6'>
                <div>
                    <p className='text-center text-5xl font-semibold text-white'>CONTACT</p>
                    <p className='text-center text-2xl mb-5 text-white'>___________</p>
                    <p className='text-center my-3 font-semibold text-[#05BDC5]'>Have A Question? Or want to work together</p>
                </div>
                <div>
                    <form className='flex flex-col gap-2 w-96 m-auto'>
                        <input placeholder='Name' type="text" className="bg-slate-600 px-2 py-1 rounded-sm" />
                        <input placeholder='E-mail' type="text" className="bg-slate-600 px-2 py-1 rounded-sm" />
                        <textarea placeholder='Your Message' type="text" className="bg-slate-600 px-2 py-1 rounded-sm" />
                    </form>
                </div>
                <div>
                    <div className='flex w-96 m-auto justify-end'>
                        <button className='transition ease-in-out delay-150 duration-700 flex justify-center items-center border border-solid border-white text-white hover:bg-[#05BDC5] px-6 py-2 hover:border-[#05BDC5] font-semibold'>Submit</button>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <div className='w-96 flex justify-between m-auto text-3xl text-white'>
                            <div className=' hover:text-[#05BDC5]'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                            <div className=' hover:text-[#05BDC5]'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                            <div className=' hover:text-[#05BDC5]'>
                                <ion-icon name="logo-github"></ion-icon>
                            </div>
                            <div className=' hover:text-[#05BDC5]'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer