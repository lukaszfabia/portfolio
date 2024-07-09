import { useTranslations } from "next-intl"
import { SectionWrapper } from "./wrapper";
import React, { FC } from "react";
import Link from "next/link";
import { Social, Socials } from "../../lib/social";
import { socials } from "../../constants/contact/socials";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const MySocials: FC<Socials> = ({ text, socials }) => {
    return (
        <div className="flex-1">
            <motion.div className="text-4xl font-semibold font-poppins text-center text-gray-500">
                {text.split("").map((letter: string, index: number) => (
                    <motion.span key={index}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                            duration: 3, repeat: Infinity, delay: index * 0.1
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <div className="flex items-center justify-center py-5">
                {socials.map((social: Social, index: number) => (
                    <React.Fragment key={index}>
                        <Link key={index} href={social.link} className="m-2 text-center transition-all ease-in-out duration-300 hover:text-gray-500 hover:scale-110" target="_blank">
                            {social.icon}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}


const MailToMe: FC<{ linkText: string }> = ({ linkText }) => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <motion.a whileHover={{ scale: 1.1, background: 'linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                href="mailto:ufabia03@gmail.com" className="flex items-center justify-center text-white bg-blue-500 text-center rounded-full lg:h-1/3 lg:w-1/3 mb-10 lg:p-0 p-4">
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 mr-2" />
                {linkText}
            </motion.a>
        </div>
    );
}


export const Contact: FC = () => {
    const t = useTranslations<string>('Contact');
    const linkText: string = t('linkText');

    return (
        <SectionWrapper t={t} gradient="from-rose-500 via-pink-700 to-indigo-500">
            <div className="lg:flex flex-row">
                <MailToMe linkText={linkText} />
                <MySocials text={t('available')} socials={socials} />

            </div>
        </SectionWrapper>
    )
}