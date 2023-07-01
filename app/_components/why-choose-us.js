import Link from "next/link";
import Image from "next/image";
import {ImageCourse, ImageNews, ImagesCommunity} from "@/public/images";

export default function WhyChooseUs() {
  return (
    <div className="lg:min-h-screen px-2 xl:px-28 2xl:px-32 py-10 2xl:py-5">
      <span className="text-sm md:text-xl lg:text-sm xl:text-lg text-green-500">Kenapa Harus Wealpy ?</span>
      <h2 className="text-xl md:text-4xl lg:text-3xl md:leading-10 text-white font-semibold">
        Platform yang mempersiapkan <br></br>
        kamu menuju kekayaan yang<br></br>
        sesungguhnya
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-12 2xl:min-h-min 2xl:max-h-screen ">
        <div className='w-full lg:w-1/2'>
          <div className="flex place-content-center lg:place-content-start items-center gap-4 md:gap-4 2xl:gap-2">
            <div className="flex-initial xl:w-2/6 2xl:w-2/5 h-auto">
              <Link href="/course">
                <div className="relative flex place-content-center items-center cursor-pointer">
                  <div className="my-auto absolute font-semibold text-xl lg:text-2xl text-white z-10">Course</div>
                  <Image src={ImageCourse} className="object-contain" alt="course-image"></Image>
                </div>
              </Link>
            </div>
            <div className="flex-initial xl:w-2/6 2xl:w-2/5 h-auto">
              <div className="flex flex-col gap-4 lg:gap-5">
                <div className="basis-1/2">
                  <Link href="/news">
                    <div className="relative flex place-content-center items-center cursor-pointer">
                      <div className="my-auto absolute font-semibold text-xl lg:text-2xl text-white z-10">News</div>
                      <Image src={ImageNews} className="object-contain" alt="news-image"></Image>
                    </div>
                  </Link>
                </div>
                <div className="basis-1/2">
                  <Link href="/comunity">
                    <div className="relative flex place-content-center items-center cursor-pointer">
                      <div className="my-auto absolute font-semibold text-xl lg:text-2xl text-white z-10">Community</div>
                      <Image src={ImagesCommunity} className="object-contain" alt="comunity-image"></Image>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full pb-20 lg:pb-0 lg:w-1/2 lg:h-auto flex flex-col place-content-between lg:pr-4'>
          <div>
            <Link href="/course" className='md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-green-500 underline underline-offset-2 cursor-pointer'>
              Kelas Yang Lengkap
            </Link>
            <p className='text-sm md:text-xl lg:text-base 2xl:text-lg text-gray-300 leading-6 my-3'>
              Dapatkan kelas keuangan terlengkap yang
              dibimbing langsung oleh mentor-mentor pilihan untuk memberikan
              pengetahuan finansial, bisnis dan teknologi yang up to date supaya
              kamu makin dekat dengan tunjuan finansial yang kamu rencanakan.
            </p>
          </div>

          <div>
            <Link href="/news" className='md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-green-500 underline underline-offset-2 cursor-pointer'>
              Berita Penunjang
            </Link>
            <p className='text-sm md:text-xl lg:text-base 2xl:text-lg text-gray-300 leading-6 my-3'>
              Menyediakan berita-berita penting yang kamu butuhkan untuk menunjang informasi dari peristiwa yang terjadi saat ini.
            </p>
          </div>

          <div>
            <Link href="/news" className='md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-green-500 underline underline-offset-2 cursor-pointer'>
              Tumbuh Bersama Komunitas
            </Link>
            <p className='text-sm md:text-xl lg:text-base 2xl:text-lg text-gray-300 leading-6 my-3'>
              Wealpy menyediakan komunitas yang berisi mentor dan pengguna wealpy lainnya agar bisa bertumbuh bersama.
              Di komunitas ini kamu bisa berdiskusi dan menanyakan tentang masalah finansial, bisinis dan teknologi
              yang sedang kamu hadapi saat ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}