import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CharacterSection = ({ character, index, isReversed }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    margin: '-20% 0px -20% 0px'
  })

  // 외부에서 안쪽으로 페이드인
  const fadeVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? 100 : -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: isReversed ? -50 : 50,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isReversed ? '1fr 1fr' : '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* 캐릭터 이미지 */}
        {!isReversed && (
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'exit'}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 40px rgba(94, 234, 212, 0.3))',
                }}
              />
              
              {/* Glow Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  background: 'radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* 캐릭터 정보 */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'exit'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* 번호 */}
          <motion.div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#5eead4',
              letterSpacing: '0.2em',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>

          {/* 이름 */}
          <motion.h2
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #c4b5fd, #5eead4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
            }}
          >
            {character.name}
          </motion.h2>

          {/* 역할 */}
          <motion.p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#5eead4',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}
          >
            {character.role}
          </motion.p>

          {/* 설명 */}
          <motion.p
            style={{
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: 1.8,
              color: '#a78bfa',
              maxWidth: '600px',
            }}
          >
            {character.description}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #5eead4, transparent)',
              marginTop: '1rem',
            }}
          />
        </motion.div>

        {/* 캐릭터 이미지 (역순일 때) */}
        {isReversed && (
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'exit'}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 40px rgba(196, 181, 253, 0.3))',
                }}
              />
              
              {/* Glow Effect */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  background: 'radial-gradient(circle, rgba(196, 181, 253, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

const Characters = () => {
  const ref = useRef(null)

  const characters = [
    {
      name: '덴지',
      role: '체인소 맨',
      description: '체인소의 악마 포치타와 계약한 소년. 평범한 일상을 꿈꾸지만, 데빌 헌터로서의 운명과 레제와의 만남이 그의 세계를 뒤흔든다.',
      image: '/assets/images/denji.png',
    },
    {
      name: '레제',
      role: '폭탄의 악마',
      description: '카페에서 일하는 수수께끼의 소녀. 순수한 미소 뒤에 숨겨진 진실과 덴지를 향한 복잡한 감정이 여름의 폭풍을 예고한다.',
      image: '/assets/images/reze.png',
    },
    {
      name: '마키마',
      role: '공안 대마 특이4과 리더',
      description: '덴지의 상사이자 보호자. 완벽한 미소와 절대적인 카리스마로 모든 것을 통제하는 그녀의 진정한 목적은 무엇인가.',
      image: '/assets/images/makima.png',
    },
    {
      name: '아키',
      role: '데빌 헌터',
      description: '냉정하고 진지한 선배 헌터. 복수를 위해 살아가지만, 덴지와 파워와의 동거 생활이 그의 마음을 조금씩 녹인다.',
      image: '/assets/images/aki.png',
    },
  ]

  return (
    <section
      id="characters"
      ref={ref}
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section Title */}
      <div
        style={{
          padding: '8rem 2rem 4rem',
          textAlign: 'center',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '0.02em',
            marginBottom: '2rem',
          }}
        >
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>[</span>
          CHARACTERS
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>]</span>
        </motion.h2>
      </div>

      {/* Character Sections */}
      {characters.map((character, index) => (
        <CharacterSection
          key={index}
          character={character}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}
    </section>
  )
}

export default Characters
