import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { personalDetails, socialMediaUrl } from "../Details.js";

export default function Home() {
    const { name, tagline, img, about } = personalDetails;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const roles = ["Software Developer", "AI Enthusiast", "Problem Solver", "Full-Stack Engineer"];

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[currentIndex];
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex <= currentRole.length) {
                setDisplayedText(currentRole.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <main className="min-h-screen pt-20 sm:pt-24">
            {/* Hero Section */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
                        {/* Greeting */}
                        <div className="space-y-2">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                                Hi{" "}
                                <span className="inline-block animate-wave origin-bottom-right">
                                    👋
                                </span>
                            </h1>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                                I'm <span className="gradient-text">{name}</span>
                            </h1>
                        </div>

                        {/* Typewriter Effect */}
                        <div className="h-12 sm:h-14">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </h2>
                        </div>

                        {/* About Text */}
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                            {about}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/contact"
                                className="btn-gradient inline-flex items-center space-x-2"
                            >
                                <span>Contact Me</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/resume"
                                className="btn-outline inline-flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>View Resume</span>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 pt-4">
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                                Connect:
                            </span>
                            <a
                                href={socialMediaUrl.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a
                                href={socialMediaUrl.email}
                                className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Image with Glassmorphism */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-up">
                        <div className="relative">
                            {/* Gradient Background Blob */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

                            {/* Image Container */}
                            <div className="relative glass-card p-2">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-full max-w-md lg:max-w-lg h-auto object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 glass-card px-6 py-3 animate-float">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        Available for opportunities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
