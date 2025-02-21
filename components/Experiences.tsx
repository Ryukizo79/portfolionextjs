import React from 'react'
import { Timeline } from './ui/Timeline'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Experiences = () => {
    const data = [
        {
          title: "Executive IT Delivery",
          company: "Malaysia Airports Holdings Berhad (MAHB)",
          year: "June 2026 - Present",
          content: (
            <div className="space-y-4 text-justify">
              <p className="text-white sm:text-lg text-sm font-bold">
                Terminal Inspection Checklist
              </p>
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-cyan-400 px-4 py-2">
                    Next.js
                  </div>
                  <div className="w-fit rounded-full bg-green-400 px-4 py-2">
                    Spring Boot
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-yellow-400 px-4 py-2">
                    MySQL
                  </div>
                  <div className="w-fit rounded-full bg-blue-500 px-4 py-2">
                    Azure DevOps
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-orange-500 px-4 py-2">
                    SaaS
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Developed a digital solution with Next.js, Spring Boot, and SaaS integration to streamline processes, enhance decision-making, optimize spare parts purchasing, and predict maintenance issues.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Eliminated manual, paper-based processes which reduces to 0% usage of paper.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Designed, developed, and deployed a cloud-based app using Figma, Azure, and CI/CD pipelines with Azure DevOps for automation.
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 gap-4">
                <Image
                  alt="" 
                  src='/tsdweb.png'
                  width={1000} 
                  height={1000} 
                  className="rounded-lg object-cover h-fit sm:h-46  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                
              </div> */}
              {/*  */}
              <p className="text-white sm:text-lg text-sm font-bold">
                Malaysia Airports Rate Online (MyAeRO)
              </p>
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-red-500 px-4 py-2">
                    Angular
                  </div>
                  <div className="w-fit rounded-full bg-green-400 px-4 py-2">
                    Spring Boot
                  </div>
                 
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-rose-500 px-4 py-2">
                    Microsoft SQL
                  </div>
                  <div className="w-fit rounded-full bg-fuchsia-500 px-4 py-2">
                    On-Prem
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Developed a portal using Angular (frontend) and Spring Boot (Java backend) to provide a centralize work rate data across multiple years for airport operations, enabling staff to streamline budgeting processes.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Served as a centralized hub for work rate data, enabling predictive analysis for future work rates.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Managed the end-to-end design (Figma), development and deployment of application and virtual machine setups, incorporating Apache Tomcat and Nginx to optimize server configuration and performance.
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 gap-4">
                <Image
                  alt="" 
                  src='/myaeroweb.png'
                  width={1000} 
                  height={1000} 
                  className="rounded-lg object-cover h-fit sm:h-46  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                
              </div> */}
              {/*  */}
              <p className="text-white font-bold sm:text-lg text-sm ">
                Airport Fire Rescue Service (AFRS) Fire Vehicle Notification Form
              </p>
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold  text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-sky-400 px-4 py-2">
                    Google AppSheet
                  </div>
                 
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-teal-400 px-4 py-2">
                    Google Looker Studio
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-green-400 px-4 py-2">
                    Google Sheet
                  </div>
                 
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Leveraged a no-code solution using Google AppSheet to digitalize and automate the manual, paper-based process for reporting fire vehicle damage notifications.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Automated data analytics using Google Looker Studio to create dashboards for decision-making and predicting potential faults.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Eliminated manual, paper-based processes, reducing paper usage to 0% and improving workflows with real-time notifications.
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 gap-4">
                <Image
                  alt="" 
                  src='/afrsnfappsheet.png'
                  width={1000} 
                  height={1000} 
                  className="rounded-lg object-cover h-fit sm:h-46  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                
              </div> */}
              {/*  */}
              <p className="text-white font-bold sm:text-lg text-sm">
                Project Management (Vendor Development)
              </p>
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold  text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-emerald-400 px-4 py-2">
                    Project Management
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-amber-400 px-4 py-2">
                    Business Analyst
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-violet-400 px-4 py-2">
                    Problem Solving
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Implemented Agile methodology to ensure the design and functionality align with business user requirements provided by the vendor.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Reviewed system designs and code, conducted testing, and managed team members to ensure vendors fully understood business user requirements while delivering solutions for APIs and frontend functionalities through comprehensive analysis of those requirements (MYairports and 2 other projects).
                  </p>
                </div>
              </div>
            </div>
            
          ),
        },
        {
          title: "Executive Engineer Baggage Handling System (BHS)",
          company: "Malaysia Airports Holdings Berhad (MAHB)",
          year: "Nov 2022 - May 2023",
          content: (
            <div className="space-y-4 text-justify">
              {/*  */}
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-emerald-400 px-4 py-2">
                    Project Management
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-lime-400 px-4 py-2">
                    Decision Making
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-indigo-400 px-4 py-2">
                    Electronics
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Engaged in the meticulous planning and budgeting process for the procurement of spare parts, ensuring optimal resource allocation and operational continuity for sorter machines of baggage handling system.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Designed a proactive preventive maintenance schedule to uphold the optimal condition of sorter machines, ensuring uninterrupted operations.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Prepared contingency plans to swiftly address any unforeseen issues, bolstering operational resilience.
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div> */}
            </div>
          ),
        },
        {
          title: "Internship - Desktop Support",
          company: "Malaysia Airports Holdings Berhad (MAHB)",
          year: "Mar 2021 - Jun 2021",
          content: (
            <div className="space-y-4 text-justify">
              {/*  */}
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold text-xs">
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-green-400 px-4 py-2">
                    Google Sheet
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-pink-400 px-4 py-2">
                    IT Support
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Proficient in diagnosing and resolving desktop or laptop-related issues swiftly and effectively, ensuring minimal disruption to workflow and seamless user experience.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Implemented automation using Excel SUMIFS command to streamline document preparation processes, replacing manual creation of two documents. This automation enables real-time updates across files, calculating costs for each cost center across all airports efficiently.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
    ];
  return (
    <section id="experiences" className='sm:px-10 px-5 pt-[8rem]'>
        <Timeline data={data}/>
    </section>
  )
}

export default Experiences