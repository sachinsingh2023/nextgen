import React from 'react'
import cartegory from "../img/four-rounded-squares-button.png"
import { Link } from 'react-router-dom'
import logo from "../img/logo.png"
import fillter from "../img/setting.png"

const Navbar = () => {
  return (
    <>
      <div className="nav z-100 overflow-hidden sticky  z-10 bg-black top-0 pb-2">
        <div className="navbar flex  w-full p-3">
          <div className="logo-c w-4/12">
            <Link to={"/"} ><img src={logo} className='w-26 h-14' alt="" /></Link>
          </div>
          <form action="" className='w-5/12 flex '>
            <input type="text" className='w-4/5 max-[768px]:hidden text-black border h-10 rounded' placeholder='serch here' />
            <button className='border px-2 max-[768px]:hidden  rounded text-lg h-10' >search</button>
          </form>
          <div className="user flex max-[768px]:text-md text-3xl w-3/12 relative">
            <Link><i class="fa-regular fa-heart ml-12 mt-2 max-[768px]:hidden "></i></Link>
            <Link to={"/cart"}><i class="fa-solid fa-cart-shopping ml-5 mt-2 "></i></Link>
            <Link to={"/Login"} ><i class="fa-solid fa-user  mt-2 ml-5"></i></Link>

          </div>
        </div>
        <div className="undernav h-auto flex">


          <div className="ile-menu border-white w-1/12 flex ">
            <Link className='' id="open-sidebar"><img src={cartegory} className='h-6 ml-8 mt-2 max-[600px]:ml-2' alt="" /></Link>
            <div className="hr h-9 bg-white left-3 top-1 relative" style={{ width: "2px" }}></div>
          </div>
          <div className="menu-tab w-10/12 p-2 flex max-[768px]:hidden text-center flex-wrap relative">
            <Link className='pl-4 max-[768px]:hidden'><h1 className='text-cyan-400'>Home</h1>
            
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>mobile phone</h1>
            <div className="home-c hidden">
              <ul>
                <li>iphone</li>
                <li>realme</li>
                <li>vivo</li>
                <li>Samsung</li>
                <li></li></ul></div></Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>Hadphone & earphone</h1>
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>ile Accersrise</h1> 
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>laptop</h1>
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>printer</h1>
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>Storage Devices</h1>    </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1>All computer accerioes</h1>   
            </Link>
            <Link className='pl-4 max-[768px]:hidden '><h1 className='w-32 '>Home appliances</h1>
               </Link>
          </div>
          <form action="" className='w-10/12 flex justify-center mt-1 min-[768px]:hidden'>
            <input type="text" className='w-3/5 text-black border h-9 rounded' placeholder='serch here' />
            <button className='border px-2  rounded text-lg h-9' >search</button>
          </form>
          <div className="fillter w-1/12 max-[768px]:mr-5">
            <Link><img src={fillter} className='h-7 mt-1' alt="" /></Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar