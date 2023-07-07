"use client"
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Radio(props) {
    const {
        name,
        className,
        errorResponse,
        labelName,
        errorStatus,
    } = props;

    const [checked, setChecked] = useState(props.checked);
    const [hasError, setHasError] = useState(null);

    const onChange = (event) => {
        setChecked(!checked);

        const target = {
            name: name,
            value: event.target.checked,
        };

        props.onChange({target});
    };

    useEffect(() => {
        if (!props.checked) setChecked(false);
    }, [props.checked])

    return (
      <div className={`${!hasError && !errorStatus ? 'pt-2 pb-2' : 'pt-2 pb-2 '}`}>
          <div className="flex gap-3 relative">
              <input
                name={name}
                type="radio"
                className={[
                    `
              h-3 w-3
              cursor-pointer 
              appearance-none
              indeterminate:ring-2 indeterminate:ring-gray-300 indeterminate:ring-opacity-40 indeterminate:rounded-full
              checked:ring-2 checked:ring-green-500 checked:border-2 checked:border-gray-800 checked:rounded-full checked:bg-green-500`,
                    className,
                ].join(' ')}
                onChange={onChange}
                onClick={onChange}
                checked={checked}
              />

              {labelName && (
                <label htmlFor={name} className="text-xs text-white font-medium -mt-0.5">
                    {labelName}
                </label>
              )}
          </div>
          {(hasError || errorStatus) && (
            <div className="mt-0.5 ml-3 absolute text-orange-600 font-semibold text-xs">
                {hasError ? hasError : errorResponse}
            </div>
          )}
      </div>
    );
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
};