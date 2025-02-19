"use client"
import React from 'react'
import Image from "next/image";
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Achievements = () => {
 
  const items = [
    {
      title: "Self Portfolio",
      description: "Developed a dynamic and interactive portfolio website using Next.js and Aceternity UI to showcase personal projects, skills, and professional experience.",
      header: 
      <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
        <Image
          alt="" 
          src='/portfolio web.png'
          width={1000} 
          height={1000} 
          className="rounded-t-lg object-cover h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>,
      className: "md:col-span-2",
      icon:'',
      link: 'https://rakinportfolio.vercel.app/',
    },
    {
      title: "Document Verification Using Blockchain",
      description: "Effectively detect and identify any fraud or modifications made to original files, including the slightest changes, ensuring data integrity and security.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/blockchain.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon: '',
      link: 'https://www.researchgate.net/publication/368491012_Design_a_Document_Verification_System_Based_on_Blockchain_Technology',
    },
    {
      title: "Internet of Things (IoT) Door Lock System",
      description: "System includes NFC sensors, mobile application developed using MIT App Inventor and lock actuator consist of using Arduino UNO.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/html cert.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon:'',
      link: 'https://iotdoorlock.com',
    },
    {
      title: "AWS re/Start Graduate",
      description:
        "Learning AWS fundamentals covers computing, storage, networking, and security, along with key services like EC2, S3, VPC, and IAM. It also involves cost management, scalability, and security best practices, plus hands-on experience with AWS tools like the Management Console, CLI, and CloudFormation.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/aws cert.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-2",
      icon: '',
      link: 'https://www.credly.com/badges/a1d1709c-bad4-43bb-9d7a-05d3ad3bfad6/linked_in?t=sjj7rt',
    },
    {
      title: "Spring Boot Workshop (Iverson)",
      description: "Learning Java and Spring Boot is key to building enterprise APIs, with Java’s OOP foundation and Spring Boot’s simplified backend development and API integration.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/springboot cert.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon: '',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7146900189465751553/',
    },
    {
      title: "HTML, CSS and Javascript (Iverson)",
      description: "Learning HTML, CSS, and JavaScript is essential for building enterprise applications. HTML structures the web pages, CSS styles them, and JavaScript adds interactivity.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/html cert.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-1",
      icon: '',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7148888671570583554/',
    },
    {
      title: "IT Division Pinnacle Award 2024",
      description:
        "Recognized as a top performer within the first year of employment by providing innovative and effective solutions that significantly improved business operations. Consistently delivered best practices that streamlined processes, enhanced efficiency, and maximized user satisfaction, contributing to overall organizational success.",
      header: 
        <div className="flex flex-1 w-full h-[10rem] min-h-[6rem] ">
          <Image
            alt="" 
            src='/aws cert.png'
            width={1000} 
            height={1000} 
            className="rounded-t-lg  h-[10rem] min-h-[6rem]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>,
      className: "md:col-span-2",
      icon: '',
      link: 'https://www.credly.com/badges/a1d1709c-bad4-43bb-9d7a-05d3ad3bfad6/linked_in?t=sjj7rt',
    },
  ];


      
  return (
    <section id="achievements" className='w-full relative mb-20 sm:px-10 px-5'>
        <div className='bg-gradient-to-r from-buttonprimary to-buttonsecondary relative w-full flex text-center items-center justify-center sm:p-2 p-1 mb-20 rounded-full'>
          <div className='bg-black rounded-full w-full px-4'>
            <h2 className='sm:text-3xl text-sm font-bold text-white w-full sm:py-10 py-4'>
                {/* Notable Accomplishments: Trainings, Certifications & Awards */}
                Learning & Legacy: Projects, Certifications, and Award-Winning Accomplishments
            </h2>

          </div>
        </div>
        <BentoGrid className="w-full mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              link={item.link}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        
    </section>
  )
}

export default Achievements