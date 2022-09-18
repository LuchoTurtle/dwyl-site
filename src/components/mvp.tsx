import { FunctionComponent } from 'react'

const MVP: FunctionComponent = () => {
  return (
    <>
      <div className="font-bold text-gray-700 text-center text-xl">
        <span>we </span>
        <span>can</span>
        <span className="mr-[-1.5rem]">
          <span className="mr-2 inline-block rotate-[12deg] translate-y-[10px] translate-x-[8px]">
            make
          </span>
          <span className="text-teal-400 inline-block translate-x-[-51px] translate-y-[-17px] rotate-[335deg]">
            be
          </span>
        </span>
        <span>your </span>
        <span>MVP*</span>
      </div>

      <div className="text-xs text-right font-semibold mt-10 pr-16">
        <p className="text-teal-400">* most valuable player</p>
        <p className="text-gray-700">* minimum viable product</p>
      </div>
    </>
  )
}

export default MVP
