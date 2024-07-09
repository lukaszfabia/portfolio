"use client";

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Href } from '../../lib/href';
import LangToggler from './ui/togglers/langToggler';
import { MenuButton } from './ui/buttons/buttons';
import { getNavbarLinks } from '../../lib/scripts/getProps';

const WrapLink: FC<{ hrefs: Href[], setMenuOpen: (menuOpen: boolean) => void }> = ({ hrefs, setMenuOpen }) => {
    return (
        <>
            {hrefs.map((href: Href, key: number) => (
                <React.Fragment key={key}>
                    <li onClick={() => {
                        setMenuOpen(false);
                    }}>
                        <Link href={href.link} className="block py-2 px-3 md:p-0 ms-7 text-lg transition-transform ease-in-out hover:translate-x-1 dark:hover:text-gray-300 hover:text-gray-700 duration-300">{href.key}</Link>
                    </li>
                </React.Fragment>
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
        <header className="sticky top-0 z-20 lg:h-16 backdrop-blur-md h-12">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-3 py-2">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex-shrink-0">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <p className="text-2xl transition-all ease-in-out duration-300 dark:hover:text-gray-300 hover:text-gray-700 hover:translate-x-1">lukaszfabia.dev</p>
                        </button>
                    </div>
                    {/* nav links */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <WrapLink hrefs={hrefs} setMenuOpen={setMenuOpen} />
                        </ul>
                    </div>
                    {/* lang toggler */}
                    <div className="flex items-center">
                        <LangToggler />
                        <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} /></div>
                </div>
            </nav>
            {/* mobile */}
            <div
                className={`md:hidden backdrop-blur-md transition-opacity ease-in-out duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'} ${!menuOpen ? 'pointer-events-none' : ''}`}
            >
                <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-[100vh] overflow-y-auto">
                    <WrapLink hrefs={hrefs} setMenuOpen={setMenuOpen} />
                </ul>
            </div>
        </header>

    );
}
