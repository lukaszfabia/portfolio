"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const Footer: FC = () => {
    const t = useTranslations<string>('Footer');

    return (
        <footer className="rounded-lg m-4 text-gray-700 dark:text-gray-200">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
                <span className="text-sm lg:text-right text-center mb-2 md:mb-0 md:mr-4">
                    &copy; 2023 <Link href="/" className="font-mono"><b className="transition-all ease-in-out duration-300 hover:text-gray-500">
                        Łukasz Fabia</b></Link>. {t("rights")}
                </span>
            </div>
        </footer>
    );
};