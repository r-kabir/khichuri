import React, { useState } from 'react'
import MyButton from '../MyButton';

const GuessGame = () => {
    let [playerOneInput, setPlayerOneInput] = useState("");
    let [playerTwoInput, setPlayerTwoInput] = useState([]);

    let handleChange =(e)=> {
        setPlayerOneInput(e.target.value);
        console.log(playerOneInput);
    }

    let handleClick = () => {
        setPlayerOneInput("")
    }

  return (
    <>
      <div className="bg-orange-200 h-48 mx-16 text-center shadow-2xl my-10">
        <h1>Guess......Game........</h1>
        <input onChange={handleChange} value={playerOneInput}/>
        <MyButton onClick={handleClick}>Set Secret Number</MyButton>
        <MyButton type="submit"
                className="mt-10 items-center justify-center rounded-md border border-transparent
                bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 
                ">
                  Guess The Secret
        </MyButton>
        <input className="min-w-0 flex-auto rounded-md border-0 bg-gray-300 px-3.5 py-2 text-white shadow-xl ring-1 ring-inset ring-rose-600 focus:ring-2 focus:ring-inset
       focus:ring-indigo-500"
        placeholder="Enter ?????"/>
        <MyButton
          type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white 
          shadow-sm hover:bg-indigo-400 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >?????????</MyButton>
        <MyButton
          type="MyButton"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >???????????</MyButton>
      </div>
    </>
  )
}

export default GuessGame