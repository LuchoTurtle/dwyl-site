import { FunctionComponent } from 'react'

const MVP: FunctionComponent = () => {
  return (
    <>
      <div className="text-center text-xl font-bold text-gray-700">
        <span>we </span>
        <span>can</span>
        <span className="mr-[-1.5rem]">
          <span className="mr-2 inline-block translate-y-[10px] translate-x-[8px] rotate-[12deg]">
            make
          </span>
          <span className="inline-block translate-x-[-51px] translate-y-[-17px] rotate-[335deg] text-teal-400">
            be
          </span>
        </span>
        <span>your </span>
        <span>MVP*</span>
      </div>

      <div className="mt-10 pr-16 text-right text-xs font-semibold">
        <p className="text-teal-400">* most valuable player</p>
        <p className="text-gray-700">* minimum viable product</p>
      </div>
    </>
  )
}

export default MVP
