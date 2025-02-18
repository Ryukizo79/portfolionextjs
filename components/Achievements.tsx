"use client"
import React from 'react'
import Image from "next/image";
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Achievements = () => {
 
  const items = [
    {
      title: "IT Division Pinnacle Award 2024 (Individual Category)",
      description: "Top Performer in First Year of Employment",
      header: 
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
        <Image
          alt="" 
          src='/tsdweb.png'
          width={1000} 
          height={1000} 
          className="rounded-lg object-cover h-full min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>,
      className: "md:col-span-2",
      icon: <MdKeyboardDoubleArrowRight className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Spring Boot Workshop (Iverson)",
      description: "Fundamentals of Java with Spring Boot",
      header: 
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
          <Image
            alt="" 
            src='/springboot cert.png'
            width={1000} 
            height={1000} 
            className="rounded-lg object-cover h-full min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon: <MdKeyboardDoubleArrowRight className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "HTML, CSS and Javascript (Iverson)",
      description: "Fundamentals of HTML, CSS and Javascript",
      header: 
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
          <Image
            alt="" 
            src='/html cert.png'
            width={1000} 
            height={1000} 
            className="rounded-lg  h-full min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon: <MdKeyboardDoubleArrowRight className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "AWS re/Start Graduate",
      description:
        "Fundamentals of AWS Cloud Platform",
      header: 
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
          <Image
            alt="" 
            src='/aws cert.png'
            width={1000} 
            height={1000} 
            className="rounded-lg  h-full min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-2",
      icon: <MdKeyboardDoubleArrowRight className="h-4 w-4 text-neutral-500" />,
    },
  ];


      
  return (
    <section id="achievements" className='w-full relative mb-20 sm:px-10 px-5'>
        <div className='relative w-full flex text-center items-center justify-center mb-20'>
            <h2 className='sm:text-3xl text-sm font-bold text-white max-w-full'>
                Notable Accomplishments: Trainings, Certifications & Awards
            </h2>
        </div>
        <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
        
    </section>
  )
}

export default Achievements