import DockerIcon from "../../public/techs/docker.svg";
import CppIcon from "../../public/techs/cpp.svg";
import PythonIcon from "../../public/techs/python.svg";
import JavaIcon from "../../public/techs/java.svg";
import CSharpIcon from "../../public/techs/csharp.svg";
import BashIcon from "../../public/techs/bash.svg";
import TypeScriptIcon from "../../public/techs/ts.svg";
import GitIcon from "../../public/techs/git.svg";
import CssIcon from "../../public/techs/css.svg";
import HtmlIcon from "../../public/techs/html.svg";
import OcamlIcon from "../../public/techs/ocaml.svg";
import ScalaIcon from "../../public/techs/scala.svg";
import { FC } from "react";

export const TechStack: FC = () => {
    return (
        <div className="flex flex-wrap justify-center items-center mt-5">
            <DockerIcon />
            <CppIcon />
            <PythonIcon />
            <JavaIcon />
            <CSharpIcon />
            <BashIcon />
            <TypeScriptIcon />
            <GitIcon />
            <CssIcon />
            <HtmlIcon />
            <OcamlIcon />
            <ScalaIcon />
        </div>
    )
}