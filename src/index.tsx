import Definition from 'components/definition'
import Hero from 'components/hero'
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
    </div>
  )
}

root.render(<App />)
