'use client';

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";

export const GoUp: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = document.documentElement.scrollTop;
            setVisible(scrolled > 300);  // Przyciski stają się widoczne po przewinięciu 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`animate-bounce fixed bottom-4 left-4 z-50 p-2 w-10 h-10 ring-2 bg-gray ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center transform transition-opacity ease-in-out hover:bg-coffee
            ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            aria-label="Scroll to top"
            aria-hidden={!visible}
        >
            <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
        </button>
    );
};
