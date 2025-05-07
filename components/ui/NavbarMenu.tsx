"use client";
import React from "react";
import Link from "next/link";



export const MenuItem = ({
  setActive,
  item,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative sm:text-lg text-sm w-fit"
    >
      <Link
        href={href}
        className="w-fit text-neutral-700 dark:text-neutral-200 hover:text-black cursor-pointer"
      >
        {item}
      </Link>
      
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative sm:rounded-full rounded-0 border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8 py-6 "
    >
      <div className="flex flex-row sm:space-x-8 space-x-4 overflow-x-auto scrollbar-hide">{children}</div>
    </nav>
  );
};
