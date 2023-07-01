"use client"
import {useState, useEffect} from 'react';
import Link from "next/link";

export default function PriceList() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted && (
    <div id="price-list" className="flex flex-col place-content-center items-center h-auto 2xl:min-h-screen mx-4 lg:px-24 2xl:px-20 xl:py-8 2xl:py-20">
      <div className="relative w-full h-24 flex flex-col items-center mt-12 2xl:mt-6">
        <div className='bg-banner-price'></div>
        <div className="absolute w-full h-full">
          <div className="flex flex-col place-content-center items-center ">
            <div className="text-center text-sm lg:text-base text-white">BELAJAR EXCLUSIVE MULAI DARI </div>
            <div className="text-3xl text-white font-extrabold leading-normal">
              Rp 20.000 / Bulan
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full 2xl:mt-28 mt-4 mb-8 flex flex-col items-center">
        <Link href="/checkout?membership=1" className="text-center text-green-500 underline underline-offset-2 cursor-pointer">
          Mau coba dulu 1 bulan ?
        </Link>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 mb-16 2xl:mt-24 lg:max-h-screen">
        <Link href="/checkout?membership=3" className='w-full order-last lg:order-2 lg:w-1/3 bg-gray-800 bg-opacity-40 rounded-3xl'>
            <div className="relative flex flex-col place-content-center items-center my-4">
              <div className="text-white font-bold text-base md:text-lg">
                3 BULAN
              </div>
              <div className="text-gray-300 text-sm font-semibold">RP 35,000/ Bulan</div>
            </div>
            <div className="flex flex-row-reverse lg:flex-row">
              <div className="w-10/12 lg:w-4/5 flex flex-col place-content-center items-center bg-green-500 bg-opacity-40  lg:border-2 lg:border-green-500 lg:border-opacity-0 rounded-br-3xl lg:rounded-bl-3xl">
                <div className="py-2 px-2 mt-8 mb-3 lg:mt-24 lg:mb-4 bg-orange-700 text-white text-xs lg:text-sm italic font-semibold rounded-full lg:rounded-lg line-through">
                  Rp 150,500
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl italic text-white font-bold  lg:mb-12">
                  <span className="text-xl md:text-2xl lg:text-4xl">Rp</span> 100<span className="text-xl md:text-2xl lg:text-4xl">k</span>
                </div>
                <Link href="/checkout?membership=3" className="invisible lg:visible lg:py-3 lg:px-7 bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-center font-semibold cursor-pointer lg:mb-6">
                  Mulai Berlangganan
                </Link>
              </div>
              <div className="w-2/12 lg:w-1/5 flex flex-col items-center">
                <div className="mt-14 lg:mt-56 font-bold text-xl lg:text-xl 2xl:text-2xl text-white tracking-wider -rotate-90 transform-gpu">WEALPY</div>
              </div>
            </div>
        </Link>

        <Link href="/checkout?membership=12" className='w-full order-first lg:order-2 lg:w-1/3 bg-gray-800 bg-opacity-40 rounded-3xl lg:border-2 lg:border-green-500'>
          <div className="relative flex flex-col place-content-center items-center my-4">
            <div className="text-white font-bold text-base md:text-lg">
              12 BULAN
            </div>
            <div className="text-gray-300 text-sm font-semibold">RP 20,000/ Bulan</div>
            <div className="absolute w-full h-full top-0">
              <div className="visible lg:invisible my-0.5 mx-4 md:my-0 md:mx-6 font-bold text-sm md:text-2xl text-gray-800 italic transform-gpu">REKOMENDASI</div>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row">
            <div className="w-10/12 lg:w-4/5 flex flex-col place-content-center items-center bg-green-500 bg-opacity-40 rounded-br-3xl lg:rounded-bl-3xl">
              <div className="py-2 px-2 mt-8 mb-3 lg:mt-24 lg:mb-4 bg-orange-700 text-white text-xs lg:text-sm italic font-semibold rounded-full lg:rounded-lg line-through">
                Rp 550,500
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl italic text-white font-bold  lg:mb-12">
                <span className="text-xl md:text-2xl lg:text-4xl">Rp</span> 240<span className="text-xl md:text-2xl  lg:text-4xl">k</span>
              </div>
              <Link href="/checkout?membership=12">
                <div className="invisible lg:visible lg:py-3 lg:px-7 bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-center font-semibold cursor-pointer lg:mb-6">
                  Mulai Berlangganan
                </div>
              </Link>
            </div>
            <div className="w-2/12 lg:w-1/5 flex flex-col items-center">
              <div className="invisible lg:visible mt-8 font-bold text-2xl text-gray-800 italic -rotate-90 transform-gpu">REKOMENDASI</div>
              <div className="-mt-1 lg:mt-40 font-bold text-xl lg:text-xl 2xl:text-2xl text-white tracking-wider -rotate-90 transform-gpu">WEALPY</div>
            </div>
          </div>
        </Link>
        <Link href="/checkout?membership=6" className='w-full lg:order-3 lg:w-1/3 bg-gray-800 bg-opacity-40 rounded-3xl'>
          <div className="relative flex flex-col place-content-center items-center my-4">
            <div className="text-white font-bold text-base md:text-lg">
              6 BULAN
            </div>
            <div className="text-gray-300 text-sm font-semibold">RP 25,000/ Bulan</div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row ">
            <div className="w-10/12 lg:w-4/5 flex flex-col place-content-center items-center bg-green-500 bg-opacity-40 lg:border-2 lg:border-green-500 lg:border-opacity-0  rounded-br-3xl lg:rounded-bl-3xl">
              <div className="py-2 px-2 mt-8 mb-3 lg:mt-24 lg:mb-4 bg-orange-700 text-white text-xs lg:text-sm italic font-semibold rounded-full lg:rounded-lg line-through">
                Rp 325,500
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl italic text-white font-bold  lg:mb-12">
                <span className="text-xl md:text-2xl lg:text-4xl">Rp</span> 150<span className="text-xl md:text-2xl lg:text-4xl">k</span>
              </div>
              <Link href="/checkout?membership=6">
                <div className="invisible lg:visible lg:py-3 lg:px-7 bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-center font-semibold cursor-pointer lg:mb-6">
                  Mulai Berlangganan
                </div>
              </Link>
            </div>
            <div className="w-2/12 lg:w-1/5 flex flex-col items-center">
              <div className="mt-14 lg:mt-56 font-bold text-xl lg:text-xl 2xl:text-2xl text-white tracking-wider -rotate-90 transform-gpu">WEALPY</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}