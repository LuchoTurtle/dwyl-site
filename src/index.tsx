import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import ValueBox from 'components/value_box'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import step0_img from 'public/step0.png'
import step1_img from 'public/step1.png'
import step2_img from 'public/step2.png'
import step3_img from 'public/step3.png'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

function App() {
  return (
    <div className="font-montserrat bg-white">
      <Hero />

      <div className="pt-40">
        <Definition />
      </div>

      <div className="pt-40">
        <ValueBox
          title="People"
          titleEmoji="🧑‍🤝‍🧑"
          borderStyles="from-[#CCABD8] via-[#9AAEE3] to-[#FA897B]"
        >
          Our people are our primary focus, not profit. We have a worldwide
          community of over 400 creative technologists. We believe in
          inclusivity and accessibility and want to enrich the lives of everyone
          in our community.
        </ValueBox>

        <div className="mt-20">
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

        <div className="mt-20">
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

        <div className="mt-20">
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

      <div className="pt-40">
        <MVP />
      </div>

      <div className="pt-40">
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
            return options?.isSelected ? <div>{item}</div> : <div className='opacity-50'>{item}</div>
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
                we work together to understand the identified problem and
                confirm the intended users feel the pain and need for a
                solution.
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
                we work together to understand the identified problem and
                confirm the intended users feel the pain and need for a
                solution.
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
      </div>
    </div>
  )
}

root.render(<App />)
