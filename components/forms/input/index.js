"use client"
import { useState } from 'react'
import propTypes from 'prop-types'

export default function Input(props) {
    const {
        value,
        type, 
        pattern,
        placeholder,
        name,
        append,
        className,
        errorResponse,
        labelName,
        range,
        errorStatus
    } = props

    const [HasError, setHasError] = useState(null)

    let patternValidate = ""
    if (type === "text") patternValidate = pattern !== "" ? new RegExp(pattern) : new RegExp("")
    if (type === "password") patternValidate = pattern !== "" ? new RegExp(pattern) : new RegExp("")
    if (type === "email") patternValidate = pattern === "" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ : new RegExp(pattern) 
    if (type === "number") patternValidate = pattern !== "" ? new RegExp(pattern) : "[0-9]*"

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value,
                validation: event.target.validation
            }
        }

        if (type === "text" || type === "email" || type === "password") {
            if (!patternValidate.test(event.target.value)){
                setHasError(errorResponse)
                target.target.validation = true
            } 
            else {
                setHasError(null)
                target.target.validation = false
            }
        }

        if (type === "number") {
            if (!event.target.validity.valid) setHasError(errorResponse)
            else {
                props.onChange(target)
                setHasError(null)
            }
            
            if (range) {
                const rangeNumber = range.split(",")
                if (!(parseInt(event.target.value) >= parseInt(rangeNumber[0]) && parseInt(event.target.value) <= parseInt(rangeNumber[1]))) {
                    setHasError(`${rangeNumber[0]} - ${rangeNumber[1]}`)
                }
                else {
                    props.onChange(target)
                    setHasError(null)
                }
            }

        } else {
            props.onChange(target)
        }
    }
    
    return (
        <div className={`${ !HasError && !errorStatus ? 'pt-2 pb-2' : 'pt-2 pb-2 '}`}>
            {
                labelName && (
                    <label htmlFor={name} className="text-sm text-white font-semibold">{labelName}</label>
                )
            }
            <div className={`relative block`}>
                <input  name={name}
                        type={type === 'number' ? 'number' : type}
                        className={[`placeholder:text-xs placeholder:font-light placeholder:text-gray-300 block bg-gray-300 bg-opacity-40 w-full rounded-xl py-3 px-3 ${ HasError || errorStatus ? 'outline-none ring-1 border-orange-600 ring-orange-600 ' : ''} focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 font-medium text-xs tracking-wide text-white`, className].join(" ")}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        />
                {
                    append && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                            {append}
                        </span>
                    )
                }
            </div>
            {
                ( HasError || errorStatus) && (<div className='mt-0.5 ml-3 absolute text-orange-600 font-semibold text-xs'>
                                                 { HasError ? HasError : errorResponse }
                                            </div>)
            }
        </div>
    )
}

Input.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func.isRequired,
    append: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object]),
    placeholder: propTypes.string,
    labelName: propTypes.string,
    range: propTypes.string,
    className: propTypes.string,
    pattern: propTypes.string,
    validation: propTypes.bool,
    errorResponse: propTypes.string,
    errorStatus: propTypes.bool
}