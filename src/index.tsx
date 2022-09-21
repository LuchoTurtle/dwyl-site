import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import Steps from 'components/steps'
import ValueBox from 'components/value_box'
import Portfolio from 'components/portfolio'
import OpenSource from 'components/open_source'
import Footer from 'components/footer'
import { createRoot } from 'react-dom/client'
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
        <Steps />
      </div>

      <div className="pt-40">
        <div className="text-center mr-6 ml-6">
          <h1 className="font-semibold text-base leading-4 text-stone-800">
            <span>by iterating over these </span>
            <span className="text-[#1DAA6F]">3 simple steps </span>
            <span>we maintain a </span>
            <span className="text-[#1DAA6F]">tight feedback loop </span>
            <span>between the people </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B12A2A] to-[#1D82A1]">
              building
            </span>
            <span> and the people </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AC3EC8] to-[#FF630C]">
              using
            </span>
            .
          </h1>
        </div>
      </div>

      <div className="pt-40 mr-4 ml-4 flex flex-col items-center">
        <Portfolio />
      </div>

      <div className="pt-40">
        <OpenSource />
      </div>

      <div className="flex pt-40 pr-10 pl-10">
        <span className="w-full p-[1px] bg-stone-200"></span>
      </div>

      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  )
}

root.render(<App />)
