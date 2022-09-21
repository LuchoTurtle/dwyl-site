import { FunctionComponent } from 'react'

const Definition: FunctionComponent = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <div className="w-3/5">
        <h2 className="text-center">
          <span className="text-5xl font-semibold text-teal-800">dwyl</span>
          <sup className="align-super text-lg font-semibold text-teal-700/75">
            [/dwɪɫ/]
          </sup>
        </h2>
        <h1 className="mt-1 italic text-gray-500">noun</h1>
        <h1 className="text-base leading-4 text-gray-800">
          <b>origin</b>: Do What You Love
        </h1>
        <p className="mt-3 text-sm font-medium leading-none text-stone-800">
          1. Community of people on a mission to change the world using
          technology.
        </p>
      </div>
    </div>
  )
}

export default Definition
