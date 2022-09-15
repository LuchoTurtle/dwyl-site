import { FunctionComponent } from 'react'
import logo from 'public/dwyl_logo.png'
import hero_img from 'public/hero.png'

const Hero: FunctionComponent = () => {
  return (
    <div className='min-h-screen max-h-screen w-screen flex flex-col'>
      <div className="h-fit flex flex-row flex-nowrap justify-between items-center pl-10 pr-10 pt-10">
        <div className="w-24 h-12">
          <img className="max-h-full max-w-full" src={logo} />
        </div>
        <div className="flex justify-end items-center w-24 h-12">
          <button
            type="button"
            className="max-h-full max-w-full inline-block w-16 h-10 px-2.5 py-2.5 bg-green-700 text-white 
                font-semibold text-xs leading-tight rounded-full shadow-md
                hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
          >
            app
          </button>
        </div>
      </div>

      <img className="h-auto w-9/12 ml-auto mr-auto mt-12" src={hero_img} />

      <div className="flex flex-1 justify-center flex-col">
        <div className="text-center pr-5 pl-5">
          <h2 className="font-semibold text-4xl tracking-tight leading-none">
            <p className="text-green-900">software</p>
            <p className="text-green-900/50">made simple.</p>
          </h2>

          <div className='mt-5 text-base'>
            <p className='text-gray-600 leading-5'>we offer software development services and training.</p>
            <p className='font-thin text-gray-600 mt-2'>based in London.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
