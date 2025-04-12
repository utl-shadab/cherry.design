import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#F8E9E1] h-screen flex items-center justify-center'>
        <h1 className='text-5xl font-bold'>Blog</h1>
      <div className='p-10'>
        <h2 className='text-3xl font-bold mb-4'>Our Latest Articles</h2>
        <p className='text-lg'>Stay updated with our latest insights and articles on design, development, and more.</p>
      </div>
      </div>
      <ContactSection/>
    </div>
  )
}

export default index
