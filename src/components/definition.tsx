import { FunctionComponent } from 'react'

const Definition: FunctionComponent = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-3/5">
        <h2 className="text-center">
          <span className="font-semibold text-5xl text-teal-800">dwyl</span>
          <sup className="font-semibold text-lg text-teal-700/75 align-super">
            [/dwɪɫ/]
          </sup>
        </h2>
        <h1 className="italic text-gray-500 mt-1">noun</h1>
        <h1 className="text-gray-800 text-base leading-4">
          <b>origin</b>: Do What You Love
        </h1>
        <p className="font-medium text-stone-800 text-sm mt-3 leading-none">
          1. Community of people on a mission to change the world using
          technology.
        </p>
      </div>
    </div>
  )
}

export default Definition
