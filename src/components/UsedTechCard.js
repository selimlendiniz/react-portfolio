import React from "react";
import javaScriptSvg from "../assets/icons/iconJavascript.svg";
import javaSvg from "../assets/icons/iconJava.svg";
import pythonSvg from "../assets/icons/iconPython.svg";
import cppSvg from "../assets/icons/iconCpp.svg";
import csSvg from "../assets/icons/iconCsharp.svg";
import htmlSvg from "../assets/icons/iconHtml.svg";
import cssSvg from "../assets/icons/iconCss.svg";
import ReactSvg from "../assets/icons/iconReact.svg";
import ReduxSvg from "../assets/icons/iconRedux.svg";
import ReactRouterSvg from "../assets/icons/iconReactRouter.svg";
import TailwindSvg from "../assets/icons/iconTailwind.svg";
import StyledComponentsSvg from "../assets/icons/iconStyledComponents.svg";
import FormikSvg from "../assets/icons/iconFormik.svg";
import SpringSvg from "../assets/icons/iconSpringBoot.svg";
import techSvg from "../assets/icons/iconTech.svg";

export default function UsedTechCard({ tech, className }) {
  let techIcons;
  switch (tech) {
    case "React":
      techIcons = ReactSvg;
      break;
    case "JavaScript":
      techIcons = javaScriptSvg;
      break;
    case "HTML":
      techIcons = htmlSvg;
      break;
    case "CSS":
      techIcons = cssSvg;
      break;
    case "Tailwind":
      techIcons = TailwindSvg;
      break;
    case "Styled Components":
      techIcons = StyledComponentsSvg;
      break;
    case "React Router":
      techIcons = ReactRouterSvg;
      break;
    case "Redux":
      techIcons = ReduxSvg;
      break;
    case "Formik":
      techIcons = FormikSvg;
      break;
    case "Spring":
      techIcons = SpringSvg;
      break;
    case "Java":
      techIcons = javaSvg;
      break;
    case "Python":
      techIcons = pythonSvg;
      break;
    case "C++":
      techIcons = cppSvg;
      break;
    case "C#":
      techIcons = csSvg;
      break;
    default:
      techIcons = techSvg;
  }

  return (
    <li className={"flex items-center " + className}>
      <img src={techIcons} className="w-6 mr-2" alt="tech icon" />
      <p className="text-center">{tech}</p>
    </li>
  );
}
