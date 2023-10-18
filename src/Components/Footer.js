import React from 'react'
import Navbar from './Navbar'
import FooterLinks from './FooterLinks'

const Footer = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' px-2 md:px-10  h-screen flex justify-center items-center flex-col gap-3'>
                <div>
                    <p className='text-center text-5xl font-semibold text-[#7ED957]'>CONTACT</p>
                    <p className='text-center text-2xl mb-5 text-[#7ED957]'>___________</p>
                </div>
                
                <div>
                    <p className='text-center my-3 font-semibold text-[#7ED957]'>Have A Question? Or want to work together</p>
                    <form className='flex flex-col gap-2 w-96 m-auto'>
                        <input placeholder='Name' type="text" className=" border-2 border-[#7ED957] px-2 py-1 rounded-sm" />
                        <input placeholder='E-mail' type="text" className="border-2 border-[#7ED957] px-2 py-1 rounded-sm" />
                        <textarea placeholder='Your Message' type="text" className="border-2 border-[#7ED957] px-2 py-1 rounded-sm" />
                    </form>
                </div>
                <div>
                    <div className='flex w-96 m-auto justify-end'>
                        <button className='transition ease-in-out delay-150 duration-700 flex justify-center items-center border border-solid border-[#7ED957] text-[#7ED957] hover:bg-[#7ED957] hover:text-[white] px-6 py-2 hover:border-[#7ED957] font-semibold'>Submit</button>
                    </div>
                </div>
        
            </div>
            <FooterLinks />
        </div>
    )
}

export default Footer