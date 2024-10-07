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
      <div className="mt-5">
              <Slider {...settings}>
                {data?.data.map(ele => <div key={ele?._id}>
                  <img src={ele?.image} className=' h-[250px] ' style={{objectFit:'cover'}}  alt="" />
                    <h2 className='text-center md:font-bold md:text-2xl'>{ele?.name} </h2>
                </div> )}
              </Slider>
      </div>
  )
}
