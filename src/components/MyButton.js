import React from 'react'

const MyButton = ({children}) => {
  return (
    <button
    className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2
    text-sm font-semibold text-white shadow-sm hover:bg-red-500">{children}</button>
  )
}

export default MyButton;