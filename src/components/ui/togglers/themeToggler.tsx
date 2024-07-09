'use client';

import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

export default function ThemeToggler() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => setMounted(true), []);

    const isDarkMode = theme === 'dark';

    if (!mounted) return null;

    return (
        <button
            className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-gray-400 dark:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-blue-500 transform hover:scale-110 transition ease-in-out duration-300"
            onClick={() => {
                setTheme(isDarkMode ? 'light' : 'dark');
            }}
            suppressHydrationWarning
        >
            <FontAwesomeIcon icon={isDarkMode ? solidMoon : regularMoon} className="w-5 h-5" />
            <span className='sr-only'>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
    );
}
