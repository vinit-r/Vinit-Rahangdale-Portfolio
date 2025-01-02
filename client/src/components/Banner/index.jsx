import React from 'react'

const HeroBanner = () => {
  const textSections = [
    {
      text: 'I   Am',
      size: 'text-2xl sm:text-4xl lg:text-6xl',
      extraStyles: 'font-extrabold'
    },
    {
      text: 'Vinit  Rahangdale',
      size: 'text-2xl sm:text-4xl lg:text-5xl',
      extraStyles: 'font-extrabold pb-0 sm:pb-2 lg:pb-4'
    },
    {
      text: 'MERN   Stack',
      size: 'text-4xl sm:text-[3.5rem] lg:text-[4.5rem]',
      extraStyles: 'font-bold text-blue-500 pb-0 sm:pb-4 lg:pb-8'
    },
    {
      text: 'DEVELOPER',
      size: 'text-4xl sm:text-[4rem] lg:text-[5rem]',
      extraStyles: 'font-extrabold'
    }
  ]

  const statItems = [
    {
      label: 'Experience',
      value: '2+ Years',
      borderColor: 'border-green-200',
      textColor: 'text-green-300'
    },
    {
      label: 'Projects',
      value: '5+',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-300'
    }
  ]

  return (
    <div className='w-full h-full flex'>
      {/* Hero Banner Background */}
      <div className="flex flex-row md:bg-none bg-[url('/public/image/vinit_edit.jpg')] bg-cover bg-no-repeat bg-center w-full h-full">
        {/* Left Section */}
        <div className='md:bg-transparent bg-blackCover relative md:w-[60%] w-full h-full flex flex-col justify-center items-center py-20'>
          {/* Text Content */}
          <div className='text-white flex flex-col font-MoonWalk text-center'>
            {textSections.map((section, index) => (
              <TextAnimation
                key={index}
                text={section.text}
                size={section.size}
                extraStyles={section.extraStyles}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className='text-white flex pt-10 w-full justify-center gap-2 sm:gap-5 text-center font-Courgette'>
            {statItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col border-[1px] rounded-md sm:rounded-xl px-5 sm:px-10 py-1 ${item.borderColor}`}
              >
                <span className={`${item.textColor} text-xs sm:text-base`}>
                  {item.label}
                </span>
                <span className='text-xs sm:text-base'>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className='md:w-[40%] w-0 md:h-full h-0'>
          <img
            className='h-full w-full object-cover bg-transparent opacity-50'
            src='/public/image/vinit_edit.jpg'
            alt='Vinit Rahangdale'
          />
        </div>
      </div>
    </div>
  )
}

/* Text Animation Component */
const TextAnimation = ({ text, size, extraStyles }) => {
  return (
    <div className='flex space-x-[0.5px] sm:space-x-1 justify-center items-center'>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`${size} inline-block animate-slideUp ${extraStyles}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

export default HeroBanner
