export { staggerReveal, fadeUpReveal, scaleUpReveal } from "./anims"
export { useMediaQuery, useHover }  from './hooks'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}
