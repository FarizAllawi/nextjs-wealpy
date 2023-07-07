'use client'
import propTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'

import {
    IcHamburgerWhite,
    IcProfile,
    IcClose
} from '@/public/images'
import Desktop from "@/components/navbar/desktop";

export default function Mobile(props) {

    const { menu, isScrolled } = props;

    const [mobileScrolled, setMobileScrolled] = useState(isScrolled);
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [profileClicked, setProfileClicked] = useState(false);
    const wrapper = useRef(null);

    const toggleMenu = () => {
        setMobileScrolled(mobileScrolled ? mobileScrolled : true);
        setHamburgerClicked(!hamburgerClicked);
    }

    const toggleProfile = () => {
        setMobileScrolled(mobileScrolled ? mobileScrolled : true);
        setProfileClicked(!profileClicked);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setMobileScrolled(true)
            else setMobileScrolled(false)
        }

        const clickOutside = (event) => {
            if (wrapper && !wrapper.current?.contains(event.target)) {
                    setHamburgerClicked(false)
                    setProfileClicked(false)
            }
        }
        handleScroll();

        // Add event listener
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousedown", clickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousedown", clickOutside)
        }
    }, [])

    return (
        <>
            <div className={`absolute top-0 left-0 w-screen px-2 w-full h-16 z-10 ${mobileScrolled && 'background-blur'} `}>
                <div className="h-full container mx-auto">
                    <div className="h-full flex place-content-center items-center mx-4 md:mx-10">
                        <div className="basis-1/3 relative flex items-center h-auto">
                            {hamburgerClicked ? (
                              <IcClose width={20} onClick={toggleMenu}/>
                            ) : (
                              <IcHamburgerWhite width={20}  onClick={toggleMenu}/>
                            )}
                        </div>
                        <div className="basis-1/3 h-full relative flex place-content-center items-center">
                            <Link href="/" className="absolute text-2xl font-bold text-white tracking-wider cursor-pointer">
                                WEALPY
                            </Link>
                        </div>
                        <div className="basis-1/3 relative flex items-center justify-end h-auto">
                            {
                                profileClicked ? (
                                  <IcClose width={20} onClick={toggleProfile}/>
                                ) : (
                                  <IcProfile width={28} onClick={toggleProfile}/>
                                )
                            }
                        </div>
                    </div>

                </div>
                {
                  hamburgerClicked && (
                    <div className={`absolute min-h-screen w-full left-0 top-16 z-30 bg-black bg-opacity-60 backdrop-blur-3xl`}>
                        <div ref={wrapper}  className={`flex w-full flex-col`}>
                            {
                                menu.map((data, index) => {
                                    return (
                                      <Link key={index} href={`/${data}`} className='hover:bg-black hover:bg-opacity-40 font-medium text-white py-5 px-4 md:px-10'>
                                          {data.charAt(0).toUpperCase()+ data.slice(1)}
                                      </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                  )
                }
                {
                    profileClicked && (
                    <div className={`absolute min-h-screen w-full left-0 top-16 z-30 bg-black bg-opacity-60 backdrop-blur-3xl`}>
                        <div ref={wrapper}  className={`flex w-full flex-col`}>
                            <Link href="/auth/sign-in" className='hover:bg-black hover:bg-opacity-40 font-medium text-green-500 py-5 px-4 md:px-10'>
                                Login/Daftar
                            </Link>
                        </div>
                    </div>
                  )
                }
            </div>
        </>
    )
}

Desktop.propTypes = {
    setScrolled: propTypes.func,
    isScrolled: propTypes.bool,
    menu: propTypes.array,
}