
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, {  ReactNode } from 'react'

const Homelayout = ({ children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className='flex rounded-none'>
        <Sidebar/>


            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6  pt-28 max-md:pb-14 sm:px-14 rounded">
                <div className="w-full rounded ">
                {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default Homelayout

