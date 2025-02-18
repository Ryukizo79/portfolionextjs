import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Self Portfolio',
    description:
      'Developed a dynamic and interactive portfolio website using Next.js and Aceternity UI to showcase personal projects, skills, and professional experience.',
    image: '/portfolio web.png',
    link: 'https://rakinportfolio.vercel.app/',
  },
  {
    title: 'Document Verification Using Blockchain',
    description:
      'Effectively detect and identify any fraud or modifications made to original files, including the slightest changes, ensuring data integrity and security.',
    image: '/blockchain.png',
    link: 'https://www.researchgate.net/publication/368491012_Design_a_Document_Verification_System_Based_on_Blockchain_Technology',
  },
  {
    title: 'Internet of Things (IoT) Door Lock System',
    description:
      'System includes NFC sensors, mobile application developed using MIT App Inventor and lock actuator consist of using Arduino UNO.',
    image: '/tsdweb.png',
    link: 'https://iotdoorlock.com',
  },
  {
    title: 'Spring Boot Workshop (Iverson)',
    description:
      'Learning Java and Spring Boot is key to building enterprise APIs, with Java’s OOP foundation and Spring Boot’s simplified backend development and API integration.',
    image: '/springboot cert.png',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7146900189465751553/',
  },
  {
    title: 'HTML, CSS and Javascript (Iverson)',
    description:
      'Learning HTML, CSS, and JavaScript is essential for building enterprise applications. HTML structures the web pages, CSS styles them, and JavaScript adds interactivity.',
    image: '/html cert.png',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7148888671570583554/',
  },
  {
    title: 'AWS re/Start Graduate',
    description:
      'Learning the fundamentals of AWS involves understanding key cloud concepts, such as computing, storage, networking, and security. ',
    image: '/aws cert.png',
    link: 'https://www.credly.com/badges/a1d1709c-bad4-43bb-9d7a-05d3ad3bfad6/linked_in?t=sjj7rt',
  },
];

// Function to split projects into chunks of 3
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return array.length 
    ? [array.slice(0, size), ...chunkArray(array.slice(size), size)]
    : [];
};

const Projects = () => {
  const projectRows = chunkArray(projects, 3);

  return (
    <section
      className='relative flex flex-col justify-center items-center w-full space-y-14 mb-20 sm:px-10 px-5'
      id='projects'
    >
      <h2 className='sm:text-3xl text-sm font-bold text-white max-w-full sm:py-10 py-4 text-center'>
        {/* Educational Projects: Applied Knowledge in Action */}
        Learning & Legacy: Projects, Certifications, and Award-Winning Accomplishments
      </h2>
      <div className='w-full flex flex-col justify-center items-center space-y-4'>
        {projectRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className='w-full flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-4'
          >
            {row.map((project, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-center w-full sm:w-1/3 relative rounded-2xl border border-b-0 border-slate-700 sm:px-8 px-4 py-6'
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900))',
                }}
              >
                <div>
                  <Image
                    alt={project.title}
                    src={project.image}
                    width={1000}
                    height={1000}
                    className='rounded-lg  h-[10rem] sm:h-[10rem] w-[20rem] shadow-lg'
                  />
                </div>
                <div className='w-full flex flex-col space-y-4 mt-2'>
                  <div className='w-full font-bold'>
                    <h3>{project.title}</h3>
                  </div>
                  <div className='w-full text-justify'>
                    <p className='text-white text-xs w-full'>{project.description}</p>
                  </div>
                  <div className='w-full flex justify-end'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                    >
                      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 text-xs font-medium text-white backdrop-blur-3xl'>
                        See more
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
