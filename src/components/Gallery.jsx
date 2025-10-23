import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const GalleryItem = ({ index, image }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#0a0a0a',
        border: '1px solid rgba(196, 181, 253, 0.1)',
        cursor: 'pointer',
      }}
    >
      {image ? (
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            background: '#000000',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#6b7280',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="2" />
            <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M10 60 L30 40 L50 55 L70 35 L70 70 L10 70 Z" fill="currentColor" opacity="0.3" />
          </svg>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: '1rem',
            }}
          >
            이미지를 추가하세요
          </p>
        </div>
      )}
    </motion.div>
  )
}

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    '/assets/images/reze-poster.jpg',
    null,
    null,
  ]

  return (
    <section
      id="gallery"
      style={{
        padding: '8rem 0',
        background: '#000000',
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
          GALLERY
          <span style={{ color: '#5eead4', margin: '0 0.5rem' }}>]</span>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          {images.map((image, index) => (
            <GalleryItem key={index} index={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
