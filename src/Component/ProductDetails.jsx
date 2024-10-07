import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSpecifiProduct } from '../API/FeaturedProductApi'
import Loading from './Loading'
import Slider from 'react-slick'
import useMutationApi from '../Hooks/useMutationApi'
import { addToCart } from '../API/cartApi'
import { toast } from 'react-toastify'

export default function ProductDetails() {
  let [loading, setLoading] = useState(false)
  let [msg, setMsg] = useState('')
  let [product, setproduct] = useState([])
  let [slider, setSlider] = useState([])
  let { id } = useParams()


  async function getSpecifiDetails() {
    try {
      setLoading(true)
      let { data } = await getSpecifiProduct(id)
      setproduct(data?.data)
      setSlider(data?.data?.images)

      setLoading(false)
      setMsg('')
    } catch (error) {
      setMsg(error?.response?.data?.message)
      setLoading(false)

    }
  }

  let{mutate:addingItem, data, status, error}  = useMutationApi(addToCart)
  if (status=='success')
        {
           toast.success(data?.data?.message, );
        }


  useEffect(() => {
    getSpecifiDetails()
  }, [id])

  if(loading)
    return <Loading></Loading>   

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className='container'>
      <div className="flex justify-between items-center mt-5 p-3">
        <div className="w-1/3">

        <Slider {...settings}> 

          {slider?.map(ele=>  <img src={ele} key={product?._id} className='w-[200px]' alt="" /> )}
        </Slider>
        </div>
        <div className="w-2/3">
          <div className="inner p-5 ms-5">
          <h2 className='text-green-600 text-2xl font-bold'>{product?.title}</h2>
          <h2 className='line-clamp-1 text-xl'>{product?.description}</h2>
          <div className="price rate flex justify-between text-xl my-2">
            <p>{product?.price} EGP</p>
            <p>{product?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i> </p>
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={()=>{addingItem(product?._id)}} className='text-center w-[50%] mx-auto btn bg-green-400 text-white btn p-2 rounded'>Add Product</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
