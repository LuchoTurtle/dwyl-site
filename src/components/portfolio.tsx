import { FunctionComponent } from 'react'
import smg_img from 'public/smg.png'
import ic_img from 'public/ic.png'
import emf_img from 'public/emf.png'
import oxford_img from 'public/oxford.webp'

const Portfolio: FunctionComponent = () => {
  return (
    <>
      <h2 className="mb-20 text-center text-[40px] font-semibold text-[#248680] md:text-[50px] lg:text-6xl 2xl:text-8xl">
        our porfolio
      </h2>

      <div className="flex w-full flex-col items-center">
        <div className="lg:flex">
          <div
            className="relative h-auto w-full overflow-hidden
          rounded-[30px] bg-gradient-to-br
          from-[#3EFB89] via-[#cc5e5e] to-[#FD6D6D] sm:w-[350px] lg:m-5 xl:w-[450px]"
          >
            <img
              className="absolute translate-x-[-55px] rotate-[20deg] opacity-30 blur-[2px]"
              src={smg_img}
            />

            <div className="relative flex h-full flex-col p-6">
              <h4 className="text-2xl font-semibold text-white xl:text-3xl 2xl:text-4xl">
                The Science Museum Group
              </h4>
              <p className="mt-2 text-xs font-normal text-white xl:text-sm 2xl:text-base">
                more than 250k artefacts, made accessible and searcheable.
              </p>

              <div className="mt-16 flex h-full flex-col justify-end">
                <button
                  type="button"
                  className="relative inline-block h-10 max-h-full w-24 max-w-full cursor-pointer
                  rounded-full border border-white 
                  px-2.5 py-2.5 text-xs
                  leading-tight text-white transition 
                  duration-150 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg active:bg-white active:bg-opacity-50
                  active:shadow-lg"
                >
                  visit site
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative mt-12 h-auto w-full overflow-hidden rounded-[30px] bg-gradient-to-br
          from-[#3EFB89] to-[#6A5BC5] sm:w-[350px] lg:m-5 xl:w-[450px]"
          >
            <img
              className="absolute translate-x-[95px] translate-y-[3px]  rotate-[344deg] opacity-30"
              src={ic_img}
            />
            <div className="relative flex h-full flex-col p-6">
              <h4 className="text-2xl font-semibold text-white xl:text-3xl 2xl:text-4xl">
                Inclusive Classrooms
              </h4>
              <p className="mt-2 text-xs font-normal text-white xl:text-sm 2xl:text-base">
                automating data collection means our TA’s can get on with what
                really matters.
              </p>

              <div className="mt-16 flex h-full flex-col justify-end">
                <button
                  type="button"
                  className="relative inline-block h-10 max-h-full w-24 max-w-full cursor-pointer
                  rounded-full border border-white 
                  px-2.5 py-2.5 text-xs
                  leading-tight text-white transition 
                  duration-150 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg active:bg-white active:bg-opacity-50
                  active:shadow-lg"
                >
                  visit site
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex">
          <div
            className="relative mt-12 h-auto w-full overflow-hidden rounded-[30px] bg-gradient-to-br
          from-[#FF9190] to-[#6A5BC5] sm:w-[350px] lg:m-5 xl:w-[450px]"
          >
            <img
              className="absolute translate-x-[95px] translate-y-[40px]  rotate-[344deg] opacity-30"
              src={emf_img}
            />
            <div className="relative flex h-full flex-col p-6">
              <h4 className="text-2xl font-semibold text-white xl:text-3xl 2xl:text-4xl">
                The Ellen MacArthur Foundation
              </h4>
              <p className="mt-2 text-xs font-normal text-white xl:text-sm 2xl:text-base">
                we increased community engagement with an exclusive social
                network.
              </p>

              <div className="mt-16 flex h-full flex-col justify-end">
                <button
                  type="button"
                  className="relative inline-block h-10 max-h-full w-24 max-w-full cursor-pointer
                  rounded-full border border-white 
                  px-2.5 py-2.5 text-xs
                  leading-tight text-white transition 
                  duration-150 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg active:bg-white active:bg-opacity-50
                  active:shadow-lg"
                >
                  visit site
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative mt-12 h-auto w-full overflow-hidden rounded-[30px] bg-gradient-to-br
          from-[#FF9190] to-[#FDC094] sm:w-[350px] lg:m-5 xl:w-[450px]"
          >
            <img
              className="absolute translate-x-[-70px] translate-y-[10px]  rotate-[25deg] opacity-30"
              src={oxford_img}
            />
            <div className="relative flex h-full flex-col p-6">
              <h4 className="text-2xl font-semibold text-white xl:text-3xl 2xl:text-4xl">
                Oxford Abstracts
              </h4>
              <p className="mt-2 text-xs font-normal text-white xl:text-sm 2xl:text-base">
                fully restructuring of the conference abstract and paper
                management system.
              </p>

              <div className="mt-16 flex h-full flex-col justify-end">
                <button
                  type="button"
                  className="relative inline-block h-10 max-h-full w-24 max-w-full cursor-pointer
                  rounded-full border border-white 
                  px-2.5 py-2.5 text-xs
                  leading-tight text-white transition 
                  duration-150 ease-in-out hover:bg-white hover:bg-opacity-10 hover:shadow-lg active:bg-white active:bg-opacity-50
                  active:shadow-lg"
                >
                  visit site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-16 text-[15px] font-medium text-[#313131] md:text-[20px]">
        and many more...
      </h4>
    </>
  )
}

export default Portfolio
