import Footer from '@/components/Footer'
import HeaderSection from '@/containers/home-page/header-section'
import SignUp from '@/containers/signup-page'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSection/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default page
