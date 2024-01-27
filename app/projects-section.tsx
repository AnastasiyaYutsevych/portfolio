import Experience from "./experience";
import Project from "./project";
import PersonalWeb from "../public/personalWeb.png";
import WheelsToGo from "../public/WheelsToGo.jpg";
import SketchWeb from "../public/sketchApp.jpg";
const ProjectsSection = () => {
  return (
    <div className="flex flex-col justify-start">
      <div>
        <p className="text-xl text-slate-100">Projects</p>
      </div>
      <div className="flex flex-col relative">
        <Project
          projectName="Sketch and Guess"
          mainPoints={[
            "Currently in development is a drawing game leveraging Next.js and Express.js. This project facilitates a multilingual environment where users can submit guesses in their native language. The core technical features include real-time data exchange for handling DOM canvas events and messaging. The implementation involves intricate synchronization mechanisms, allowing for a seamless and responsive user experience",
          ]}
          skills={["Next.js", "Express.js", "Typescript"]}
          imgFirst={true}
          imgSrc={SketchWeb}
        />
        <Project
          projectName="Personal Website"
          mainPoints={[
            "Crafted my personal website as a digital playground, spotlighting my adventures and cool side projects. Sprinkled in there are some seriously fancy styles and CSS tricks – because who said coding can't be a little bit of art too? Dive in, explore, and enjoy",
          ]}
          skills={["Next.js", "TailwindCSS", "Typescript"]}
          imgSrc={PersonalWeb}
          imgFirst={false}
        />
        <Project
          projectName="WheelsToGo Car Rental Service"
          mainPoints={[
            "Led a dynamic team in crafting a full-stack car rental app with the MERN stack. Orchestrated React State Management for seamless user experiences and built RESTful APIs on the backend. From search functionalities to push notifications via Twilio, and smooth booking processes, we covered it all.",
          ]}
          skills={["MongoDB", "Express.js", "React.js", "Node.js"]}
          imgSrc={WheelsToGo}
          imgFirst={true}
        />
      </div>
    </div>
  );
};
export default ProjectsSection;
