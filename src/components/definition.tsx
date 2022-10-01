import { FunctionComponent, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fadeUpReveal, useMediaQuery } from 'utils'
gsap.registerPlugin(ScrollTrigger)

const Definition: FunctionComponent = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const supRef = useRef(null)
  const nounRef = useRef(null)
  const typeRef = useRef(null)
  const descriptionRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    // Only run the animation if we're on mobile
    if (isDesktop) {
      const containerEl = containerRef.current
      const titleEl = titleRef.current
      const supEl = supRef.current
      const nounEl = nounRef.current
      const typeEl = typeRef.current
      const descriptionEl = descriptionRef.current

      let title = gsap.from(titleEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        }
      })

      let sup = gsap.from(supEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.1
      })

      let noun = gsap.from(nounEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.2
      })

      let type = gsap.from(typeEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.3
      })

      let description = gsap.from(descriptionEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.4
      })

      return () => {
        title.kill()
        sup.kill()
        noun.kill()
        type.kill()
        description.kill()
      }
    }
  }, [])

  return (
    <div className="flex w-full flex-col items-center" ref={containerRef}>
      <div className="w-52 text-justify md:w-72 2xl:w-96">
        <h2>
          <span
            className="text-5xl font-semibold text-teal-800 lg:text-7xl 2xl:text-[7rem]"
            ref={titleRef}
          >
            dwyl
          </span>
          <sup
            className="align-super text-lg font-semibold text-teal-700/75 lg:text-2xl 2xl:text-[2.2rem]"
            ref={supRef}
          >
            [/dwɪɫ/]
          </sup>
        </h2>
        <div>
          <h1 className="mt-1 italic text-gray-500 2xl:text-xl" ref={nounRef}>
            noun
          </h1>
          <h1
            className="text-base leading-4 text-gray-800 2xl:text-2xl"
            ref={typeRef}
          >
            <b>origin</b>: Do What You Love
          </h1>
        </div>

        <p
          className="mt-3 text-sm font-medium leading-none text-stone-800 2xl:text-base"
          ref={descriptionRef}
        >
          1. Community of people on a mission to change the world using
          technology.
        </p>
      </div>
    </div>
  )
}

export default Definition
