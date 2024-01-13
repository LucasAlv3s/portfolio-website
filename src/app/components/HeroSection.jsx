import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return ( <section>
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Lucas Alves</h1>
          <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
            E-commerce Analyst | Full-Stack Developer
          </p>
          <div>
            <button className='px-6 py-3 rounded-full mr-6 bg-white text-black hover:bg-slate-200'>Contrate-me</button>
            <button className='px-6 py-3 rounded-full'>Download CV</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[300px] lg:h-[300px] relative'>
            <Image src="/images/HeroSection.jpg" alt="hero section image" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={200} height={200} />
          </div>
        </div>
    </div>
  </section>
  );
};

export default HeroSection;