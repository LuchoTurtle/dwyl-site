import { FunctionComponent, useEffect, useRef } from 'react'
import logo from 'public/dwyl_logo.png'
import hero_img from 'public/hero.png'
import gsap from 'gsap'
import { staggerReveal, fadeUpReveal, useMediaQuery } from 'utils'
import Spline from '@splinetool/react-spline'

const renderImage = (isDesktop: boolean) => {
  return isDesktop ? (
    <div className="absolute h-full w-full">
      <Spline
        scene="https://prod.spline.design/MWszCFbtlIdlZM4d/scene.splinecode"
        onStart={() => console.log('started')}
        onLoad={() => console.log('load')}
      />
    </div>
  ) : (
    <img className="ml-auto mr-auto mt-12 h-auto w-[35vh]" src={hero_img} />
  )
}

const Hero: FunctionComponent = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const description1Ref = useRef(null)
  const description2Ref = useRef(null)

  //const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isDesktop = false

  useEffect(() => {
    const titleEl = titleRef.current
    const subtitleEl = subtitleRef.current
    const description1El = description1Ref.current
    const description2El = description2Ref.current

    const tl = gsap.timeline()
    tl.from(titleEl, staggerReveal)
    tl.from(subtitleEl, staggerReveal, '<')
    tl.from(description1El, fadeUpReveal, '<+=.4')
    tl.from(description2El, fadeUpReveal, '<+=.1')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="flex max-h-screen min-h-screen w-full flex-col">
      <div className="z-10 flex h-fit flex-row flex-nowrap items-center justify-between pl-10 pr-10 pt-10">
        <div className="h-12 w-24">
          <img className="max-h-full max-w-full" src={logo} />
        </div>
        <div className="flex h-12 w-24 items-center justify-end">
          <button
            type="button"
            className="inline-block h-10 max-h-full w-16 max-w-full cursor-pointer rounded-full bg-green-700 px-2.5 
                py-2.5 text-xs font-semibold leading-tight text-white
                shadow-md transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-lg 
                focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg "
          >
            app
          </button>
        </div>
      </div>

      {renderImage(isDesktop)}

      <div className="z-10 flex flex-1 flex-col justify-end lg:flex-row lg:justify-start">
        <div className="mb-[5%] pr-5 pl-5 text-center lg:mb-0 lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:pr-0 lg:pl-[10%]">
          <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[3.5rem] lg:justify-start 2xl:h-[5rem]">
            <p
              className="absolute text-4xl font-semibold leading-none tracking-tight text-green-900 md:text-[3.5rem] 2xl:text-[5rem]"
              ref={titleRef}
            >
              software
            </p>
          </div>
          <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[3.5rem] lg:justify-start 2xl:h-[5rem]">
            <p
              className="absolute text-4xl font-semibold leading-none tracking-tight text-green-900/50 md:text-[3.5rem] 2xl:text-[5rem]"
              ref={subtitleRef}
            >
              made simple.
            </p>
          </div>

          <div className="mt-5 text-base md:text-lg">
            <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[20px] lg:h-[45px] lg:justify-start 2xl:h-[1.5rem]">
              <p
                className="absolute h-[1.5rem] leading-5 text-gray-600 lg:text-start 2xl:text-[1.5rem]"
                ref={description1Ref}
              >
                we offer software development services and training.
              </p>
            </div>
            <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[2.5rem] lg:justify-start 2xl:h-[2rem]">
              <p
                className="absolute mt-2 h-[1.5rem] font-thin text-gray-600 2xl:text-[1.3rem]"
                ref={description2Ref}
              >
                based in London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
