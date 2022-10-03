import React from 'react';
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiDribbbleLine,
} from 'react-icons/ri';
import image from '../assets/adal.png';
const Hero = () => {
  return (
    <>
      <div className='relative mx-auto bg-gradient-to-b from-violet-500 to-pink-100 rounded-full w-80 h-80 mt-10 overflow-hidden '>
        <img src={image} className='mt-3' />
      </div>
      <div className='text-center p-10'>
        <h2 className='xl:text-6xl text-5xl text-violet-600 font-bold dark:text-gray-200'>
          Adal Obregon
        </h2>
        <h3 className='xl:text-3xl text-2xl py-2 font-semibold dark:text-gray-100 text-gray-700'>
          Frontend Web Developer.
        </h3>
        <div className='flex text-4xl justify-center gap-4 py-3 text-gray-700 dark:text-gray-300'>
          <a href='https://www.linkedin.com/in/adal-obregon/' target='_blank'>
            <RiLinkedinBoxFill />
          </a>
          <a href='https://github.com/AdalObregon' target='_blank'>
            <RiGithubFill />
          </a>
          <a href='https://dribbble.com/adalobre98' target='_blank'>
            <RiDribbbleLine />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
