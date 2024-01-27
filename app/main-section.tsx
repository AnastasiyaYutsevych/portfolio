"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ImageSrc from "../public/memoji.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainSection = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="lg:basis-1/2 lg:sticky lg:top-0 lg:flex lg:h-full lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-6 pt-6 lg:pt-12">
      <div className="flex flex-row gap-8 justify-start">
        <div className="">
          <p className="text-3xl text-slate-100 pb-1">Anastasiia Yutsevych</p>
          <p className="text-2xl pb-4">Software Engineer</p>
        </div>
        <div>
          <Image src={ImageSrc} alt="memoji" className="max-w-20" />
        </div>
      </div>
      <p className="text-l pb-4">
        Hey there! 👋 I&apos;m Ana, a passionate software engineer at the start of my
        career. I love turning ideas into elegant solutions and constantly
        exploring the ever-evolving tech landscape. Let&apos;s build something
        awesome together! 💻✨
      </p>
      <div className="navigationMenuflex text-sm font-mono text-slate-600 flex-col">
        <a href="#experience" className="hover:text-slate-300">
          <div className="flex group flex-row content-baseline">
            <div className="flex flex-col justify-center">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            </div>
            <p>EXPERIENCE</p>
          </div>
        </a>
        <a href="#project" className="hover:text-slate-300">
          <div className="flex group flex-row content-baseline">
            <div className="flex flex-col justify-center">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            </div>
            <p>PROJECT</p>
          </div>
        </a>
      </div>

      <div className="socials flex flex-row self-end  justify-start pb-4 text-slate-500 transition-all">
        <a
          href="https://github.com/AnastasiyaYutsevych"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="hover:text-slate-100 text-slate-200 hover:text-4xl mr-3 pr-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/anastasiya-yutsevych/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="hover:text-slate-100 text-slate-200 hover:text-4xl mr-4" />
        </a>
        <a
          href={`mailto:anastasiia.yutsevych@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="hover:text-slate-100 text-slate-200 hover:text-4xl mr-4" />
        </a>
      </div>
    </header>
  );
};
export default MainSection;
