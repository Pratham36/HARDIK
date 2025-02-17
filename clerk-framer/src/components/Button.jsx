"use client";
import { motion } from "framer-motion";

const backgroundVariant = {
  initial: {
    backgroundColor: "#ffe042",
  },
  hover: {
    backgroundColor: "#ffff",
    transition: {
      delay: 0.01,
      duration: 0.2,
      
    },
  },
  animate: {
    backgroundColor: "#ffe042",
    transition: {
      delay: 0.01,
      duration: 0.2,
    
    },
  },
};

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.2,
    
    },
  },
  animate: {
    y: 0,
    transition: {
      duration:  0.2,
     
    },
  },
};

const secondTextVariant = {
  initial: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration:  0.2,
    },
  },
  animate: {
    y: 30,
    transition: {
      duration: 0.2,
    },
  },
};

export const Button = ({ children }) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={backgroundVariant}
      className="inline-flex items-center bg-yellow-400 text-black px-20 py-2 rounded-full hover:bg-yellow-500 transition-colors gap-2">
      <div className="overflow-hidden relative">
        <motion.p
          variants={firstTextVariant}
          className="text-black font-medium" style={{fontSize: "19px"}}
        >
          {children}
        </motion.p>
        <motion.p
          variants={secondTextVariant}
          aria-hidden
          className="absolute top-0 left-0 text-black font-medium" style={{fontSize: "19px"}}
        >
          {children}
        </motion.p>
      </div>
    </motion.button>
   
  );
};