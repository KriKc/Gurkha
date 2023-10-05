import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className='flex flex-wrap items-center justify-center text-center h-24 w-screen bg-green-500 sticky top-0  '>
             
            <h3 className='w-1/3 basis-1/3 text-3xl font-bold text-white' >logo</h3>
            <div className='object-cover basis-1/3 flex justify-center'>
                <img src={logo} alt="Logo" className='max-h-24 rounded-full' />
            </div>
             <h3 className='w-1/3 basis-1/3 text-3xl text-3xl text-white' >mystery</h3>
        </div>
    )
}

export default Navbar
