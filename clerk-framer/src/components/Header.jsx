import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Assuming 768px is the breakpoint for desktop
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="relative z-10 bg-transparent">
            <div className="container mx-auto px-2 py-4 flex justify-between items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 sm:h-10 md:h-12 lg:h-14"
                />
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
                            />
                        </svg>
                    )}
                </button>
                <nav className="hidden md:flex space-x-8 text-white font-extrabold">
                    <a
                        href="#home"
                        className="py-2 px-2 hover:text-yellow-400 rounded-xl"
                    >
                        HOME
                    </a>
                    <a
                        href="#portfolio"
                        className="py-2 px-2  hover:text-yellow-400 rounded-xl"
                    >
                        PORTFOLIO
                    </a>
                    <a
                        href="#contact"
                        className="py-2 px-2  hover:text-yellow-400 rounded-xl"
                    >
                        CONTACT
                    </a>
                </nav>
                <a
                    href="mailto:hello@clerk.com"
                    className="hidden md:flex bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-400 font-medium text-sm md:text-base lg:text-lg items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 md:w-5 md:h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    hello@clerk.com
                </a>
            </div>
            {isMenuOpen && (
                <div className="inset-0 bg-black opacity-90 pb-1 flex flex-col items-center justify-center space-y-8 text-white text-lg">
                   
                    <a href="#home" className="py-2 px-3 hover:bg-white hover:opacity-5 hover:text-white transition-colors duration-300 rounded-xl">HOME</a>
                    <a href="#portfolio" className="py-2 px-3 hover:bg-white hover:opacity-5 hover:text-white transition-colors duration-300 rounded-xl">PORTFOLIO</a>
                    <a href="#contact" className="py-2 px-3 hover:bg-white hover:opacity-5 hover:text-white transition-colors duration-300 rounded-xl">CONTACT</a>
                    <a href="mailto:hello@clerk.com" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        hello@clerk.com
                    </a>
                </div>
            )}
        </header>
    );
}

export default Header;