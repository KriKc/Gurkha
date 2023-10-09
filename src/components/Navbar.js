
import logo from '../assets/logo.png'

function Navbar() {
   


    return (
        <div className={` flex flex-row flex-nowrap justify-between items-center min-h-fit w-screen bg-slate-200 fixed `}>

            <div className="logo  w-1/6  flex  justify-center">
                <img src={logo} alt="Logo" className="h-36 object-contain rounded-full" />
            </div>

            <div className='w-3/6 mr-5' >
               
                            <ul className=" nav flex flex-row justify-around w-full  text-white bg-gradient-to-r from-red-600 to-blue-900 rounded-t-full rounded-b-full">
                                <li>About</li>
                                <li>Events</li>
                                <li>Calendar</li>
                                <li>Gallery</li>
                                <li>SignUp/LogIn</li>
                            </ul>
                         
            </div>

            

            

        </div>
    );

}

export default Navbar
