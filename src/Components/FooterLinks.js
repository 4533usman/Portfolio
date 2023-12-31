import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = () => {
    return (
        <div className=' px-2 md:px-10 py-10 bg-[#7ED957] rounded-t-3xl mt-2'>
            <div className='w-96 flex justify-evenly m-auto text-3xl text-white'>
                <div className='  transition ease-in-out delay-150 duration-700 cursor-pointer'>
                    <Link to='https://www.facebook.com/musman.khalil.7/' target='_blank'>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>
                </div>
                <div className='  transition ease-in-out delay-150 duration-700 cursor-pointer'>
                    <Link to="https://www.linkedin.com/in/usmankhalil4533/" target='_blank'>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                </div>
                <div className=' transition ease-in-out delay-150 duration-700 cursor-pointer'>
                    <Link to="https://github.com/4533usman" target='_blank'>
                        <ion-icon name="logo-github"></ion-icon>
                    </Link>
                </div>
                {/* <div className=' hover:text-[#05BDC5] transition ease-in-out delay-150 duration-700 cursor-pointer'>
                    <Link to="">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default FooterLinks