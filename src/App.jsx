import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Loader from './components/Loader'
import SideNav from './components/SideNav'

function App() {
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SideNav isVisible={isScrolled} />
          
          <main>
            <Hero onScroll={setIsScrolled} />
            <Characters />
            <Story />
            <Gallery />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
