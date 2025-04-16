import Link from "next/link";
import { FC } from "react";
import { socials } from "@/lib/constants/contact/socials";
import { Social } from "@/lib/social";
import { useTranslations } from "next-intl";

export const Footer: FC = () => {
    const t = useTranslations("Contact")
    return (
        <footer className="text-gray-200 bg-[#102c44] font-rubik max-sm:pt-10" id={t("id")} aria-labelledby={t("footer")}>
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center space-y-5">
                <div className="flex items-center justify-center">
                    {socials.map((social: Social) => (
                        <Link
                            key={social.name}
                            href={social.link}
                            className="m-2 text-center transition-all ease-in-out duration-300 hover:text-gray-500 hover:scale-110"
                            target="_blank"
                            aria-label={`Follow me on ${social.name}`}
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>

                <span className="text-sm lg:text-right text-center flex space-x-2">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <Link href="/" aria-label="Go to homepage">
                        <p className="font-bold transition-all ease-in-out duration-300 hover:text-gray-50">
                            Łukasz Fabia
                        </p>
                    </Link>
                </span>
            </div>
        </footer>
    );
};
