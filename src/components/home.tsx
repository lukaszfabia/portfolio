import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ContactButton, CvButton } from "./ui/buttons/buttons";
import { FC } from "react";
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
        className="flex flex-col-reverse md:flex-row md:text-left text-center md:py-14 md:mb-10"
        id={t("id")}
      >
        <div className="md:flex-1 mb-8 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-poppins dark:text-gray-300 text-gray-600 tracking-wider"
          >
            {t("whoami")}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text py-6 "
          >
            {t("whatido")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-md"
          >
            {t.rich("desc", {
              a: (chunks) => (
                <a
                  href={linkToUni}
                  target="_blank"
                  className="hover:text-blue-500 transition-all ease-in-out duration-300"
                >
                  {chunks}
                </a>
              ),
              f: (chunks) => <code>{chunks}</code>,
            })}
          </motion.p>

          <motion.div
            className="py-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactButton text={t("contact")} />

            <CvButton text={t("cv")} afterDownload={t("afterDownload")} />
          </motion.div>
        </div>
        <div className="md:flex-1 flex items-center justify-center mb-8 md:mb-0 pt-5 lg:pt-0 md:pb-20">
          <img src="https://placehold.co/200x200" alt="" className="rounded-full shadow-lg w-1/3" />
          {/* <Image src={pathToAvatar} alt="me" className="rounded-full shadow-lg w-1/3"  /> */}
        </div>
      </section>
    </AnimatePresence>
  );
};
