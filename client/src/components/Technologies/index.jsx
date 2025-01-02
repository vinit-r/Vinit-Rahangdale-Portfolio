import React from 'react'
import Heading from '../Heading'
import { IoLogoJavascript, IoLogoReact, IoLogoCss3 } from 'react-icons/io5'
import { TbBrandJavascript, TbBrandRedux } from 'react-icons/tb'
import { TiHtml5 } from 'react-icons/ti'
import {
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens
} from 'react-icons/si'
import { FaBootstrap, FaNodeJs, FaJava, FaGithubSquare } from 'react-icons/fa'

const fontEndTech = [
  {
    tech: 'Javascript',
    icon: <TbBrandJavascript className='text-3xl text-yellow-500 mt-1' />
  },
  {
    tech: 'React',
    icon: <IoLogoReact className='text-3xl mt-1 text-blue-500' />
  },
  {
    tech: 'Redux',
    icon: <TbBrandRedux className='text-3xl mt-1 text-blue-500' />
  },
  {
    tech: 'HTML',
    icon: <TiHtml5 className='text-3xl mt-1 text-orange-600' />
  },
  {
    tech: 'CSS',
    icon: <IoLogoCss3 className='text-3xl mt-1 text-blue-500' />
  },
  {
    tech: 'Bootstrap',
    icon: <FaBootstrap className='text-3xl mt-1 text-violet-500' />
  },
  {
    tech: 'Material UI',
    icon: <SiMui className='text-3xl mt-1 text-blue-800' />
  },
  {
    tech: 'Tailwind CSS',
    icon: <SiTailwindcss className='text-3xl mt-1 text-blue-600' />
  }
]
const backEndTech = [
  {
    tech: 'Node.js',
    icon: <FaNodeJs className='text-3xl text-green-500 mt-1' />
  },
  {
    tech: 'Java',
    icon: <FaJava className='text-3xl text-white' />
  },
  {
    tech: 'Express.js',
    icon: <SiExpress className='text-3xl text-green-500 mt-1' />
  }
]
const dbAndTools = [
  {
    tech: 'MongoDB',
    icon: <SiMongodb className='text-3xl text-green-500 mt-1' />
  },
  {
    tech: 'MySQL',
    icon: <SiMysql className='text-3xl text-orange-400' />
  },
  {
    tech: 'GitHub',
    icon: <FaGithubSquare className='text-3xl mt-1' />
  },
  {
    tech: 'JWT',
    icon: <SiJsonwebtokens className='text-3xl text-pink-500 mt-1' />
  }
]

const Technologies = () => {
  return (
    <>
      <Heading text={'Technologies'} />
      <div className='w-full h-full text-white py-14 px-28'>
        <div className='flex flex-col'>
          <div>
            <span className='text-3xl font-MoonWalk block pb-5'>Front End</span>
            <div className='flex flex-1 flex-wrap gap-x-4 gap-y-6'>
              {fontEndTech?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=' border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center '
                  >
                    <div className='flex py-4 px-8 gap-3'>
                      <span className=' text-2xl font-extralight'>
                        {tech?.tech}
                      </span>
                      <span className='text-white'>{tech?.icon}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <span className='text-3xl font-MoonWalk block pt-10 pb-5'>
              Back End
            </span>
            <div className='flex flex-1 flex-wrap gap-x-4 gap-y-6'>
              {backEndTech?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=' border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center '
                  >
                    <div className='flex py-4 px-5 gap-3'>
                      <span className=' text-2xl font-extralight  '>
                        {tech?.tech}
                      </span>
                      <span className='text-white'>{tech?.icon}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <span className='text-3xl font-MoonWalk block pt-10 pb-5'>
              Database & Tools
            </span>
            <div className='flex flex-1 flex-wrap gap-x-4 gap-y-6 '>
              {dbAndTools?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=' border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center '
                  >
                    <div className='flex py-4 px-8 gap-3'>
                      <span className=' text-2xl font-extralight  '>
                        {tech?.tech}
                      </span>
                      <span className='text-white'>{tech?.icon}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technologies
