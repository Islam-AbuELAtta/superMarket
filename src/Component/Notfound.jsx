import React from 'react'
import imgNotFound from '../assets/NotFound.png'

export default function Notfound() {
  return (
    < div className='container text-center'>
          <h2 className='text-center font-bold text-2xl text-green-600 mb-3'>Page Not Found </h2>
          <img src={imgNotFound} className='mx-auto  w-[50%]'  alt="" />
    </ div>
  )
}
