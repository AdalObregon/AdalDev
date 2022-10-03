// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Proyectos from '../data/projects.json';
const Projects = () => {
  // const [proyectos, setProyectos] = useState([]);

  // useEffect(() => {
  //   const obtenerProyectos = async () => {
  //     // const url = '/src/projects.json';
  //     const result = await axios(Json);
  //     setProyectos(result.data);
  //     console.log(result);
  //   };
  //   obtenerProyectos();
  // }, []);

  // useEffect(() => {
  //   const obtenerProyectos = async () => {
  //     const url = 'data/projects.json';
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setProyectos(result);
  //   };
  //   obtenerProyectos();
  // }, []);

  // useEffect(() => {
  //   const obtenerProyectos = () => {
  //     const url = 'data/projects.json';
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => setProyectos(data));
  //   };
  //   obtenerProyectos();
  // }, []);

  return (
    <>
      <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500 text-center'>
        Projects
      </h1>

      <div className='grid xl:grid-cols-3 xl:mx-28 mx-10 py-20'>
        {Proyectos.map((misProyectos, i) => {
          return (
            <div
              className='border-2 rounded-xl border-gray-700 dark:border-gray-800 mx-5 bg-gradient-to-b from-gray-800 to-gray-900 text-white mb-10 hover:scale-110 transition delay-150 duration-300 ease-in-out'
              key={i}
            >
              <h2 className='text-2xl bg-gradient-to-b from-gray-800 to-gray-900 font-extrabold text-center text-white rounded-t-lg py-2'>
                {misProyectos.name}
              </h2>
              <a href={misProyectos.deploy} target='_blank'>
                <img
                  src={misProyectos.image}
                  width={600}
                  className='cursor-pointer'
                />
              </a>
              <div className='mx-3 py-4'>
                <p className='font-semibold mb-4'>
                  Technologies: <span>{misProyectos.technologies}</span>
                </p>
                <p className='font-semibold'>
                  Deploy 🚀:{' '}
                  <a
                    href={misProyectos.deploy}
                    className='text-rose-300'
                    target='_blank'
                  >
                    CLICK ME!
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
