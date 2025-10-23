import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Story = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="story"
      style={{
        padding: '8rem 0',
        background: '#0a0a0a',
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
          SYNOPSIS
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>]</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: '#141414',
            border: '1px solid rgba(196, 181, 253, 0.1)',
            borderRadius: '16px',
            padding: '4rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 2,
              color: '#c4b5fd',
              textAlign: 'justify',
              letterSpacing: '0.02em',
              wordBreak: 'keep-all',
            }}
          >
            인기 애니메이션 '체인소 맨' 첫 공식 극장판 국내 상륙! 압도적 배틀 액션이 스크린에서 폭발한다! 데블 헌터로 일하는 소년 '덴지'는 조직의 배신으로 죽음을 맞이하지만, 체인소의 악마 '포치타'의 심장을 이식받아 '체인소 맨'으로 부활한다. 공안 데빌 헌터 특이 4과에 소속되어 비범한 악마 사냥 실력을 뽐내던 덴지는 동경하던 상사 '마키마'와의 데이트로 들떠 있던 중, 갑자기 나타난 소녀 '레제'의 부탁으로 그녀와 함께 시간을 보내게 된다. 평범한 소녀로 보이는 레제는 사실 '폭탄의 악마'이자, 국제 암살자 조직이 보낸 최강의 자객! 덴지의 심장 '체인소 맨'을 노리고 있었던 것. 서로의 진실을 모른 채 꿈같은 시간을 보내던 두 사람. 하지만 덴지와 레제, 서로를 향한 감정이 싹트는 찰나, 엄청난 전투가 시작되는데…
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Story
