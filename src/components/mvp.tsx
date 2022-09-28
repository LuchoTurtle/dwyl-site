import { FunctionComponent, useLayoutEffect, useRef } from 'react'
import { fadeUpReveal, useMediaQuery } from 'utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const MVP: FunctionComponent = () => {
  const containerRef = useRef(null)
  const beRef = useRef(null)
  const playerRef = useRef(null)
  const productRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    if (isDesktop) {
      const containerEl = containerRef.current
      const beEl = beRef.current
      const playerEl = playerRef.current
      const productEl = productRef.current

      let tl = gsap.timeline()

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
      let player = gsap.from(playerEl, {
        ...fadeUpReveal,
        scrollTrigger: {
          trigger: containerEl,
          start: 'bottom 80%'
        }
      })

      let product = gsap.from(productEl, {
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
    <div className="pt-40 md:pt-52 lg:pt-[150vh]" ref={containerRef}>
      <div className="text-center text-xl font-bold text-gray-700 md:text-4xl">
        <span>we </span>
        <span>can</span>
        <span className="mr-[-1.5rem]">
          <span className="mr-2 inline-block translate-y-[10px] translate-x-[8px] rotate-[12deg] md:translate-y-[20px]">
            make
          </span>
          <span
            className="inline-block translate-x-[-51px] translate-y-[-17px] rotate-[335deg] text-teal-400 md:translate-x-[-70px] md:translate-y-[-16px]"
            ref={beRef}
          >
            be
          </span>
        </span>
        <span>your </span>
        <span>MVP*</span>
      </div>

      <div className="mt-10 pr-16 text-right text-xs font-semibold md:mt-20 md:text-sm">
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
