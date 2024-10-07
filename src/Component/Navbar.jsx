import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Context/AuthContext'
import useQueryApi from '../Hooks/useQueryApi'
import { getCustomerApi } from '../API/cartApi'

export default function Navbar() {

    let [open, setOpen] = useState(false)
    let { isLogin, setLogin } = useContext(auth)
    let navigate = useNavigate()
    let { data, isLoading } = useQueryApi('cstCart', getCustomerApi)

    function toggle() {
        setOpen(!open)
    }

    function logOut() {
        localStorage.removeItem('userToken')
        setLogin(null)
        navigate('/login')

    }
    return (
        <nav className='bg-gray-100 ' >
            <div className='md:flex justify-between items-center container py-3 relative'>
                <div className='flex md:justify-center md:items-center me-1'>
                    <i className='fa-solid fa-cart-shopping text-2xl me-2 text-green-700'></i>
                    <h3 className='text-2xl font-bold'>FreshCart</h3>
                </div>
                <div>
                    {isLogin ? <ul className={` ${open ? 'block' : 'hidden'} md:flex text-lg font-semibold`}>
                        <li className=' m-4 md:m-0 md:me-2 '> <NavLink to={'/'}> Home </NavLink> </li>
                        <li className='m-4 md:m-0 md:me-2 '> <NavLink to={'/cart'}> Cart </NavLink> </li>
                        <li className='m-4 md:m-0 md:me-2 '> <NavLink to={'/whishlist'}> WishList </NavLink> </li>
                        <li className='m-4 md:m-0 md:me-2 '> <NavLink to={'/Products'}> Products </NavLink> </li>
                        <li className='m-4 md:m-0 md:me-2 '> <NavLink to={'/categories'}> Categories </NavLink> </li>
                        <li className='m-4 md:m-0 md:me-2 '> <NavLink to={'/brands'}> Brands </NavLink> </li>

                    </ul> : ''}
                </div>
                <div>
                    <ul className={`md:flex justify-center md:items-center ${open ? 'block' : 'hidden'} `}>
                        {isLogin ? <>
                            <li onClick={logOut} className='mt-2 md:mt-0 text-center text-green-900 text-1xl font-semibold cursor-pointer'> LogOut <b className='text-bold text-black'>Hi {isLogin?.name?.toUpperCase()}</b> </li>
                            <li className='mt-2 md:mt-0 text-center'> <NavLink to={'/cart'}> <div className="cart-icon">
                                <i className='fas fa-cart-shopping fa-2x'></i>
                                <span className="badge" id="cart-count">{data?.numOfCartItems}</span>
                            </div> </NavLink> </li>

                        </> : <>
                            <li className='me-2'> <NavLink to={'/login'}> Login</NavLink> </li>
                            <li className='me-2'> <NavLink to={'/register'}> Register</NavLink> </li>
                        </>}


                    </ul>
                </div>
            </div>
            <i onClick={toggle} className={`md:hidden  fa-solid ${open ? 'fa-close ' : 'fa-bars '} absolute top-4 text-4xl cursor-pointer right-4`}></i>

        </nav>
    )
}
