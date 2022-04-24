import React from 'react'
import "./Loader.css"
export const Loader = () => {
  return (
      <div className='flex flex-col mt-5 justify-center bg-white mx-auto shadow-lg w-5/6 md:w-5/12'>
    <div className="lds-facebook place-self-center"><div></div><div></div><div></div></div>
    </div>
  )
}
