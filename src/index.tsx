import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import Steps from 'components/steps'
import ValueBox from 'components/value_box'
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
        <Steps/>
      </div>
    </div>
  )
}

root.render(<App />)
