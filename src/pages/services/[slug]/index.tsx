import ContactSection from '@/components/ContactSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import Navbar from '@/components/Navbar'
import WhyUsSection from '@/components/WhyUsSection'
import React from 'react'

const ServiceDetailPage = () => {
  return (
    <div>
       
      <Navbar/>
     <WhyUsSection/>
     <ExpertiseSection/>
      <ContactSection/>
    </div>
  )
}

export default ServiceDetailPage
