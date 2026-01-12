"use client";
import React,{ useState } from 'react'
import { Timeline } from './ui/Timeline'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {
  motion,
} from "framer-motion";
import ProjectModal from "@/components/modal/ProjectModal";

const Experiences = () => {
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<any>(null);
  const modalContent = {
    terminalInspection: {
      title: "Terminal Inspection Checklist",
      useCase: [
        <p key="uc1" className="leading-relaxed">
          Paper-based inspections caused inefficiencies, higher risk of human error, and poor visibility into progress and findings, limiting real-time monitoring, data analysis, and timely decision-making.
        </p>,
      ],
      solution: [
        <p key="uc1" className="leading-relaxed">
          Delivered a fully digital inspection platform that eliminated paper-based workflows, streamlined maintenance ticketing via Freshworks, and enabled real-time tracking and efficient cross-team coordination, driving faster, data-driven business decisions.
        </p>
      ],
      techStack: [
        <table 
          key="techStack"
          className="w-full text-center text-xs border border-slate-600 rounded-lg overflow-hidden"
        >
          <thead className="bg-slate-800">
            <tr>
              <th className="px-3 py-2 border border-slate-600">Frontend</th>
              <th className="px-3 py-2 border border-slate-600">Backend</th>
              <th className="px-3 py-2 border border-slate-600">Database</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900">
            <tr>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Next.js
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Spring Boot
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  MySQL
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      ],


      skills: [
        <div
          key="skills"
          className="flex flex-wrap gap-2"
        >
          {[
            "Full-stack development",
            "System architecture",
            "API security",
            "Stakeholder collaboration",
            "Cloud integration",
            "CI/CD pipelines",
            "Agile methodologies",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="inline-block bg-violet-500/20  rounded-full px-3 py-1 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>,
      ]

    },
    myAero: {
      title: "Malaysia Airports Rate Online",
      useCase: [
        <p key="uc1" className="leading-relaxed">
          The absence of a centralized pricing portal makes it difficult to benchmark costs, track historical rates, and make informed budgeting decisions for new projects.
        </p>,
      ],
      solution: [
        <p key="uc1" className="leading-relaxed">
          Implemented a centralized budgeting and forecasting platform that provides real-time financial insights, enabling accurate cost comparisons, streamlined approvals, and faster, data-driven business decisions.
        </p>
      ],
      techStack: [
        <table 
          key="techStack"
          className="w-full text-center text-xs border border-slate-600 rounded-lg overflow-hidden"
        >
          <thead className="bg-slate-800">
            <tr>
              <th className="px-3 py-2 border border-slate-600">Frontend</th>
              <th className="px-3 py-2 border border-slate-600">Backend</th>
              <th className="px-3 py-2 border border-slate-600">Database</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900">
            <tr>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Angular
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Spring Boot
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  MSSQL
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      ],
      skills: [
        <div
          key="skills"
          className="flex flex-wrap gap-2"
        >
          {[
            "Full-stack development",
            "System architecture",
            "API security",
            "Stakeholder collaboration",
            "VM deployment",
            "Nginx configuration",
            "Tomcat management",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="inline-block bg-violet-500/20 rounded-full px-3 py-1 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>,
      ]


    },
    afrsVehicle: {
      title: "AFRS Fire Vehicle Form",
      useCase: [
        <p key="uc1" className="leading-relaxed">
          Reliance on paper-based breakdown notifications for fire vehicles leads to information loss, poor tracking, and limited visibility into maintenance performance, resulting in inefficient operations and inaccurate spare-parts budgeting.
        </p>,
      ],
      solution: [
        <p key="uc1" className="leading-relaxed">
          Implement an in-house solution using Google AppSheet with a centralized dashboard to digitize breakdown reporting, enabling real-time monitoring, accurate spare-parts budgeting and forecasting, and data-driven identification of fire vehicles with the highest breakdown rates.
        </p>
      ],
      techStack: [
        <table 
          key="techStack"
          className="w-full text-center text-xs border border-slate-600 rounded-lg overflow-hidden"
        >
          <thead className="bg-slate-800">
            <tr>
              <th className="px-3 py-2 border border-slate-600">Application</th>
              <th className="px-3 py-2 border border-slate-600">Dashboard</th>
              <th className="px-3 py-2 border border-slate-600">Database</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900">
            <tr>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Google AppSheet
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Looker Studio
                </span>
              </td>
              <td className="px-3 py-2 border border-slate-600">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1">
                  Google Sheet
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      ],
      skills: [
        <div
          key="skills"
          className="flex flex-wrap gap-2"
        >
          {[
            "Low-code app development",
            "Dashboard & analytics",
            "Performance monitoring",
            "Stakeholder collaboration",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="inline-block bg-violet-500/20 rounded-full px-3 py-1 text-xs"
            >
              {skill}
            </span>
          ))}

        </div>,
      ]


    },
  };


  const data = [
    {
      title: "Executive IT (Business Solution)",
      company: "Malaysia Airports Holdings Berhad (MAHB)",
      year: "June 2023 - Current",
      content: (
        <div className="space-y-4 text-justify">
          <p className="text-white sm:text-lg text-sm font-bold">
            Terminal Inspection Checklist (Fullstack Developer)
          </p>
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Next.js", color: "cyan" },
              { name: "Spring Boot", color: "green" },
              { name: "MySQL", color: "yellow" },
              { name: "Azure DevOps", color: "blue" },
              { name: "SaaS", color: "orange" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Built a production-ready inspection platform using Next.js (SSR), Spring Boot (REST, JWT), and MySQL, achieving 100% paperless operations and replacing manual workflows.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Integrated Freshworks SaaS to automatically create and route maintenance tickets, significantly improving response time and cross-team coordination.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Owned end-to-end delivery from Figma UI design to Azure deployment with CI/CD via Azure DevOps, ensuring scalability and secure API design.
              </p>
            </div>
            
            <div className="w-full flex justify-end px-4 py-4">
              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                // href={item.link}
                onClick={() => {
                  setActiveModal(modalContent.terminalInspection);
                  setOpen(true);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-fit w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#64e9ff_0%,#103ce7_50%,#64e9ff_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white backdrop-blur-3xl">
                  See more
                </span>
              </motion.a>
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
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Angular", color: "red" },
              { name: "Spring Boot", color: "green" },
              { name: "Microsoft SQL", color: "red" },
              { name: "Virtual Machine", color: "violet" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Developed a centralized budgeting and forecasting system using Angular with reactive forms and component-based architecture for a dynamic user experience.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Built secure, maintainable Spring Boot REST APIs with layered architecture, JWT authentication, and MSSQL.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Delivered the system end-to-end, from Figma design to VM deployment, optimizing performance with Tomcat and Nginx
              </p>
            </div>
            <div className="w-full flex justify-end px-4 py-4">
              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                onClick={() => {
                  setActiveModal(modalContent.myAero);
                  setOpen(true);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-fit w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#64e9ff_0%,#103ce7_50%,#64e9ff_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white backdrop-blur-3xl">
                  See more
                </span>
              </motion.a>
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
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Google AppSheet", color: "cyan" },
              { name: "Google Looker Studio", color: "blue" },
              { name: "Google Sheet", color: "green" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full   text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Digitalized fire vehicle damage reporting using Google AppSheet, eliminating paper-based workflows and achieving 100% digital reporting.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Automated notifications and data validation via Google Sheets integration, reducing reporting delays and manual coordination.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Built real-time dashboards in Google Looker Studio to support fleet visibility and predictive maintenance.
              </p>
            </div>
            <div className="w-full flex justify-end px-4 py-4">
              <motion.a
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                  onClick={() => {
                  setActiveModal(modalContent.afrsVehicle);
                  setOpen(true);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-fit w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#64e9ff_0%,#103ce7_50%,#64e9ff_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white backdrop-blur-3xl">
                  See more
                </span>
              </motion.a>
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
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Project Management", color: "pink" },
              { name: "Business Analyst", color: "yellow" },
              { name: "React Native", color: "cyan" },
              { name: "Spring Boot", color: "green" },
              { name: "Drupal CMS", color: "blue" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Collaborated with vendors to design a cross-platform solution using React Native and Spring Boot, contributing to system architecture and API contracts.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Led integration of third-party SDKs (chatbot, smart parking, indoor wayfinding), ensuring performance, security, and scalability.
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
                Bridged business and engineering teams by translating operational requirements into clear, actionable technical tasks.
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
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Project Management", color: "pink" },
              { name: "Decision Making", color: "fuchsia" },
              { name: "Electronics", color: "amber" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Planned spare parts procurement and budgeting for baggage handling system sorter machines, designing preventive maintenance schedules and contingency plans to ensure continuous operations, system reliability, and operational resilience.
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
          <div
            className="flex flex-wrap gap-2 w-full font-bold text-xs"
          >
            {[
              { name: "Google Sheet", color: "green" },
              { name: "IT Support", color: "violet" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`w-fit rounded-full text-${tech.color}-500 bg-${tech.color}-500/10 border border-${tech.color}-500/30 px-4 py-2`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 ">
              <MdKeyboardDoubleArrowRight  size={20} className="text-white mt-1 w-[5%]" />
              <p className="text-white sm:text-base text-xs w-[95%]">
                Diagnosed and resolved desktop and laptop issues efficiently to minimize user downtime, while automating document preparation using Excel SUMIFS to replace manual workflows which enables real-time cost calculations across cost centers and airports with synchronized file updates.
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
        <ProjectModal
          open={open}
          onClose={() => setOpen(false)}
          data={activeModal}
        />

    </section>
    
  )
}

export default Experiences