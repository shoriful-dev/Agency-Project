import React from 'react'

const BlueButton = ({className, btnText}) => {
  return (
    <button className={`px-8 py-4 rounded-full bg-Blue text-white font-DM_sans text-lg`}>{btnText}</button>
  )
}

export default BlueButton
