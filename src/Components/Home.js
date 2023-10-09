import React from 'react'
import { Link } from 'react-router-dom';
import pImg from '../Images/Portfolio.png'
const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-5 text-white'>
      <img src={pImg} height={300} width={300} className='rounded-full' alt='Nothing to Show' />
      <p className='text-lg md:text-2xl max-w-lg text-center'>Hello, I am <span className='font-bold text-2xl md:text-3xl'>Muhammad Usman Khalil</span>. I am a Full Stack Developer</p>
      <Link to='/about' className='transition ease-in-out delay-150 duration-700 flex justify-center items-center px-4 md:px-8 py-2 md:py-4 text-lg md:text-3xl border border-solid border-white hover:text-white hover:bg-[#05BDC5]  '>
        View My work
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </div>
  )
}

export default Home