import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import Steps from 'components/steps'
import ValueBox from 'components/value_box'
import { createRoot } from 'react-dom/client'
import smg_img from 'public/smg.png'
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
        <h2 className="text-center text-[40px] font-semibold text-[#248680] mb-20">
          our porfolio
        </h2>

        <div
          className="h-fit w-11/12 overflow-hidden rounded-[30px] relative
         bg-gradient-to-br from-[#3EFB89] via-[#cc5e5e] to-[#FD6D6D]"
        >
          <img
            className="rotate-[20deg] translate-x-[-55px] opacity-30 blur-[2px] absolute"
            src={smg_img}
          />

          <div className="p-6 relative">
            <h4 className="font-semibold text-2xl text-white">
              The Science Museum Group
            </h4>
            <p className="font-normal text-xs text-white mt-2">
              more than 250k artefacts, made accessible and searcheable.
            </p>

            <button
              type="button"
              className="max-h-full max-w-full inline-block w-24 h-10 px-2.5 py-2.5 mt-16
                border border-white text-white 
                text-xs leading-tight rounded-full
                hover:bg-white hover:bg-opacity-10 hover:shadow-lg 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
                relative"
            >
              visit site
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 
    transform: rotate(20deg) translateX(-54px);
*/

root.render(<App />)
