"use client"

import DownloadResumeButton from "@/components/Resume";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/night-sky.jpg)" }}
      >
        <div className="pl-10 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[45px]  font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">

              Desarrollador FullStack
            </span>
          </h1>
          <p className="text-2xl font-bold text-gray-200 bg-clip-text bg-text-gradient   hidden md:block">
            ⚖️ Motivación y disciplina van de la mano
          </p>
          <div className=" hidden md:block">
            <DownloadResumeButton />
          </div>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
               <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Saber más
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
               <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Mis proyectos
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contáctame
            </Link>

            <Link
              href="/chatBot"
              className="rounded-[20px] group relative  px-5 py-3 text-lg bg-gray-300/20  max-w-[200px]"
>
              <div className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 border border-transparent rounded-[20px] " >
    IA
  </div>
            </Link>

          </div>

        </div>
        <div className="absolute flex z-[20] left-5 flex-col md:hidden gap-5">
          <DownloadResumeButton />
        </div>
      </div>


      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}