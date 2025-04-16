"use client";

import React, { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TimelineProps } from "../lib/timeline";
import { getTimelineProps } from "../lib/scripts/get-props";
import { LangProps } from "@/app/api/stats/route";
import { LanguageBars } from "./ui/bars/tech-bar";
import { TechIcons } from "@/lib/constants/aboutme/techstack";
import Timeline from "./ui/time/timeline";

export const AboutMe: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [popularTechs, setPopularTechs] = useState<LangProps[]>([]);

    useEffect(() => {
        const f = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch('/api/stats');
                setPopularTechs(await res.json());
            } catch {
                setError("Failed to fetch techs");
            } finally {
                setIsLoading(false);
            }
        };

        f();
    }, []);

    const t = useTranslations<string>('AboutMe');
    const studies: TimelineProps = getTimelineProps(t, 'studies');
    const props: TimelineProps[] = [studies];

    const fadeProps = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section
            className="relative flex flex-col-reverse md:flex-row justify-center items-center min-h-screen md:px-20 px-6 bg-navy overflow-hidden"
            id={t("id")}
            aria-labelledby={t("id")}
        >
            <div className="z-10 w-full flex flex-col gap-12 text-white">
                <div className="flex flex-col lg:flex-row gap-12">

                    <motion.div className="flex-1 space-y-5" {...fadeProps}>
                        <h1
                            className="lg:text-7xl md:text-5xl text-3xl font-bold font-rubik leading-tight"
                            aria-level={1}
                            role="heading"
                        >
                            {t('exptitle')}
                        </h1>
                        <Timeline props={props} />
                    </motion.div>

                    <motion.div className="flex-1 space-y-10" {...fadeProps}>
                        <div className="text-right">
                            <h2
                                className="md:text-xl text-md uppercase tracking-widest text-gray-300"
                                aria-level={2}
                                role="heading"
                            >
                                {t("subtitle")}
                            </h2>
                            <h1
                                className="lg:text-7xl md:text-5xl text-3xl font-bold font-rubik leading-tight"
                                aria-level={1}
                                role="heading"
                            >
                                {t("title")}
                            </h1>
                        </div>

                        <motion.div className="border-l-4 border-gray-300 pl-6" {...fadeProps}>
                            <p
                                className="lg:text-lg italic text-gray-200"
                                aria-describedby="aboutme-content"
                            >
                                {t("content")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-8"
                            {...fadeProps}
                        >
                            <h2
                                className="md:text-base text-sm uppercase tracking-widest text-white/80"
                                aria-level={2}
                                role="heading"
                            >
                                {t('mystacksubtitle')}
                            </h2>
                            <h1
                                className="lg:text-3xl md:text-2xl text-xl font-bold font-rubik text-white mt-1"
                                aria-level={1}
                                role="heading"
                            >
                                {t('mystacktitle')}
                            </h1>

                            <div className="flex flex-col lg:flex-row gap-6 mt-6">
                                <div className="flex-1">
                                    <LanguageBars data={popularTechs} error={error} isLoading={isLoading} />
                                </div>
                                <div className="flex-1 text-white/90 font-light leading-relaxed flex items-center gap-5 justify-center">
                                    <TechIcons />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none layer3 bg-cover bg-center opacity-20" />
        </section>
    );
};
