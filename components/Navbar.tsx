import Image from 'next/image'
import Link from'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>

        <Link href="/" className="flex items-center gap-3">
          <Image
             src="/icons/Connect.png"
             width={40}
             height={40}
             alt="Yoom logo"
             className='max-sm:size-10'
         />
        <p className="text-[26px] font-family:Belleza font-style:bold text-white max-sm:hidden">Connect</p>
        </Link>
        <div className="flex-between gap-5">

        <SignedIn>
            <UserButton />
         </SignedIn>


        <MobileNav/>
        </div>
        </nav>

  )
}

export default Navbar
