"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaGithub, FaLinux } from "react-icons/fa"
import { SiSelenium, SiCucumber, SiGradle, SiJenkins, SiJira, SiBitbucket, SiConfluence, SiTailwindcss } from "react-icons/si";

const about = {
    title: "About me",
    description: 
        "I’m Arjun Saravanakumar, a passionate Software Tester with over 1.5 years of professional experience in both manual and automation testing. I specialize in debugging, building efficient test automation frameworks, and ensuring flawless application performance. With hands-on expertise in Java, Selenium, and TestNG, I’ve collaborated on diverse projects, performing end-to-end testing and logging over 500 bugs, enhancing product quality. My approach involves understanding the software ecosystem deeply, identifying bottlenecks, and crafting robust testing solutions. I’m driven by a love for problem-solving and innovation, continually learning to stay ahead in the field of software quality assurance. Let’s connect and create software that excels!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Arjun Saravanakumar"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91 8072734996)"
        },
        {
            fieldName: "Experience",
            fieldValue: "1.5+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "arjun.rksaravanan@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "INDIAN"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Tamil, Hindi, Telugu"
        },
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "",
    items: [
        {
            company: "Applied Materials Inc",
            position: "Associate Software Engineer",
            duration: "February 2022 - August 2023",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "",
    items: [
        {
            institution: "Crio.do",
            degree: "Software Development Engineer in Test(SDET)",
            duration: "March 2024 - April 2025",
        },
        {
            institution: "BIT Sathyamangalam",
            degree: "Electronics and Instrumentation",
            duration: "August 2018 - June 2022",
        },
    ],
};

const skills = {
    title: "My Skills",
    description: "",
    skillList: [
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiSelenium />,
            name: "Selenium",
        },
        {
            icon: <FaGithub />,
            name: "GIT",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJS",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaLinux />,
            name: "Linux",
        },
        {
            icon: <SiCucumber />,
            name: "Cucumber",
        },
        {
            icon: <SiGradle />,
            name: "Gradle",
        },
        {
            icon: <SiJenkins />,
            name: "Jenkins",
        },
        {
            icon: <SiJira />,
            name: "JIRA",
        },
        {
            icon: <SiBitbucket />,
            name: "Bitbucket",
        },
        {
            icon: <SiConfluence />,
            name: "Confluence",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return(
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 1.2, duration: 0.4, ease: 'easeIn'},
                }}
                className = "min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value = "experience">Experience</TabsTrigger>
                            <TabsTrigger value = "education">Education</TabsTrigger>
                            <TabsTrigger value = "skills">Skills</TabsTrigger>
                            <TabsTrigger value = "about">About me</TabsTrigger>
                        </TabsList>

                        {/* content */}
                        <div className="min-h-[70vh] w-full">

                            {/* experience */}
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold"> 
                                        { experience.title } 
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                        { experience.description } 
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return(
                                                    <li key = {index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
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
                                    <h3 className="text-4xl font-bold"> 
                                        { education.title } 
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> 
                                        { education.description } 
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return(
                                                    <li key = {index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[300px] min-h-[60px] max-h-[300px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* skills */}
                            <TabsContent value="skills" className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"></p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grod-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return <li key={index}>
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
                                            </li>;
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            {/* about */}
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return(
                                                <li 
                                                    key={index}
                                                    className="flex items-center justify-center xl:justify-start gap-4"
                                                >
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>

                    </Tabs>
                </div>
            {/* resume page */}
        </motion.div>
    );
};

export default Resume;


