import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
  visible: { filter: "blur(0px)", y: 0, opacity: 1 },
};

const Contact = () => {
    const text1 = "Our portfolio template is designed for freelancers whether you're a designer, developer, or creative professional.Fully responsive and easy to customize, it helps you showcase your work beautifully while focusing on growing your business and attracting new clients.";
   
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const words = text1.split(' ');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start((i) => ({
                        ...variants.visible,
                        transition: { ...transition, delay: i * 0.1 }
                    }));
                } else {
                    controls.start((i) => ({
                        ...variants.hidden,
                        transition: { ...transition, delay: i * 0.1 }
                    }));
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [controls]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <motion.section
                ref={sectionRef}
                initial="hidden"
                animate={controls}
                className="relative z-10 flex flex-col justify-center items-center text-center w-10/12"
            >
                <div className="flex items-center justify-center gap-3 w-max mx-auto mb-6">
                    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
                    <p className="text-black font-semibold text-xl tracking-tight lowercase"
                        style={{ letterSpacing: '-0.01em', lineHeight: '130%' }}>about clerk</p>
                    <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
                </div>
                <h2 className="text-black font-medium text-[40px] mt-10">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className="inline-block"
                            custom={index}
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            transition={{
                                ...transition,
                                delay: index * 0.01
                            }}
                            style={{ display: 'inline-block', marginRight: '0.25em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>

            </motion.section>
        </div>
    );
};

export default Contact;