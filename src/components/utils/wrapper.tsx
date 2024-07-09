import { FC } from "react";
import { AnchorButton } from "../ui/buttons/buttons";
import { SectionWrapperProps } from "../../../lib/wrapper";

export const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  t,
  gradient,
}) => {
  return (
    <section id={t("id")} className="mt-1">
      <span className="block lg:text-left text-center">
        <h1
          className={`lg:text-5xl text-4xl font-poppins font-bold bg-gradient-to-r ${gradient} inline-block text-transparent bg-clip-text py-20`}
        >
          {t("title")}
        </h1>
        <AnchorButton href={t("id")} />
      </span>
      {children}
    </section>
  );
};
