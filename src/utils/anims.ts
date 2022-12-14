// GSAP stagger reveal template. Used on text.
export const staggerReveal = {
  duration: 1,
  y: 200,
  ease: 'power4.out',
  skewY: 50,
  stagger: {
    amount: 1
  }
}

// Fade up reveal template. Used on value box.
export const fadeUpReveal = {
  duration: 1,
  opacity: 0,
  y: 20,
  ease: 'power4.out'
}

// Scale up reveal. Used when hovering value boxes.
export const scaleUpReveal = {
  duration: 1,
  opacity: 0,
  scale: 1.1,
  y: 20,
  ease: 'power3.out'
}
