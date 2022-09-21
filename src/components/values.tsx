import { FunctionComponent } from 'react'

interface ValueBoxProps extends React.PropsWithChildren {
  title: string
  titleEmoji: string
  titlePosition?: 'top' | 'bottom'
  titleOrientation?: 'left' | 'right'

  borderStyles?: string
}

const Title: FunctionComponent<
  Pick<ValueBoxProps, 'titleOrientation' | 'title' | 'titleEmoji'>
> = (
  props: Pick<ValueBoxProps, 'titleOrientation' | 'title' | 'titleEmoji'>
) => {
  const { title, titleEmoji, titleOrientation } = props

  if (titleOrientation === 'right') {
    return (
      <>
        <span className="text-4xl">🧑‍🤝‍🧑</span>
        <span className=" text-zinc-800">People</span>
      </>
    )
  } else {
    return (
      <>
        <span className="text-zinc-800">{title}</span>
        <span className="text-4xl">{titleEmoji}</span>
      </>
    )
  }
}

const ValueBox: FunctionComponent<ValueBoxProps> = (props: ValueBoxProps) => {
  const {
    title,
    titleEmoji,
    titlePosition,
    titleOrientation,
    borderStyles,
    children
  } = props

  return (
    <div
      className={`h-fit w-4/6 rounded-[2.7rem] bg-gradient-to-br p-[3px] ${borderStyles}`}
    >
      <div className="flex h-full flex-col justify-between rounded-[2.6rem] bg-white pb-6 pl-8 pr-5 pt-6 md:pb-8 md:pl-10 md:pr-7 md:pt-8">
        {titlePosition === 'bottom' ? (
          <>
            <p className="font-normal text-stone-700">{children}</p>

            <div className="mt-4 flex flex-row justify-between text-xl font-bold">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex flex-row justify-between text-xl font-bold">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>

            <p className="text-sm font-normal text-stone-700">{children}</p>
          </>
        )}
      </div>
    </div>
  )
}

const Values: FunctionComponent = () => {
  return (
    <div className="mx-auto w-fit md:w-4/5">
      <div className="mt-20 flex justify-center">
        <ValueBox
          title="People"
          titleEmoji="🧑‍🤝‍🧑"
          borderStyles="from-[#CCABD8] via-[#9AAEE3] to-[#FA897B]"
        >
          Our people are our primary focus, not profit. We have a worldwide
          community of over 400 creative technologists. We believe in
          inclusivity and accessibility and want to enrich the lives of everyone
          in our community.
        </ValueBox>
      </div>

      <div className="mt-20 flex justify-center">
        <ValueBox
          title="Transparency"
          titleEmoji="🤝"
          borderStyles="from-[#86E3CE] via-[#E39AD3] to-[#FFDD94]"
        >
          Open-Source and Open-Kimono: we’re building dwyl for all to see! The
          vast majority of dwyl projects are written open-source. This allows
          code modules to improve and adapt over time allowing for a more robust
          and up-to-date application.
        </ValueBox>
      </div>

      <div className="mt-20 flex justify-center">
        <ValueBox
          title="Green"
          titleEmoji="🌍"
          borderStyles="from-[#D05C5C] via-[#9AE3C0] to-[#BFC857]"
        >
          We recycle and are carbon neutral, but it’s not just the planet’s
          environment we want to improve. We love projects that have a positive
          effect on the world. Take a look at the kinds of project we love.
        </ValueBox>
      </div>

      <div className="mt-20 flex justify-center">
        <ValueBox
          title="Organic Growth"
          titleEmoji="🌳"
          borderStyles="from-[#D8D3AB] via-[#E39E9A] to-[#FA7B7B]"
        >
          We recycle and are carbon neutral, but it’s not just the planet’s
          environment we want to improve. We love projects that have a positive
          effect on the world. Take a look at the kinds of project we love.
        </ValueBox>
      </div>
    </div>
  )
}

export default Values
