import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  
  const texts = [
    '誰も知らない、少女の心',
    '폭발 같은 여름, 소년과 소녀의 이야기',
    'A summer explosion, a story of boy and girl',
    '体も心も、全部嘘だった'
  ]

  useEffect(() => {
    let charIndex = 0
    let isDeleting = false
    let timeout

    const type = () => {
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1))
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          setTextIndex((prev) => (prev + 1) % texts.length)
          timeout = setTimeout(type, 500)
        } else {
          timeout = setTimeout(type, 50)
        }
      } else {
        setText(currentText.substring(0, charIndex + 1))
        charIndex++
        if (charIndex === currentText.length) {
          isDeleting = true
          timeout = setTimeout(type, 2000)
        } else {
          timeout = setTimeout(type, 100)
        }
      }
    }

    timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [textIndex, texts])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="/assets/images/reze-poster.jpg"
          alt="체인소맨 레제편 극장판 포스터"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              textShadow: '0 0 20px rgba(94, 234, 212, 0.5), 0 0 40px rgba(196, 181, 253, 0.3), 0 4px 8px rgba(0, 0, 0, 0.8)',
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: 'block' }}
            >
              CHAINSAW MAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                display: 'block',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                background: 'linear-gradient(135deg, #c4b5fd, #5eead4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              REZE ARC
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              fontWeight: 400,
              color: '#a78bfa',
              letterSpacing: '0.05em',
              minHeight: '2rem',
              marginTop: '2rem',
            }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              style={{ color: '#5eead4', fontWeight: 900 }}
            >
              _
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
          }}
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: '#a78bfa',
            }}
          >
            SCROLL
          </motion.span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            style={{ color: '#5eead4' }}
          >
            <path
              d="M12 4L12 20M12 20L6 14M12 20L18 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
