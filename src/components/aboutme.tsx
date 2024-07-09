import { useTranslations } from "next-intl";
import { TimelineProps } from "../../lib/timeline";
import React, { FC } from "react";
import { SectionWrapper } from "./utils/wrapper";
import { TechStack } from "../../constants/aboutme/techstack";
import { getTimelineProps } from "../../lib/scripts/getProps";


const Timeline: FC<{ props: TimelineProps[] }> = ({ props }) => {
    return (
        <div className="lg:flex-1 lg:mt-0 mt-10">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {props.map((elem: TimelineProps, index: number) => (
                    <React.Fragment key={index}>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{`${elem.time.month} ${elem.time.year}`}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{elem.event}</h3>
                            <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">{elem.desc}</p>
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    )
}

const Content: FC<{ t: any }> = ({ t }) => {
    return (
        <div className="lg:flex-1 text-lg font-poppins text-center lg:text-left lg:pr-7">
            {t.rich('content', {
                n: (chunks: React.ReactNode) => (
                    <code className="bg-gradient-to-tr from-blue-900 to-red-500 dark:from-blue-500 dark:to-red-300 inline-block text-transparent bg-clip-text">{chunks}</code>
                ),
                f: (chunks: React.ReactNode) => (
                    <code className="bg-gradient-to-tr from-emerald-500 to-emerald-700 inline-block text-transparent bg-clip-text">{chunks}</code>
                ),
                d: (chunks: React.ReactNode) => (
                    <code className="bg-gradient-to-tr from-green-300 to-green-900 inline-block text-transparent bg-clip-text">{chunks}</code>
                ),
                postion: (chunks: React.ReactNode) => (
                    <code className="bg-gradient-to-tr from-rose-400 via-pink-700 to-indigo-800 inline-block text-transparent bg-clip-text">{chunks}</code>
                )
            })}
            <div className="lg:flex-1 lg:mt-0 py-10">
                <h1 className="text-4xl font-semibold text-center text-gray-500 dark:text-gray-400">Worked with</h1>
                <TechStack />
            </div>
        </div>
    )
}



export const AboutMe: FC = () => {
    const t = useTranslations<string>('AboutMe');

    const studies: TimelineProps = getTimelineProps(t, 'studies');

    const work1: TimelineProps = getTimelineProps(t, 'work1');

    const props: TimelineProps[] = [work1, studies]; // from newest to oldest event


    return (
        <SectionWrapper t={t} gradient="from-blue-300 via-red-500 to-amber-500">
            <div className="lg:flex flex-row lg:mb-10">
                <Content t={t} />
                <Timeline props={props} />
            </div>
        </SectionWrapper>
    )
}