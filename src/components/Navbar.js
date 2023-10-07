import React, {useState} from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`${menuOpen ? 'open' : ''} flex flex-row flex-wrap justify-center items-center min-h-fit w-screen bg-transparent fixed top-0`}>

            <div onClick={toggleMenu}>
                <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'} flex-none w-40 shrink-0 text-center text-3xl text-white
                    bg-gradient-to-r via-red-700 from-blue-800  rounded-t-full rounded-b-full cursor-pointer`}></i>
                    {menuOpen && (
                            <ul className="table-of-contents">
                                <li>About</li>
                                <li>Events</li>
                                <li>Calendar</li>
                                <li>Contacts</li>
                            </ul>
                    )}        
            </div>

            <div className="logo flex-1 w-auto  shrink-0 basis-1/5 flex justify-center">
                <img src={logo} alt="Logo" className="h-36 object-contain rounded-full" />
            </div>

            <button className="h-9 w-40 p-0.5 text-md text-white bg-gradient-to-l via-red-700 from-blue-800 rounded-t-full rounded-b-full">
                SignUp/ LogIn
            </button>

        </div>
    );

}

export default Navbar
