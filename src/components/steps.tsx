import { FunctionComponent, useLayoutEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import step0_img from 'public/step0.png'
import step1_img from 'public/step1.png'
import step2_img from 'public/step2.png'
import step3_img from 'public/step3.png'
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
      <div className="sm mt-20 w-1/2 pl-8 text-start sm:pl-12 sm:pr-12">
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
  //https://codepen.io/GreenSock/pen/KKpLdWW

  const step0Ref = useRef(null)
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)

  const contentContainerRef = useRef(null)
  const textRef = useRef(null)
  const imageRef0 = useRef(null)
  const imageRef1 = useRef(null)
  const imageRef2 = useRef(null)
  const imageRef3 = useRef(null)

  useLayoutEffect(() => {
    // Content on top
    const contentContainerEl = contentContainerRef.current
    const textEl0 = textRef.current
    const image0El = imageRef0.current
    const image1El = imageRef1.current
    const image2El = imageRef2.current
    const image3El = imageRef3.current

    // Background section refs
    const step0El = step0Ref.current
    const step1El = step1Ref.current
    const step2El = step2Ref.current
    const step3El = step3Ref.current

    // Extending and pinning the container on top
    let scroll = ScrollTrigger.create({
      trigger: contentContainerEl,
      start: "top top", 
      end: `+=600%`,      // each section has 200vh so it must be the sum of every section
      pinSpacing: false,
      pin: true,
    });

    // Image change between steps
    let step0Begin = gsap.to(image0El, {
      scrollTrigger: {
        trigger: step0El,
        scrub: true,
        start: 'top bottom',
        end: 'top top',
        markers: true,
      },
      opacity: 0,
    })

    let step1Begin = gsap.to(image1El, {
      scrollTrigger: {
        trigger: step1El,
        scrub: true,
        start: 'top bottom',
        end: 'top top',
        markers: true,
      },
      opacity: 0,
    })

    
    let step2Begin = gsap.to(image2El, {
      scrollTrigger: {
        trigger: step2El,
        scrub: true,
        start: 'top bottom',
        end: 'top top',
        markers: true,
      },
      opacity: 0,
    })


    return () => {
      scroll.kill()
      step0Begin.kill()
      step1Begin.kill()
      step2Begin.kill()
    }
    
  }, [])


  return (
    <div>
      <div className="z-10 flex h-screen w-screen flex-row" ref={contentContainerRef}>
        <div className='z-[14] absolute flex h-full w-full'>
          <div className='flex-1 flex flex-col justify-center items-start pl-12 pr-12' ref={textRef}>
            <h4 className="text-2xl font-bold text-emerald-900">0. we get you to the finish line</h4>
            <p className="text-xl font-medium text-[#DA6844]">you have a vision for your product and we are here to make it a reality</p>
          </div>
          <img src={step0_img} className="h-auto w-1/2 object-contain pl-12 pr-12" ref={imageRef0}/>
        </div>

        <div className='z-[13] absolute flex h-full w-full'>
          <div className='flex-1 flex flex-col justify-center items-start pl-12 pr-12'>
          </div>
          <img src={step1_img} className="h-auto w-1/2 object-contain pl-12 pr-12" ref={imageRef1}/>
        </div>

        <div className='z-[12] absolute flex h-full w-full'>
          <div className='flex-1 flex flex-col justify-center items-start pl-12 pr-12'>
          </div>
          <img src={step2_img} className="h-auto w-1/2 object-contain pl-12 pr-12" ref={imageRef2}/>
        </div>

        <div className='z-[11] absolute flex h-full w-full'>
          <div className='flex-1 flex flex-col justify-center items-start pl-12 pr-12'>
          </div>
          <img src={step3_img} className="h-auto w-1/2 object-contain pl-12 pr-12" ref={imageRef3}/>
        </div>
      </div>

      <div>
        <section className="z-0 h-[200vh] bg-[#27292F]" ref={step0Ref}  />
        <section className="z-0 h-[200vh] bg-[#FAF3BE]" ref={step1Ref} />
        <section className="z-0 h-[200vh] bg-[#D9FFFC]" ref={step2Ref} />
      </div>
    </div>
  )
}

export const StepsTitle: FunctionComponent = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useLayoutEffect(() => {
    if (isDesktop) {
      const sectionHeight = 350

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

      // Fade in and fade ou
      let fade = ScrollTrigger.create({
        trigger: containerEl,
        start: 'top top',
        end: `${sectionHeight - 50}% center`,
        onLeave: () =>
          gsap.to(titleEl, {
            opacity: 0,
            ease: 'power4.out',
            immediateRender: false
          }),
        onEnterBack: () =>
          gsap.to(titleEl, {
            opacity: 1,
            ease: 'power1.in',
            immediateRender: false
          }),
        onEnter: () =>
          gsap.to(titleEl, {
            opacity: 1,
            duration: 0.2,
            ease: 'power1.in',
            immediateRender: false
          }),
        onLeaveBack: () =>
          gsap.to(titleEl, {
            opacity: 0,
            duration: 0.2,
            ease: 'power4.in',
            immediateRender: false
          })
      })

      return () => {
        pin.kill()
        fade.kill()
      }
    }
  }, [])

  return (
    <div className="mt-40 lg:mt-[50vh]">
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
    </div>
  )
}

export const StepsTimeline: FunctionComponent = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return <div>{isDesktop ? <PinningLayers /> : <SliderCarousel />}</div>
}
