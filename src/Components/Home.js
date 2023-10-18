import React from 'react'
import pImg from '../Images/Portfolio.jpg'
import Navbar from './Navbar';
import FooterLinks from './FooterLinks';
const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-between gap-1'>
      <Navbar />
      <div className='flex md:flex-row flex-col gap-10 m-auto items-center'>
        <div className='flex flex-col gap-3 justify-evenly'>
          <div className='flex gap-5 items-center'>
            <span className=' font-extrabold text-2xl text-[#000]'>Hi! THERE</span>
            <span className='font-extrabold text-1xl bg-[#7ED957] p-2 text-white rounded-md font-serif'>Software Developer</span>
          </div>
          <div><p className='font-bold text-4xl max-w-sm  text-[#7ED957] animate-bounce'>I'm Muhammad Usman Khalil</p></div>
          <div><p className='max-w-sm text-lg text-[#000] font-semibold'>Full Stack MERN Stack Developer. Three Star Problem Solver on HackeRank</p></div>
        </div>
        <div>
          <img src={pImg} height={300} width={300} className='rounded-md' alt='..' />
        </div>
      </div>
      {/* <div className='flex justify-center items-center md:flex-row flex-col   gap-5 text-[#7ED957]'>
        <img src={pImg} height={300} width={300} className='rounded-md ' alt='Nothing to Show' />
        <div>
          <p className='text-lg md:text-2xl max-w-lg text-center font-semibold'>Hello, I am <span className='font-bold text-2xl md:text-3xl animate-ping'>Muhammad Usman Khalil</span>. I am a Full Stack (MERN) Developer</p>
          <Link to='/about' className='flex justify-center items-center px-4 md:px-8 py-2 md:py-4 text-lg md:text-3xl border border-none  bg-[#7ED957] text-white  animate-pulse font-semibold m-10'>
            View My work
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
      </div> */}
      <FooterLinks />
    </div>
  )
}

export default Home