"use client"
import { useState, useEffect } from "react";
import propTypes from 'prop-types'
import {
    animated,
    useSpring,
    config,
    useSpringRef,
    useChain
} from "react-spring";

export default function Checkbox(props) {
  const {
    labelName,
    value,
    name
  } = props


  const [isChecked, setIsChecked] = useState(false);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#32c385" : '#37393d',
    borderColor: isChecked ? '#d0d2d3' : '#d0d2d3',
    config: config.gentle,
    ref: checkboxAnimationRef
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  useEffect(() => {
    value === true ? setIsChecked(true) : setIsChecked(false)
  },[value, isChecked])

  const handleClick = () => { 
    const target = {
      target: {
          name: name,
          value: !isChecked,
      }
    }
    props.onChange(target)
    setIsChecked({...isChecked, isChecked: !isChecked})
  }

  const onChange = (event) => {
    const target = {
        target: {
            name: name,
            value: event.target.checked,
        }
    }
    props.onChange(target)
  }


  return (
    <div className={`${'pt-2 pb-2 '}`}>
        <div className={`flex gap-3 relative`}>
            <input
                type="checkbox"
                className="h-4 w-4 absolute z-20 appearance-none cursor-pointer"
                name={name}
                value={value}
                onChange={onChange}
            />
            <animated.svg
                style={checkboxAnimationStyle}
                className={` w-4 h-4 rounded-sm ${isChecked ? 'bg-green-500' : 'border-2 border-gray-300 bg-transparent'}`}
                // This element is purely decorative so
                // we hide it for screen readers
                aria-hidden="true"
                viewBox="0 0 15 10"
                fill="none"
            >
            <animated.path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke="#37393d"
                ref={(ref) => {
                    if (ref) {
                    setCheckmarkLength(ref.getTotalLength());
                    }
                }}
                strokeDasharray={checkmarkLength}
                strokeDashoffset={checkmarkAnimationStyle.x}
                />
            </animated.svg>
        {
            labelName && (
                <label htmlFor={name} className="text-xs text-white font-semibold cursor-pointer" onClick={handleClick}>{labelName}</label>
            )
        }
        </div>
    </div>
  );
}

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  labelName: propTypes.string,
  value: propTypes.bool,
  onChange: propTypes.func.isRequired,
}