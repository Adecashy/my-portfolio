import { motion, useScroll } from "motion/react"

const ScrollProgress = () => {
    const { scrollYprogress } = useScroll()

  return (
    <motion.div className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-[#4cc9f0]" style={{ scaleX: scrollYprogress, width: "100%" }} />
  )
}

export default ScrollProgress