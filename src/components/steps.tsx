import { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import step0_img from 'public/step0.png'
import step1_img from 'public/step1.png'
import step2_img from 'public/step2.png'
import step3_img from 'public/step3.png'

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

const Steps: FunctionComponent = () => {
  return (
    <>
      <div className="mb-5 flex w-screen flex-col pl-10 pr-10 text-center">
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
    </>
  )
}

export default Steps
