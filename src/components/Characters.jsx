import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CharacterCard = ({ character, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        position: 'relative',
        background: '#0a0a0a',
        border: '1px solid rgba(196, 181, 253, 0.1)',
        borderRadius: '16px',
        padding: '2.5rem',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          fontFamily: "'Space Mono', monospace",
          fontSize: '2rem',
          fontWeight: 900,
          color: '#5eead4',
          opacity: 0.15,
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{
          width: '60px',
          height: '60px',
          marginBottom: '1.5rem',
          color: '#5eead4',
        }}
      >
        {character.icon}
      </motion.div>

      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          letterSpacing: '0.02em',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {character.name}
      </h3>

      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.875rem',
          fontWeight: 700,
          color: '#5eead4',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
          opacity: 0.8,
        }}
      >
        {character.role}
      </p>

      <p
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.7,
          color: '#a78bfa',
        }}
      >
        {character.description}
      </p>

      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #5eead4, #c4b5fd)',
        }}
      />
    </motion.div>
  )
}

const Characters = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const characters = [
    {
      name: '덴지 / DENJI',
      role: '체인소 맨',
      description: '체인소의 악마 포치타와 계약한 소년. 평범한 일상을 꿈꾸지만, 데빌 헌터로서의 운명과 레제와의 만남이 그의 세계를 뒤흔든다.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
          <path d="M30 10 L30 50 M15 30 L45 30" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: '레제 / REZE',
      role: '폭탄의 악마',
      description: '카페에서 일하는 수수께끼의 소녀. 순수한 미소 뒤에 숨겨진 진실과 덴지를 향한 복잡한 감정이 여름의 폭풍을 예고한다.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
          <path d="M20 25 L30 35 L40 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: '마키마 / MAKIMA',
      role: '공안 대마 특이4과 리더',
      description: '덴지의 상사이자 보호자. 완벽한 미소와 절대적인 카리스마로 모든 것을 통제하는 그녀의 진정한 목적은 무엇인가.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: '아키 / AKI',
      role: '데빌 헌터',
      description: '냉정하고 진지한 선배 헌터. 복수를 위해 살아가지만, 덴지와 파워와의 동거 생활이 그의 마음을 조금씩 녹인다.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
          <path d="M30 15 L30 45 M20 25 L30 15 L40 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="characters"
      style={{
        padding: '8rem 0',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            marginBottom: '4rem',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>[</span>
          CHARACTERS
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>]</span>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginTop: '2rem',
          }}
        >
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Characters
