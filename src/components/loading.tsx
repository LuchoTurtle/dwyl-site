import React, {
  Component,
  FunctionComponent,
  useEffect,
  useRef,
  useState
} from 'react'
import gsap from 'gsap'

interface LoadingProps {
  done: boolean
}
const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  const sceneIsLoaded = props.done

  // References for animation
  const containerRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)

  // Local state
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  // When mounted, the document is not scrollable
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  // Progress
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(progress + (1 - progress) * 0.1)
    }, 500 * Math.random())

    return () => {
      clearInterval(intervalId)
    }
  }, [progress])

  // Setting state and starting done animation
  useEffect(() => {
    if (sceneIsLoaded && !done) {
      setProgress(1)
      setDone(true)
    }
  }, [sceneIsLoaded])

  useEffect(() => {
    if (done) {
      const containerEl = containerRef.current
      const text1El = text1Ref.current
      const text2El = text2Ref.current

      const tl = gsap.timeline()

      tl.to(text1El, { delay: 1, yPercent: -100, ease: 'power2.out' })
      tl.to(text2El, { yPercent: -100, ease: 'power2.out' }, '=<')
      tl.add(() => {
        document.body.style.overflow = 'unset'
      }) // Show scrollbar upon completion
      tl.to(
        containerEl,
        { opacity: 0, duration: 1.5, ease: 'power4.in' },
        '>0.5'
      )
      tl.to(containerEl, { display: 'none' }, '>')
    }
  }, [done])

  return (
    <div className="fixed z-50 h-full w-full" ref={containerRef}>
      <div className="absolute h-full w-full bg-white"></div>
      <div
        style={{ opacity: 1 - progress }}
        className="absolute  h-full  w-full bg-neutral-800 transition-[opacity] duration-700 ease-out"
      />
      <div className="absolute flex h-full w-full flex-col items-center justify-center  font-montserrat ">
        <div className="relative flex h-[4.5rem] w-full flex-row justify-center overflow-hidden">
          <h1
            ref={text1Ref}
            style={{ opacity: progress }}
            className="absolute text-7xl font-extralight text-black"
          >
            {Math.floor(progress * 100) + '%'}
          </h1>
          <h1
            ref={text2Ref}
            style={{ opacity: 1 - progress }}
            className="absolute text-7xl font-extralight text-white"
          >
            {Math.floor(progress * 100) + '%'}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
