import { FunctionComponent } from 'react'
import logo from 'public/dwyl_logo.png'

const Header: FunctionComponent = () => {
  return (
    <>
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
    </>
  )
}

export default Header
