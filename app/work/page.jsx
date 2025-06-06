"use client"

import { easeIn, motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: '01',
    category: "Fullstack",
    title: "Greencart",
    description: "A modern and responsive web application showcasing advanced frontend and backend development techniques.",
    stack: [{ name: "React" }, { name: "TailwindCss" }, { name: "JavaScript" }],
    image: "/assets-1/work/greee.png",
    live: "https://greencart-frontend-psi.vercel.app",
    github: "https://github.com/Rotimanchase/Greencart-frontend"
  },
  {
    num: '02',
    category: "Fullstack",
    title: "BYC",
    description: "A full-stack application built with modern tools and frameworks.",
    stack: [{ name: "Vite.js" }, { name: "TailwindCSS" }, { name: "Node.js" }],
    image: "/assets-1/work/bbbyc.png",
    live: "https://byc-zeta.vercel.app",
    github: "https://github.com/Rotimanchase/BYC-FRONTEND"
  },
  {
    num: '03',
    category: "Frontend",
    title: "This Portfolio",
    description: "A modern and responsive portfolio showcasing advanced frontend development techniques.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Framer Motion" }],
    image: "/assets-1/work/my.JPG",
    live: "https://my-portfolio-git-main-rotimans-projects.vercel.app/",
    github: "https://github.com/Rotimanchase/My-portfolio"
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project based on current slide index
    setProject(projects[currentIndex]);
  }

    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>

                <ul className="flex gap-4">
                  {project.stack.map((item, index)=>{
                    return (
                      <li key={index} className="text-accent text-xl">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>

                <div className="flex items-center gap-4">
                  {/* live project */}
                  <Link href={project.live} target="_blank" >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper className="xl:h-[520px] mb-12" spaceBetween={30} slidesPerView={1} 
              onSlideChange={handleSlideChange}>
                {projects.map((project, index)=>{
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <WorkSlideBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
  
  export default Work
   