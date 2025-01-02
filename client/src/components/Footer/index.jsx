import React from 'react'
import './index.css'
import { FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialMidea = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    className: 'insta',
    link: 'https://www.instagram.com/vinit___pawar/'
  },
  {
    name: 'Linkdein',
    icon: <FaLinkedin />,
    className: 'linkedin',
    link: 'https://www.linkedin.com/in/vinit-rahangdale-a1864a245'
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
    className: 'twitter',
    link: 'https://twitter.com/VinitPawar2112'
  },
  {
    name: 'Github',
    icon: <FaGithubSquare />,
    className: 'git',
    link: 'https://github.com/vinit-r'
  }
]

function Footer () {
  // useEffect(() => {}, []);
  let doResizeResult = () => {
    console.log(window.innerWidth)
  }

  let debounce = (callback, delay) => {
    let myTimeout
    return () => {
      clearTimeout(myTimeout)
      myTimeout = setTimeout(() => {
        callback()
      }, delay)
    }
  }

  let doDebounce = debounce(() => doResizeResult(), 1000)

  window.addEventListener('resize', () => doDebounce())
  return (
    <>
      <div className='w-full h-full bg-black px-1 py-2'>
        <div className='flex flex-col w-full h-full justify-center items-center '>
          <div className='grid grid-cols-4 text-white w-[35%]  justify-between gap-x-2'>
            {socialMidea.map((index, items) => {
              return (
                <a
                  key={index}
                  className={`p-1 hover:text-zinc-400 font-MoonWalk text-sm ${items?.className}`}
                  href={`${items?.link}`}
                >
                  {window.innerWidth <= 768 ? items?.icon : items?.name}
                </a>
              )
            })}
          </div>
          <div className='text-zinc-400 mt-2 md:text-sm text-xs font-MoonWalk'>
            <p>Copyright &copy; 2023 Vinit Rahangdale</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
