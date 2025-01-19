import Footer from '@/components/Footer'
import HeaderSection from '@/containers/home-page/header-section'
import SignIn from '@/containers/signin-page'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderSection/>
      <SignIn/>
      <Footer/>
    </div>
  )
}

export default page
