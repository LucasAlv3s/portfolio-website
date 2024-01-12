import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return <section>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
            <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Lucas Alves</h1>
            <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                E-commerce Analyst | Full-Stack Developer
            </p>
        </div>
        <div className='col-span-5'>
          <div className='rounded-full overflow-hidden border-4 border-[#181818] w-40 h-40 relative'>
            <Image src="/images/HeroSection.png" alt="hero section image" className='object-cover w-70 h-70 mx-auto' width={300} height={300} />
          </div>
        </div>
    </div>
  </section>
}

export default HeroSection