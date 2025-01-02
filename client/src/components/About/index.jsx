import React from 'react'
import Heading from '../Heading'
import { FaLaptopCode, FaProjectDiagram } from 'react-icons/fa'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa6'

const About = () => {
  return (
    <>
      <Heading text={'About Me'} />
      <div className='text-white py-10 px-28'>
        <div className='flex py-5 gap-3 '>
          <div className='flex  gap-x-3 bg-[#111111] p-4 rounded-md shadow-2xl'>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-center items-center flex-col border-[1px] h-36 w-36 rounded-md'>
                <FaLaptopCode className='text-3xl text-slate-400' />
                <span className='text-2xl text-slate-400 font-semibold'>
                  Experience
                </span>
                <span className='text-lg text-slate-500'>3+ Years</span>
              </div>
              <div className='flex justify-center items-center flex-col border-[1px] h-36 w-36 rounded-md'>
                <MdOutlineAutoGraph className='text-3xl' />
                <span className='text-2xl font-semibold'>Technology</span>
                <span className='text-lg'>8+ Skills</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-5'>
              <div className='flex justify-center items-center flex-col border-[1px] h-36 w-36 rounded-md'>
                <FaProjectDiagram className='text-3xl' />
                <span className='text-2xl font-semibold'>Worked</span>
                <span className='text-lg'>5+ Project</span>
              </div>
              <div className='flex justify-center items-center flex-col border-[1px] h-36 w-36 rounded-md'>
                <FaLaptopCode className='text-3xl text-slate-400' />
                <span className='text-2xl text-slate-400 font-semibold'>
                  Worked
                </span>
                <span className='text-lg text-slate-500'>5+</span>
              </div>
            </div>
          </div>
          {/* bg-[#0D0D0D] */}
          <div className='flex flex-col bg-[#111111] rounded-md shadow-2xl'>
            <div className='p-4 text-lg bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text'>
              I am a Software Developer with 2+ years of experience specializing
              in full-stack development using the MERN stack. I have built
              scalable, responsive applications like claim portals, BNPL
              systems, and food delivery platforms, focusing on performance and
              user satisfaction. Proficient in React.js, Node.js, MongoDB, and
              Redux, I excel at integrating modern tools like Tailwind CSS and
              Material UI, implementing secure JWT authentication, and
              optimizing performance with microservice architectures. My
              adaptable and innovative approach ensures high-quality, scalable
              solutions for every project.
            </div>
            <div className='pl-4'>
              <div className='flex gap-2 items-center bg-black w-fit px-5 rounded-md cursor-pointer'>
                <span className='text-xl py-4'>Download CV</span>
                <FaDownload className='text-xl ' />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='text-3xl  font-semibold w-[60%] leading-tight bg-gradient-to-r from-blue-400 via-white to-gray-500 text-transparent inline-block bg-clip-text'>
          I am a Software Developer with 2+ years of experience specializing in
          full-stack development using the MERN stack. I have built scalable,
          responsive applications like claim portals, BNPL systems, and food
          delivery platforms, focusing on performance and user satisfaction.
          Proficient in React.js, Node.js, MongoDB, and Redux, I excel at
          integrating modern tools like Tailwind CSS and Material UI,
          implementing secure JWT authentication, and optimizing performance
          with microservice architectures. My adaptable and innovative approach
          ensures high-quality, scalable solutions for every project.
        </div> */}
      </div>
    </>
  )
}

export default About
