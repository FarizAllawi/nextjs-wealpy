'use client'
import Image from "next/image";
import Link from "next/link";

import {ImageNews4, ImageNews5, ImageNews6, ImageNews8, ImageThumbnailStock} from "@/public/images";
import {Slugify} from "@/lib";


export default function TopPicks(props) {
  const news = [
    {
      thumbnail: ImageNews4,
      title: 'Saratoga Anggarkan Rp 150 Miliar untuk Byuback 45 Juta Saham',
      publishDate: 'Kamis, 17 Mar 2022'
    },
    {
      thumbnail: ImageNews5,
      title: 'The Fed Akhirnya Naikkan Suku Bunga Pertama Kali Sejak 2018',
      publishDate: 'Kamis, 17 Mar 2022'
    },
    {
      thumbnail: ImageNews6,
      title: 'Mengintip IPO GoTo yang Sudah Lama Dinanti',
      publishDate: 'Selasa, 15 Mar 2022'
    },
    {
      thumbnail: ImageThumbnailStock,
      title: 'Technical Review 15 Maret 2022 (IHSG, ASRI, BNBA, BAPA, DSNG)',
      publishDate: 'Selasa, 15 Mar 2022'
    },
    {
      thumbnail: ImageNews8,
      title: 'Timah (TINS) Cetak Laba Rp 1,3T Pada 2021 Saat Booming Komoditas',
      publishDate: 'Senin, 14 Mar 2022'
    },

  ]

  return (
    <>
      {
        news.map((item, index) => {
          return (
            <Link key={index} href={`/news/${Slugify(item.title)}`} className="relative w-full h-1/5 flex flex-row gap-3 bg-gray-800 bg-opacity-40 rounded-2xl">
              <Image src={item.thumbnail} fill={false} style={{ objectFit: "cover"}} className="w-4/12 rounded-tl-2xl rounded-bl-2xl" alt="thumbnail-image" />

              <div className="w-8/12 h-full flex flex-col gap-3 py-2 pr-3">
                <div className="font-semibold text-white text-xs">{item.title}</div>
                <div className="font-medium text-white text-xs">{item.publishDate}</div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}