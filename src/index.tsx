import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import Definition from 'components/definition'
import Footer from 'components/footer'
import Hero from 'components/hero'
import Iterating from 'components/iterating'
import Loading from 'components/loading'
import MVP from 'components/mvp'
import OpenSource from 'components/open_source'
import Portfolio from 'components/portfolio'
import { StepsTimeline, StepsTitle } from 'components/steps'
import Values from 'components/values'

import './scrollbar.css'

import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

function App() {
  // Local state
  const [sceneLoaded, setSceneLoaded] = useState(false)

  // Console easter egg
  useEffect(() => {
    let title_style = [
      'font-weight: bold',
      'font-size: 50px',
      `color: red`,
      `text-shadow: 3px 3px 0 rgb(217,31,38)`,
      `6px 6px 0 rgb(226,91,14)`,
      `9px 9px 0 rgb(245,221,8)`,
      `12px 12px 0 rgb(5,148,68)`,
      `15px 15px 0 rgb(25,18,168)`
    ].join(';')
    console.log('%c Hey there!', title_style)

    let subtitle_styles = [
      `font-size: 12px`,
      `font-family: monospace`,
      `background: white`,
      `display: inline-block`,
      `color: black`,
      `padding: 8px 19px`,
      `border: 1px dashed;`
    ].join(';')
    console.log(
      "%c😊 Great seeing you here!\n🎉 We always fancy those that are curious by nature.\n👨‍💻 Interested in working with us? Check out our contact details at the bottom of the page.",
      subtitle_styles
    )
  }, [])

  return (
    <div className="overflow-x-hidden bg-white font-montserrat scroll-smooth">
      <Loading done={sceneLoaded} />

      <Hero
        onSceneLoad={() => {
          // We wait for a second after loading so it's prettier (shows a bit of progress)
          setTimeout(() => setSceneLoaded(true), 1000)
        }}
      />

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
