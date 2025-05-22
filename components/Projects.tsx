"use client"
import React from 'react';
import Image from 'next/image';
import { SiIpfs, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandReact } from 'react-icons/tb';
import { FaEthereum } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import { DiMitlicence } from 'react-icons/di';
import { motion } from "framer-motion";

const projects = [
  {
    title: 'Fixome',
    description:
      'Developed a dynamic and interactive centralized platform that connects homeowners with trusted, top-rated home service providers in their area making it easy to discover, compare, and hire the best professionals for every home maintenance need.',
    image: '/fixome.png',
    link: 'https://fixome.vercel.app/',
    techIcons: [
      <SiNextdotjs key="nextjs" className="text-black-100 bg-white sm:p-4 p-1 sm:rounded-xl rounded-lg" />, 
      <TbBrandFramerMotion key="framer" className="text-black-100 bg-yellow-300 sm:p-4 p-1 sm:rounded-xl rounded-lg" />,
      <RiTailwindCssFill key="tailwind" className="text-white bg-buttonsecondary sm:p-4 p-1 sm:rounded-xl rounded-lg"/>,
      <SiTypescript key="typescript" className="text-white bg-sky-400 sm:p-4 p-1 sm:rounded-xl rounded-lg"/>
    ],
  },
  {
    title: 'Portfolio',
    description:
      'Developed a dynamic and interactive portfolio website using Next.js and Framer Motion to showcase personal projects, skills, and professional experience.',
    image: '/portfolio web.png',
    link: 'https://rakinportfolio.vercel.app/',
    techIcons: [
      <SiNextdotjs key="nextjs" className="text-black-100 bg-white sm:p-4 p-2 rounded-xl" />, 
      <TbBrandFramerMotion key="framer" className="text-black-100 bg-yellow-300 sm:p-4 p-1 sm:rounded-xl rounded-lg" />,
      <RiTailwindCssFill key="tailwind" className="text-white bg-buttonsecondary sm:p-4 p-1 sm:rounded-xl rounded-lg"/>
    ],
  },
  {
    title: 'Document Verification Using Blockchain',
    description:
      'Effectively detect and identify any fraud or modifications made to original files, including the slightest changes, ensuring data integrity and security.',
    image: '/blockchain.png',
    link: 'https://www.researchgate.net/publication/368491012',
    techIcons: [
      <TbBrandReact key="react" className="text-white bg-buttonsecondary sm:p-4 p-1 sm:rounded-xl rounded-lg"/>,
      <FaEthereum key="etheruem" className="text-black-100 bg-white sm:p-4 p-1 sm:rounded-xl rounded-lg"/>,
      <SiIpfs key="ipfs" className="text-white bg-teal-400 sm:p-4 p-1 sm:rounded-xl rounded-lg"/>
    ],
  },
  {
    title: 'Internet of Things (IoT) Door Lock System',
    description:
      'System includes NFC sensors, mobile application developed using MIT App Inventor connected to Google Firebase and lock actuator consist of using Arduino UNO.',
    image: '/iot.png',
    link: '',
    techIcons: [
      <IoLogoFirebase key="firebase" className="text-white bg-amber-400 sm:p-4 p-1 sm:rounded-xl rounded-lg"/>,
      <DiMitlicence key="mit" className="text-white bg-orange-400 sm:p-4 p-1 sm:rounded-xl rounded-lg"/>
    ],
  },
];


const Projects = () => {

  return (
    <section
      className='relative flex flex-col justify-center items-center w-full space-y-14 mb-20 sm:px-10 px-5 sm:pt-[8rem] pt-[6rem]'
      id='projects'
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className='bg-gradient-to-r from-buttonprimary to-buttonsecondary relative w-full flex text-center items-center justify-center sm:p-2 p-1 sm:mb-14 mb-2 rounded-full'
      >
        <div className='bg-black rounded-full w-full px-4'>
          <h2 className='sm:text-3xl text-sm font-bold text-white w-full sm:py-10 py-4'>
            Personal Projects: Turning Ideas Into Practical Solutions
          </h2>

        </div>
      </motion.div>
      <div className="w-full flex flex-col items-center space-y-20 px-4">
        {projects.map((project, index) => (
          <div key={index} className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-2 sm:h-[400px] h-[600px]">
            {/* Left */}
            <div className="grid sm:grid-rows-[70%_30%] grid-rows-1 sm:gap-4 gap-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg shadow-lg overflow-hidden border border-slate-700"
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                }}
              >
                <div className="h-full w-full relative">
                  <Image
                    alt={`${project.title} Thumbnail`}
                    src={project.image}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg p-4 text-white text-center flex flex-col justify-center items-center space-y-2 border border-slate-700"
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                }}
              >
                <p className='sm:text-base text-[0.7rem]'>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      {project.link}
                    </a>
                  ) : (
                    <span className="text-gray-400">No link provided</span>
                  )}
                </p>

              </motion.div>
            </div>

            {/* Right */}
            <div className="grid sm:grid-rows-[50%_50%] grid-rows-0 sm:gap-4 gap-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg sm:px-8 sm:py-8 px-4 py-1 text-white text-center flex flex-col justify-center space-y-4 border border-slate-700"
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                }}
              >
                <h2 className="sm:text-2xl text-sm font-bold">{project.title}</h2>
                <div className="w-full py-0.5  rounded-full bg-gradient-to-r from-buttonprimary to-buttonsecondary"></div>
                <p className="sm:text-base text-xs">{project.description}</p>
              </motion.div>

              {/* Tech Icons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                
                className="w-full rounded-lg sm:p-4 p-2  text-white border border-slate-700 flex flex-row sm:gap-0 justify-center items-center space-x-4  sm:text-8xl text-5xl"
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                }}
              >
                {project.techIcons.length > 0 ? (
                  project.techIcons.map((Icon, idx) => <React.Fragment key={idx}>{Icon}</React.Fragment>)
                ) : (
                  <p className="text-sm text-white">Technologies Used</p>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
