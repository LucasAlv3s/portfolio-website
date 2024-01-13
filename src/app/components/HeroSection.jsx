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
          <div className='rounded-full bg-[#181818] w-1000 h-900 relative'>
            <Image src="/images/HeroSection.png" alt="hero section image" className='absolute transform -translate-x-1/8 -translate-y-1/5' width={200} height={100} />
          </div>
        </div>
    </div>
  </section>
}

export default HeroSection