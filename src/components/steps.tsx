import { FunctionComponent, useLayoutEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import step0_img from 'assets/step0.png'
import step1_img from 'assets/step1.png'
import step2_img from 'assets/step2.png'
import step3_img from 'assets/step3.png'
import { useMediaQuery } from 'utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Carousel slider component (this is for mobile devices only)
interface SliderItemProps {
  title: string
  subtitle: string
  image: string
}

const SliderItem: FunctionComponent<SliderItemProps> = (
  props: SliderItemProps
) => {
  const { title, subtitle, image } = props

  return (
    <div>
      <div className="pr-8 pl-8 sm:pl-28 sm:pr-28 md:pl-48 md:pr-48">
        <img className="ml-auto mr-auto mt-12 h-auto w-[35vh]" src={image} />
      </div>
      <div className="sm mt-20 w-10/12 pl-8 text-start sm:pl-12 sm:pr-12">
        <h4 className="text-xs font-bold text-emerald-900 md:text-base">
          {title}
        </h4>
        <p className="text-[0.6rem] font-medium text-[#DA6844] md:text-[0.8rem]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

const SliderCarousel: FunctionComponent = () => {
  return (
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      swipeable
      autoPlay
      infiniteLoop
      interval={5000}
      transitionTime={700}
      renderItem={(
        item: React.ReactNode,
        options?: {
          isSelected: boolean
          isPrevious: boolean
        }
      ) => {
        return options?.isSelected ? (
          <div className="opacity-100 transition-opacity duration-200 ease-in">
            {item}
          </div>
        ) : (
          <div className="opacity-50 transition-opacity duration-200 ease-in">
            {item}
          </div>
        )
      }}
    >
      <SliderItem
        title="0. we get you to the finish line"
        subtitle="you have a vision for your product and we are here to make it a
    reality."
        image={step0_img}
      />

      <SliderItem
        title="1. understanding the problem"
        subtitle="we work together to understand the identified problem and confirm
    the intended users feel the pain and need for a solution."
        image={step1_img}
      />

      <SliderItem
        title="2. make the next market-ready version of the solution"
        subtitle="we work together to understand the identified problem and confirm
    the intended users feel the pain and need for a solution."
        image={step2_img}
      />

      <SliderItem
        title="3. review and return to step one"
        subtitle="we review all feedback and confirm we are making progress toward
    solving the problem."
        image={step3_img}
      />
    </Carousel>
  )
}

// Layered pinning components (this is for desktop devices only)
const PinningLayers: FunctionComponent = () => {
  const step0Ref = useRef(null)
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)

  const contentContainerRef = useRef(null)
  const title0Ref = useRef(null)
  const description0Ref = useRef(null)
  const title1Ref = useRef(null)
  const description1Ref = useRef(null)
  const title2Ref = useRef(null)
  const description2Ref = useRef(null)
  const title3Ref = useRef(null)
  const description3Ref = useRef(null)
  const imageRef0 = useRef(null)
  const imageRef1 = useRef(null)
  const imageRef2 = useRef(null)
  const imageRef3 = useRef(null)

  useLayoutEffect(() => {
    const textScrollTriggerTemplate = (triggerEl: any) => {
      return {
        trigger: triggerEl,
        scrub: true,
        start: 'top bottom',
        end: 'top top'
      }
    }

    // Elements --------------------------
    // Content on top
    const contentContainerEl = contentContainerRef.current

    const title0El = title0Ref.current
    const description0El = description0Ref.current
    const title1El = title1Ref.current
    const description1El = description1Ref.current
    const title2El = title2Ref.current
    const description2El = description2Ref.current
    const title3El = title3Ref.current
    const description3El = description3Ref.current

    const image0El = imageRef0.current
    const image1El = imageRef1.current
    const image2El = imageRef2.current

    // Background section refs
    const step0El = step0Ref.current
    const step1El = step1Ref.current
    const step2El = step2Ref.current

    // Animations -------------------------
    // Extending and pinning the container on top
    let scroll = ScrollTrigger.create({
      trigger: contentContainerEl,
      start: 'top top',
      end: `+=600%`, // each section has 200vh so it must be the sum of every section
      pinSpacing: false,
      pin: true
    })

    // Texts
    let title0Out = gsap.to(title0El, {
      scrollTrigger: textScrollTriggerTemplate(step0El),
      yPercent: -200
    })
    let description0Out = gsap.to(description0El, {
      scrollTrigger: textScrollTriggerTemplate(step0El),
      yPercent: -200
    })

    let title1In = gsap.to(title1El, {
      scrollTrigger: textScrollTriggerTemplate(step0El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })
    let description1In = gsap.to(description1El, {
      scrollTrigger: textScrollTriggerTemplate(step0El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })

    let title1Out = gsap.to(title1El, {
      scrollTrigger: textScrollTriggerTemplate(step1El),
      yPercent: -200
    })
    let description1Out = gsap.to(description1El, {
      scrollTrigger: textScrollTriggerTemplate(step1El),
      yPercent: -200
    })

    let title2In = gsap.to(title2El, {
      scrollTrigger: textScrollTriggerTemplate(step1El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })
    let description2In = gsap.to(description2El, {
      scrollTrigger: textScrollTriggerTemplate(step1El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })

    let title2Out = gsap.to(title2El, {
      scrollTrigger: textScrollTriggerTemplate(step2El),
      yPercent: -200
    })
    let description2Out = gsap.to(description2El, {
      scrollTrigger: textScrollTriggerTemplate(step2El),
      yPercent: -200
    })

    let title3In = gsap.to(title3El, {
      scrollTrigger: textScrollTriggerTemplate(step2El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })
    let description3In = gsap.to(description3El, {
      scrollTrigger: textScrollTriggerTemplate(step2El),
      y: 0,
      yPercent: 0,
      opacity: 1
    })

    // Images
    let step0Image = gsap.to(image0El, {
      scrollTrigger: textScrollTriggerTemplate(step0El),
      opacity: 0
    })
    let step1Image = gsap.to(image1El, {
      scrollTrigger: textScrollTriggerTemplate(step1El),
      opacity: 0
    })
    let step2Image = gsap.to(image2El, {
      scrollTrigger: textScrollTriggerTemplate(step2El),
      opacity: 0
    })

    return () => {
      scroll.kill()

      title0Out.kill()
      description0Out.kill()
      title1In.kill()
      description1In.kill()
      title1Out.kill()
      description1Out.kill()
      title2In.kill()
      description2In.kill()
      title2Out.kill()
      description2Out.kill()
      title3In.kill()
      description3In.kill()

      step0Image.kill()
      step1Image.kill()
      step2Image.kill()
    }
  }, [])

  return (
    <div>
      <div
        className="z-10 flex h-screen w-screen flex-row"
        ref={contentContainerRef}
      >
        <div className="absolute z-[14] flex h-full w-full">
          <div className="flex flex-1 flex-col items-start justify-center pl-12 pr-12">
            <div className="overflow-hidden text-2xl font-bold text-emerald-900 2xl:text-4xl">
              <span className="block" ref={title0Ref}>
                0. we get you to the finish line
              </span>
            </div>
            <div className="overflow-hidden text-xl font-medium text-[#DA6844] 2xl:text-2xl">
              <span className="block" ref={description0Ref}>
                you have a vision for your product and we are here to make it a
                reality
              </span>
            </div>
          </div>
          <img
            src={step0_img}
            className="h-auto w-1/2 object-contain pl-12 pr-12"
            ref={imageRef0}
          />
        </div>

        <div className="absolute z-[13] flex h-full w-full">
          <div className="flex flex-1 flex-col items-start justify-center pl-12 pr-12">
            <div className="overflow-hidden text-2xl font-bold text-white 2xl:text-4xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={title1Ref}
              >
                1. understanding the problem
              </span>
            </div>
            <div className="overflow-hidden text-xl font-medium text-[#DA6844] 2xl:text-2xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={description1Ref}
              >
                we work together to understand the identified problem and
                confirm the intended users feel the pain and need for a
                solution.
              </span>
            </div>
          </div>
          <img
            src={step1_img}
            className="h-auto w-1/2 object-contain pl-12 pr-12"
            ref={imageRef1}
          />
        </div>

        <div className="absolute z-[12] flex h-full w-full">
          <div className="flex flex-1 flex-col items-start justify-center pl-12 pr-12">
            <div className="overflow-hidden text-2xl font-bold text-[#27292F] 2xl:text-4xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={title2Ref}
              >
                2. make the next market-ready version of the solution
              </span>
            </div>
            <div className="overflow-hidden text-xl font-medium text-[#DA6844] 2xl:text-2xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={description2Ref}
              >
                we work together to understand the identified problem and
                confirm the intended users feel the pain and need for a
                solution.
              </span>
            </div>
          </div>
          <img
            src={step2_img}
            className="h-auto w-1/2 object-contain pl-12 pr-12"
            ref={imageRef2}
          />
        </div>

        <div className="absolute z-[11] flex h-full w-full">
          <div className="flex flex-1 flex-col items-start justify-center pl-12 pr-12">
            <div className="overflow-hidden text-2xl font-bold text-[#27292F] 2xl:text-4xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={title3Ref}
              >
                3. review and return to step one
              </span>
            </div>
            <div className="overflow-hidden text-xl font-medium text-[#DA6844] 2xl:text-2xl">
              <span
                className="block translate-y-[100%] opacity-0"
                ref={description3Ref}
              >
                we review all feedback and confirm we are making progress toward
                solving the problem.
              </span>
            </div>
          </div>
          <img
            src={step3_img}
            className="h-auto w-1/2 object-contain pl-12 pr-12"
            ref={imageRef3}
          />
        </div>
      </div>

      <div>
        <section className="z-0 h-[200vh] bg-[#27292F]" ref={step0Ref} />
        <section className="z-0 h-[200vh] bg-[#FAF3BE]" ref={step1Ref} />
        <section className="z-0 h-[200vh] bg-[#D9FFFC]" ref={step2Ref} />
      </div>
    </div>
  )
}

// Exported components
export const StepsTitle: FunctionComponent = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    if (isDesktop) {
      const sectionHeight = 200

      const containerEl = containerRef.current
      const titleEl = titleRef.current

      // Pinning
      let pin = gsap.from(containerEl, {
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
      let fade = gsap.timeline({
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
        .to(titleEl, { opacity: 1, duration: 0.5 })
        .to(titleEl, { opacity: 0, duration: 0.25 })

      return () => {
        pin.kill()
        fade.kill()
      }
    }
  }, [])

  return (
    <div className="mt-40 lg:mt-0">
      {isDesktop ? (
        <div
          className="flex h-auto w-screen flex-row lg:h-screen"
          ref={containerRef}
        >
          <div className="absolute flex h-full w-full items-center justify-center">
            <div
              ref={titleRef}
              className="text-center opacity-100 lg:opacity-0"
            >
              <h1 className="bg-gradient-to-r from-[#009FFF] to-[#EC2F4B] bg-clip-text text-3xl font-semibold text-transparent md:text-5xl md:leading-[1.3] 2xl:text-[5rem]">
                the right solution
              </h1>
              <h2 className="text-xl font-semibold text-stone-700 md:text-3xl 2xl:text-[2.2rem]">
                (in 3 easy steps)
              </h2>
              <p className="mt-5 text-[9px] font-medium uppercase text-stone-500 md:text-xs 2xl:text-base">
                meet your needs quickly and without waste
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mb-5 flex w-full flex-col justify-center pl-10 pr-10 text-center lg:h-screen"
          ref={containerRef}
        >
          <div ref={titleRef} className="opacity-100 lg:opacity-0">
            <h1 className="bg-gradient-to-r from-[#009FFF] to-[#EC2F4B] bg-clip-text text-3xl font-semibold text-transparent md:text-5xl md:leading-[1.3]">
              the right solution
            </h1>
            <h2 className="text-xl font-semibold text-stone-700 md:text-3xl">
              (in 3 easy steps)
            </h2>
            <p className="mt-5 text-[9px] font-medium uppercase text-stone-500 md:text-xs">
              meet your needs quickly and without waste
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export const StepsTimeline: FunctionComponent = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return <div>{isDesktop ? <PinningLayers /> : <SliderCarousel />}</div>
}
