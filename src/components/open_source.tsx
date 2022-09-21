import { FunctionComponent } from 'react'
import github_img from 'public/github.png'

const OpenSource: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center pl-5 pr-5">
      <img className="h-auto w-full" src={github_img} />
      <h2 className="font-semibold text-2xl mt-4">
        <span className="text-[#248680]">we are full on </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97794] to-[#623AA2]">
          open-source
        </span>
      </h2>
      <p className="font-light text-sm text-center mt-4">
        we believe learning sould be a shared and accesible experience.
      </p>
      <p className="font-light text-sm text-center">
        we create and maintain over 200 open source repositories on GitHub.
      </p>

      <button
        type="button"
        className="max-h-full max-w-full inline-block w-28 h-10 px-2.5 py-2.5 mt-16
          border border-stone-800 text-stone-800
          text-xs leading-tight rounded-full
          hover:bg-stone-800 hover:bg-opacity-10 hover:shadow-lg 
          active:bg-stone-800 active:bg-opacity-20 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
          relative"
      >
        check it out
      </button>
    </div>
  )
}

export default OpenSource
