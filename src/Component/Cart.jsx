import React from 'react'
import useMutationApi from '../Hooks/useMutationApi'
import { ClrCart, delProduct, getCustomerApi, UpProduct } from '../API/cartApi'
import useQueryApi from '../Hooks/useQueryApi'
import cartImage from '../assets/cartImg.png'
import Loading from './Loading'
export default function Cart() {

  let { data, isLoading } = useQueryApi('cstCart', getCustomerApi)

  let { mutate:delMutate, isLoading: delLoading } = useMutationApi(delProduct)
  let { mutate:upMutate } = useMutationApi(UpProduct)
  let { mutate:clearMutate, status } = useMutationApi(ClrCart)

                        





  if (delLoading)
    return <Loading></Loading>

  if (isLoading)
    return <Loading></Loading>


  return (
    <>

      {data?.numOfCartItems ? <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <div className="content flex justify-between">
            <div className="Cart-amount flex flex-col p-4">
              <h2 className='font-bold text-4xl'>Cart Shop</h2>
              <p className='mt-4 text-2xl text-green-600'>total price : <span className='text-black'>{data?.data?.totalCartPrice} EGP</span> </p>
            </div>
            <div className="payment-box p-4 flex flex-col justify-center items-center">
              <button className='btn bg-green-200 hover:bg-green-800 hover:text-white px-5 py-4 rounded'>Check Out</button>
              <p className='mt-4 text-2xl text-green-600'>total number of items:<span className='text-black'> {data?.numOfCartItems} </span> </p>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <tbody>
              {data?.data?.products.map(ele => <tr key={ele?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className=" flex justify-center items-center ">
                  <img src={ele?.product?.imageCover} className="w-64" style={{objectFit:'fill'}} t:alt="Apple Watch" />
                </td>
                <td className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                  <p className='text-2xl'>{ele?.product?.title}</p>
                  <p className='text-2xl font-normal my-2'> {ele?.price} EGP</p>
                  <div onClick={()=> { delMutate(ele?.product?._id) }} className="inner flex items-center cursor-pointer">
                    <i className='fas fa-trash text-red-600 me-1'></i>
                    <p className="font-medium text-red-600 dark:text-red-500"> Remove</p>
                  </div>


                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <button  onClick={()=>{(ele?.count ==1)? delMutate(ele?.product?._id) : upMutate({productID:ele.product?._id , count:ele.count-1}) }}  className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                      </svg>
                    </button>
                    <div>
                      <p className='text-2xl'>{ele?.count} </p>

                    </div>
                    <button onClick={()=>{upMutate({productID:ele.product?._id , count:ele.count+1})}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </td>
   

              </tr>)}
            </tbody>
          </table>
        </div> 
                <div className="clearButton flex justify-center items-center mt-3">
                <button onClick={clearMutate } className='text--center max-auto px-10 hover:bg-green-400 hover:text-black py-3 bg-green-600 rounded text-white '>Clear Cart</button>
                </div>
        </> :
        <>
          <div className='flex justify-center flex-col items-center'>
            <h2 className='text-2xl font-bold'> Your Cart Is Empty</h2>
            <img src={cartImage} className='w-50' alt="" />
          </div>
        </>}



    </>
  )
}




