import {useState, useEffect} from "react";
import Image from "next/image";

import {IcArrowDown, IcPadLock, IcRightArrow, ImageThumbnailStock} from "@/public/images";
import {Checkbox} from "@/components";

export default function CourseDetail() {

  const [isMounted , setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return isMounted && (
    <div className="w-full flex flex-row space-x-8 2xl:px-32">
      <div className="w-2/3 flex flex-col space-y-8">
        <div className="text-white font-semibold text-xl">
          Tentang Modul
        </div>
        <p className="w-2/3 block text-sm text-white leading-6">
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
        </p>
      </div>
      <div className="w-1/3 flex flex-col space-y-8">
        <div className="text-white font-semibold text-xl">
          Struktur Modul
        </div>

        <div className="w-full flex flex-col space-y-5 px-8 py-8 h-96 bg-gray-800 bg-opacity-40 rounded-3xl">
          {/* Progress */}
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-grow text-white font-semibold text-lg">
              Konsep Dasar Pajak
            </div>
            <div className="w-8 text-green-500 font-semibold text-sm">
              <IcArrowDown width={16} />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-grow h-2 bg-gray-800 rounded-full"></div>
            <div className="w-8 text-green-500 font-semibold text-sm">
              0%
            </div>
          </div>
          {/* End Progress */}

          {/* List Video */}
          <div className="w-full flex flex-row items-center space-x-4">
            <div className="w-8 text-green-500 font-semibold text-sm">
              <Checkbox onChange={() => ''} value={false} labelName="" />
            </div>
            <div className="flex flex-grow text-white font-medium text-base leading-6">
              Apa itu Pajak, Siapa dan Kenapa Harus Membayar Pajak?
            </div>
            <div className="w-8 text-white font-semibold text-sm">
              01:17
            </div>
          </div>
          <div className="w-full flex flex-row items-center space-x-4">
            <div className="w-8 text-green-500 font-semibold text-sm">
              <Checkbox onChange={() => ''} value={false} labelName="" />
            </div>
            <div className="flex flex-grow text-white font-medium text-base leading-6">
              Sistem Pemungutan Pajak untuk Perorangan dan Badan Usaha
            </div>
            <div className="w-8 text-white font-semibold text-sm">
              01:14
            </div>
          </div>
          <div className="w-full flex flex-row items-center space-x-4">
            <div className="w-8 text-green-500 font-semibold text-sm">
              <IcPadLock width={16} />
            </div>
            <div className="flex flex-grow text-white font-medium text-base leading-6">
              Jenis-Jenis Pajak dan Peruntukannya
            </div>
            <div className="w-8 text-white font-semibold text-sm">
              01:14
            </div>
          </div>
          {/* End List Video */}
          {/* Progress */}
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-grow text-white font-semibold text-lg">
              Istilah Umum Pajak
            </div>
            <div className="w-8 text-green-500 font-semibold text-sm">
              <IcArrowDown width={16} />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="flex flex-grow h-2 bg-gray-800 rounded-full"></div>
            <div className="w-8 text-green-500 font-semibold text-sm">
              0%
            </div>
          </div>
          {/* End Progress */}
        </div>

        <div className="w-full flex flex-row items-center space-x-4 px-2 py-2 bg-gray-800 bg-opacity-40 rounded-2xl">
          <div className="h-20">
            <Image src={ImageThumbnailStock} className="rounded-xl" layout="responsive" objectFit='cover' alt="next-course" />
          </div>
          <div className="flex flex-grow">
            <div className="flex flex-col space-y-2">
              <div className="text-white text-xs">Modul Selanjutnya</div>
              <div className="text-white text-lg font-medium">Technical Analysis</div>
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
      </div>
    </div>
  )
}