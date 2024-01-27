import { useRef } from "react";
import Skills from "./skills";

interface ExperienceProps {
  companyName: string;
  mainPoints: string[];
  skills: string[];
  dates: string[];
}
const Experience: React.FC<ExperienceProps> = ({
  companyName,
  mainPoints,
  skills,
  dates,
}) => {
  return (
    <div className="hover:bg-gradient-to-t hover:from-transparent hover:via-slate-800 hover:to-transparent p-8 pr-2 rounded-md flex flex-row justify-between">
      <div>
        <p className="text-base mb-2 text-slate-200">{companyName}</p>
        <ul className=" text-sm list-disc">
          {mainPoints.map((mainPoint, index) => {
            return <li key = {index}>{mainPoint}</li>;
          })}
        </ul>
        <Skills skills={skills} />
      </div>
      <div className="flex flex-col justify-between">
        {dates.map((date, index) => {
          return <p key = {index} className="break-keep text-xs text-slate-400">{date}</p>;
        })}
      </div>
    </div>
  );
};

export default Experience;
