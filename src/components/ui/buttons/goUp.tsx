'use client';

import { FC, useEffect, useState } from "react";

export const GoUp: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = document.documentElement.scrollTop;
            setVisible(scrolled > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`animate-bounce fixed bottom-4 left-4 z-50 p-2 w-10 h-10 ring-2 bg-gray-100 dark:bg-gray-800 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center transform transition-opacity duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-900 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <svg className="w-6 h-6 dark:text-white text-black " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 10l-7-7m0 0l-7 7m7-7v18"></path>
            </svg>
        </button>
    )
}