"use client"

import { useState, useEffect } from 'react';
import {usePathname} from "next/navigation";

import Desktop from './desktop.js'
import Mobile from './mobile.js'

export default function Navbar(props) {

  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false)
  const [size, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [menu, setMenu] = useState(['course', 'news', 'community'])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true)
      else setIsScrolled(false)
    }

    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Check if window object is available (client-side rendering)
    if (typeof window !== 'undefined') {
      handleScroll();
      handleResize();


      // Add event listener
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [])

  return (
    <div className="w-full fixed top-0 py-3 flex flex-row place-content-center" style={{ zIndex: 1000 }}>
      {
        size.width !== undefined ? (
          <>
            {
              size.width >= 1024 ? (
                <div className={`lg:w-5/6 h-16 ${isScrolled && 'background-blur'} transition-all duration-300 rounded-xl flex flex-row z-50`}>
                  <Desktop menu={menu} isScrolled={isScrolled}  />
                </div>
              ) : (
                <Mobile menu={menu} isScrolled={isScrolled}/>
              )
            }
          </>
        ) : (
          <div className="absolute top-0 left-0 lg:relative bg-white w-full lg:w-5/6 h-16 bg-opacity-90 lg:rounded-xl animate-pulse"></div>
        )
      }
    </div>
  )
}