import { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import step0_img from 'public/step0.png'
import step1_img from 'public/step1.png'
import step2_img from 'public/step2.png'
import step3_img from 'public/step3.png'

const Steps: FunctionComponent = () => {
  return (
    <>
      <div className="w-screen flex flex-col pl-10 pr-10 text-center">
        <h1 className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#009FFF] to-[#EC2F4B]">
          the right solution
        </h1>
        <h2 className="font-semibold text-xl text-stone-700">
          (in 3 easy steps)
        </h2>
        <p className="font-medium text-[9px] text-stone-500 uppercase mt-5">
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
            <div className="transition-opacity ease-in duration-200 opacity-100">
              {item}
            </div>
          ) : (
            <div className="transition-opacity ease-in duration-200 opacity-50">
              {item}
            </div>
          )
        }}
      >
        <div className=" pr-8 pl-8">
          <img
            className="h-auto w-[35vh] ml-auto mr-auto mt-12"
            src={step0_img}
          />

          <div className="mt-8 text-start">
            <h4 className="text-xs text-emerald-900 font-bold">
              0. we get you to the finish line
            </h4>
            <p className="font-medium text-[#DA6844] text-[0.6rem]">
              you have a vision for your product and we are here to make it a
              reality.
            </p>
          </div>
        </div>

        <div className=" pr-8 pl-8">
          <img
            className="h-auto w-[35vh] ml-auto mr-auto mt-12"
            src={step1_img}
          />

          <div className="mt-8 text-start">
            <h4 className="text-xs text-emerald-900 font-bold">
              1. understanding the problem
            </h4>
            <p className="font-medium text-[#DA6844] text-[0.6rem]">
              we work together to understand the identified problem and confirm
              the intended users feel the pain and need for a solution.
            </p>
          </div>
        </div>

        <div className=" pr-8 pl-8">
          <img
            className="h-auto w-[35vh] ml-auto mr-auto mt-12"
            src={step2_img}
          />

          <div className="mt-8 text-start">
            <h4 className="text-xs text-emerald-900 font-bold">
              2. make the next market-ready version of the solution
            </h4>
            <p className="font-medium text-[#DA6844] text-[0.6rem]">
              we work together to understand the identified problem and confirm
              the intended users feel the pain and need for a solution.
            </p>
          </div>
        </div>

        <div className=" pr-8 pl-8">
          <img
            className="h-auto w-[35vh] ml-auto mr-auto mt-12"
            src={step3_img}
          />

          <div className="mt-8 text-start">
            <h4 className="text-xs text-emerald-900 font-bold">
              3. review and return to step one
            </h4>
            <p className="font-medium text-[#DA6844] text-[0.6rem]">
              we review all feedback and confirm we are making progress toward
              solving the problem.{' '}
            </p>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default Steps
