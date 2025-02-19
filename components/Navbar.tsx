"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 sm:max-w-fit max-w-[80%] mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" href="/" />
        <MenuItem setActive={setActive} active={active} item="Experiences" href="#experiences" />
        <MenuItem setActive={setActive} active={active} item="Achievements" href="#achievements" />
      </Menu>
    </div>
  );
};

export default Navbar;
