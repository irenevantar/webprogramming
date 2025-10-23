import { motion } from 'framer-motion'

const SideNav = ({ isVisible }) => {
  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'characters', label: 'CHARACTERS' },
    { id: 'story', label: 'STORY' },
    { id: 'gallery', label: 'GALLERY' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: isVisible ? 0 : -50,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ x: 10, scale: 1.1 }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#c4b5fd',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            textAlign: 'left',
            padding: '0.5rem 1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '3px',
              height: '0%',
              background: 'linear-gradient(180deg, #5eead4, #c4b5fd)',
              transition: 'height 0.3s ease',
            }}
            whileHover={{ height: '100%' }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
        </motion.button>
      ))}

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          width: '2px',
          height: '100px',
          background: 'linear-gradient(180deg, transparent, #5eead4, transparent)',
          margin: '1rem auto',
        }}
      />
    </motion.nav>
  )
}

export default SideNav
