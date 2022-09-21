import { FunctionComponent } from 'react'
import github_img from 'public/github.png'

const OpenSource: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center pl-5 pr-5">
      <img className="h-auto w-full" src={github_img} />
      <h2 className="mt-4 text-2xl font-semibold">
        <span className="text-[#248680]">we are full on </span>
        <span className="bg-gradient-to-r from-[#F97794] to-[#623AA2] bg-clip-text text-transparent">
          open-source
        </span>
      </h2>
      <p className="mt-4 text-center text-sm font-light">
        we believe learning sould be a shared and accesible experience.
      </p>
      <p className="text-center text-sm font-light">
        we create and maintain over 200 open source repositories on GitHub.
      </p>

      <button
        type="button"
        className="relative mt-16 inline-block h-10 max-h-full w-28 max-w-full cursor-pointer
          rounded-full border border-stone-800
          px-2.5 py-2.5 text-xs
          leading-tight text-stone-800 transition 
          duration-150 ease-in-out hover:bg-stone-800 hover:bg-opacity-10 hover:shadow-lg active:bg-stone-800 active:bg-opacity-20
          active:shadow-lg"
      >
        check it out
      </button>
    </div>
  )
}

export default OpenSource
