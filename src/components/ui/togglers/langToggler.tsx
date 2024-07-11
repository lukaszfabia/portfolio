'use client';
import React, { FC, useState, useTransition } from 'react';
import { WrapFlagsProps, Flag } from '../../../lib/flag';
import { locales } from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { POL } from '../../../lib/constants/pol';
import { ENG } from '../../../lib/constants/eng';

const WrapFlags: FC<WrapFlagsProps> = ({ changeLanguage, availableLangs, flags }) => {
    return (
        <ul className="py-2 font-medium" role="none">
            {availableLangs.map((lang: string, index: number) => (
                <React.Fragment key={index}>
                    <li>
                        <button onClick={() => changeLanguage(lang)} className="block px-4 py-2 text-left hover:bg-gray-500 rounded dark:hover:bg-black dark:hover:text-white w-full transition-all ease-in-out duration-300">
                            {flags[index].flag}
                        </button>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
};


export default function LangToggler() {
    const [isPending, startTranstion] = useTransition();
    const router = useRouter();
    const path = usePathname();
    const [currentLang, setCurrentLang] = useState<string>(path.split('/')[1] || 'en');
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
    const flags: Flag[] = [
        { key: 0, flag: <ENG />, },
        { key: 1, flag: <POL />, }
    ];

    const changeLanguage = async (lang: string) => {
        startTranstion(() => {
            router.replace(`/${lang}`);
        });
        setCurrentLang(lang);
    }

    const matchLang = (lang: string) => {
        switch (lang) {
            case 'en':
                return <ENG />;
            case 'pl':
                return <POL />;
            default:
                return <ENG />;
        }
    }



    return (
        <div className="relative">
            <button
                onClick={() => setDropDownOpen(!dropDownOpen)}
                type="button"
                className="inline-flex mr-2 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition-all ease-in-out duration-300"
                aria-controls="language-dropdown-menu"
            >
                {matchLang(currentLang)}
            </button>
            <div className={`absolute backdrop-blur-md mr-2 z-50 top-10 right-0 mt-2 text-base list-none divide-y divide-gray-100 rounded-lg ${dropDownOpen ? 'block' : 'hidden'}`} id="language-dropdown-menu">
                <WrapFlags changeLanguage={changeLanguage} availableLangs={locales} flags={flags} />
            </div>
        </div >
    )
}