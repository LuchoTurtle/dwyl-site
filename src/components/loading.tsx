import React, { Component, FunctionComponent, useEffect, useState } from 'react'
import gsap from 'gsap'

const Loading: FunctionComponent = () => {
  
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const intervalId = setInterval(() => {
      setProgress(progress + (1 - progress) * 0.1)
    }, 500 + 200 * Math.random())

    return () => {
      clearInterval(intervalId)
    }
  }, [progress])

    return (
      <div className='h-full w-full z-50 fixed'>
        <div className='absolute h-full w-full bg-white'></div>
        <div
          style={{ opacity: 1 - progress }}
          className="absolute  h-full  w-full bg-neutral-800 transition-[opacity] duration-700 ease-out"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center  font-montserrat ">
          <h1
            style={{ opacity: progress }}
            className="absolute text-7xl font-extralight text-black"
          >
            {Math.floor(progress * 100) + '%'}
          </h1>
          <h1
            style={{ opacity: 1 - progress }}
            className="absolute text-7xl font-extralight text-white"
          >
            {Math.floor(progress * 100) + '%'}
          </h1>
        </div>
      </div>
    )
}

export default Loading
