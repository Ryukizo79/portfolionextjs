import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-b-0 border-slate-700 justify-between flex flex-col ",
        className
      )}
      style={{
        background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
      }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 sm:p-8 py-4 px-8">
        {icon}
        <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}  
        </div>
        <div className="text-justify text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </a>
  );
};
