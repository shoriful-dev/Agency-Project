import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-lg px-8
        py-3 rounded-full text-white border font-DM_sans ${className}`}
    >
      {btnText}
    </button>
  );
}

export default Button
