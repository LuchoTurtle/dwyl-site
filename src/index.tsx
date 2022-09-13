import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

function App() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
              Welcome to
            </h2>
            <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              reactjs-vite-tailwindcss-boilerplate
            </p>
            <p className="text-xl text-gray-400">Start building for free.</p>
          </div>
        </div>
      </div>
    )
  }
  

root.render(<App />)
