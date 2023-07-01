"use client"
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";


import {
  IcAcademy,
  IcArrowRight, IcFacebookWhite, IcFullScreenWhite, IcLinkedInWhite,
  IcPlay,
  IcPlayWhite, IcSettingWhite,
  IcSpeakerWhite, IcTelegramWhite,
  IcTime, IcTwitterWhite, IcWhatsappWhite,
  ImageThumbnailVideo
} from "@/public/images";

export default function CourseHeader() {
  const pathName = usePathname();
  const pagePath = pathName.split('/')

  return (
    <div className="w-full flex flex-row space-x-4 2xl:px-32 ">
      <div className="w-1/2 flex flex-col space-y-8">
        <div className="w-full flex items-center text-sm 2xl:text-base text-gray-300 font-semibold tracking-normal">
          <Link href={`/course`} className='underline underline-offset-2 text-green-500'>
            Course
          </Link>
          <IcArrowRight width={12} className="mx-2"/>
          {pagePath[2]}
        </div>
        <div className="w-full font-semibold text-6xl leading-snug text-white">
          Mengenal Kewajiban Pajak Investor
        </div>
        <div className="flex flex-row space-x-6">
          <div className="flex flex-row space-x-4 items-center place-content-center">
            <div className="flex place-content-center items-center w-12 h-12 rounded-full bg-black bg-opacity-40">
              <IcAcademy width={24} />
            </div>
            <div className="text-white text-sm">Beginner</div>
          </div>

          <div className="flex flex-row space-x-4 items-center place-content-center">
            <div className="flex place-content-center items-center w-12 h-12 rounded-full bg-black bg-opacity-40">
              <IcPlay width={14} />
            </div>
            <div className="text-white text-sm">20 Video</div>
          </div>

          <div className="flex flex-row space-x-4 items-center place-content-center">
            <div className="flex place-content-center items-center w-12 h-12 rounded-full bg-black bg-opacity-40">
              <IcTime width={24} />
            </div>
            <div className="text-white text-sm">36:13</div>
          </div>
        </div>
        <div className="w-1/3 flex-col space-y-2">
          <div className="text-white text-xs">Akses semua materi dengan</div>
          <div className="w-full xl:pr-4">
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/membership`} className='py-3 flex place-content-center bg-green-500 text-white md:text-xl lg:text-sm rounded-full shadow-md hover:bg-green-700  text-center cursor-pointer button-shadow-green'>
              Mulai Bergabung
            </Link>
          </div>
        </div>

      </div>

      {/* Video Player */}
      <div className="w-1/2 flex flex-col items-end space-y-8 ">
        <div className="relative w-10/12">
          <Image src={ImageThumbnailVideo}
                 layout="responsive" objectFit='cover'
                 className="rounded-3xl"
                 alt="thumbnail-video" />

          <div className="absolute top-0 w-full h-full flex flex-col bg-black bg-opacity-40 rounded-3xl">
            <div className="w-full flex flex-grow items-center place-content-center pt-16">
              <div className="cursor-pointer w-12 h-12 flex items-center place-content-center rounded-full bg-green-500 pl-1">
                <IcPlayWhite width={16} height={16}/>
              </div>
            </div>
            <div className="w-full px-8 py-6 flex flex-row space-x-4 items-center justify-between">
              <IcPlayWhite width={16} height={16} className="cursor-pointer"/>
              <div className="w-1/2 h-2 flex bg-white rounded-full cursor-pointer">
                <div className="w-1/3 h-2 flex bg-green-500 rounded-full"></div>
              </div>
              <div className="text-white font-semibold">
                05:38
              </div>
              <IcSpeakerWhite width={18} height={18} />
              <div className="relative w-1/12 h-2 flex bg-white rounded-full cursor-pointer ">
                <div className="w-full h-2 flex bg-green-500 rounded-full"></div>
                <div className="absolute w-4 h-4 rounded-full bg-white -top-1 -right-2"></div>
              </div>
              <IcSettingWhite width={18} height={18} className="cursor-pointer"/>
              <IcFullScreenWhite width={18} height={18}  className="cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row space-x-4 place-content-end items-center">
          <div className="w-1/2 text-white text-right text-base">
            Bagikan jika menurut kamu bermanfaat
          </div>
          <div className="w-1/ flex flex-row space-x-5 item-center ">
            <IcTwitterWhite width={18} />
            <IcWhatsappWhite width={18} />
            <IcLinkedInWhite width={18} />
            <IcFacebookWhite width={11} />
            <IcTelegramWhite width={18} />
          </div>
        </div>
      </div>
    </div>
  )
}