'use client';

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { CvButton } from "./ui/buttons/buttons";
import Image from "next/image";

export const Home: FC = () => {
  const t = useTranslations<string>("Home");
  const path: string = usePathname();

  const linkToUni: string =
    path.split("/").at(1) === "en"
      ? "https://pwr.edu.pl/en/"
      : "https://pwr.edu.pl/pl/";

  const pathToAvatar: string = "";

  return (
    <AnimatePresence mode="wait">
      <section
        className="relative flex flex-col-reverse md:flex-row md:text-left text-center min-h-screen md:px-20 px-6 bg-gray overflow-hidden items-center justify-center"
        id={t("id")}
        aria-labelledby="whoami-heading"
      >
        <div className="absolute inset-0 z-0 pointer-events-none layer1 bg-cover bg-center" />

        <div className="relative z-10 md:flex-1 flex items-center justify-center">
          <div>
            <motion.h1
              id="whoami-heading"
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 tracking-wider font-noto-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {t("whoami")}
            </motion.h1>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-rubik font-bold inline-block text-navy py-6"
              aria-live="polite"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Typewriter
                words={[t("whatido.1"), t("whatido.2")]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </motion.h1>

            <motion.p
              className="md:text-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              {t.rich("desc", {
                a: (chunks) => (
                  <a
                    href={linkToUni}
                    target="_blank"
                    className="hover:text-blue-500 transition-all ease-in-out duration-300"
                    rel="noopener noreferrer"
                    aria-label={t("universityLink")}
                  >
                    {chunks}
                  </a>
                ),
                f: (chunks) => <code>{chunks}</code>,
              })}
            </motion.p>

            <motion.div
              className="py-10 flex items-center justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            >
              <CvButton text={t("cv")} afterDownload={t("afterDownload")} />
            </motion.div>

          </div>
        </div>

        <div className="relative z-10 md:flex-1 flex items-center justify-center mb-8 md:mb-0 pt-5 lg:pt-0 md:pb-20">
          <Image
            src={pathToAvatar}
            alt="lukasz photo"
            className="rounded-full shadow-lg w-1/3"
            aria-hidden="false"
            width={400}
            height={400}
          />
        </div>
      </section>
    </AnimatePresence>
  );
};
