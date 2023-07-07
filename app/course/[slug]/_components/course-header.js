"use client"
import {usePathname} from "next/navigation";
import {useSelector} from "react-redux";
import Image from "next/image";
import Link from "next/link";



import {
  IcAcademy,
  IcArrowRight,
  IcPlay,
  IcTime,
  IcFacebookWhite, IcFullScreenWhite, IcLinkedInWhite, IcTelegramWhite,
} from "@/public/images";
import {useEffect} from "react";
import {VideoPlayer} from "@/components";

export default function CourseHeader() {

  const { globalReducer } =  useSelector(state => state)
  const pathName = usePathname();
  const pagePath = pathName.split('/')

  return (
    <>
      <div className="w-full pt-20 lg:pt-0 px-6 lg:px-16  2xl:px-32 flex items-center text-xs 2xl:text-base text-gray-300 lg:font-semibold tracking-normal">
        <Link href={`/course`} className='underline underline-offset-2 text-green-500'>
          Course
        </Link>
        <IcArrowRight width={12} className="mx-2"/>
        {pagePath[2]}
      </div>
      <div className="select-none w-full flex flex-col-reverse lg:flex-row px-6 lg:px-0 gap-4 lg:space-x-4 lg:px-16 2xl:px-32">
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-8">
          <div className="w-full font-semibold text-2xl xl:text-5xl 2xl:text-6xl leading-snug text-white">
            Mengenal Kewajiban Pajak Investor
          </div>
          <div className="flex flex-row space-x-5 lg:space-x-6">
            <div className="flex flex-row space-x-3 lg:space-x-4 items-center place-content-center">
              <div className="flex place-content-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black bg-opacity-40">
                <IcAcademy width={ globalReducer.windowSize.width >= 1024 ? 24 : 16} />
              </div>
              <div className="text-white text-xs lg:text-sm">Beginner</div>
            </div>

            <div className="flex flex-row space-x-3 lg:space-x-4 items-center place-content-center">
              <div className="flex place-content-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black bg-opacity-40">
                <IcPlay width={ globalReducer.windowSize.width >= 1024 ? 16 : 10}
                        height={ globalReducer.windowSize.width >= 1024 ? 16 : 10}
                        className="ml0.5 lg:ml-1"/>
              </div>
              <div className="text-white  text-xs lg:text-sm">20 Video</div>
            </div>

            <div className="flex flex-row space-x-3 lg:space-x-4 items-center place-content-center">
              <div className="flex place-content-center items-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black bg-opacity-40">
                <IcTime width={ globalReducer.windowSize.width >= 1024 ? 24 : 16} />
              </div>
              <div className="text-white text-xs lg:text-sm">36:13</div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 2xl:w-1/3 flex-col space-y-2">
            <div className="text-white text-xs">Akses semua materi dengan</div>
            <div className="w-full xl:pr-4">
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/membership`} className='py-3 flex place-content-center bg-green-500 text-white text-xs md:text-xl lg:text-sm rounded-full shadow-md hover:bg-green-700  text-center cursor-pointer button-shadow-green'>
                Mulai Bergabung
              </Link>
            </div>
          </div>

        </div>

        {/* Video Player */}
        <div className="w-full lg:w-1/2 flex flex-col items-end space-y-4 lg:space-y-8">
          <VideoPlayer source="https://youtu.be/jp1q6zDi_Tc"/>
        </div>
      </div>
    </>
  )
}