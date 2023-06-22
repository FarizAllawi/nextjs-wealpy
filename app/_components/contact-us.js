import Link from "next/link";
import Image from "next/image";

import {
  IcWhatsappWhite,
  ImagesBannerQuestion
} from '@/public/images'

export default function ContactUs() {
  return (
    <div className="absolute left-0 w-screen h-72 flex place-content-center items-center ">
      <div className="absolute z-10">
        <div className="flex flex-col place-content-center items-center">
          <div className="font-semibold text-xl lg:text-3xl text-white tracking-normal">Ada yang mau ditanyakan?</div>
          <div className="font-semibold text-sm lg:text-xl text-gray-300 my-3 lg:my-6">Yuk tanya ke Minpy</div>
          <div className="w-3/4">
            <Link href="" className="flex flex-row place-content-center items-center gap-2 py-4 px-7 bg-green-500  rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer">
              <IcWhatsappWhite width={23}/>
              <div className="text-sm lg:text-base text-white font-semibold">Tanya Minpy</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-48 lg:h-72">
        <Image src={ImagesBannerQuestion} layout="fill" objectFit='cover' alt="banner-question"></Image>
      </div>
    </div>
  )
}