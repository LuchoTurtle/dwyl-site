import { FunctionComponent, useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useMediaQuery } from 'utils'

gsap.registerPlugin(ScrollTrigger)

const Iterating: FunctionComponent = () => {
  // References
  const containerRef = useRef(null)
  const textRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // GSAP animation setup
  useLayoutEffect(() => {
    if (isDesktop) {
      const sectionHeight = 200

      const containerEl = containerRef.current
      const textEl = textRef.current

      // Pinning
      const pin = gsap.from(containerEl, {
        scrollTrigger: {
          trigger: containerEl,
          scrub: true,
          pin: true,
          start: 'top top',
          end: `+=${sectionHeight}%`
        },
        opacity: 1
      })

      // Fade in and fade out
      const fade = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: 'top top',
          end: `${sectionHeight}% top`,
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      })

      // When scrubbing is set to true and we're using a timeline,
      // the durations of tweens within that animation serve as proportions for the total amount of distance
      // that the tween will play (https://greensock.com/forums/topic/25451-how-to-fade-in-and-fade-out-in-scrolltrigger/)
      fade
        .to(textEl, { opacity: 1, duration: 0.5 })
        .to(textEl, { opacity: 0, duration: 0.25 })

      return () => {
        pin.kill()
        fade.kill()
      }
    }
  }, [])

  return isDesktop ? (
    <div
      className="flex h-auto w-screen flex-row lg:h-screen"
      ref={containerRef}
    >
      <div className="absolute flex h-full w-full items-center justify-center">
        <div
          ref={textRef}
          className="text-center opacity-100 lg:opacity-0 xl:w-4/5"
        >
          <h1 className="mx-[15%] text-base font-semibold leading-4 text-stone-800 md:text-2xl xl:text-3xl 2xl:text-4xl">
            <span>by iterating over these </span>
            <span className="text-[#1DAA6F]">3 simple steps </span>
            <span>we maintain a </span>
            <span className="text-[#1DAA6F]">tight feedback loop </span>
            <span>between the people </span>
            <span className="bg-gradient-to-r from-[#B12A2A] to-[#1D82A1] bg-clip-text text-transparent">
              building
            </span>
            <span> and the people </span>
            <span className="bg-gradient-to-r from-[#AC3EC8] to-[#FF630C] bg-clip-text text-transparent">
              using
            </span>
            .
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-6 text-center sm:mx-[15%]">
      <h1 className="text-base font-semibold leading-4 text-stone-800 md:text-2xl">
        <span>by iterating over these </span>
        <span className="text-[#1DAA6F]">3 simple steps </span>
        <span>we maintain a </span>
        <span className="text-[#1DAA6F]">tight feedback loop </span>
        <span>between the people </span>
        <span className="bg-gradient-to-r from-[#B12A2A] to-[#1D82A1] bg-clip-text text-transparent">
          building
        </span>
        <span> and the people </span>
        <span className="bg-gradient-to-r from-[#AC3EC8] to-[#FF630C] bg-clip-text text-transparent">
          using
        </span>
        .
      </h1>
    </div>
  )
}

export default Iterating
