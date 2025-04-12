import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
   <Navbar/>
        <div className='bg-[#F8E9E1] h-screen flex items-center justify-center'>
            <h1 className='text-5xl font-bold'>About Us</h1>
        </div>
        <div className='p-10'>
            <h2 className='text-3xl font-bold mb-4'>Who We Are</h2>
            <p className='text-lg'>We are a team of passionate designers and developers dedicated to creating beautiful and functional digital experiences.</p>
        </div>
   <ContactSection/>
    </div>
  )
}

export default index
