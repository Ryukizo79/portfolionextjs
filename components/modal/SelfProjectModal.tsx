"use client";

import React, { JSX } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import {
  MdOutlineLightbulb,
  MdOutlineCode,
  MdOutlineStarOutline,
  MdOutlineLink,
} from "react-icons/md";

// Define the structure for project modal data
export type SelfProjectData = {
  title: string;
  description: string;
  link?: string;
  techStack: { name: string; icon: React.ReactNode; color?: string }[];
  skills?: React.ReactNode[];
};

interface SelfProjectModalProps {
  open: boolean;
  data: SelfProjectData | null;
  onClose: () => void;
}

const sectionConfig: Record<
  string,
  { icon: JSX.Element; bg: string; border: string; title: string }
> = {
  Description: {
    icon: <MdOutlineLightbulb className="text-yellow-400" />,
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    title: "text-yellow-400",
  },
  "Tech Stack": {
    icon: <MdOutlineCode className="text-emerald-400" />,
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    title: "text-emerald-400",
  },
  Skills: {
    icon: <MdOutlineStarOutline className="text-violet-400" />,
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    title: "text-violet-400",
  },
  Link: {
    icon: <MdOutlineLink className="text-cyan-400" />,
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    title: "text-cyan-400",
  },
};

export default function SelfProjectModal({ open, data, onClose }: SelfProjectModalProps) {
  if (!data) return null;

  // Collect all sections dynamically
  const sections: { title: string; items: React.ReactNode[] }[] = [
    { title: "Description", items: [<p key="desc">{data.description}</p>] },
    { 
      title: "Tech Stack", 
      items: data.techStack.map((t, idx) => (
        <div 
          key={idx} 
          className=" flex flex-col justify-center items-center gap-2"
          style={{ color: t.color || "white" }}
        >
            <div className="text-3xl">
                {t.icon}
            </div>
            <div className="text-xs">
                {t.name}
            </div>
        </div>
      )) 
    },
  ];

  if (data.skills) {
    sections.push({ title: "Skills", items: data.skills });
  }

  if (data.link) {
    sections.push({ 
      title: "Link", 
      items: [<a 
                key="link" 
                href={data.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline text-cyan-400"
              >
                {data.link}
              </a>] 
    });
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="max-w-5xl w-full bg-slate-900 text-white rounded-xl p-6 space-y-4 border border-slate-700 sm:max-h-[500px] max-h-[700px] overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="sm:text-xl text-lg font-bold">{data.title}</h3>
              <button
                onClick={onClose}
                className="text-3xl text-white hover:text-cyan-500"
              >
                <IoCloseCircle />
              </button>
            </div>

            {/* Divider */}
            <div className="w-full py-0.5 rounded-full bg-gradient-to-r from-buttonprimary to-buttonsecondary" />

            {/* Sections in two-column layout */}
            <div className="w-full flex flex-col sm:max-h-[400px] max-h-[500px] overflow-y-auto gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sections.map((sec, idx) => (
                  <Section key={idx} title={sec.title} items={sec.items} isTechStack={sec.title === "Tech Stack"} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, items, isTechStack }: { title: string; items: React.ReactNode[]; isTechStack?: boolean }) {
  const config = sectionConfig[title];
  
  // For skills, show as pills
  const isSkills = title === "Skills";

  return (
    <div className={`w-full flex flex-col gap-3 rounded-lg p-4 border ${config.bg} ${config.border}`}>
        <div className="flex flex-row gap-2 items-center">
            <span className="text-lg">{config.icon}</span>
            <h4 className={`font-semibold text-sm ${config.title}`}>{title}</h4>
        </div>
        
        <div
            className={
                isTechStack
                ? "flex flex-wrap justify-center gap-4" // <-- centers all tech items horizontally
                : isSkills
                    ? "flex flex-wrap gap-2"
                    : "flex flex-col gap-2 text-sm text-gray-200"
            }
        >
            {items.map((item, idx) => (
            <div
                key={idx}
                className={
                isSkills
                    ? "bg-violet-600/30 text-white text-xs font-medium px-3 py-1 rounded-full"
                    : undefined
                }
            >
                {item}
            </div>
            ))}
        </div>
    </div>
  );
}

