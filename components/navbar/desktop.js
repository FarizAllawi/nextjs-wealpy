"use client"
import { useState, useEffect , useRef } from 'react'
import { usePathname} from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { IcArrowRight } from '@/public/images'

function Desktop(props) {

    const {
        menu, isScrolled
    } = props;

    const {data, status} = useSession()
    const pathName = usePathname();
    const profileWrapper = useRef(null)
    const [profileClicked , setProfileClicked] = useState(false)
    
    const logout = () => {
    
    }
  
    useEffect(() => {
        const clickOutside = (event) => {
            if (profileClicked && profileWrapper) {
                if (!profileWrapper.current?.contains(event.target)) setProfileClicked(!profileClicked)
            }
        }
        
        window.addEventListener("mousedown", clickOutside)
        return () => {
            window.removeEventListener("mousedown", clickOutside)
        }
    }, [isScrolled, profileClicked, setProfileClicked])

    return (
      <div className="w-full h-full flex flex-row place-content-center items-center px-2 py-1">
          <div className="w-1/4 h-auto flex items-center xl:mx-8">
              <Link href="/" className="w-full text-2xl font-bold text-white tracking-wider cursor-pointer">
                  WEALPY
              </Link>
          </div>
          <div className="w-1/2 h-full flex flex-row place-content-center items-center ">
              {
                  menu.map((data, index) => {
                      return (
                        <Link key={index} href={`${process.env.NEXT_PUBLIC_BASE_URL}${data === 'home' ? '/' : `/${data}`}`}>
                            <div className="relative w-full flex flex-col place-content-center items-center">
                                <div className={`font-sans lg:text-sm 2xl:text-base font-medium mx-4 my-2 text-white`}>
                                    {data.charAt(0).toUpperCase()+ data.slice(1)}
                                </div>
                                {
                                    pathName === (data === 'home' ? '/' : '/'+data) ? (
                                      <div className="absolute w-full xl:h-0.5 2xl:h-1 bottom-0.5 flex items-center place-content-center">
                                          <div className={`w-1/4 h-full rounded-full ${isScrolled ? 'bg-green-500' : (pathName !== '/' ? 'bg-white' : 'bg-green-500' )}`}></div>
                                      </div>
                                    ) : ''
                                }
                            </div>
                        </Link>

                      )
                  })
              }
          </div>
          <div className="flex items-center justify-end w-1/4 h-auto xl:mx-8">
              {
                  status === 'authenticated' ? (
                    <>
                        <div onClick={()=>setProfileClicked(!profileClicked)} className='bg-gray-800 rounded-full hover:bg-gray-300 hover:bg-opacity-40 flex flex-row place-content-center items-center gap-3 cursor-pointer text-sm py-1.5 px-4' >
                            <div className='text-white font-medium'>
                                {data.user.username}
                            </div>
                            <div>
                                <IcArrowRight width={10} className={`transition-all duration-300 ${profileClicked ? 'rotate-90' : 'rotate-0'}`}/>
                            </div>
                        </div>
                    </>
                  ):(
                    <>
                        { props.isSignIn ? (
                          <div onClick={props.onSignInButtonClick} className='bg-gray-800 text-white rounded-full hover:bg-gray-300 hover:bg-opacity-40 font-medium cursor-pointer text-sm py-1.5 px-4' >
                              Masuk
                          </div>
                        ) : (
                          <Link href="/auth/sign-in" className='bg-gray-800 text-white rounded-full hover:bg-gray-300 hover:bg-opacity-40 font-medium cursor-pointer text-sm py-1.5 px-4'>
                              Masuk
                          </Link>
                        )}
                    </>
                  )
              }
              <CSSTransition in={profileClicked} timeout={0} classNames="transition-all duration-300" duration={300} unmountOnExit>
                  <div className="absolute top-16 mt-2">
                      <div ref={profileWrapper} className="bg-gray-800 rounded-3xl flex flex-col items-center">
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/profile/setting`} className='w-full py-3 px-5 cursor-pointer hover:rounded-t-3xl hover:bg-gray-300 hover:bg-opacity-40 text-sm text-white font-medium'>Settings</Link>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/profile/transaction`} className='w-full py-3 px-5 cursor-pointer hover:bg-gray-300 hover:bg-opacity-40 text-sm text-white font-medium'>Transaction</Link>
                          <div onClick={() => signOut()} className='w-full py-3 px-5 cursor-pointer hover:rounded-b-3xl hover:bg-gray-300 hover:bg-opacity-40 text-sm text-white font-medium'>Log Out</div>
                      </div>
                  </div>
              </CSSTransition>
          </div>
      </div>
    )
}

export default Desktop