import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCards'
import Image from "next/image";

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
                  className=" h-10 sm:h-[5rem]  w-full"
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
                  className=" h-10 sm:h-[5rem]  w-full"
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
                  className=" h-10 sm:h-[5rem]   w-full"
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
                  className=" h-10 sm:h-[5rem]  w-full"
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
                  className=" h-10 sm:h-[5rem]  w-full"
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
                  className=" h-5 sm:h-[3rem]   w-full"
                />
            </div>
          )
        },
      ];
  return (
    <section id="skills" className='sm:px-10 px-5 pb-[8rem]'>
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
    </section>
  )
}

export default Skills