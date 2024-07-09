import { FC } from "react"
import { Href } from "../href"
import { FormProps } from "../form"
import { TimelineProps } from "../timeline"
import { ProjectProps } from "../project"

export const getTimelineProps = (t: (key: string) => string, key: "work1" | "studies"): TimelineProps => {
    return {
        time: {
            month: t(`exp.${key}.time.month`),
            year: t(`exp.${key}.time.year`)
        },
        event: t(`exp.${key}.event`),
        desc: t(`exp.${key}.desc`)
    }
}


export const getFormProps = (t: (key: string) => string): FormProps => {
    return {
        info: t('info'),
        name: t('form.name'),
        email: t('form.email'),
        message: t('form.message'),
        topic: t('form.topic'),
        send: t('form.send'),
        messagePlaceholder: t('form.messagePlaceholder'),
        topicPlaceholder: t('form.topicPlaceholder')
    }
}

export const getProjectProps = (t: (key: string) => string, projectName: string, sep: string = ";", width: number = 2880, height: number = 1550): ProjectProps => {
    return {
        title: t(`${projectName}.title`),
        description: t(`${projectName}.desc`),
        imgs: t(`${projectName}.imgs`).split(sep),
        linkToProj: t(`${projectName}.link`),
        technologies: t(`${projectName}.technologies`).split(sep),
        width: width,
        height: height,
    }
}

export const getNavbarLinks = (t: (key: string) => string): Href[] => {
    return [
        { key: t('projects'), link: '#projects' },
        { key: t('about'), link: '#about' },
        { key: t('contact'), link: '#contact' },
    ]
} 