import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import Steps from 'components/steps'
import Values from 'components/values'
import Portfolio from 'components/portfolio'
import OpenSource from 'components/open_source'
import Footer from 'components/footer'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

function App() {
  return (
    <div className="bg-white font-montserrat">
      <Hero />

      <div className="mt-40">
        <Definition />
      </div>

      <div className="mt-40">
        <Values/>
      </div>

      <MVP />

      <div className="mt-40">
        <Steps />
      </div>

      <div className="mt-40">
        <div className="mr-6 ml-6 sm:mr-[15%] sm:ml-[15%] text-center">
          <h1 className="text-base md:text-2xl font-semibold leading-4 text-stone-800">
            <span>by iterating over these </span>
            <span className="text-[#1DAA6F]">3 simple steps </span>
            <span>we maintain a </span>
            <span className="text-[#1DAA6F]">tight feedback loop </span>
            <span>between the people </span>
            <span className="bg-gradient-to-r from-[#B12A2A] to-[#1D82A1] bg-clip-text text-transparent">
              building
            </span>
            <span> and the people </span>
            <span className="bg-gradient-to-r from-[#AC3EC8] to-[#FF630C] bg-clip-text text-transparent">
              using
            </span>
            .
          </h1>
        </div>
      </div>

      <div className="mr-4 ml-4 flex flex-col items-center mt-40">
        <Portfolio />
      </div>

      <div className="mt-40">
        <OpenSource />
      </div>

      <div className="flex mt-40 pr-10 pl-10">
        <span className="w-full bg-stone-200 p-[1px]"></span>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

root.render(<App />)
