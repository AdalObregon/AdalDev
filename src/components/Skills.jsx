import React from 'react';

const Skills = () => {
  return (
    <>
      <div className='flex justify-center'>
        <h2 className='text-5xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500'>Skills</h2>
      </div>
      <div className='flex xl:justify-around xl:flex-row flex-col mx-16 w-'>
        <div className='bg-gradient-to-b hover:scale-110 transition delay-150 duration-300 ease-in-out from-gray-800 to-gray-900 h-fit p-12 mb-20 rounded-xl'>
          <div className='text-center text-white text-3xl mb-5 font-semibold '>
            <h2>Frontend</h2>
          </div>
          <div className='flex justify-center text-5xl mb-4 gap-3'>
            <i class='devicon-html5-plain colored'></i>
            <i class='devicon-css3-plain colored'></i>
            <i class='devicon-javascript-plain colored'></i>
            <i class='devicon-tailwindcss-plain colored'></i>
          </div>
          <div className='flex justify-center text-5xl gap-3'>
            <i class='devicon-bootstrap-plain colored'></i>
            <i class='devicon-react-original colored'></i>
            <i class='devicon-figma-plain colored'></i>
            <i class='devicon-sass-original colored'></i>
          </div>
        </div>

        <div className='bg-gradient-to-b from-gray-800 to-gray-900 h-fit p-12 mb-20 rounded-xl hover:scale-110 transition delay-150 duration-300 ease-in-out'>
          <div className='text-center text-white text-3xl mb-5 font-semibold'>
            <h2>Backend</h2>
          </div>
          <div className='flex justify-center text-5xl mb-4 gap-3'>
            <i class='devicon-java-plain colored'></i>
            <i class='devicon-spring-plain colored'></i>
            <i class='devicon-express-original text-white'></i>
            <i class='devicon-mysql-plain text-white'></i>
          </div>
          <div className='flex justify-center text-5xl gap-3'>
            <i class='devicon-nodejs-plain colored'></i>
            <i class='devicon-sequelize-plain colored'></i>
            <i class='devicon-python-plain colored'></i>
          </div>
        </div>
        <div className='bg-gradient-to-b from-gray-800 to-gray-900 h-fit p-12 mb-20 rounded-xl hover:scale-110 transition delay-150 duration-300 ease-in-out'>
          <div className='text-center text-white text-3xl mb-5 font-semibold'>
            <h2>Other</h2>
          </div>
          <div className='flex justify-center text-5xl mb-4 gap-3 '>
            <i class='devicon-bash-plain text-white'></i>
            <i class='devicon-git-plain colored'></i>
            <i class='devicon-github-original text-white'></i>
            <i class='devicon-jira-plain colored'></i>
          </div>
          <div className='flex justify-center text-5xl gap-3'>
            <i class='devicon-npm-original-wordmark colored'></i>
            <i class='devicon-photoshop-plain colored'></i>
            <i class='devicon-vscode-plain colored'></i>
            <i class='devicon-intellij-plain colored'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
