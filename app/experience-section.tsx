import Experience from "./experience";
const ExperienceSection = () => {
  return (
    <div className="flex flex-col justify-start mb-8" id="experience">
      <div>
        <p className="text-xl text-slate-100">Experience</p>
      </div>
      <div className="flex flex-col relative">
        <Experience
          companyName="Ministry of Public and Business Service Delivery - Software Engineer, Co-op"
          mainPoints={[
            "Developed RESTful APIs using MuleSoft to enable seamless integration with multiple digital wallet platforms. Performed comprehensive testing and troubleshooting to proactively identify and resolve issues, ensuring a reliable delivery process",
          ]}
          skills={["MuleSoft", "Anypoint Studio"]}
          dates={["12/2023-", "09/2023-"]}
        />
        <Experience
          companyName="Thoughtworks Canada - Software Engineer Co-op"
          mainPoints={[
            "Designed and implemented intuitive and responsive stock market components in React for the front page of a prominent newspaper outlet, providing real-time financial information to a large audience. During my time at Thoughtworks, I have also acquired in-depth knowledge of TDD and design patterns in Ruby through technical coaching learning",
          ]}
          skills={["Javascript", "React.js", "ArcXP"]}
          dates={["09/2023-", "05/2023-"]}
        />
        <Experience
          companyName="Slalom Build - Software Engineer, Co-op"
          mainPoints={[
            "Contributed to the development of an Alumni portal, enhancing security and user experience by implementing the user authentication process through AWS Cognito. Developed intricate React components, optimized DynamoDB schema for improved system performance, and configured serverless endpoints with AWS Lambdas, leveraging AWS Serverless Lambda Authorizers for effective access control",
          ]}
          skills={["Javascript", "React.js", "DynamoDB", "AWS"]}
          dates={["09/2022-", "05/2022-"]}
        />
        <Experience
          companyName="Connected - Software Engineer, Co-op"
          mainPoints={[
            "Worked on digital retail experiences on Android devices for a social media company. Implemented new UI fragments using Kotlin and XML, enhancing both user interface and experience. Additionally, spearheaded the integration of Adobe Analytics into our systems, providing comprehensive data insights.",
          ]}
          skills={["Kotlin", "XML", "Android Studio", "Adobe Analytics"]}
          dates={["12/2021-", "05/2021-"]}
        />
        <div className="absolute top-0 right-0 h-full bg-slate-400 w-0.5"></div>
      </div>
    </div>
  );
};
export default ExperienceSection;
