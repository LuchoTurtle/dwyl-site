import { FunctionComponent } from 'react'

interface ValueBoxProps extends React.PropsWithChildren {
  title: string
  titleEmoji: string
  titlePosition?: 'top' | 'bottom'
  titleOrientation?: 'left' | 'right'
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
  const { title, titleEmoji, titlePosition, titleOrientation, children } = props

  return (
    <div className="rounded-xl w-4/6 h-fit mx-auto bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <div className="flex flex-col justify-between h-full bg-white rounded-lg pb-6 pl-8 pr-5 pt-6">
        {titlePosition === 'bottom' ? (
          <>
            <p className="font-normal text-stone-700">{children}</p>

            <div className="flex flex-row justify-between font-bold text-xl mt-4">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between font-bold text-xl mb-4">
              <Title
                title={title}
                titleEmoji={titleEmoji}
                titleOrientation={titleOrientation}
              />
            </div>

            <p className="font-normal text-stone-700 text-sm">{children}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default ValueBox
