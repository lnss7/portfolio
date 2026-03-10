"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies } from "@/data";

const Technologies = () => {
  return (
    <div className="py-20 w-full" id="technologies">
      <h1 className="heading">
        Minha <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-7xl mx-auto mt-10 p-4">
        {technologies.map(({ name, img }) => (
          <motion.div
            id={name}
            key={img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#10132E] rounded-2xl border border-white/[0.1] hover:border-purple/[0.5] transition-colors duration-300 group w-[120px] md:w-[150px]"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 group-hover:drop-shadow-[0_0_15px_rgba(203,172,249,0.5)] transition-all duration-300">
              <Image
                src={img}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white-100/80 text-sm md:text-base font-medium text-center group-hover:text-purple transition-colors duration-300 mt-2">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
