
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import { auth } from '../Context/AuthContext';
import { jwtDecode } from "jwt-decode";



export default function Register() {

      let [loading, setLoading]= useState(false)
      let [msg, setMsg]= useState('')
      let navigate = useNavigate ()
      let {isLogin, setLogin}= useContext(auth)
 async function handleRegister(values) {

          try {
           setLoading(true)
          let {data}  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
          localStorage.setItem('userToken', data?.token)
          setLoading(false)
          setMsg('')
          setLogin(jwtDecode(data.token))
          navigate('/login')   

          } catch (error) {
                setMsg(error?.response?.data?.message)
                setLoading(false)
                
          }
  }
     
         

   


    let validationSchema = Yup.object({
      name:Yup.string().min(2, 'at least 3 char is required').max(10).required('name is required'),
      email:Yup.string().required('email is required').email(),
      password:Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/,'must start with capital letter & at least 6 char').required('password is required'),
      rePassword:Yup.string().oneOf([Yup.ref('password')],'PassWord not matched' ).required('Repassword is required'),
      phone:Yup.string().matches(/^01[0-25][0-9]{8}$/).required('phone is required')
    })

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: handleRegister,
  })


  // if (loading == true)
  //   return <Loading></Loading>
  // if (msg)
    // return <h2 className='text-red-700 font-bold my-3 p-3 w-[45%] mx-auto text-center bg-gray-200 rounded'>{msg}</h2>

  return (

    <div className='mt-3'>
    { msg ? <div className="w-[50%] mx-auto text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{msg}</span> 
        </div> : ''}
      <h2 className='ms-3 font-bold text-2xl text-green-900 '>Register Now : </h2>
      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        </div>
        {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.name}</span> 
        </div> : ''}

        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span> 
        </div> : ''}
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.password}</span> 
        </div> : ''}
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="rePassword" onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.rePassword}</span> 
        </div> : ''}

        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> phone number</label>
        </div>
        {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.phone}</span> 
        </div> : ''}
        <button onClick={() => { handleRegister }} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading? <i class="fa-solid fa-spinner fa-spin"></i> : 'Register' }</button>
      </form>
    </div>


  )
}
