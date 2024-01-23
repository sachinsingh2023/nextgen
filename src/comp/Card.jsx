import React from 'react'
import { useState } from 'react';

const Card = ({title,price,oldprice,image}) => {

    return (
        <>
            <div style={{ height: "340px"}} className="card border m-2  rounded overflow-hidden shadow-md bg-grey-600">
                <img src={image} alt="Product Image" className="w-full h-44" />
                <div className="card-content p-4">
                    <div className="card-title text-lg font-bold mb-2 overflow-ellipsis overflow-hidden h-5">{title}</div>
                    <div className="card-review mb-1">★★★★☆</div>
                  <div className="price flex">
                  <div className="price text-green-500 text-lg mb-1"><i class="fa-solid fa-indian-rupee-sign"></i>{price}</div>
                    <div className="old-price ml-5 mt-1 text-gray-700 text-sm mb-2" style={{textDecorationLine:"line-through"}}><i class="fa-solid fa-indian-rupee-sign"></i>{oldprice}</div>
                  </div>
                    <div className="flex justify-between">
                        <button className="button border text-white px-4 py-2 rounded hover:bg-green-600" >
                            Add to Cart
                        </button>
                        <button className="button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
                            Buy Now
                        </button>
                    </div>

                </div>
            </div></>
    )
}

export default Card