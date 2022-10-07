import { FunctionComponent } from 'react'
import Obfuscate from 'react-obfuscate'

const Footer: FunctionComponent = () => {
  return (
    <div className="pr-10 pl-10">
      <h2 className="text-[41px] font-semibold text-[#248680] md:text-[61px]">
        let's talk
      </h2>
      <h4 className="text-lg font-semibold text-stone-500 md:text-2xl">
        We'll get back to you within 24 hours
      </h4>

      <div className="mt-10 text-[26px] font-semibold text-[#D14E4E] underline md:text-[32px]">
        <Obfuscate email="hello@dwyl.com">hello@dwyl.com</Obfuscate>
      </div>

      <h4 className="text-[22px] font-semibold text-[#444444] md:text-[28px]">
        <Obfuscate href="tel:+44 (0) 7708 796446">+44 (0) 7708 796446</Obfuscate>
      </h4>

      <div className="mt-28 flex flex-row items-end justify-between pb-10">
        <span className="text-[11px] font-normal text-[#248680] opacity-40 md:text-[17px]">
          @ 2014 - 2022 dwyl, LLC
        </span>
        <div className="flex flex-row">
          <svg
            onClick={() =>
              window.open('https://github.com/dwyl/start-here', '_blank')
            }
            className="mr-3 h-6 w-6 cursor-pointer text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <svg
            onClick={() => window.open('https://twitter.com/dwyl', '_blank')}
            className="h-6 w-6 cursor-pointer text-blue-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Footer
