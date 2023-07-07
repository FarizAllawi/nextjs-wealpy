"use client"
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import Image from "next/image";

import {IcArrowDown, IcPadLock, IcRightArrow, ImageThumbnailStock} from "@/public/images";
import {Checkbox} from "@/components";

const ContentDescription = () => {
  return (
    <div className="w-full 2xl:w-2/3 block text-sm text-white leading-6">
      Sebagai warga negara dan wajib pajak yang patuh, semua orang yang sudah mendapatkan penghasilan dan memiliki NPWP wajib melaporkan pajaknya. Lapor pajak juga wajib dilakukan oleh investor baik investor pasar uang, pasar modal, properti bahkan modal ventura. Tarif pajak yang dikenakan juga berbeda sesuai dengan objek pajaknya.
      <br></br><br></br>
      Modul Mengenal Kewajiban Pajak Investor ini cocok untuk kamu yang mau mengenal konsep pajak khususnya pajak investasi. Melalui modul ini, kamu akan mempelajari:
      <br></br><br></br>

      <li>Definisi pajak</li>
      <li>Objek dan subjek pajak</li>
      <li>Tarif pajak investasi</li>
      <li>Cara lapor pajak investasi</li>
      <br></br><br></br>

      Setelah menyelesaikan modul ini, kamu dapat mengerti apa dan berapa tarif pajak untuk investasi serta dapat melaporkan pajak atas investasi melalui SPT. Selamat belajar!
    </div>
  )
}

const ContentModule = () => {
  const { globalReducer } = useSelector(state => state)

  return (
    <div className="select-none lg:w-5/6 flex flex-col space-y-4 lg:space-y-5 lg:px-8 py-2 lg:py-8 h-96 lg:bg-gray-800 lg:bg-opacity-40 rounded-3xl">
      {/* Progress */}
      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-grow text-white font-semibold text-sm lg:text-base 2xl:text-lg">
          Konsep Dasar Pajak
        </div>
        <div className="w-8 flex items-center place-content-end">
          <IcArrowDown width={globalReducer.windowSize.width > 1024 ? 16 : 14} />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-grow h-1.5 lg:h-2 bg-gray-800 rounded-full"></div>
        <div className="w-8 flex items-center place-content-end  text-green-500 font-semibold text-sm">
          0%
        </div>
      </div>
      {/* End Progress */}

      {/* List Video */}
      <div className="w-full flex flex-row items-center space-x-4">
        <div className="w-8 text-green-500 font-semibold text-sm">
          <Checkbox onChange={() => ''} value={false} labelName="" />
        </div>
        <div className="flex flex-grow text-white font-medium text-xs lg:text-sm 2xl:text-base leading-6">
          Apa itu Pajak, Siapa dan Kenapa Harus Membayar Pajak?
        </div>
        <div className="w-8 flex items-center place-content-end text-white font-semibold text-xs lg:text-sm">
          01:17
        </div>
      </div>
      <div className="w-full flex flex-row items-center space-x-4">
        <div className="w-8">
          <Checkbox onChange={() => ''} value={false} labelName="" />
        </div>
        <div className="flex flex-grow text-white font-medium text-xs  lg:text-sm 2xl:text-base leading-6">
          Sistem Pemungutan Pajak untuk Perorangan dan Badan Usaha
        </div>
        <div className="w-8 flex items-center place-content-end text-white font-semibold text-xs lg:text-sm">
          01:14
        </div>
      </div>
      <div className="w-full flex flex-row items-center space-x-4">
        <div className="w-5 pt-2 pb-2">
          <IcPadLock width={globalReducer.windowSize.width > 1024 ? 16 : 14} />
        </div>
        <div className="w-auto flex items-center place-content-start text-white font-medium text-xs lg:text-sm 2xl:text-base leading-6">
          Jenis-Jenis Pajak dan Peruntukannya
        </div>
        <div className="w-8 flex items-center place-content-end text-white font-semibold text-xs lg:text-sm">
          01:14
        </div>
      </div>
      {/* End List Video */}
      {/* Progress */}
      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-grow text-white font-semibold text-sm lg:text-base 2xl:text-lg">
          Istilah Umum Pajak
        </div>
        <div className="w-8 flex items-center place-content-end">
          <IcArrowDown width={globalReducer.windowSize.width > 1024 ? 16 : 14} />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-grow h-1.5 lg:h-2 bg-gray-800 rounded-full"></div>
        <div className="w-8 flex items-center place-content-end  text-green-500 font-semibold text-sm">
          0%
        </div>
      </div>
      {/* End Progress */}
    </div>
  )
}

const ContentNextModule = ({windowSizeWidth}) => {
  return (
    <div className={`w-full lg:w-5/6 
                     flex flex-row items-center space-x-4
                     px-4 py-4 lg:px-2 lg:py-2
                     bg-gray-800 bg-opacity-40 rounded-2xl`}>
      {
        windowSizeWidth >= 1024 && (
          <div className="2xl:w-36 lg:w-24 lg:h-14 2xl:h-20">
            <Image src={ImageThumbnailStock} className="rounded-xl" layout="responsive" objectFit='cover' alt="next-course" />
          </div>
        )
      }
      <div className="flex flex-grow">
        <div className="flex flex-col space-y-2">
          <div className="text-white text-xs">Modul Selanjutnya</div>

          <div className="text-white lg:text-base 2xl:text-lg font-medium">Technical Analysis</div>

          <div className="flex flex-row space-x-2 items-center">
            <div className="text-white text-xs">Beginner</div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="text-white text-xs">08:10 Menit</div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="text-white text-xs">4 Video</div>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex items-center place-content-center w-10 h-10 bg-gray-800 rounded-full">
        <IcRightArrow width={16} />
      </div>
    </div>
  )
}

export default function CourseDetail() {

  const { globalReducer } = useSelector(state => state)
  const [isModul, setIsModule] = useState(false)
  // const [isMounted , setIsMounted] = useState(false)
  //
  // useEffect(() => {
  //   setIsMounted(true);
  // }, [])

  return globalReducer.windowSize.width && (
    <>
    {
      globalReducer.windowSize.width >= 1024 ? (
        <div className="w-full flex flex-row space-x-8 lg:px-16 2xl:px-32">
          <div className="lg:w-1/2 2xl:w-2/3 flex flex-col space-y-8">
            <div className="text-white font-semibold text-xl">
              Tentang Modul
            </div>
            <ContentDescription />
          </div>
          <div className="lg:w-1/2 2xl:w-2/3 flex flex-col items-end space-y-8">
            <div className="w-5/6 text-white font-semibold text-xl">
              Struktur Modul
            </div>
            <ContentModule />
            <ContentNextModule windowSizeWidth={globalReducer.windowSize.width} />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col px-6 gap-3">
          <ContentNextModule windowSizeWidth={globalReducer.windowSize.width} />
          <div className="w-full p-4 flex flex-col gap-3 divide-y divide-white rounded-xl bg-gray-800 bg-opacity-40">
            <div className="select-none w-full flex flex-row divide-x divide-white text-sm text-white font-semibold" >
              <div className={`w-1/2 flex items-center place-content-center py-2 ${!isModul && 'text-green-500'}`}
                   onClick={() => setIsModule(false)}>
                Tentang Modul
              </div>
              <div className={`w-1/2 flex items-center place-content-center py-2 ${isModul && 'text-green-500'}`}
                   onClick={() => setIsModule(true)}>
                Struktur Modul
              </div>
            </div>
            <div className="w-full flex pt-4">
              {
                !isModul ? ( <ContentDescription /> ) : ( <ContentModule />)
              }
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}