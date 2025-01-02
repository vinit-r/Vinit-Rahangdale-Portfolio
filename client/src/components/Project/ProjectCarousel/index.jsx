import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image from '../../../../public/image/netflix.svg'
import ProjectCards from '../Cards'

function ProjectCarousel () {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='w-full'>
      <div className='container mx-auto px-24 py-8 overflow-hidden'>
        <h2 className='text-4xl font-bold mb-6 text-center text-white font-MoonWalk'>
          Projects
        </h2>
        <div className='relative'>
          <Slider {...settings} className='px-4'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='p-3'>
                <ProjectCards
                  image={image}
                  ProjectName={'Netflix Clone'}
                  projectTech={'React Js, Firebase, Tailwind Css, JavaScript'}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
