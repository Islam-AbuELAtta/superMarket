import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Context/AuthContext';
import { jwtDecode } from 'jwt-decode';





export default function ConfirmPassword() {

  let [loading, setLoading] = useState(false)
  let [msg, setMsg] = useState('')
  let navigate = useNavigate()
  let {isLogin, setLogin}= useContext(auth)

  async function handleConfirmPassword(values) {

    try {
      setLoading(true)
      let { data } = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', values)
      setLoading(false)
      setMsg('')
      navigate('/login')
      setLoading(false)
    

    } catch (error) {
      setMsg(error?.response?.data?.message)
      setLoading(false)

    }
  }


  let validationSchema = Yup.object({
    email: Yup.string().required('email is required').email(),
    newPassword: Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/, 'must start with capital letter & at least 6 char').required('password is required'),
  })

  let formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
    },
    validationSchema,
    onSubmit: handleConfirmPassword,
  })


  // if (loading == true)
  //   return <Loading></Loading>
  // if (msg)
  //   return <h2 className='text-red-700 font-bold my-3 p-3 w-[45%] mx-auto text-center bg-gray-200 rounded'>{msg}</h2>

  return (

    <div className='mt-3'>
      {msg ? <div className="w-[50%] mx-auto text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium">{msg}</span>
      </div> : ''}
      <h2 className='ms-3 font-bold text-2xl text-green-900 '> Create New Password: </h2>
      <form className="max-w-md mt-3 mx-auto" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span>
        </div> : ''}
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="newPassword" onChange={formik.handleChange} value={formik.values.newPassword} onBlur={formik.handleBlur} id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
        </div>
        {formik.errors.newPassword && formik.touched.newPassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.newPassword}</span>
        </div> : ''}

        <button onClick={() => { handleConfirmPassword }} type="submit" className="text-white p-3 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading ? <i class="fa-solid fa-spinner fa-spin"></i> : 'ConfirmPassword'}</button>
      </form>


    </div>


  )
}

