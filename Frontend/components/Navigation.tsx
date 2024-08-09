"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false)
  const path = usePathname()
  const [prevPath, setPrevPath] = useState("/")

  useEffect(() => {

    if (prevPath !== path) {
      setIsRouting(true)
    }
  }, [path, prevPath])

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200)
      return () => clearTimeout(timeout)
    }
  }, [isRouting])
  return (
    <div
      
      className="fixed z-[50] bottom-0 w-[100%] md:w-[5%] max-h-[50px] md:min-h-72  rounded-full flex md:flex-col justify-between md:m-6  items-center border  bg-gray-400 bg-opacity-10 border-white px-4 py-7"
    >

      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className=" pl-2 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"
              }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;