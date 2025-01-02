import React from 'react'

const ProjectCards = props => {
  const { image, ProjectName, projectTech } = props
  return (
    <>
      <div
        className='group relative h-[18rem] w-full flex flex-col  rounded-md shadow-[0_1px_20px_-10px_white] overflow-hidden cursor-pointer'
        // data-aos={'zoom-in-right'}
      >
        <div
          className='h-full w-full bg-cover bg-no-repeat bg-center rounded-md '
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-md text-white'>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-3 rounded-md backdrop-blur-[1.5px] translate-y-[100%] group-hover:translate-y-0 ease-out duration-200'>
            <h1 className='md:text-xl text-sm font-bold'>{ProjectName}</h1>
            <p className='md:text-md text-xs'>{projectTech}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCards
