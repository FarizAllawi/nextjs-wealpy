"use client"

import propTypes from 'prop-types'
import CloseIcon from '../../public/images/icon/close-icon.svg'

export default function Modals(props) {
    let width = ''
    if (props.type === 'small') width = 'xl:w-1/3 2xl:w-1/4'
    if (props.type === 'medium') width = 'w-1/3'
    if (props.type === 'large') width = 'w-1/2'

    return (
        <>
            <div className={`absolute w-screen h-screen z-20 bg-black bg-opacity-40 backdrop-blur-md`}></div>
            <div className={`absolute w-screen  h-screen z-30`}>
                <div className="w-full h-full flex flex-col place-content-center items-center">
                    <div className={`transition-all duration-300 flex flex-col rounded-3xl bg-gray-800 bg-opacity-80 firefox:bg-opacity-100 ${width}`}>
                        <div className="px-6 py-6 xl:px-8 xl:py-6 flex flex-row place-content-between items-center">
                            <div className="text-xl lg:text-lg xl:text-xl font-bold text-white tracking-wider cursor-pointer">WEALPY</div>
                            <div className="px-3 py-3 rounded-full bg-gray-300 bg-opacity-40 hover:bg-opacity-20 cursor-pointer"  onClick={props.onClose}>
                                <CloseIcon/>
                            </div>
                        </div>
                        <div className="px-6 xl:px-8 mt-4 mb-1 text-2xl text-white font-semibold ">
                            {props.title}
                        </div>
                        <div className="px-6 xl:px-8  mb-5 text-sm text-white tracking-wide font-light">
                            {props.caption}
                        </div>

                        <div className='px-6 xl:px-8  flex flex-col mb-4'>
                            { props.children }
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

Modals.propTypes = {
    type: propTypes.oneOf(['small', 'medium', 'large']),
    caption: propTypes.string,
    onClose: propTypes.func,

}

