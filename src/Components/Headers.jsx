import React, { useState } from 'react'
import { Link } from "react-router-dom"
import LOGO from "../assets/LOGO.png"
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


function Headers() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = ()=>{
    setShowMenu(preve => !preve)
  }
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 py-1 z-50 bg-white'>
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className='h-12'>
            <img src={LOGO} className='h-full' />
          </div>
        </Link>


        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-10 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>``
          </nav>

          <div className='text-3xl text-slate-600 relative'>
            <FaShoppingCart />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0  text-sm text-center ">
              0
            </div>
          </div>

          <div className=' text-slate-600 'onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer" >
              <FaCircleUser />
            </div>
            {
              showMenu && <div className="absolute right-2 py-2 px-2 bg-white shadow drop-shadow-md flex flex-col">
                <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer'>New Product</Link>
                <Link to={"login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
                <p className='whitespace-nowrap cursor-pointer'>Logout</p>
              </div>
            }

          </div>

        </div>
      </div>
    </header>
  )
}

export default Headers