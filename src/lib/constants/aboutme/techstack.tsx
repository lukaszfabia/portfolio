import DockerIcon from "../../../../public/techs/docker.svg";
import PythonIcon from "../../../../public/techs/python.svg";
import BashIcon from "../../../../public/techs/bash.svg";
import TypeScriptIcon from "../../../../public/techs/ts.svg";
import GitIcon from "../../../../public/techs/git.svg";
import CssIcon from "../../../../public/techs/css.svg";
import HtmlIcon from "../../../../public/techs/html.svg";
import GoIcon from "../../../../public/techs/golang.svg";
import PostgresIcon from "../../../../public/techs/postgres.svg";
import JsIcon from "../../../../public/techs/js.svg";
import { FC } from "react";

export const TechStack: FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-5">
      <DockerIcon />
      <PythonIcon />
      <GoIcon />
      <BashIcon />
      <TypeScriptIcon />
      <JsIcon />
      <GitIcon />
      <CssIcon />
      <HtmlIcon />
      <PostgresIcon />
    </div>
  );
};
