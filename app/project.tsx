import Skills from "./skills";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  projectName: string;
  mainPoints: string[];
  skills: string[];
  imgSrc: StaticImageData;
  imgFirst: boolean;
}
const Project: React.FC<ProjectProps> = ({
  projectName,
  mainPoints,
  skills,
  imgSrc,
  imgFirst,
}) => {
  const flexDirection = imgFirst
    ? "lg:flex-row flex-col"
    : "flex-col lg:flex-row-reverse";

  const isPadding = imgFirst ? "" : "lg:pr-10";

  return (
    <div
      className="hover:bg-gradient-to-t hover:from-transparent hover:vi-slate-800 hover:to-transparent  p-8 pr-2  rounded-md flex flex-row justify-between"
      id="project"
    >
      <div
        className={`flex ${flexDirection} justify-between  min-h-26 max-h-26`}
      >
        <div className="lg:pr-10 pb-4 lg:pb-0 flex lg:flex-col flex-row justify-center">
          <Image
            src={imgSrc}
            alt="project picture"
            width={240}
            height={180}
            className="h-fit opacity-85 rounded-sm"
          />
        </div>
        <div
          className={`basis-2/3 w-fit h-fit flex flex-col ${isPadding} justify-center`}
        >
          <p className="text-base text-slate-200 pb-2">{projectName}</p>
          <ul className="text-sm">
            {mainPoints.map((mainPoint, index) => {
              return <li key = {index}>{mainPoint}</li>;
            })}
          </ul>
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Project;
