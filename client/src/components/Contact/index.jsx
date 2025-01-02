import React, { useState } from 'react'
import axios from 'axios'
import Toaster from '../Shared/Toaster'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showToster, setShowToster]= useState(false)

  const handleOnChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    console.log('showToster', showToster);
    try {
      console.log('formData?.message', formData?.message)

      if (!(formData?.name && formData?.email && formData?.message)) {
        console.log('Input validation failed: Missing required fields')

        throw new Error('All Input fields are required')
      }

      const res = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}contact-us/sendMessage`,
        formData
      )
      console.log('Form submitted successfully:', res)
      setShowToster(true)

    } catch (error) {
      console.error('Error occurred:', error)
    }
  }

  return (
    <>
      <section className=' w-full text-white'>
        <div className='container px-28 py-12 mx-auto '>
          <div className='lg:flex lg:items-center lg:-mx-6 bg-[#111111]'>
            <div className='lg:w-1/2 lg:mx-6'>
              <h1 className='text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl'>
                Contact us for more info
              </h1>
              <p className='py-10 text-gray-300/70'>
                Thank you for visiting my portfolio! If you have any questions,
                project ideas, or collaboration opportunities, feel free to
                reach out. I’d love to hear from you and discuss how I can help
                bring your vision to life. Simply fill out the form below, or
                contact me directly via email or phone.
              </p>
              <p className='text-gray-300/70'>
                Let’s create something amazing together!
              </p>
            </div>

            <div className='mt-8 lg:w-1/2 lg:mx-6'>
              <div className='w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl dark:bg-black lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50'>
                <h1 className='text-2xl font-medium text-white'>
                  What do you want to ask
                </h1>

                <form className='mt-6'>
                  <div className='flex-1'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Full Name
                    </label>
                    <input
                      name='name'
                      value={formData?.name}
                      onChange={handleOnChange}
                      type='text'
                      placeholder='John Doe'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#111111] dark:text-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='flex-1 mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Email address
                    </label>
                    <input
                      name='email'
                      type='email'
                      onChange={handleOnChange}
                      value={formData?.email}
                      placeholder='johndoe@example.com'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#111111] dark:text-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='w-full mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Message
                    </label>
                    <textarea
                      name='message'
                      onChange={handleOnChange}
                      value={formData?.message}
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-[#111111] dark:text-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-40'
                      placeholder='Message'
                    ></textarea>
                  </div>

                  <button
                    onClick={handleOnSubmit}
                    target='_blank'
                    className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  >
                    get in touch
                  </button>
                  {showToster&& <Toaster />}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
