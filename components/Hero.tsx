"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import {  FaUniversity } from 'react-icons/fa'
import { BiSolidCertification } from "react-icons/bi";
import { MdEmail } from 'react-icons/md'
import Image from "next/image";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section id='about' className='sm:px-10 px-5'>
        <div className=' py-[7rem]'>
            <div>
            {/* md:-left-32 md:-top-20 md:tracking-wider*/}
                <Spotlight className='sm:-top-40 sm:-left-10 left-10 -top-20  h-screen' fill='white'/>
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#64e9ff'/>
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#64e9ff'/>
            </div>
            <div className="h-full w-full bg-black-100   bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className='flex flex-row items-center justify-center relative  z-10'>
                <div className='w-[90%] flex flex-col items-center justify-center space-y-4'>
                    {/* <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-80'>
                        Hi, nice to meet you
                    </h2> */}
                    <motion.div 
                      
                        className="w-full flex sm:flex-row flex-col justify-center items-center sm:space-x-8 space-x-0 sm:space-y-0 space-y-8 mb-8"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="sm:w-[30%] w-full relative sm:h-80 h-64 sm:rounded-[3rem] rounded-[2rem] overflow-hidden"
                        >
                            <Image
                            alt="image"
                            src="/images/rakin.jpeg"
                            fill
                            className="object-cover "
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="sm:w-[70%] w-full" 
                        >
                            <h1 className="text-left sm:text-5xl text-2xl text-white">
                                Hi, My Name is <span className="text-tertiary font-bold sm:text-7xl text-4xl">Muhammad Dhiyaul Rakin Bin Zainuddin</span>
                            </h1>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.0 }}
                        className='font-bold w-full flex sm:flex-row flex-col sm:text-sm text-[0.6rem] text-white items-center justify-center sm:space-x-8 space-x-0 sm:space-y-0 space-y-2'
                    >
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
                        
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='sm:w-[80%] w-full text-center   sm:text-xl text-sm pt-4'
                    >
                        Dedicated and results-driven professional with a passion for software, data analytics, IoT, and programming. Focused on improving business productivity through innovative solutions and problem-solving.
                    </motion.p>
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