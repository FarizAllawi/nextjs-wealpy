import React from "react";
import propTypes from 'prop-types'
import Link from 'next/link'

export default function Button(props) {

    const className = [props.className]

    // Function to handle onClick event
    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.color === 'primary' && props.type === 'primary') className.push('bg-green-500 text-white rounded-full button-shadow-green bg-green-500 hover:bg-opacity-60 rounded-full text-white font-medium text-center cursor-pointer')
    if (props.color === 'default' && props.type === 'primary') className.push('bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-300 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75')
    if (props.color === 'success' && props.type === 'primary') className.push('bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75')
    if (props.color === 'warning' && props.type === 'primary') className.push('bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75')
    if (props.color === 'danger' && props.type === 'primary') className.push('bg-red-500 text-white rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75')
    
    if (props.color === 'primary' && props.type === 'secondary')  className.push('border-2 border-blue-500 text-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75')
    if (props.color === 'default' && props.type === 'secondary')  className.push('border-2 border-default-500 text-black rounded-full shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75')
    if (props.color === 'success' && props.type === 'secondary')  className.push('border-2 border-green-500 text-green-500 rounded-full shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75')
    if (props.color === 'warning' && props.type === 'secondary')  className.push('border-2 border-orange-500 text-orange-500 rounded-full shadow-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75')
    if (props.color === 'danger' && props.type === 'secondary')  className.push('border-2  border-red-500 text-red-500 rounded-full shadow-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75')


    if (props.type === 'link') {
        if (props.color === 'default')  className.push('text-white')
        if (props.color === 'primary')  className.push('text-blue-500')
        if (props.color === 'success')  className.push('text-green-500')
        if (props.color === 'warning')  className.push('text-orange-500')
        if (props.color === 'danger')  className.push('text-red-500')

        if (props.isExternal) {
            return (
                <a  href={props.href} 
                    className={`select-none ${className.join(" ")}`} 
                    style={props.style}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        {props.children}
                </a>
            )
        } else {
            return (
                <Link href={props.href} 
                      className={`select-none ${className.join(" ")}`} 
                      style={props.style}
                      onClick={onClick}>
                    {props.children}
                </Link>
            )
        }
    }


    if (props.sizeSmall) {
        if (props.type === 'secondary') className.push('py-0.5 px-2.5')
        else className.push('py-1 px-3')
    } 
    if (props.sizeMedium) {
        if (props.type === 'secondary') className.push('py-1.5 px-4.5')
        else className.push('py-2 px-5')
    } 
    if (props.sizeLarge) {
        if (props.type === 'secondary') className.push('py-2.5 px-6.5')
        else className.push('py-3 px-7')
    } 

    if (props.hasShadow) className.push('btn-shadow')
    
    if (props.isDisabled || props.isLoading){
        if (props.isDisabled) className.push("disabled")
        
        return (
            <div className={`select-none ${className.join(" ")}`} style={props.style} disabled={props.isDisabled ? true : false}>
                {
                    props.isLoading ? <>
                                <div className="float-left transition-all duration-300">{ props.children }</div>
                                <div className="h-full float-right transition-all duration-300 items-centerplace-self-center">    
                                    <svg className="animate-spin ml-4 mt-0.5 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                    </> : (
                        props.children
                    )
                }
            </div>)
    }

    return (
        <div className={`select-none ${className.join(" ")}`} 
                style={props.style}
                onClick={onClick}>
                {
                    props.prependIcon && (
                        <div className="h-full mr-3 mt-1.5 float-left items-centerplace-self-center">    
                            {props.prependIcon}
                        </div>
                    )
                }
                
                <div className={props.prependIcon ? 'float-right' : props.appendIcon ? 'float-left' : 'float-none'}>{props.children}</div>
                
                {
                    props.appendIcon && (
                        <div className="h-full ml-3 mt-1.5 float-right items-centerplace-self-center">    
                            {props.appendIcon}
                        </div>
                    )
                }
        </div>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(['primary', 'secondary']),
    color: propTypes.oneOf(['primary', 'default', 'success', 'warning', 'danger']),
    href: propTypes.string,
    onClick: propTypes.func, 
    target: propTypes.string,
    className: propTypes.string,
    style: propTypes.object,
    prependIcon: propTypes.object,
    appendIcon:propTypes.object,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isExternal: propTypes.bool,
    sizeMedium: propTypes.bool,
    sizeSmall: propTypes.bool,
    sizeLarge: propTypes.bool,
    hasShadow: propTypes.bool
}