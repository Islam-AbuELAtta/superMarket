import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='parent'>
        <Navbar></Navbar>
        <div className="container">
              <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
