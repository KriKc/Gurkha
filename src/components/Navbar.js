import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center min-h-fit w-screen bg-transparent fixed top-0  '>
             <i className=" flex-none fa fa-bars w-40 shrink-0 text-center text-3xl text-white opacity-35 bg-gradient-to-r via-blue-900 from-red-700 border-radius-20  rounded-t-full rounded-b-full "></i>
            {/* <h3 className='w-1/3 basis-1/3 text-3xl font-bold text-red-800' >logo</h3> */}
            <div className=' flex-1 w-auto  shrink-0 basis-1/5 flex justify-center'>
                <img src={logo} alt="Logo" className='h-36 object-contain rounded-full ' />
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center w-60'>
                <ul>
                    <li className='text-md p-1 text-white  bg-gradient-to-r via-blue-900 from-red-700 rounded-t-full rounded-b-full' >Sign up or log in </li>
                </ul>
            </div>
             
        </div>
    )
}

export default Navbar
