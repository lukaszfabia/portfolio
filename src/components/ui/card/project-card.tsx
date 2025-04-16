import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "@/lib/project";

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const wrapperRef = useRef(null);
    const isInView = useInView(wrapperRef, { once: true, amount: 0.4 });

    return (
        <div ref={wrapperRef}>
            <div
                className="h-full w-full max-w-lg text-gray-800 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
                aria-labelledby={`project-${project.title}-title`}
                aria-describedby={`project-${project.title}-description`}
            >
                <motion.div
                    className="p-6 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3
                                id={`project-${project.title}-subtitle`}
                                className="text-lg font-noto-serif text-gray-200"
                                aria-level={3}
                                role="heading"
                            >
                                {project.subtitle}
                            </h3>
                            <h1
                                id={`project-${project.title}-title`}
                                className="lg:text-3xl text-2xl font-semibold text-gray-100 tracking-tight font-rubik"
                                aria-level={1}
                                role="heading"
                            >
                                {project.title}
                            </h1>
                        </div>
                        <a
                            href={project.linkToProj}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label={`Visit the GitHub repository for ${project.title}`}
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </a>
                    </div>

                    <p
                        id={`project-${project.title}-description`}
                        className="lg:text-lg md:text-sm text-gray-50 leading-relaxed mb-6 font-rubik"
                        aria-describedby={`project-${project.title}-description`}
                    >
                        {project.description}
                    </p>

                    <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">
                            Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                    className="px-3 py-1 text-xs rounded-full bg-navy text-white font-medium shadow-sm"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
