import { useTranslations } from "next-intl";
import React, { FC } from "react";
import { ProjectProps } from "../lib/project";
import { getProjectProps } from "../lib/scripts/get-props";
import { ProjectCard } from "./ui/card/project-card";



export const Projects: FC = () => {
  const t = useTranslations<string>("Projects");

  const myanimedb: ProjectProps = getProjectProps(t, "myanimedb");
  const itSalaryPredictor: ProjectProps = getProjectProps(t, "it-salary-predictor");
  const chatterbox: ProjectProps = getProjectProps(t, "chatterbox");
  const l2play: ProjectProps = getProjectProps(t, "l2play");

  const projects: ProjectProps[] = [chatterbox, l2play, myanimedb, itSalaryPredictor];

  return (
    <section
      className="relative flex flex-col-reverse md:flex-row justify-center min-h-screen md:px-20 px-6 bg-coffee"
      id={t("id")}
      aria-labelledby={t("id")}
    >
      <div className="z-10 w-full flex flex-col gap-4 py-16 items-center text-white">
        <h2
          id="projects-subtitle"
          className="md:text-xl text-lg uppercase tracking-widest"
          aria-level={2}
          role="heading"
        >
          {t("subtitle")}
        </h2>
        <h1
          id="projects-title"
          className="lg:text-7xl md:text-6xl text-3xl font-bold font-rubik"
          aria-level={1}
          role="heading"
        >
          {t("title")}
        </h1>
        <p className="font-noto-serif md:text-lg leading-relaxed">{t("paragraph")}</p>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 lg:flex-row flex-col">
          {projects.map((p) => <ProjectCard project={p} key={p.title} />)}
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none layer2 bg-cover bg-center" />
    </section>
  );
};