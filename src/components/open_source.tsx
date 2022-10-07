import { FunctionComponent, useRef } from 'react'
import github_img from 'assets/github.png'
import Spline from '@splinetool/react-spline'
import { useMediaQuery } from 'utils'
import { Application } from '@splinetool/runtime'

interface OpenSourceProps {
  onSceneLoad: () => void
}
const OpenSource: FunctionComponent<OpenSourceProps> = (
  props: OpenSourceProps
) => {
  const github3DObject = useRef<any>(null)

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  //const isDesktop = false

  function onSceneLoad(spline: Application) {
    const obj = spline.findObjectByName('github')
    // save the object in a ref for later use
    github3DObject.current = obj
    props.onSceneLoad()
  }

  function triggerAnimation() {
    github3DObject.current.emitEvent('mouseHover')
  }

  function reverseAnimation() {
    github3DObject.current.emitEventReverse('mouseHover')
  }

  return (
    <div className="flex flex-col items-center pl-5 pr-5">
      {isDesktop ? (
        <div
          className="h-[36rem] w-full cursor-pointer"
          onClick={() => window.open('https://github.com/dwyl', '_blank')}
          onMouseEnter={triggerAnimation}
          onMouseLeave={reverseAnimation}
        >
          <Spline
            scene="https://prod.spline.design/6UZds93Rf0Hglh5C/scene.splinecode"
            onLoad={onSceneLoad}
          />
        </div>
      ) : (
        <img className="h-auto w-full" src={github_img} />
      )}
      <h2 className="mt-4 text-center text-2xl font-semibold md:text-4xl lg:text-6xl 2xl:text-7xl">
        <span className="text-[#248680]">we are full on </span>
        <span className="bg-gradient-to-r from-[#F97794] to-[#623AA2] bg-clip-text text-transparent">
          open-source
        </span>
      </h2>
      <p className="mt-4 text-center text-sm font-light md:text-lg lg:text-xl 2xl:text-2xl">
        we believe learning sould be a shared and accesible experience.
      </p>
      <p className="text-center text-sm font-light md:text-lg lg:text-xl 2xl:text-2xl">
        we create and maintain over 200 open source repositories on GitHub.
      </p>

      {!isDesktop && (
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
      )}
    </div>
  )
}

export default OpenSource
