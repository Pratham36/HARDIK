import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Button } from '../components/Button';
//import bg from '../assets/background.png';

function Hero() {

    return (
        <>
            <div className="relative min-h-screen absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://framerusercontent.com/images/Pz5JNJBuXaAmU8x4qfQyKphOw3I.png')` }}>

                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(20, 20, 20, 0.82)', opacity: 1 }}></div>
                <Header />
                <main className="relative z-10 container px-4 sm:px-6 lg:px-8 pt-3 text-left">

                    <motion.div
                        className="flex items-center justify-start gap-3 w-max mx-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut", delay: 1.0 }}
                    >
                        <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
                        <p className="text-white font-medium text-xs sm:text-sm md:text-lg tracking-tight lowercase"
                            style={{ letterSpacing: '-0.01em', lineHeight: '130%' }}>clerk template</p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut", delay: 0.7 }}
                    >
                        <h1
                            className="font-extrabold font-stretch-ultra-condensed text-white uppercase mb-4 sm:mb-6 mt-6 sm:mt-10 tracking-tighter hero-text text-6xl sm:text-lg md:text-2xl lg:text-6xl xl:text-7xl">
                            DESIGN THAT
                            <span style={{ fontFamily: 'Instrument Serif' }}
                                className="font-normal italic text-[#ffe042] lowercase">(drives)</span><br />
                            YOUR VISION FORWARD<span className="text-yellow-400">.</span>
                        </h1>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2.0, ease: "easeInOut", delay: 1.0 }}
                    >
                        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                            <Button>Get in touch</Button>

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="flex -space-x-3 sm:-space-x-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                                        <img src="https://framerusercontent.com/images/h3U6pjuDtHX0qfalFd0cubo0EE.png" alt=""
                                            className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                                        <img src="https://framerusercontent.com/images/jnzj6DhB9OJ49ssWzhuuyhadDQ.jpg" alt=""
                                            className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                                        <img src="https://framerusercontent.com/images/yC0ZUJADL40zmNXbIc3xbXRN80.png" alt=""
                                            className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="block gap-2 text-white text-center sm:text-left">
                                    <div className="flex justify-center sm:justify-start text-yellow-400">
                                        ★★★★★
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base">
                                        <span className="font-bold">5.0</span>/5 - Based on 256 reviews
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-white mt-6 sm:mt-8 w-full sm:w-[567px] font-bold text-center sm:text-left text-xs sm:text-sm md:text-base tracking-tight">
                            ELEVATE YOUR FREELANCE CAREER WITH A PORTFOLIO THAT<br /> STANDS OUT. IMPRESS POTENTIAL CLIENTS WITH A
                            PROFESSIONAL, SLEEK, AND CUSTOMIZABLE WEBSITE BUILT TO CONVERT.
                        </p>
                    </motion.div>

                </main>
            </div>

        </>
    );
}

export default Hero;