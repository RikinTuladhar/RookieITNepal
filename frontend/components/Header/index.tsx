import Link from 'next/link'
import React from 'react'
import Brand from '../Brand'
import { HeaderNavs } from './constants'
import HeaderNav from '../Navs/HeaderNav'
import { HamburgerIcon } from '../Icons/HamburgerIcon'

const Header = () => {
  return (
    <header className="w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative">
      <div className="w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between">
        <Link href={"/"}>
          <Brand />
        </Link>
        <nav className=" gap-14 hidden lg:flex">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
        <div className="flex gap-4">
          <Link href={"/login"}>
            <span className="text-[#FF4D00] font-bold">Login</span>
          </Link>
          <Link href={"/register"}>
            <span className="text-[#FF4D00] font-bold">Register</span>
          </Link>
          <button className="lg:hidden">
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
