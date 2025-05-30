"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiTypescript, SiBootstrap } from 'react-icons/si'

const about = {
  title: "About Me",
  description: "I am a software developer with a passion for creating elegant digital experiences. I have a strong foundation in web development technologies and a keen eye for design.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rotimi Soremekun"
    },
    {
      fieldName: "Phone",
      fieldValue: "+234 902 718 1272"
    },
    {
      fieldName: "Experience",
      fieldValue: "Entry Level"
    },
    {
      fieldName: "Instagram",
      fieldValue: "Rotimachase"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      fieldName: "Email",
      fieldValue: "Rotimanchase@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English"
    },
  ]
}

//experience
const experience = {
  icon: "/assets-1/resume/badge.svg",
  title: "My experience",
  description: "I have worked on various projects, ranging from small personal projects to larger team-based applications. My experience includes working with modern web technologies and frameworks.",
  items: [
    {
      company: "Null",
      position: "Junior developer",
      duration: "Summer 2024"
    },
    {
      company: "E-commerce startup",
      position: "fullstack developer",
      duration: "4 months"
    },
    {
      company: "Null",
      position: "Frontend developer",
      duration: "2 months"
    },
    {
      company: "Null",
      position: "Backend developer",
      duration: "2 months"
    },
    {
      company: "BYC",
      position: "Fullstack developer",
      duration: "2024"
    }
  ]
}

//education
const education = {
  icon: "/assets-1/resume/cap.svg",
  title: "My Education",
  description: "I have pursued self-learning to build a strong foundation in software development.",
  items: [
    {
      institution: "Pluralcode academy",
      degree: "Fullstack Web Development",
      duration: "8 months"
    },
    {
      institution: "Pluralcode academy",
      degree: "Fullstack Web Development",
      duration: "8 months"
    },
    {
      institution: "Coursera",
      degree: "Backend Development",
      duration: "6 months"
    },
    {
      institution: "Tech Institution",
      degree: "Diploma in Software development",
      duration: "18months"
    },
    {
      institution: "Self-Learning",
      degree: "Programming Languages and Frameworks",
      duration: "Ongoing"
    }
  ]
}

//skill
const skills = {
  title: "My skills",
  description: "I have a diverse set of skills in web development, ranging from front-end to back-end technologies.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />
    },
    {
      name: "CSS 3",
      icon: <FaCss3 />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />
    },
    {
      name: "React.js",
      icon: <FaReact />
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />
    },
    {
      name: "Bootstrap ",
      icon: <SiBootstrap />
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
      <motion.div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: { delay: 2.4, duration: "0.4", ease: "easeIn"} }}>
        <div className='container mx-auto'>
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skill</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent className="w-full" value="experience">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="education">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="skills">
              <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index} className=''>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger >
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {/* <span className='text-accent'>{item.name}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div> */}
                    </li>
                  )
                })}
              </ul>
              </div>
            </TabsContent>

            <TabsContent className="w-full text-center xl:text-left" value="about">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]'>
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
          </Tabs> 
        </div>
      </motion.div>
    )
  }
  
  export default Resume
   