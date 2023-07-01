"use client"
import Image from "next/image";

import {
  ImageThumbnailCourse
} from '@/public/images'

export default function CardCourse(props) {

  const {
    item,
  } = props

  return (
    <div className="w-full flex flex-col space-y-4 bg-gray-800 bg-opacity-40 rounded-3xl">
      <Image src={ImageThumbnailCourse} layout="responsive" objectFit='cover' className="rounded-t-3xl w-full" alt="thumbnail" />
      <div className="flex flex-col space-y-4 py-5 px-5">
        <div className="font-medium text-white text-xs">{item.videos} Videos</div>
        <div className="font-bold text-white text-sm leading-6">{item.title.toUpperCase()}</div>
        <div className="flex flex-row py-3">
          <div className='py-1.5 px-3 text-sm text-green-500 bg-gray-800 rounded-full'>
            {item.tingkat}
          </div>
        </div>
      </div>
    </div>
  )
}