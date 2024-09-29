import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = () => {
    return (
        <>
            <Navbar />
            <section className='mx-4 sm:mx-[10%]'>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default Layout