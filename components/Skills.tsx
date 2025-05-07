"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCards'
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        {
          quote:"",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/spring logo.png'
                  width={250} 
                  height={250} 
                  className=" h-8 sm:h-[5rem]  w-full"
                />
            </div>
          )
        },
        {
          quote: "",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/react logo.png'
                  width={250} 
                  height={250} 
                  className=" h-8 sm:h-[5rem]  w-full"
                />
            </div>
          )
        },
        {
          quote: "",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/angular logo.png'
                  width={250} 
                  height={250} 
                  className=" h-8 sm:h-[5rem]   w-full"
                />
            </div>
          )
        },
      ];
      const skills2 = [
        {
          quote:"",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/java logo.png'
                  width={250} 
                  height={250} 
                  className=" h-8 sm:h-[5rem]  w-full"
                />
            </div>
          )
        },
        {
          quote: "",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/docker logo.png'
                  width={250} 
                  height={250} 
                  className=" h-8 sm:h-[5rem]  w-full"
                />
            </div>
          )
        },
        {
          quote: "",
          name: "",
          title: "",
          content:(
            <div>
              <Image
                  alt="" 
                  src='/azure logo.png'
                  width={250} 
                  height={250} 
                  className=" h-4 sm:h-[3rem]   w-full"
                />
            </div>
          )
        },
      ];
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      id="skills" className='sm:px-10 px-5 '
    >
        <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="fast"
        />
        <InfiniteMovingCards
            items={skills2}
            direction="left"
            speed="fast"
        />
    </motion.section>
  )
}

export default Skills