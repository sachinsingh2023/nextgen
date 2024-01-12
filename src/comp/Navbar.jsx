import React from 'react'
import cartegory from "../img/thumbnails.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
<div className="navbar flex w-full p-3">
   <h1 className='text-2xl w-4/12'>Nextgen</h1>
    <form action="" className='w-5/12 flex'>
        <input type="text"className='w-4/5 border h-10 rounded'  placeholder='serch here' />
        <button className='border px-2  rounded text-lg h-10' >search</button>
    </form>
    <div className="user flex text-2xl">
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-user"></i>
     
    </div>
</div>
<div className="undernav h-10 border">
<div className="categy">
<Link className=''><img src={cartegory} className='h-6 ml-8 mt-2' alt="" /></Link>
<hr className='w-1 h-full'/>
</div>
</div>
  </>
  )
}

export default Navbar