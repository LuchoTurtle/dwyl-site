import { FunctionComponent, useEffect, useLayoutEffect, useRef } from 'react'
import { scaleUpReveal, useHover, useMediaQuery } from 'utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

interface ValueBoxProps extends React.PropsWithChildren {
  title: string
  titleEmoji: string
  titlePosition?: 'top' | 'bottom'
  titleOrientation?: 'left' | 'right'

  borderStyles?: string
}

const Title: FunctionComponent<
  Pick<ValueBoxProps, 'titleOrientation' | 'title' | 'titleEmoji'>
> = (
  props: Pick<ValueBoxProps, 'titleOrientation' | 'title' | 'titleEmoji'>
) => {
  const { title, titleEmoji, titleOrientation } = props

  if (titleOrientation === 'right') {
    return (
      <>
        <span className="text-4xl">{titleEmoji}</span>
        <span className="text-zinc-800 2xl:text-3xl">{title}</span>
      </>
    )
  } else {
    return (
      <>
        <span className="text-zinc-800 2xl:text-3xl">{title}</span>
        <span className="text-4xl">{titleEmoji}</span>
      </>
    )
  }
}

const ValueBox: FunctionComponent<ValueBoxProps> = (props: ValueBoxProps) => {
  const {
    title,
    titleEmoji,
    titlePosition,
    titleOrientation,
    borderStyles,
    children
  } = props

  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  useEffect(() => {
    const el = hoverRef.current

    if (isHover) gsap.to(el, { duration: 1, scale: 1.02, ease: 'power2.out' })
    else gsap.to(el, { duration: 1, scale: 1, ease: 'power2.out' })
  }, [isHover])

  return (
    <div
      className={`h-fit w-4/6 rounded-[2.7rem] bg-gradient-to-br p-[3px] lg:h-full lg:w-full ${borderStyles}`}
      ref={hoverRef}
    >
      <div className="flex h-full flex-col justify-start rounded-[2.6rem] bg-white pb-6 pl-8 pr-5 pt-6 md:pb-8 md:pl-10 md:pr-7 md:pt-8">
        {titlePosition === 'bottom' ? (
          <>
            <p className="font-normal text-stone-700">{children}</p>

            <div className="mt-4 flex flex-row justify-between text-xl font-bold">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex flex-row justify-between text-xl font-bold">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>

            <p className="text-sm font-normal text-stone-700 2xl:text-lg">
              {children}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

const Values: FunctionComponent = () => {
  const containerRef = useRef(null)
  const value1Ref = useRef(null)
  const value2Ref = useRef(null)
  const value3Ref = useRef(null)
  const value4Ref = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    if (isDesktop) {
      const containerEl = containerRef.current
      const value1El = value1Ref.current
      const value2El = value2Ref.current
      const value3El = value3Ref.current
      const value4El = value4Ref.current

      let value1 = gsap.from(value1El, {
        ...scaleUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        }
      })

      let value2 = gsap.from(value2El, {
        ...scaleUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.2
      })

      let value3 = gsap.from(value3El, {
        ...scaleUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.3
      })

      let value4 = gsap.from(value4El, {
        ...scaleUpReveal,
        scrollTrigger: {
          immediateRender: false,
          trigger: containerEl,
          start: 'top center'
        },
        delay: 0.4
      })

      return () => {
        value1.kill()
        value2.kill()
        value3.kill()
        value4.kill()
      }
    }
  }, [])

  return (
    <div
      className="mx-auto w-fit md:w-4/5 md:max-w-lg lg:max-w-none xl:max-w-[1000px]"
      ref={containerRef}
    >
      <div className="lg:flex">
        <div
          className="mt-20 flex justify-center lg:m-4 lg:flex-1"
          ref={value1Ref}
        >
          <ValueBox
            title="People"
            titleEmoji="🧑‍🤝‍🧑"
            borderStyles="from-[#CCABD8] via-[#9AAEE3] to-[#FA897B]"
          >
            Our people are our primary focus, not profit. We have a worldwide
            community of over 400 creative technologists. We believe in
            inclusivity and accessibility and want to enrich the lives of
            everyone in our community.
          </ValueBox>
        </div>

        <div
          className="mt-20 flex justify-center lg:m-4 lg:flex-1"
          ref={value2Ref}
        >
          <ValueBox
            title="Transparency"
            titleEmoji="🤝"
            borderStyles="from-[#86E3CE] via-[#E39AD3] to-[#FFDD94]"
          >
            Open-Source and Open-Kimono: we’re building dwyl for all to see! The
            vast majority of dwyl projects are written open-source. This allows
            code modules to improve and adapt over time allowing for a more
            robust and up-to-date application.
          </ValueBox>
        </div>
      </div>

      <div className="lg:flex">
        <div
          className="mt-20 flex justify-center lg:m-4 lg:flex-1"
          ref={value3Ref}
        >
          <ValueBox
            title="Green"
            titleEmoji="🌍"
            borderStyles="from-[#D05C5C] via-[#9AE3C0] to-[#BFC857]"
          >
            We recycle and are carbon neutral, but it’s not just the planet’s
            environment we want to improve. We love projects that have a
            positive effect on the world. Take a look at the kinds of project we
            love.
          </ValueBox>
        </div>

        <div
          className="mt-20 flex justify-center lg:m-4 lg:flex-1"
          ref={value4Ref}
        >
          <ValueBox
            title="Organic Growth"
            titleEmoji="🌳"
            borderStyles="from-[#D8D3AB] via-[#E39E9A] to-[#FA7B7B]"
          >
            We recycle and are carbon neutral, but it’s not just the planet’s
            environment we want to improve. We love projects that have a
            positive effect on the world. Take a look at the kinds of project we
            love.
          </ValueBox>
        </div>
      </div>
    </div>
  )
}

export default Values
