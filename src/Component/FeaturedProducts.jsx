import React, { useEffect } from 'react'
import useQueryApi from '../Hooks/useQueryApi'
import { getFeaturedProduct } from '../API/FeaturedProductApi';
import Item from './Item';
import Loading from './Loading';

export default function FeaturedProducts() {


    

      let {data, isLoading} = useQueryApi('featuredProduct', getFeaturedProduct)
      
        if(isLoading)
            return <Loading></Loading>        
                            
  return (
    <div className='row mt-5'>
         {data?.data.map(ele=> <Item prod={ele} key={ele?._id}></Item>)} 
    </div>
  )
}
