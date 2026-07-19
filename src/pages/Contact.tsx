import { useState } from "react";
import { socialMediaUrl } from "../Details";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const emailAddr = socialMediaUrl.email.replace("mailto:", "");

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddr);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.prompt("Copy email:", emailAddr);
        }
    };

    const contactMethods = [
        {
            name: "Email",
            value: emailAddr,
            link: socialMediaUrl.email,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            ),
            color: "from-cyan-500 to-sky-500",
            canCopy: true,
        },
        {
            name: "LinkedIn",
            value: "Connect with me",
            link: socialMediaUrl.linkedin,
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "GitHub",
            value: "Check out my work",
            link: socialMediaUrl.github,
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
            ),
            color: "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800",
        },
    ];

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {contactMethods.map((method, idx) => (
                        <div
                            key={method.name}
                            className="glass-card p-6 text-center group animate-slide-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {method.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {method.name}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {method.value}
                            </p>

                            <div className="flex flex-col gap-2">
                                <a
                                    href={method.link}
                                    target={method.name !== "Email" ? "_blank" : undefined}
                                    rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
                                    className="btn-gradient text-sm"
                                >
                                    {method.name === "Email" ? "Send Email" : `Visit ${method.name}`}
                                </a>

                                {method.canCopy && (
                                    <button
                                        onClick={copyEmail}
                                        className="btn-outline text-sm relative"
                                    >
                                        {copied ? (
                                            <>
                                                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy Address
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
