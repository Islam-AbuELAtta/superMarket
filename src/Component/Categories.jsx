import React from 'react'
import useQueryApi from '../Hooks/useQueryApi'
import { getCategories } from '../API/GetingCategories'
import Slider from 'react-slick';
import Loading from './Loading';

export default function Categories() {
  
        let {data, isLoading} = useQueryApi('getCategory', getCategories)

                
                var settings = {
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 7,
                  slidesToScroll: 8,
                  arrows:false
                };

                if(isLoading)
                  return <Loading></Loading>  
  return (
      <div className="mt-5 row">
              
                {data?.data.map(ele => <div key={ele?._id} className='w-1/3 product cursor-pointer'>
                    <div className="inner p-4 ">
                    <img src={ele?.image} className='mx-auto w-full h-[250px] ' style={{objectFit:'cover'}}  alt="" />
                    <h2 className='text-center md:font-bold md:text-2xl bg-gray-200 py-2'>{ele?.name} </h2>
                
                    </div>
                  </div> )}
          
      </div>
  )
}
