"use client";
import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importa los iconos de FontAwesome
import { Projects } from '@/constants';
import 'swiper/swiper-bundle.css'; // Asegúrate de importar los estilos de Swiper
import { tree } from 'next/dist/build/templates/app-page';

const ProjectCard = () => {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1} // Mostrar una slide en vista móvil
            spaceBetween={-20} // Ajusta el espaciado entre las cartas, menor valor las junta más
            breakpoints={{
                420: {
                    slidesPerView: 1.5, // Muestra una slide y media en pantallas de 640px o más
                    spaceBetween: -20, // Espaciado más estrecho en pantallas más pequeñas
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: false,
                    },
                },
                768: {
                    slidesPerView: 2, // Muestra tres slides en pantallas de 1024px o más
                    coverflowEffect: {
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: true,
                    },
                },
                1024: {
                    slidesPerView: 3, // Muestra tres slides en pantallas de 1024px o más
                    coverflowEffect: {
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: true,
                    },
                },
            }}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
        >
            {Projects.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-gray-300/5 border-1 border-blue-300/30 rounded-xl p-4 m-6">
                        <h3 className="mb-4 text-gray-200 text-lg">{item.title}</h3>
                        <div
                            style={{ backgroundImage: `url(${item.src})` }}
                            className='h-36 w-full group relative bg-cover bg-center text-white rounded-lg border'> {/* Ajuste de altura */}
                        </div>
                        <p className="text-sm p-3 text-gray-200">{item.text}</p>
                        <div className='flex text-gray-200 text-[20px]'>
                            <a href={item.git} className='rounded-full flex justify-between items-center p-2 m-2 border bg-slate-900 bg-opacity-25 border-gray-400'>
                                <FaGithub /> GIT
                            </a>
                            <a href={item.Link} className='rounded-full flex justify-between items-center p-2 m-2 border bg-slate-900 bg-opacity-25 border-gray-400'>
                                <FaExternalLinkAlt /> WEB
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                
            ))}
            
        </Swiper>
    );
}

export default ProjectCard;
