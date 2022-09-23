export { staggerReveal, fadeUpReveal } from "./anims"
export { useMediaQuery}  from './hooks'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}
