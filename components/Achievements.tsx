"use client"
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
const Achievements = () => {
  const items = [
    {
      title: "Certified Secure Application Professional",
      description:
        "Validated skills in secure software development, threat mitigation, and application vulnerability management based on OWASP and industry security best practices.",
      image: '/csap.png',
      link: 'https://www.linkedin.com/in/dhiyaul-rakin-814097200/overlay/1762325216554/single-media-viewer/?profileId=ACoAADNFDNABtdtMFRIESx_RI5jCZ0A9pfRFQMA',
    },
    {
      title: "Google Cloud Skills Boost",
      description:
        "Completed hands-on labs in data engineering on Google Cloud Skills Boost, gaining practical experience in BigQuery, data pipelines, and cloud-based data processing.",
      image: '/googledataengineer.png',
      link: 'https://www.cloudskillsboost.google/public_profiles/bf2e4c53-1111-4203-9687-0bdfae000635',
    },
    {
      title: "AWS re/Start Graduate",
      description:
        "Gained hands-on experience with AWS core services like EC2, S3, VPC, and IAM, covering cloud fundamentals, cost management, scalability, and security best practices.",
      image: '/aws cert.png',
      link: 'https://www.credly.com/badges/a1d1709c-bad4-43bb-9d7a-05d3ad3bfad6/linked_in?t=sjj7rt',
    },
    {
      title: "Spring Boot Workshop (Iverson)",
      description:
        "Learning Java and Spring Boot is key to building enterprise APIs, with Java’s OOP foundation and Spring Boot’s simplified backend development and API integration.",
      image: '/springboot cert.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7146900189465751553/',
    },
    {
      title: "HTML, CSS and Javascript (Iverson)",
      description:
        "Learning HTML, CSS, and JavaScript is essential for building enterprise applications. HTML structures the web pages, CSS styles them, and JavaScript adds interactivity.",
      image: '/html cert.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7148888671570583554/',
    },
    {
      title: "Graduate Engineer",
      description:
        "Registered as a Graduate Engineer with the Board of Engineers Malaysia (BEM), in compliance with the requirements of the Registration of Engineers Act 1967.",
      image: '/bem.png',
      link: 'https://engineer.org.my/public/Engineers/Index/240554',
    },
  ];

  return (
    <section id="achievements" className='w-full relative mb-20 sm:px-10 px-5  sm:pt-[8rem] pt-[6rem]'>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className='bg-gradient-to-r from-buttonprimary to-buttonsecondary relative w-full flex text-center items-center justify-center sm:p-2 p-1 sm:mb-20 mb-8 rounded-full'
      >
        <div className='bg-black rounded-full w-full px-4'>
          <h2 className='sm:text-3xl text-sm font-bold text-white w-full sm:py-10 py-4'>
            Certifications and Award-Winning Accomplishments
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {items.map((item, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            className="flex flex-col  items-center w-full sm:w-[30%] rounded-2xl border border-b-0 border-slate-700 "
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
            }}
          >
            <div className='w-full'>
              <Image
                alt={item.title}
                src={item.image}
                width={1000}
                height={1000}
                className="rounded-t-2xl h-[10rem] sm:h-[10rem] w-full shadow-lg"
              />
            </div>
            <div className="w-full flex flex-col space-y-4">
              <div className="w-full font-bold flex flex-col space-y-2">
                <div className="w-full py-0.5  bg-gradient-to-r from-buttonprimary to-buttonsecondary"></div>
                <h3 className="text-white px-4 text-center">{item.title}</h3>
                <div className="w-full py-0.5  bg-gradient-to-r from-buttonprimary to-buttonsecondary"></div>
              </div>
              <div className="w-full text-justify px-4">
                <p className="text-white text-xs w-full">{item.description}</p>
              </div>
              <div className="w-full flex justify-end px-4 py-4">
                <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white backdrop-blur-3xl">
                    See more
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Achievements;
