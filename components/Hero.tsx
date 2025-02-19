import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {  FaUniversity } from 'react-icons/fa'
import { BiSolidCertification } from "react-icons/bi";
import { MdEmail } from 'react-icons/md'
const Hero = () => {
  return (
    <section id='about' className='sm:px-10 px-5'>
        <div className=' py-[6rem]'>
            <div>
            {/* md:-left-32 md:-top-20 md:tracking-wider*/}
                <Spotlight className='sm:-top-40 sm:-left-10 left-10 -top-20  h-screen' fill='white'/>
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#64e9ff'/>
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#64e9ff'/>
            </div>
            <div className="h-full w-full dark:bg-black-100 bg-white  bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className='flex flex-row items-center justify-center relative  z-10'>
                <div className='w-[90%] flex flex-col items-center justify-center space-y-4'>
                    {/* <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-80'>
                        Hi, nice to meet you
                    </h2> */}
                    <TextGenerateEffect
                        className='text-center sm:text-7xl text-4xl'
                        words='Hi, My Name is Muhammad Dhiyaul Rakin'
                    />
                    <div className='font-bold w-full flex sm:flex-row flex-col sm:text-sm text-[0.6rem] text-white items-center justify-center sm:space-x-8 space-x-0 sm:space-y-0 space-y-2'>
                        <div className=' flex flex-row items-center justify-center space-x-8'>
                            <div className=' flex flex-row items-center justify-center space-x-2'>
                                <div>
                                    <FaUniversity />
                                </div>
                                <div>
                                    <p>Multimedia University</p>
                                </div>
                            </div>
                            <div className=' flex flex-row items-center justify-center space-x-2'>
                                <div>
                                    <MdEmail />
                                </div>
                                <div>
                                    <p>dhiyaulrakin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-row items-center justify-center space-x-2'>
                            <div>
                                <BiSolidCertification />
                            </div>
                            <div>
                                <p>Bachelor of Electronics Engineering (Computer)</p>
                            </div>

                        </div>
                        
                    </div>
                    <p className='sm:w-[80%] w-full text-center   sm:text-xl text-sm pt-4'>
                        Dedicated and results-driven professional with a passion for software, data analytics, IoT, and programming. Focused on improving business productivity through innovative solutions and problem-solving.
                    </p>
                    {/* <a href='#about'>
                        <MagicButton
                            title='Show my work'
                            icon={<FaLocationArrow/>}
                            position='right'
                        />
                    </a> */}
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default Hero