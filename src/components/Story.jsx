import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const StoryPanel = ({ panel, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ x: 8 }}
      style={{
        background: '#141414',
        border: '1px solid rgba(196, 181, 253, 0.1)',
        borderLeft: '4px solid #5eead4',
        borderRadius: '12px',
        padding: '2.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#5eead4',
            letterSpacing: '0.1em',
          }}
        >
          {panel.label}
        </span>
        <span style={{ color: '#6b7280' }}>//</span>
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#c4b5fd',
          }}
        >
          {panel.title}
        </span>
      </div>
      <p
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.8,
          color: '#a78bfa',
        }}
      >
        {panel.text}
      </p>
    </motion.div>
  )
}

const Story = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const panels = [
    {
      label: 'CHAPTER_01',
      title: '여름의 시작',
      text: '데블 헌터로 살아가는 소년 덴지. 평범한 일상을 꿈꾸던 그에게 어느 여름날 카페에서 일하는 소녀 레제가 나타난다. 비를 피하며 시작된 만남은 소박하지만 빛나는 순간들로 채워진다.',
    },
    {
      label: 'CHAPTER_02',
      title: '숨겨진 진실',
      text: '하지만 레제의 미소 뒤에는 비밀이 있다. 폭탄의 악마로서의 정체, 그리고 덴지를 노리는 진짜 이유. 순수했던 만남은 점차 폭력과 배신의 소용돌이 속으로 빨려든다.',
    },
    {
      label: 'CHAPTER_03',
      title: '폭발의 잔상',
      text: '진실이 드러나는 순간, 거리는 폭발로 뒤덮인다. 서로를 향한 감정과 각자의 사명 사이에서 덴지와 레제는 결국 싸워야 하는 운명에 놓인다. 폭발 속에서 남는 것은 무엇인가.',
    },
    {
      label: 'EPILOGUE',
      title: '있는 그대로의 마음',
      text: '레제편은 체인소 맨의 거친 세계 속에서 \'있는 그대로의 마음\'이 무엇인지 묻는다. 사라져가는 여름, 그리고 영원히 남을 기억의 조각들.',
    },
  ]

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
          STORY
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>]</span>
        </motion.h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            marginTop: '2rem',
          }}
        >
          {panels.map((panel, index) => (
            <StoryPanel key={index} panel={panel} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#6b7280',
          }}
        >
          <p>정보 참고: 나무위키 '극장판 체인소 맨: 레제편' (요약/재서술, 비상업적 참고)</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Story
