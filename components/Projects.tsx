"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  SiGooglegemini,
  SiIpfs,
  SiNextdotjs,
  SiRender,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReact } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { DiMitlicence } from "react-icons/di";
import {  motion } from "framer-motion";
import SelfProjectModal from "./modal/SelfProjectModal";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAnglesRight } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
  tech: { name: string; icon: React.ReactNode }[];
  skills: string[];
};

const projects: Project[] = [
  {
    title: "DynaForm",
    description:
      "AI-powered form builder using Gemini API with real-time customization and validation.",
    image: "/dynaform.png",
    link: "https://dynaform.vercel.app/",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Render", icon: <SiRender /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
      { name: "Gemini AI", icon: <SiGooglegemini /> },
    ],
    skills: [
      "AI Integration",
      "Form Validation",
      "Real-time Updates",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    title: "Fixome",
    description:
      "Dynamic platform connecting homeowners with top-rated home service providers in their area for easy discovery, comparison, and hiring.",
    image: "/fixome.png",
    link: "https://fixome.vercel.app/",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Framer", icon: <TbBrandFramerMotion /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ],
    skills: [
      "Problem Solving",
      "Service Matching",
      "Booking System",
      "UI/UX Design",
    ],
  },
  {
    title: "Portfolio",
    description:
      "Interactive portfolio website using Next.js and Framer Motion to showcase projects, skills, and professional experience.",
    image: "/portfolio web.png",
    link: "https://rakinportfolio.vercel.app/",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Framer", icon: <TbBrandFramerMotion /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ],
    skills: [
      "Interactive UI",
      "Animations",
      "SSR Optimization",
      "Responsive Layout",
      "Content Organization",
    ],
  },
  {
    title: "Blockify",
    description:
      "Detect and identify any fraud or modifications to files, ensuring data integrity and security.",
    image: "/blockchain.png",
    link: "https://www.researchgate.net/publication/368491012",
    tech: [
      { name: "React", icon: <TbBrandReact /> },
      { name: "Ethereum", icon: <FaEthereum /> },
      { name: "IPFS", icon: <SiIpfs /> },
    ],
    skills: [
      "Blockchain Security",
      "IPFS Storage",
      "Smart Contracts",
      "Data Integrity",
      "Fraud Detection",
    ],
  },
  {
    title: "IoT Door Lock",
    description:
      "NFC-based IoT door lock system with mobile app built on MIT App Inventor and Firebase, connected to Arduino actuator.",
    image: "/iot.png",
    tech: [
      { name: "Firebase", icon: <IoLogoFirebase /> },
      { name: "MIT App Inventor", icon: <DiMitlicence /> },
    ],
    skills: [
      "NFC Integration",
      "IoT Communication",
      "Arduino Programming",
      "Mobile App Development",
      "Security Protocols",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center w-full space-y-14 mb-20 sm:px-10 px-5 sm:pt-[8rem] pt-[6rem]"
        id="projects"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-buttonprimary to-buttonsecondary relative w-full flex text-center items-center justify-center sm:p-2 p-1 sm:mb-14 mb-2 rounded-full"
        >
          <div className="bg-black rounded-full w-full px-4">
            <h2 className="sm:text-3xl text-sm font-bold text-white w-full sm:py-10 py-4">
              Personal Projects: Turning Ideas Into Practical Solutions
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <SelfProjectModal
          open={!!activeProject}
          data={{
            title: activeProject.title,
            description: activeProject.description,
            link: activeProject.link,
            techStack: activeProject.tech,
            skills: activeProject.skills.map((s, idx) => <span key={idx}>{s}</span>)


          }}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default Projects;

const ProjectCard = ({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900"
    >
      <div className="relative sm:h-[300px] h-[200px] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col mt-auto">
          <div className="mt-auto flex items-center w-full">
            <div className="w-[60%]">
              <h3 className="w-fit bg-blue-500/70 rounded-tr-xl border-t border-r border-blue-500/100 text-white text-xl font-bold px-8 py-4">
                {project.title}
              </h3>
            </div>
            <div className="w-[40%] flex justify-end px-4">
              <motion.button
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                onClick={onOpen}
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#64e9ff_0%,#103ce7_50%,#64e9ff_100%)]" />
                <span className="relative z-10 sm:inline-flex hidden h-full items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white">
                  Learn more
                </span>
                <span className="relative z-10 sm:hidden inline-flex h-full items-center justify-center rounded-full bg-slate-950 px-4 text-lg font-medium text-white">
                  <FaAnglesRight />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
