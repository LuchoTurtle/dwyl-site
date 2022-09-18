import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import ValueBox from 'components/value_box'
import { createRoot } from 'react-dom/client'
import step0_img from 'public/step0.png'
import 'tailwindcss/tailwind.css'

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

          <img className="h-auto w-[35vh] ml-auto mr-auto mt-12" src={step0_img} />

        </div>
      </div>
    </div>
  )
}

root.render(<App />)
