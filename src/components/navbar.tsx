"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Href } from '../lib/href';
import LangToggler from './ui/togglers/lang-toggler';
import { MenuButton } from './ui/buttons/buttons';
import { getNavbarLinks } from '../lib/scripts/get-props';

const WrapLink: FC<{ hrefs: Href[], setMenuOpen: (menuOpen: boolean) => void, className?: string }> = ({ hrefs, setMenuOpen, className = "" }) => {
    return (
        <>
            {hrefs.map((href: Href) => (
                <li key={href.key} onClick={() => {
                    setMenuOpen(false);
                }}
                >
                    <Link href={href.link} className={`underline-animation transition-colors duration-200 ${className}`}>{href.key}</Link>
                </li>
            ))}
        </>
    )
}


export const Navbar: FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = (): void => setMenuOpen(!menuOpen);
    const t = useTranslations<string>('Navbar');
    const hrefs: Href[] = getNavbarLinks(t);

    return (
        <header className="fixed top-0 w-full z-50 h-20">
            <div className="px-6 md:px-20 py-5 backdrop-blur-md bg-gray/70">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-rubik">
                        <Link href="/">lukaszfabia.dev</Link>
                    </div>
                    <div className="hidden md:flex gap-x-8 font-roboto">
                        <ul className="flex gap-x-6 items-center text-lg">
                            <WrapLink hrefs={hrefs} setMenuOpen={setMenuOpen} />
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <LangToggler />
                        <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
                    </div>
                </nav>
            </div>

            <div
                className={`md:hidden transition-opacity ease-in-out duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } bg-gray/70`}
            >
                <ul className="ml-2 px-2 pt-2 pb-3 space-y-1 sm:px-3 h-[100vh] overflow-y-auto">
                    <WrapLink hrefs={hrefs} setMenuOpen={setMenuOpen} className="w-fit block text-lg" />
                </ul>
            </div>
        </header>


    );
};


export default Navbar;