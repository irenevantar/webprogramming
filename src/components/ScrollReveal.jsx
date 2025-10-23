import { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  className = '',
}) => {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word
      return (
        <span className="word" key={index} style={{ display: 'inline-block' }}>
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )

    const wordElements = el.querySelectorAll('.word')

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=20%',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [enableBlur, baseRotation, baseOpacity, blurStrength])

  return (
    <div ref={containerRef} className={className}>
      {splitText}
    </div>
  )
}

export default ScrollReveal
