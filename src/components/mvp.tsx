import { FunctionComponent, useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { fadeUpReveal, useMediaQuery } from 'utils'

gsap.registerPlugin(ScrollTrigger)

const MVP: FunctionComponent = () => {
  // References
  const containerRef = useRef(null)
  const beRef = useRef(null)
  const playerRef = useRef(null)
  const productRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // GSAP animations
  useLayoutEffect(() => {
    if (isDesktop) {
      const containerEl = containerRef.current
      const beEl = beRef.current
      const playerEl = playerRef.current
      const productEl = productRef.current

      const tl = gsap.timeline()

      // Opacity animation
      tl.from(beEl, {
        opacity: 0,
        scrollTrigger: {
          trigger: containerEl,
          scrub: true,
          start: '30% center',
          end: '60% center'
        }
      })
      // Translate animation
      tl.from(beEl, {
        scrollTrigger: {
          trigger: containerEl,
          scrub: true,
          start: '30% center',
          end: 'bottom 80%'
        },
        translateY: '-100vh',
        ease: 'none'
      })
      // Description animations
      const player = gsap.from(playerEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          trigger: containerEl,
          start: 'bottom 80%'
        }
      })

      const product = gsap.from(productEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          trigger: containerEl,
          start: 'bottom 80%'
        },
        delay: 0.2
      })

      return () => {
        tl.kill()
        player.kill()
        product.kill()
      }
    }
  }, [])

  return (
    <div
      className="pt-40 md:pt-52 lg:pt-[150vh] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center"
      ref={containerRef}
    >
      <div className="text-center text-xl font-bold text-gray-700 md:text-4xl 2xl:text-5xl">
        <span>we </span>
        <span>can</span>
        <span className="mr-[-1.5rem]">
          <span className="mr-2 inline-block translate-y-[10px] translate-x-[8px] rotate-[12deg] md:translate-y-[20px]">
            make
          </span>
          <span
            className="inline-block translate-x-[-51px] translate-y-[-17px] rotate-[335deg] text-teal-400 md:translate-x-[-70px] md:translate-y-[-16px] 2xl:translate-x-[-92px] 2xl:translate-y-[-30px]"
            ref={beRef}
          >
            be
          </span>
        </span>
        <span>your </span>
        <span>MVP*</span>
      </div>

      <div className="mt-10 pr-16 text-right text-xs font-semibold md:mt-20 md:text-sm 2xl:w-[1400px] 2xl:text-xl">
        <p className="text-teal-400" ref={playerRef}>
          * most valuable player
        </p>
        <p className="text-gray-700" ref={productRef}>
          * minimum viable product
        </p>
      </div>
    </div>
  )
}

export default MVP
