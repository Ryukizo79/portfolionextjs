"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={cn(
        "fixed sm:top-5 top-0  inset-x-0 sm:max-w-fit max-w-full mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" href="/" />
        <MenuItem setActive={setActive} active={active} item="Experiences" href="#experiences" />
        <MenuItem setActive={setActive} active={active} item="Projects" href="#projects" />
        <MenuItem setActive={setActive} active={active} item="Achievements" href="#achievements" />
      </Menu>
    </motion.div>
  );
};

export default Navbar;
