export { staggerReveal, fadeUpReveal } from "./anims"

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}
