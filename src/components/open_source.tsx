import { FunctionComponent, useEffect, useRef, useState } from 'react'
import opensourceOn_img from 'assets/open_source_on.png'
import opensourceOff_img from 'assets/open_source_off.png'
import { useMediaQuery } from 'utils'
import gsap from 'gsap'


const OpenSource: FunctionComponent= () => {

  const lightOffImageRef = useRef(null as any)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Creating the timeline with the reference when the component is mounted and adding to mouseover and mouseout events
  useEffect(() => {
    const lightOffImageEl = lightOffImageRef.current

    const hoverAnimation = gsap.fromTo(lightOffImageEl, 
    {opacity: 1}, 
    {
      opacity: 0,
      duration: .75,
      paused: true,
    });

    if(lightOffImageEl) {
      lightOffImageEl.addEventListener("mouseover", () => hoverAnimation.play());
      lightOffImageEl.addEventListener("mouseout", () => hoverAnimation.reverse());
    }

  }, [])

  return (
    <div className="flex flex-col items-center pl-5 pr-5">
      {isDesktop ? (
        <div
          className="flex flex-col justify-center items-center h-[36rem] w-full cursor-pointer"
          onClick={() => window.open('https://github.com/dwyl', '_blank')}
        >
          <img className="z-10 h-[36rem] w-auto absolute object-contain" src={opensourceOff_img} ref={lightOffImageRef} />
          <img className=" z-0 h-[36rem] w-auto absolute object-contain" src={opensourceOn_img} />
        </div>
      ) : (
        <img className="h-auto w-full" src={opensourceOff_img} />
      )}
      <h2 className="mt-4 text-center text-2xl font-semibold md:text-4xl lg:text-6xl 2xl:text-7xl">
        <span className="text-[#248680]">we are full on </span>
        <span className="bg-gradient-to-r from-[#F97794] to-[#623AA2] bg-clip-text text-transparent">
          open-source
        </span>
      </h2>
      <p className="mt-4 text-center text-sm font-light md:text-lg lg:text-xl 2xl:text-2xl">
        we believe learning sould be a shared and accesible experience.
      </p>
      <p className="text-center text-sm font-light md:text-lg lg:text-xl 2xl:text-2xl">
        we create and maintain over 200 open-source repositories on GitHub.
      </p>

      {!isDesktop && (
        <button
          type="button"
          className="relative mt-16 inline-block h-10 max-h-full w-28 max-w-full cursor-pointer
              rounded-full border border-stone-800
              px-2.5 py-2.5 text-xs
              leading-tight text-stone-800 transition 
              duration-150 ease-in-out hover:bg-stone-800 hover:bg-opacity-10 hover:shadow-lg active:bg-stone-800 active:bg-opacity-20
              active:shadow-lg"
        >
          check it out
        </button>
      )}
    </div>
  )
}

export default OpenSource
