import Link from "next/link";
import {IllustrationLandingPage} from "@/public/images";

export default function Jumbotron() {
  return (
    <div className="flex h-screen flex-col-reverse gap-0 md:gap-12 lg:flex-row lg:gap-24 items-center pt-16 px-2 lg:px-28 2xl:px-32" >
      <div className="md:w-full lg:w-2/5 mb-6">
        <div className="flex flex-col lg:divide-y-2 lg:divide-gray-800">
          <div className="flex-col gap-4">
            <span className="text-sm md:text-xl lg:text-sm xl:text-lg 2xl:text-xl text-green-500">#WealthyMakesHappy</span>
            <h1 className="text-2xl md:text-5xl lg:text-3xl md:leading-2 text-white font-semibold md:leading-tight lg:leading-normal">
              Waspada Kondisi<br></br>
              Keuangan & Bisnismu <br></br>
              di Masa Depan
            </h1>
            <p className="text-sm my-3 xl:my-6 md:text-xl lg:text-sm xl:text-md text-gray-300 font-medium tracking-normal">
              Yuk mulai belajar Keuangan dan Bisnis <br></br>
              untuk  masa depan yang lebih baik dengan cara termurah
            </p>
          </div>
          <div>
            <div className="w-full my-6 md:my-12 lg:my-6 flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/2 xl:pr-4">
                <Link href="#price-list" className='py-3 flex place-content-center bg-green-500 text-white md:text-xl lg:text-sm rounded-full shadow-md hover:bg-green-700  text-center cursor-pointer button-shadow-green'>
                  Mulai Sekarang
                </Link>
              </div>
              <div className="w-auto md:w-2/5">
                <Link className="text-sm md:text-xl lg:text-sm 2xl:text-base font-medium text-gray-300 underline underline-offset-2"
                      href="#"
                      target="_blank"
                      rel="noopener noreferer">
                  Ada Pertanyaan ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full lg:w-3/5">
        <IllustrationLandingPage layout="responsive" className="w-full object-cover -mt-10" />
      </div>
    </div>
  )
}