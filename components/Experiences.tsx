import React from 'react'
import { Timeline } from './ui/Timeline'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Experiences = () => {
    const data = [
        {
          title: "Executive IT (Business Solution)",
          company: "Malaysia Airports Holdings Berhad (MAHB)",
          year: "June 2023 - Current",
          content: (
            <div className="space-y-4 text-justify">
              <p className="text-white sm:text-lg text-sm font-bold">
                TTerminal Inspection Checklist (Fullstack Developer)
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
                    Built a full-stack inspection app using Next.js (SSR, API routes) and Spring Boot (RESTful APIs, JWT) with MySQL to replace manual paper workflows (0% paper usage).
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Integrated with a SaaS platform (Freshworks) to auto-generate problem tickets and route them to relevant departments for seamless maintenance workflows.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Led end-to-end development, from Figma UI design to Azure deployment with CI/CD via Azure DevOps.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Improved efficiency and scalability with clean architecture, responsive design, and secure API integration.
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
                Malaysia Airports Rate Online (Fullstack Developer)
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
                    Developed a centralized budgeting portal using Angular (component-based, reactive forms, two-way binding) for a dynamic and intuitive UI.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Built secure RESTful APIs with Spring Boot, using layered architecture, DTOs, and JWT authentication connected to MSSQL.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Enabled predictive analysis and streamlined planning by consolidating multi-year work rate data.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Led end-to-end delivery, from Figma UI design to VM deployment, optimizing performance with Tomcat and Nginx.
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
                    Spearheaded a mobile app using Google AppSheet to digitalize fire vehicle damage reporting, eliminating paper-based workflows.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Automated data capture and alerts via built-in logic and Google Sheets integration, streamlining departmental coordination.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Designed interactive dashboards in Google Looker Studio for real-time insights and predictive maintenance tracking.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Achieved 0% paper usage, improved reporting speed, and enhanced fleet visibility across departments.
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
              <p className="text-white sm:text-lg text-sm font-bold">
                MYairports (Subject Matter Expert)
              </p>
              <div className="flex sm:flex-row flex-col sm:space-x-2 space-x-0 sm:space-y-0 space-y-4 w-full font-bold  text-xs">
                <div className="flex flex-row space-x-2">
                   <div className="w-fit rounded-full bg-emerald-400 px-4 py-2">
                    Project Management
                  </div>
                  <div className="w-fit rounded-full bg-amber-400 px-4 py-2">
                    Business Analyst
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="w-fit rounded-full bg-sky-400 px-4 py-2">
                    React Native
                  </div>
                  <div className="w-fit rounded-full bg-green-400 px-4 py-2">
                    Spring Boot
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Collaborated with vendor developers to architect and validate a cross-platform solution using React Native (frontend) and Spring Boot (backend APIs).
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Contributed to technical decision-making on state management, API contract design, and authentication flows for scalable and maintainable implementation.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Led integration of third-party SDKs including chatbot, smart parking, and indoor map wayfinding, ensuring performance, security, and business alignment.
                  </p>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
                  <p className="text-white sm:text-base text-xs w-[95%]">
                    Bridged airport operations and engineering teams by translating domain requirements into technical tasks, supporting agile delivery and rapid iteration.
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
    <section id="experiences" className='sm:px-10 px-5 sm:pt-[8rem] pt-[6rem]'>
        <Timeline data={data}/>
    </section>
  )
}

export default Experiences