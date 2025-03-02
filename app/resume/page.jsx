"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaRust,
  FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I am a passionate and detail-oriented computer science student with over 3 years of experience in networking, cybersecurity, and full-stack development. My expertise includes web development (React, Node.js, JavaScript, Tailwind CSS), system programming (Rust, Java).  I have hands-on experience in network architecture, project management, and cybersecurity frameworks from my internship at Verraki. I am open to work, eager to collaborate on innovative projects, and committed to continuous learning in secure software development and system design.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdur-Rahman Salami",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 903 248 9652",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Abdur-Rahman Salami",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "abdursalamioluwa@gmail.com",
    },
    {
      fieldName: "Work",
      fieldValue: "Open to work",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a passionate computer science student, I specialize in full-stack development, networking architecture, and cybersecurity. With experience in freelance development and internships in cybersecurity and networking, I have worked on projects involving network infrastructure and security models. I thrive in dynamic environments where I can solve complex technical problems and contribute to innovative solutions.",
  items: [
    {
      company: "Friends In Fath (FIF)",
      position: "Full-Stack Developer Freelance",
      duration: "2024 - Present",
    },
    // {
    //   company: "Hewlett-Packard (HP), Nigeria",
    //   position: "Intern",
    //   duration: "Summer 2025",
    // },
    {
      company: "Verraki, Nigeria",
      position: "Networking and CyberSecurity Intern",
      duration: "Summer 2024",
    },
    {
      company: "MTN, Nigeria",
      position: "Chatbot Tester Intern",
      duration: "Summer 2023",
    },
    // {
    //   company: "MTN, Nigeria",
    //   position: "Chatbot Tester Intern",
    //   duration: "Summer 2023",
    // },
    // {
    //   company: "MTN, Nigeria",
    //   position: "Chatbot Tester Intern",
    //   duration: "Summer 2023",
    // },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am currently pursuing a Bachelor’s degree in Computer Science at Pan-Atlantic University, where I am building a strong foundation in programming, cybersecurity, and networking. Alongside my formal education, I have completed specialized courses in full-stack development and Java, further expanding my technical skill set. My studies and certifications have equipped me with the knowledge to develop secure applications and manage complex IT infrastructures.",
  items: [
    {
      institution: "Pan-Atlantic University",
      degree: "BSc Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Udemy",
      degree: "Full-Stack Developer",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Java",
      duration: "2024",
    },
    // {
    //   institution: "Udemy",
    //   degree: "Full-Stack Developer",
    //   duration: "2025",
    // },
    // {
    //   institution: "Udemy",
    //   degree: "Full-Stack Developer",
    //   duration: "2025",
    // },
    // {
    //   institution: "Udemy",
    //   degree: "Full-Stack Developer",
    //   duration: "2025",
    // },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I have a strong foundation in web development, full-stack engineering, and cybersecurity. My technical expertise includes HTML, CSS, JavaScript, React, and Tailwind for frontend development, along with Node.js for backend solutions. Additionally, I am proficient in Rust, Java, and system programming concepts. I am passionate about building scalable applications, designing secure systems, and continuously improving my skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwing.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaRust />,
      name: "rust",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
