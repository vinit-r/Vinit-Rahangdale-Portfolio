import React from 'react'

// const navItems = [
//   {
//     name: 'contact me',
//     link: ''
//   },
//   {
//     name: 'contact me',
//     link: ''
//   }
// ]

const Navbar = () => {
  return (
    <>
      <div className='flex justify-center items-center text-white py-2 md:py-5 px-2 sm:px-3 w-full'>
        <div className='flex md:gap-14 text-sm md:text-base justify-between md:justify-center items-center tracking-[1px] font-Noople w-full'>
          <span className='cursor-pointer'>About me</span>
          <div className='cursor-pointer'>
            <img
              className='w-12 md:w-16 h-12 md:h-16 rounded-full'
              src='../../../public/image/logo192.png'
              alt='vinit-rahangdale-logo'
            />
          </div>
          <span className='cursor-pointer'>Contact me</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
