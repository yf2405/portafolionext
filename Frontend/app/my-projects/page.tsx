import React from 'react';
import { IconType } from 'react-icons';
import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';




const Page = () => {
  return (
    <div
      style={{backgroundImage: "url(/main-bg.webp)"}}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='flex flex-wrap justify-center gap-3 max-w-[90%] max-h-[90%] top-7'>
         <h3 className='text-transparent bg-clip-text  bg-white text-[25px] font-semibold'>Mis ultimos proyectos</h3>
          <ProjectCard/>
 
      </div>
    </div>
  );
};

export default Page;