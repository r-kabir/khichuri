import React from 'react'

const Khichuri = () => {
  return (
    <>
        <div className="bg-indigo-200 h-48 mx-16 text-center shadow-2xl my-10">
          <h1>Khichuri</h1>
          <div className='flex gap-5 mx-10'>
            <div className='w-1/3  bg-indigo-300 shadow-lg'><h2>input</h2></div>
            <div className='w-1/3  bg-indigo-300 shadow-lg'><h2>action</h2></div>
            <div className='w-1/3 bg-indigo-300 shadow-lg'><h2>history</h2></div>
          </div>
        </div>
    </>
  )     
}

export default Khichuri