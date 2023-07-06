'use client'
import Image from "next/image";
import Link from "next/link";

import {ImageNews1, ImageNews2, ImageNews3} from "@/public/images";
import {Slugify} from "@/lib";

export default function LastestNews(props) {
  const news = [
    {
      thumbnail: ImageNews2,
      title: "Harga Minyak Akhirnya Turun! Bagaimana kedepannya?",
      category: 'Business',
      publishDate: 'Jumat, 18 Mar 2022'
    },
    {
      thumbnail: ImageNews3,
      title: "Tiada Kemajuan Pembicaraan Rusia-Ukraina, Harga Minyak Naik Lagi",
      category: 'Business',
      publishDate: 'Jumat, 18 Mar 2022'
    },
    {
      thumbnail: ImageNews1,
      title: 'Wacana BEI: 1 Lot = 10 Saham (dari 100), Targetkan Minat Investasi Lebih',
      category: 'Finance',
      publishDate: 'Jumat, 18 Mar 2022'
    },
    {
      thumbnail: ImageNews3,
      title: "Tiada Kemajuan Pembicaraan Rusia-Ukraina, Harga Minyak Naik Lagi",
      category: 'Business',
      publishDate: 'Jumat, 18 Mar 2022'
    },
  ]

  return (
    <>
      {
        news.map((item, index) => {
          return (
            <div key={index} className="relative w-full h-60 2xl:h-72">
              <Image src={item.thumbnail} fill={true} style={{ objectFit:"cover"}} className="rounded-3xl w-full" alt="thumbnail-image" />
              <div className="absolute w-full h-full">
                <div className="flex flex-col px-5 py-6 gap-5 bg-gray-800 bg-opacity-60 rounded-3xl h-full">
                  <div className="font-semibold leading-7 2xl:leading-8 text-lg text-white">
                    {item.title}
                  </div>
                  <div className="w-full flex flex-row gap-2 place-content-start items-center">
                    <div className="py-1.5 px-3 bg-gray-800 rounded-full text-xs text-green-500">{item.category}</div>
                    <div className="text-white text-xs">{item.publishDate}</div>
                  </div>
                  <Link href={`/news/${Slugify(item.title)}`} className="font-medium text-white text-sm underline underline-offset-2">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}