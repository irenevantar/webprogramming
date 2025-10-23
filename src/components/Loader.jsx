import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 10) + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Chainsaw Animation */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          style={{ margin: '0 auto 2rem' }}
        >
          {/* Chainsaw Body */}
          <motion.rect
            x="20"
            y="50"
            width="80"
            height="20"
            rx="4"
            fill="#5eead4"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          
          {/* Chainsaw Handle */}
          <motion.rect
            x="15"
            y="40"
            width="15"
            height="40"
            rx="3"
            fill="#c4b5fd"
          />
          
          {/* Chainsaw Teeth */}
          {[...Array(8)].map((_, i) => (
            <motion.rect
              key={i}
              x={25 + i * 10}
              y="48"
              width="6"
              height="6"
              fill="#ffffff"
              initial={{ y: 48 }}
              animate={{ y: [48, 52, 48] }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Spark Effect */}
          <motion.circle
            cx="100"
            cy="60"
            r="4"
            fill="#5eead4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </motion.svg>
        
        <motion.div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '#5eead4',
            letterSpacing: '0.1em',
            marginTop: '1rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CHAINSAW LOADING...
        </motion.div>
        
        {/* Progress Bar */}
        <div
          style={{
            width: '200px',
            height: '4px',
            background: 'rgba(94, 234, 212, 0.2)',
            borderRadius: '2px',
            margin: '1rem auto 0.5rem',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #5eead4, #c4b5fd)',
              borderRadius: '2px',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <motion.div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 400,
            fontSize: '0.875rem',
            color: '#a78bfa',
            letterSpacing: '0.1em',
          }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
