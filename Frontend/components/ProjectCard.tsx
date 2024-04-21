"use client"
import React, { useState } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importa los iconos de FontAwesome
import { Projects } from '@/constants';


const ProjectCard = () => {
   
  return (
    <Swiper
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }}
    freeMode={true}
    pagination={{
        clickable: true
    }}
    modules={[Pagination]}
   
>
   
  
  
{Projects.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="border rounded-lg m-5  p-4 ">
                    <h3 className="mb-4 text-gray-200 text-lg">{item.title}</h3>
                      <div
            style={{backgroundImage: `url(${item.src})`}}
            className='  h-44 w-full group relative flip-card-back bg-cover bg-center text-white rounded-lg border '>
                    </div>
                    <p className="text-sm p-3  text-gray-200">{item.text}</p>
                    <div className='  flex  text-gray-200 text-[20px]'>
                       <a href= {item.git} className='rounded-full flex justify-between items-center p-2 m-2 border  bg-slate-900 bg-opacity-25 border-gray-400' > <FaGithub/> GIT</a>
                    <a href= {item. Link}   className='rounded-full flex justify-between items-center p-2 m-2 border bg-slate-900 bg-opacity-25 border-gray-400'><FaExternalLinkAlt />WEB</a>
                    </div>  
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
  )
}

export default ProjectCard