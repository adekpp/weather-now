import React from 'react'
import { useState } from 'react';
const Input = (props) => {


const [query, setQuery] = useState('');
const handleSubmit = event => {
    event.preventDefault();
    setQuery("")

    props.query(query);
}


    return (
        <div className='shadow-lg mx-auto bg-white w-5/6 md:w-5/12 mt-5'>
            <form className="flex flex-row justify-center gap-5 p-8" onSubmit={handleSubmit}>
            <input type="text" value={query} placeholder="City name" className="border-0 border-b-2 focus:outline-none focus:border-sky-400 focus:ring-0 text-gray-900  w-3/4 md:max-w-sm" onInput={e => setQuery(e.target.value)}/>
            <button type="submit" className="rounded-full bg-sky-400 py-2 px-4 font-semibold transition ease-in-out delay-150 hover:bg-sky-500  text-white">Search</button>


            </form>
        </div>
    )
}

export default Input
