import Image from 'next/image'
import Link from 'next/link'

import {
  IcGoogleWhite,
  IcAppleWhite,
  IcInstagramWhite,
  IcYoutubeWhite,
  IcTiktok,
  IcCopyright
} from '@/public/images'

export default function Footer({props}) {
    return (
      <div className="w-screen flex flex-col items-center px-8 sm:px-12 pt-24">
          <div className="w-screen flex flex-col lg:flex-row gap-4 px-8 xl:px-40 2xl:px-48">
              <div className="w-full lg:w-1/3">
                  <div className="text-xl 2xl:text-2xl font-bold text-white tracking-wider">WEALPY</div>
                  <div className="w-full lg:w-4/5 my-4 text-xs lg:text-base leading-5 text-semibold text-gray-300">
                      Jl. TMP. Kalibata No.1, RT.4 RW.04, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
                  </div>
              </div>
              <div className="w-full lg:w-1/3">
                  <div className="text-xl 2xl:text-2xl font-bold text-white">Bantuan dan Panduan:</div>
                  <div className="w-4/5 my-4 text-xs lg:text-base text-semibold text-gray-300">
                      <div className="flex flex-col">
                          <Link href="/help/terms-and-conditions" className='text-xs lg:text-base underline underline-offset-2 mb-3'>
                              Syarat dan ketentuan
                          </Link>
                          <Link href="/help/policy-and-privacy" className='text-xs lg:text-base underline underline-offset-2 mb-3'>
                              Kebijakan dan Privasi
                          </Link>
                          <Link href="/help/disclaimer" className='text-xs lg:text-base underline underline-offset-2 mb-3'>
                              Disclaimer
                          </Link>
                          <Link href="/help/contact-us" className='text-xs lg:text-base underline underline-offset-2 mb-3'>
                              Hubungi Kami
                          </Link>
                      </div>
                  </div>
              </div>
              {/*<div className="w-full lg:w-1/3">*/}
              {/*    <div className="text-2xl font-bold text-white">Download Aplikasi</div>*/}
              {/*    <div className="absolute my-4 text-base text-semibold text-gray-300">*/}
              {/*        <div className="flex flex-col gap-4">*/}
              {/*            <Link href="#" className="px-3 py-2 lg:px-4 lg:py-2 flex flex-row place-content-center items-center gap-4 rounded-2xl border-2 border-white">*/}
              {/*                <IcGoogleWhite width={56}/>*/}
              {/*                <div className="flex flex-col">*/}
              {/*                    <div className="text-gray-300 text-sm lg:text-base font-medium">GET IT ON</div>*/}
              {/*                    <div className="text-white text-lg lg:text-xl font-semibold">Google Play</div>*/}
              {/*                </div>*/}
              {/*            </Link>*/}
              {/*            <Link href="#" className="px-3 py-2 lg:px-4 lg:py-2 flex flex-row place-content-center items-center gap-4 rounded-2xl border-2 border-white">*/}
              {/*                <IcAppleWhite width={56}/>*/}
              {/*                <div className="flex flex-col">*/}
              {/*                    <div className="text-gray-300 text-sm lg:text-base font-medium">Download on the</div>*/}
              {/*                    <div className="text-white text-lg lg:text-xl font-semibold">App Store</div>*/}
              {/*                </div>*/}
              {/*            </Link>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className='w-full lg:w-1/3'>
                  <div className="text-xl 2xl:text-2xl font-bold text-white tracking-wider">Ikuti Kami:</div>
                  <div className="w-4/5 my-4 text-base text-semibold text-gray-300">
                      <div className="flex flex-row gap-4">
                          <Link href="#" className="cursor-pointer">
                              <IcInstagramWhite height={23}/>
                          </Link>
                          <Link href="#" className="cursor-pointer">
                              <IcYoutubeWhite height={23} />
                          </Link>
                          <Link href="#" className="cursor-pointer">
                              <IcTiktok width={20}/>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="my-24">
              <div className="flex flex-row place-content-center items-center">
                  <span className="text-xl font-bold text-white tracking-wider">WEALPY.ID</span>
                  <span className="ml-2 mr-1"><IcCopyright /></span>
                  <span className="text-sm lg:text-base text-white font-light">2022. All Right Reserved</span>
              </div>
          </div>
      </div>
    )
}