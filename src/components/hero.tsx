import { FunctionComponent } from 'react'
import logo from 'public/dwyl_logo.png'
import hero_img from 'public/hero.png'

const Hero: FunctionComponent = () => {
  return (
    <div className="flex max-h-screen min-h-screen w-screen flex-col">
      <div className="flex h-fit flex-row flex-nowrap items-center justify-between pl-10 pr-10 pt-10">
        <div className="h-12 w-24">
          <img className="max-h-full max-w-full" src={logo} />
        </div>
        <div className="flex h-12 w-24 items-center justify-end">
          <button
            type="button"
            className="inline-block h-10 max-h-full w-16 max-w-full cursor-pointer rounded-full bg-green-700 px-2.5 
                py-2.5 text-xs font-semibold leading-tight text-white
                shadow-md transition duration-150 ease-in-out hover:bg-green-800 hover:shadow-lg 
                focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg"
          >
            app
          </button>
        </div>
      </div>

      <img className="ml-auto mr-auto mt-12 h-auto w-[35vh]" src={hero_img} />

      <div className="flex flex-1 flex-col justify-center">
        <div className="pr-5 pl-5 text-center">
          <h2 className="text-4xl font-semibold leading-none tracking-tight">
            <p className="text-green-900">software</p>
            <p className="text-green-900/50">made simple.</p>
          </h2>

          <div className="mt-5 text-base">
            <p className="leading-5 text-gray-600">
              we offer software development services and training.
            </p>
            <p className="mt-2 font-thin text-gray-600">based in London.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
