import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './Error.css';

const Error = ({error}) => {
    return (
        <CSSTransition in={error} timeout={6000} classNames="my-node">
        <div>
        <div className='flex flex-row w-full mt-5  justify-center place-items-center'>

        <div className=" text-center font-semibold text-red-500 py-6 px-6 bg-white shadow-lg  w-5/12">
            <h1>City not found</h1>
        </div>    
        </div>
        </div>
        </CSSTransition>
    )
}

export default Error
