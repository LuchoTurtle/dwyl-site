import Definition from 'components/definition'
import Hero from 'components/hero'
import MVP from 'components/mvp'
import { StepsTimeline, StepsTitle } from 'components/steps'
import Values from 'components/values'
import Portfolio from 'components/portfolio'
import OpenSource from 'components/open_source'
import Footer from 'components/footer'
import Iterating from 'components/iterating'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

//TODO https://codebyzach.github.io/pace/docs/

function App() {
  return (
    <div className="overflow-x-hidden bg-white font-montserrat">
      <Hero />

      <div className="mt-40">
        <Definition />
      </div>

      <div className="mt-40">
        <Values />
      </div>

      <MVP />

      <StepsTitle />

      <StepsTimeline />

      <div className="mt-40 lg:mt-0">
        <Iterating />
      </div>

      <div className="mr-8 ml-8 mt-40 flex flex-col items-center">
        <Portfolio />
      </div>

      <div className="mt-40">
        <OpenSource />
      </div>

      <div className="mt-40 flex pr-10 pl-10">
        <span className="w-full bg-stone-200 p-[1px]"></span>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}

root.render(<App />)
