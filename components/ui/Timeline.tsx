"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company: string;
  year: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative w-full bg-transparent  font-sans md:px-10 "
      ref={containerRef}
    >
      <div className='bg-gradient-to-r from-buttonprimary to-buttonsecondary relative w-full flex text-center items-center justify-center sm:p-2 p-1 rounded-full'>
        <div className='bg-black rounded-full w-full px-4'>
          <h2 className='sm:text-3xl text-sm font-bold text-white w-full sm:py-10 py-4'>
              {/* Notable Accomplishments: Trainings, Certifications & Awards */}
              Career Milestones: A Journey Through My Work Experiences
          </h2>

        </div>
      </div>
      {/* <BackgroundGradient className="rounded-[22px] bg-black text-center w-full">
        <div className="flex justify-center items-center w-full px-2  sm:py-8 py-4">
          <h2 className="font-bold sm:text-3xl text-sm text-white max-w-full">
            Career Milestones: A Journey Through My Work Experiences
          </h2>
        </div>
      </BackgroundGradient> */}
      

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-tertiary border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="hidden md:block text-xl md:pl-20 sm:text-3xl font-bold text-white ">
                  {item.title}
                </h3>
                <p className="hidden md:block text-xs md:pl-20 sm:text-sm text-white ">
                  {item.company}
                </p>
                <p className="hidden md:block text-xs md:pl-20 sm:text-sm  text-white ">
                  {item.year}
                </p>
              </div>
              
            </div>

            <div className="relative pl-20 pr-4 md:pl-0 w-full space-y-4">
              <h3 className="md:hidden block text-xl  text-left font-bold text-white">
                {item.title}
              </h3>
              <p className="md:hidden block text-xs text-left  text-white">
                {item.company}
              </p>
              <p className="md:hidden block text-xs  text-left  text-white">
                {item.year}
              </p>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="h-full  inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 bg-tertiary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
