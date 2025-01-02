import React, { useState } from 'react'
import Experience from '../Experience'
import Education from '../Education'
Education

const ToggleTabs = () => {
  const [selectedButton, setSelectedButton] = useState('EXPERIENCE')
  return (
    <>
      <div className='flex justify-between w-full h-screen text-white px-28 '>
        <div className='flex flex-col w-[35%] px-2 '>
          {/* button  */}
          <div className='flex w-full items-center justify-between pb-5'>
            <div
              onClick={() => setSelectedButton('EXPERIENCE')}
              className={`border-[1px] border-gray-600 ${
                selectedButton === 'EXPERIENCE' ? 'bg-slate-700 border-0' : ''
              } text-lg cursor-pointer font-MoonWalk px-5 py-2 rounded-md`}
            >
              Experience
            </div>
            <div
              onClick={() => setSelectedButton('EDUCATION')}
              className={`border-[1px] border-gray-600 ${
                selectedButton === 'EDUCATION' ? 'bg-slate-700 border-0' : ''
              } text-lg cursor-pointer font-MoonWalk px-5 py-2 rounded-md`}
            >
              Education
            </div>
          </div>
          {/* content  */}
          <div className='pt-5 pb-10 px-2  rounded-md'>
            {selectedButton === 'EXPERIENCE' ? (
              <div className='flex flex-col  '>
                <p className='text-3xl pb-5 '>Professional Experience</p>
                <span className='bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text'>
                  With 2+ years in MERN stack development, I build scalable
                  apps, optimize performance, and deliver user-focused
                  solutions.
                </span>
              </div>
            ) : (
              <div className='flex flex-col '>
                <p className='text-3xl pb-5'>Professional Education</p>
                <span className='text-base bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text'>
                  With 2+ years in MERN stack development, I build scalable
                  apps, optimize performance, and deliver user-focused
                  solutions.
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-center w-[65%] overflow-y-auto [&::-webkit-scrollbar]:hidden'>
          {selectedButton === 'EXPERIENCE' ? <Experience /> : <Education />}
        </div>
      </div>
    </>
  )
}

export default ToggleTabs
