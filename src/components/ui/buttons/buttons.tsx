'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { faBars, faClose, faSpinner, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { handleDownload } from "../../../lib/scripts/download-cv";


export const CvButton: FC<{ text: string, afterDownload: string }> = ({ text, afterDownload }) => {
    const [download, setDownload] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const lang: string = usePathname().substring(1); // to remove slash

    return (
        <button
            disabled
            id="cvButton"
            onClick={(e) => handleDownload(e, setLoading, setDownload, lang)}
            className="relative group flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-black overflow-hidden text-black font-medium z-10 pointer-events-auto"
            aria-live="polite"
            aria-label={text}
        >
            <span className="z-10 group-hover:text-gray-50">
                {loading ? text : download ? afterDownload : text}
            </span>

            <FontAwesomeIcon
                icon={loading ? faSpinner : download ? faCheck : faArrowRight}
                size="1x"
                className={`h-4 w-4 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-50 ${loading ? 'animate-spin' : ''}`}
                aria-hidden="true"
            />

            <span className="absolute inset-0 bg-navy translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
        </button>
    );
};


export const MenuButton: FC<{ toggleMenu: () => void, menuOpen: boolean }> = ({ toggleMenu, menuOpen }) => {
    return (
        <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy"
            aria-controls="dropdown"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close main menu" : "Open main menu"}
        >
            <span className="sr-only">{menuOpen ? "Close main menu" : "Open main menu"}</span>
            <FontAwesomeIcon icon={menuOpen ? faClose : faBars} className="text-black" />
        </button>
    );
};
