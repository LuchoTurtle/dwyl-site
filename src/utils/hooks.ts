// Hooks imported from https://usehooks-ts.com/
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

/**
 * Queries media width.
 * @param query screen size string.
 * @returns media query. If '1024px' is passed, it returns true if it's on a desktop and false if it's not.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

/**
 * This hook fixes this problem by switching between useEffect and useLayoutEffect following the execution environment.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Window Event based useEventListener interface
 * @param eventName event name
 * @param handler handler
 * @param element element to assign
 * @param options option objects
 */
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void

/**
 * Element Event based useEventListener interface
 * @param eventName event name
 * @param handler handler
 * @param element element to assign
 * @param options option objects
 */
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void

/**
 * Document Event based useEventListener interface
 * @param eventName event name
 * @param handler handler
 * @param element element to assign
 * @param options option objects
 */
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void

/**
 * Event listener based on window event map.
 * @param eventName event name
 * @param handler handler
 * @param element element to assign
 * @param options option objects
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => savedHandler.current(event)

    targetElement.addEventListener(eventName, eventListener, options)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, options])
}

/**
 * Checks if element is being hovered.
 * @param elementRef reference to element to be checked.
 * @returns true if element is being hovered and false if it's not.
 */
export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

  useEventListener('mouseenter', handleMouseEnter, elementRef)
  useEventListener('mouseleave', handleMouseLeave, elementRef)

  return value
}
