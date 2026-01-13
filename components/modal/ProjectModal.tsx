// components/ProjectModal.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { 
  MdOutlineWorkOutline,
  MdOutlineLightbulb,
  MdOutlineCode,
  MdOutlineStarOutline
} from "react-icons/md";

type ModalData = {
  title: string;
  useCase: React.ReactNode[];
  solution: React.ReactNode[];
  techStack: React.ReactNode[];
  skills: React.ReactNode[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: ModalData | null;
};

const sectionConfig: Record<
  string,
  {
    icon: JSX.Element;
    bg: string;
    border: string;
    title: string;
  }
> = {
  "Problem Statement": {
    icon: <MdOutlineWorkOutline className="text-cyan-400" />,
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    title: "text-cyan-400",
  },
  Solution: {
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
};


export default function ProjectModal({ open, onClose, data }: Props) {
  if (!data) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[95%] bg-slate-900 text-white rounded-xl p-6 space-y-4 border border-slate-700 sm:max-h-[500px] max-h-[700px]"
          >
            <div className="flex justify-between items-center">
              <h3 className="sm:text-xl text-lg font-bold">{data.title}</h3>
              <button
                onClick={onClose}
                className="text-3xl text-white hover:text-cyan-500"
              >
                <IoCloseCircle />
              </button>
            </div>
            <div className="w-full py-0.5 rounded-full bg-gradient-to-r from-buttonprimary to-buttonsecondary"></div>
            <div className="w-full flex flex-col sm:max-h-[400px] max-h-[500px] overflow-y-auto gap-4">
                <div className="w-full flex sm:flex-row flex-col justify-center gap-4">
                    <Section title="Problem Statement" items={data.useCase} />
                    <Section title="Solution" items={data.solution} />
                </div>
                <div className="w-full flex sm:flex-row flex-col justify-center gap-4">
                    <Section title="Tech Stack" items={data.techStack} />
                    <Section title="Skills" items={data.skills} />
                </div>
            </div>

            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function Section({ title, items }: { title: string; items: React.ReactNode[] }) {
  const config = sectionConfig[title];

  return (
    <div
      className={`w-full flex flex-col gap-3 rounded-lg p-4 border ${config.bg} ${config.border}`}
    >
      <div className="flex flex-row gap-2 items-center">
        <span className="text-lg">{config.icon}</span>
        <h4 className={`font-semibold text-sm ${config.title}`}>
          {title}
        </h4>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-200">
        {items.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
}



