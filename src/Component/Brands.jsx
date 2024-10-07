import React from 'react'
import useQueryApi from '../Hooks/useQueryApi'
import { getBrandApi } from '../API/getBrands'
import Loading from './Loading'

export default function Brands() {

        let {data, isLoading}= useQueryApi('getBrands',getBrandApi)

        if(isLoading)
                return <Loading></Loading>
              
  return (
    <>
    <h2 className='text-center font-bold text-5xl my-3 text-green-700'>All Brands</h2>
     <div className='row'>

    {data?.data.map(ele=> <div key={ele?._id} className='w-1/4 cursor-pointer product '>
        <div className="inner p-3">
        <img src={ele?.image} className='w-full' alt="" />
        <h2 className='text-center text-green-400'>{ele?.name}</h2>
        </div>

    </div>)}
    </div>  
    </>
   
  )
}


