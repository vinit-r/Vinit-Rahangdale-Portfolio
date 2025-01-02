import React, { useState, useEffect } from 'react'

const ScrollSlidingDot = ({ text }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const maxScroll = 100

  const translateX = Math.min(
    (scrollY / maxScroll) * (window.innerWidth / 2 - 20),
    window.innerWidth / 2 - 120
  )
  const scale = Math.max(1 - scrollY / maxScroll, 0.5)

  return (
    <div className='relative pb-10'>
      <div
        className='absolute top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full transition-all duration-300'
        style={{
          left: `calc(50% - ${translateX}px)`,
          width: `${5 * scale}rem`,
          height: `${5 * scale}rem`,
          padding: '10px'
        }}
      ></div>
      <div
        className='absolute top-1/2 transform -translate-y-1/2 text-white text-4xl transition-all duration-500 font-MoonWalk'
        style={{
          left: `calc(50% - ${translateX}px + ${6 * scale + 1.5}rem)`
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default ScrollSlidingDot
