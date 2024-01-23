import React from 'react'
import Navbar from './Navbar'

const Cart = () => {
  return (
<>
<Navbar/>
<div class=" h-screen py-8">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left text-black font-semibold">Product</th>
                                <th class="text-left text-black  font-semibold">Price</th>
                                <th class="text-left text-black  font-semibold">Quantity</th>
                                <th class="text-left text-black  font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-24 mr-4" src="https://via.placeholder.com/150" alt="Product image"/>
                                        <span class="font-semibold text-black ">Product name</span>
                                    </div>
                                </td>
                                <td class="py-4 text-black ">$19.99</td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2 text-black ">-</button>
                                        <span class="text-center w-8 text-black ">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2 text-black ">+</button>
                                    </div>
                                </td>
                                <td class="py-4 text-black ">$19.99</td>
                            </tr>
                            {/* <!-- More product rows --> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4 text-black ">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span className='text-black '>Subtotal</span>
                        <span className='text-black '>$19.99</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span className='text-black '>Taxes</span>
                        <span className='text-black '>$1.99</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span className='text-black '>Shipping</span>
                        <span className='text-black '>$0.00</span>
                    </div>
                    <hr class="my-2"/>
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold text-black ">Total</span>
                        <span class="font-semibold text-black "  >$21.98</span>
                    </div>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full ">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div></>
  )
}

export default Cart