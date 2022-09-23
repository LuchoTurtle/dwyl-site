import { FunctionComponent, useEffect, useRef } from 'react'
import logo from 'public/dwyl_logo.png'
import hero_img from 'public/hero.png'
import gsap from 'gsap'
import { staggerReveal, fadeUpReveal } from 'utils'

const Hero: FunctionComponent = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const description1Ref = useRef(null)
  const description2Ref = useRef(null)

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
  }, [])

  return (
    <div className="flex max-h-screen min-h-screen w-screen flex-col">
      <div className="flex h-fit flex-row flex-nowrap items-center justify-between pl-10 pr-10 pt-10">
        <div className="h-12 w-24">
          <img className="max-h-full max-w-full" src={logo} />
        </div>
        <div className="flex h-12 w-24 items-center justify-end">
          <button
            type="button"
            className="inline-block h-10 max-h-full w-16 max-w-full cursor-pointer rounded-full bg-green-700 px-2.5 
                py-2.5 text-xs font-semibold leading-tight text-white
                shadow-md transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-lg 
                focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg"
          >
            app
          </button>
        </div>
      </div>

      <img className="ml-auto mr-auto mt-12 h-auto w-[35vh]" src={hero_img} />

      <div className="flex flex-1 flex-col justify-center">
        <div className="pr-5 pl-5 text-center">
          <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[3.5rem]">
            <p
              className="absolute text-4xl font-semibold leading-none tracking-tight text-green-900 md:text-[3.5rem]"
              ref={titleRef}
            >
              software
            </p>
          </div>
          <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[3.5rem]">
            <p
              className="absolute text-4xl font-semibold leading-none tracking-tight text-green-900/50 md:text-[3.5rem]"
              ref={subtitleRef}
            >
              made simple.
            </p>
          </div>

          <div className="mt-5 text-base md:text-lg">
            <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[18px]">
              <p
                className="absolute h-[1.5rem] leading-5 text-gray-600"
                ref={description1Ref}
              >
                we offer software development services and training.
              </p>
            </div>
            <div className="relative flex h-[2.5rem] w-full flex-row justify-center overflow-hidden md:h-[2.5rem]">
              <p
                className="absolute mt-2 h-[1.5rem] font-thin text-gray-600"
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
