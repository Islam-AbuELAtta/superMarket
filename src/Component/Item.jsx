import React from 'react'
import { Link } from 'react-router-dom';
import useMutationApi from '../Hooks/useMutationApi';
import { addToCart } from '../API/cartApi';
import { toast } from 'react-toastify';

export default function Item({ prod }) {        

    let{mutate:addingItem, data, status, error}  = useMutationApi(addToCart)
           if (status=='success')
                 {
                     toast.success(data?.data?.message, );
                 }
   
            
                
    return (
        <div className="w-1/4 product py-3">
            <Link   to={`/productdetails/${prod?._id}`}>
                <div className="inner p-3 cursor-pointer ">
                    <img className='w-full rounded' src={prod?.imageCover} alt="" />
                    <h2 className='line-clamp-1'> {prod?.title}</h2>
                    <p className='text-green-800 font-bold'>{prod?.category?.name}</p>
                    <div className='flex justify-between'>
                        <p>{prod?.price} EGP</p>
                        <p>{prod?.ratingsAverage} <i className='fas fa-star text-yellow-500'></i></p>
                    </div>
                </div>
            </Link>
            <div className='flex justify-center items-center'>
                <button onClick={()=>{addingItem(prod?._id) }}   className='text-center bg-green-700 text-white btn p-2 rounded'>Add Product</button>
            </div>
        </div>
    )
}
