import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC } from "react";
import { ProjectProps } from "../../lib/project";
import ImageSlider from "./ui/sliders/slider";
import { SectionWrapper } from "./utils/wrapper";
import { getProjectProps } from "../../lib/scripts/getProps";

const ShowcaseConetnt: FC<{
  link: string;
  title: string;
  desc: string;
}> = ({
  link,
  title,
  desc,
}) => {
    return (
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 md:text-left text-center">
          <Link href={link} target="_blank" className="hover:underline">
            <code>{title}</code>
          </Link>
        </div>
        <p className="text-gray-700 dark:text-gray-500 text-base">{desc}</p>
      </div>
    );
  };

const ShowcaseTechStack: FC<{ techstack: string[] }> = ({ techstack }) => {
  return (
    <>
      <code className="px-6 py-4">tech-stack</code>
      <div className="p-6 flex flex-wrap justify-center items-center">
        {techstack.map((tech: string, techKey: number) => (
          <React.Fragment key={techKey}>
            <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 cursor-default transition-all ease-in-out duration-300 hover:bg-gray-300 dark:hover:bg-gray-700">
              {tech}
            </span>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

const Showcase: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center">
      {projects.map((project, key) => (
        <React.Fragment key={key}>
          <div className="max-w-md rounded-xl overflow-hidden m-2 shadow-xl">
            {/* image */}

            <ImageSlider
              images={project.imgs}
              width={project.width}
              height={project.height}
            />

            {/* title & desc */}
            <ShowcaseConetnt
              link={project.linkToProj}
              title={project.title}
              desc={project.description}
            />
            <div className="divide-y divide-slate-100"></div>
            <ShowcaseTechStack techstack={project.technologies} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Projects: FC = () => {
  const t = useTranslations<string>("Projects");

  const myanimedb: ProjectProps = getProjectProps(t, "myanimedb");

  const itSalaryPredictor: ProjectProps = getProjectProps(
    t,
    "it-salary-predictor"
  );

  const projects: ProjectProps[] = [myanimedb, itSalaryPredictor];

  return (
    <SectionWrapper t={t} gradient="from-lime-300 via-green-600 to-sky-800">
      <Showcase projects={projects} />
    </SectionWrapper>
  );
};
