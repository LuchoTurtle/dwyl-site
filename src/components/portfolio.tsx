import { FunctionComponent } from 'react'
import smg_img from 'public/smg.png'
import ic_img from 'public/ic.png'
import emf_img from 'public/emf.png'
import oxford_img from 'public/oxford.webp'

const Portfolio: FunctionComponent = () => {
  return (
    <>
      <h2 className="text-center text-[40px] font-semibold text-[#248680] mb-20">
        our porfolio
      </h2>

      <div
        className="h-fit w-11/12 overflow-hidden rounded-[30px] relative
         bg-gradient-to-br from-[#3EFB89] via-[#cc5e5e] to-[#FD6D6D]"
      >
        <img
          className="rotate-[20deg] translate-x-[-55px] opacity-30 blur-[2px] absolute"
          src={smg_img}
        />

        <div className="p-6 relative">
          <h4 className="font-semibold text-2xl text-white">
            The Science Museum Group
          </h4>
          <p className="font-normal text-xs text-white mt-2">
            more than 250k artefacts, made accessible and searcheable.
          </p>

          <button
            type="button"
            className="max-h-full max-w-full inline-block w-24 h-10 px-2.5 py-2.5 mt-16
                border border-white text-white 
                text-xs leading-tight rounded-full
                hover:bg-white hover:bg-opacity-10 hover:shadow-lg 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
                relative"
          >
            visit site
          </button>
        </div>
      </div>

      <div
        className="mt-12 h-fit w-11/12 overflow-hidden rounded-[30px] relative
         bg-gradient-to-br from-[#3EFB89] to-[#6A5BC5]"
      >
        <img
          className="translate-x-[95px] translate-y-[3px] rotate-[344deg]  opacity-30 absolute"
          src={ic_img}
        />
        <div className="p-6 relative">
          <h4 className="font-semibold text-2xl text-white">
            Inclusive Classrooms
          </h4>
          <p className="font-normal text-xs text-white mt-2">
            automating data collection means our TA’s can get on with what
            really matters.
          </p>

          <button
            type="button"
            className="max-h-full max-w-full inline-block w-24 h-10 px-2.5 py-2.5 mt-16
                border border-white text-white 
                text-xs leading-tight rounded-full
                hover:bg-white hover:bg-opacity-10 hover:shadow-lg 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
                relative"
          >
            visit site
          </button>
        </div>
      </div>

      <div
        className="mt-12 h-fit w-11/12 overflow-hidden rounded-[30px] relative
         bg-gradient-to-br from-[#FF9190] to-[#6A5BC5]"
      >
        <img
          className="translate-x-[95px] translate-y-[40px] rotate-[344deg]  opacity-30 absolute"
          src={emf_img}
        />
        <div className="p-6 relative">
          <h4 className="font-semibold text-2xl text-white">
            The Ellen MacArthur Foundation
          </h4>
          <p className="font-normal text-xs text-white mt-2">
            we increased community engagement with an exclusive social network.
          </p>

          <button
            type="button"
            className="max-h-full max-w-full inline-block w-24 h-10 px-2.5 py-2.5 mt-16
                border border-white text-white 
                text-xs leading-tight rounded-full
                hover:bg-white hover:bg-opacity-10 hover:shadow-lg 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
                relative"
          >
            visit site
          </button>
        </div>
      </div>

      <div
        className="mt-12 h-fit w-11/12 overflow-hidden rounded-[30px] relative
         bg-gradient-to-br from-[#FF9190] to-[#FDC094]"
      >
        <img
          className="translate-x-[-70px] translate-y-[10px] rotate-[25deg]  opacity-30 absolute"
          src={oxford_img}
        />
        <div className="p-6 relative">
          <h4 className="font-semibold text-2xl text-white">
            Oxford Abstracts
          </h4>
          <p className="font-normal text-xs text-white mt-2">
            fully restructuring of the conference abstract and paper management
            system.
          </p>

          <button
            type="button"
            className="max-h-full max-w-full inline-block w-24 h-10 px-2.5 py-2.5 mt-16
                border border-white text-white 
                text-xs leading-tight rounded-full
                hover:bg-white hover:bg-opacity-10 hover:shadow-lg 
                active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out cursor-pointer
                relative"
          >
            visit site
          </button>
        </div>
      </div>

      <h4 className='font-medium text-[15px] mt-16 text-[#313131]'>and many more...</h4>
    </>
  )
}

export default Portfolio
