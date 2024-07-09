'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { faBars, faClose, faPaperPlane, faSpinner, faCheck, faHashtag, faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleDownload } from "../../../../lib/scripts/handleCvDownload";



export const ContactButton: FC<{ text: string }> = ({ text }) => {
    return (
        <button className="w-32 p-3 shadow-lg bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-black rounded-xl transition-all ease-in-out duration-300 hover:ring hover:ring-indigo-400 dark:hover:ring-indigo-900">
            <Link href="#contact">
                {text}
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 ml-1" />
            </Link>
        </button>
    )
}


export const CvButton: FC<{ text: string, afterDownload: string }> = ({ text, afterDownload }) => {
    const [download, setDownload] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const lang: string = usePathname().substring(1); // to remove slash

    return (
        <button
            id="cvButton"
            onClick={(e) => handleDownload(e, setLoading, setDownload, lang)}
            className="w-32 mx-4 text-white p-3 bg-indigo-600 rounded-xl shadow-lg transition-all ease-in-out duration-300 hover:translate-x-3"
            disabled={loading}
        >
            {loading && <>
                <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 mr-1 animate-spin" />
                {text}
            </>}
            {download && !loading && <>
                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mr-1" />
                {afterDownload}
            </>}
            {!download && !loading && <>
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-1" />
                {text}
            </>}
        </button>
    );
};


export const AnchorButton: FC<{ href: string }> = ({ href }) => {
    return (
        <Link href={`#${href}`} className="lg:text-5xl text-4xl transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-100 ml-1">
            <FontAwesomeIcon icon={faHashtag} className="lg:inline hidden" />
        </Link>
    )
}


export const MenuButton: FC<{ toggleMenu: () => void, menuOpen: boolean }> = ({ toggleMenu, menuOpen }) => {
    return (
        <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="dropdown"
            aria-expanded={menuOpen}
        >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={menuOpen ? faClose : faBars} className="text-black dark:text-white" />
        </button>
    )
}