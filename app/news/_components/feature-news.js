'use client'
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {IcArrowRight, ImageNews1} from "@/public/images";
import {Slugify} from "@/lib";

export default function FeaturedNews(props) {
  const news = [
    {
      thumbnail: ImageNews1,
      title: 'Wacana BEI: 1 Lot = 10 Saham (dari 100), Targetkan Minat Investasi Lebih',
      category: 'Finance',
      publishDate: 'Jumat, 18 Maret 2022',
      description: 'Penurunan 1 lot menjadi 10 dari 100 saham bisa jadi sentimen positif yang diperlukan demi pertumbuhan investor',
    }
  ]

  const [selectedNews, setSelectedNews] = useState(news[0])

  return (
    <div className="w-full flex flex-col place-content-center items-center space-y-4">
      <div className="w-full">
        <Image src={ImageNews1} className="w-full object-cover rounded-3xl"  alt={`thumbnail-${selectedNews.title}`}/>
      </div>
      <div className="w-full flex flex-row space-x-2 2xl:space-x-4">
        <div className="w-10 flex">
          <div className='bg-gray-800 hover:bg-opacity-60 cursor-pointer pr-1 w-9 h-9 flex items-center place-content-center rounded-full'>
            <IcArrowRight width={13} className='rotate-180'/>
          </div>
        </div>
        <div className="flex flex-grow place-content-start items-center space-x-2 2xl:space-x-4">
          <div className="flex flex-row">
            <div className="bg-gray-800 py-2 px-3 2xl:py-3 2xl:px-5 rounded-full text-green-500 text-xs">
              {selectedNews.category}
            </div>

          </div>
          <div className="text-white text-xs font-medium">
            {selectedNews.publishDate}
          </div>
        </div>
        <div className="w-10 flex place-content-end">
          <div className='bg-green-500 hover:bg-opacity-60 cursor-pointer pl-0.5 w-9 h-9 flex items-center place-content-center rounded-full'>
            <IcArrowRight width={13}/>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col space-y-4">
        <div className="font-semibold lg:text-base 2xl:text-2xl text-white leading-7">{selectedNews.title}</div>
        <div className="font-normal text-xs 2xl:text-sm text-white leading-5">{selectedNews.description}</div>
        <Link href={`/news/${Slugify(selectedNews.title)}`} className="font-medium text-xs 2xl:text-sm text-green-500 underline underline-offset-1 cursor-pointer">
          Lanjutkan Membaca
        </Link>
      </div>
    </div>
  )
}