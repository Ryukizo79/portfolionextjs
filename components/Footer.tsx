"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="w-full relative bg-slate-900">
        <div className=" text-gray-300 py-10">
            <div className="max-w-7xl mx-auto text-center text-sm">
                © {currentYear} Dhiyaul Rakin. All rights reserved.
            </div>
        </div>
    </section>
   
  );
};

export default Footer;
