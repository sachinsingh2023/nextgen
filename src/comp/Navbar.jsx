import React from 'react'
import cartegory from "../img/four-rounded-squares-button.png"
import { Link } from 'react-router-dom'
import logo from "../img/logo.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar flex w-full p-3">
        <div className="logo-c w-4/12">
          <Link ><img src={logo} className='w-26 h-14' alt="" /></Link>
        </div>
        <form action="" className='w-5/12 flex'>
          <input type="text" className='w-4/5 border h-10 rounded' placeholder='serch here' />
          <button className='border px-2  rounded text-lg h-10' >search</button>
        </form>
        <div className="user flex text-3xl w-3/12 relative">
          <Link><i class="fa-regular fa-heart ml-12 mt-2 "></i></Link>
          <Link><i class="fa-solid fa-cart-shopping ml-5 mt-2 "></i></Link>
          <Link><i class="fa-solid fa-user absolute right-12 mt-2"></i></Link>

        </div>
      </div>
      <div className="undernav h-10 flex">
        

          <div className="mobile-menu border-white w-1/12 flex">
            <Link className=''><img src={cartegory} className='h-6 ml-8 mt-2' alt="" /></Link>
            <div className="hr h-12 bg-white ml-5" style={{ width: "2px" }}></div>
          </div>
          <div className="menu-tab w-11/12 p-2 flex text-center flex-wrap">
            <Link className='pl-4 '><h1 >Home</h1></Link>
            <Link className='pl-4 '><h1>Mobile phone</h1></Link>
            <Link className='pl-4 '><h1>Hadphone & earphone</h1></Link>
            <Link className='pl-4 '><h1>Mobile Accersrise</h1> </Link>
            <Link className='pl-4 '><h1>laptop</h1></Link>
            <Link className='pl-4 '><h1>printer</h1></Link>
            <Link className='pl-4 '><h1>Storage Devices</h1></Link>
            <Link className='pl-4 '><h1>All computer accerioes</h1></Link>
            <Link className='pl-4 '><h1 className='w-32'>Home appliances</h1></Link>
          </div>
      
      </div>
    </>
  )
}

export default Navbar