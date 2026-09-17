import { motion, useMotionValue, useSpring } from 'motion/react'
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
import { HiArrowDown, HiArrowUpRight, HiCodeBracket } from 'react-icons/hi2'
import { SiExpress, SiMongodb } from 'react-icons/si'

const Hero = () => {

    // Mouse position 
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, {
        stiffness: 100,
        damping: 20
    })
    const springY = useSpring(mouseY, {
        stiffness: 100,
        damping: 20
    })
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        mouseX.set(clientX)
        mouseY.set(clientY)
    }
    const titleWords = ["I", "build", "digital", "experiences"]

  return (
    <section id='home' onMouseMove={handleMouseMove} className='relative flex min-h-screen items-center overflow-hidden px-6 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-0'>

        {/* Background glow */}
        <motion.div className='pointer-events-none fixed z-0 hidden h-96 w-96 rounded-full bg-[#1b4965]/20 blur-[120px] lg:block' style={{ left: springX, top: springY, translateX: "-50%", translateY: "-50%" }} />

        {/* Decorative background Circle */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#4cc9f0]/10" />

        <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="pointer-events-none absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-white/5" />

        {/* Small floating dots */}
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut'}} className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-[#4cc9f0]" />

        <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute left-[45%] top-[15%] h-1.5 w-1.5 rounded-full bg-white" />

        <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-[20%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#4cc9f0]" />

        {/* Main Content */}
        <div className='relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>

            {/* LEFT SIDE */}
            <div>

                {/* introduction */}
                <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3" >
                    <span className="h-px w-10 bg-[#4cc9f0]" />
                    <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">Full Stack Web Developer</span>
                </motion.div>

                {/* Main heading */}
                <div className='overflow-hidden'>
                    <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl" >
                        Hi, I'm{" "}
                        <span className="text-[#4cc9f0]">Ade</span>
                    </motion.h1>
                </div>

                {/* Animated Title */}
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 overflow-hidden text-3xl font-semibold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">
                    {titleWords.map((word, index) => (
                        <motion.span key={word} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 + index * 0.1, ease: [0.22, 1, 0.36, 1] }} >{word}</motion.span>
                    ))}
                </div>

                {/* Description */}
                <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg" >
                    I design and develop modern, responsive and scalable web applications using the MERN stack, turning ideas into products people can actually use.
                </motion.p>

                {/* Buttons */}
                <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }}  className="mt-9 flex flex-wrap gap-4">
                    <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="group flex items-center gap-3 rounded-full bg-[#4cc9f0] px-7 py-3.5 font-semibold text-[#071a2b] transition hover:bg-white">
                        View My Work
                        <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </motion.a>
                    <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-3 rounded-full border border-white/10 px-7 py-3.5 font-semibold text-white transition hover:border-[#4cc9f0] hover:text-[#4cc9f0]">Let's Talk</motion.a>
                </motion.div>

                {/* Socials */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.2 }} className="mt-10 flex items-center gap-4">
                    <span className='text-xs uppercase tracking-widest text-gray-600'>Find me on</span>
                    <a href="https://github.com/Adecashy" target="_blank" rel="noopener noreferrer" aria-label='GitHub' className="text-gray-500 transition hover:-translate-y-1 hover:text-[#4cc9f0]"><FaGithub className='text-xl' /></a>
                    <a href="https://ng.linkedin.com/in/damilare-adeleke-5363133a6" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn' className="text-gray-500 transition hover:-translate-y-1 hover:text-[#4cc9f0]"><FaLinkedin className='text-xl' /></a>
                </motion.div>
            </div>
            
            {/* RIGHT SIDE */}
            <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1]}} className='relative mx-auto hidden w-full max-w-lg lg:block'>

                {/* Outer glow */}
                <div className="absolute inset-10 rounded-full bg-[#4cc9f0]/10 blur-3xl" />

                {/* Code card */}
                <motion.div animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.03, rotate: 1 }} className="relative rounded-3xl border border-white/10 bg-[#0a2238]/90 p-6 shadow-2xl backdrop-blur-xl">

                    {/* Browser Dots */}
                    <div className='mb-6 flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <span className="h-3 w-3 rounded-full bg-red-400/70" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                            <span className="h-3 w-3 rounded-full bg-green-400/70" />
                        </div>
                        <HiCodeBracket className="text-gray-600" />
                    </div>

                    {/* Code */}
                    <div className="rounded-2xl bg-[#071a2b] p-6 font-mono text-sm leading-7">
                        <p className='text-gray-500'> // About me</p>
                        <p>
                            <span className="text-purple-400">const </span>{" "} <span className="text-[#4cc9f0]">developer</span>{" "} = {"{"}
                        </p>
                        <p className='pl-5'>
                            <span className='text-gray-400'>name: </span>{" "} <span className='text-green-400'>"Ade"</span> ,
                        </p>
                        <p className='pl-5'>
                            <span className='text-gray-400'>role: </span>{" "} <span className="text-green-400">"Full Stack Developer"</span> ,
                        </p>
                        <p className='pl-5'>
                            <span className='text-gray-400'>stack: </span>{" "} <span className='text-green-400'>"MERN"</span>,
                        </p>
                        <p className='pl-5'>
                            <span className='text-gray-400'>passion:</span>{" "} <span className='text-green-400'>"Building"</span>
                        </p>
                        <p>{"};"}</p>
                    </div>

                    {/* Tech Icons */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="text-3xl text-cyan-400">
                            <FaReact />
                        </motion.div>
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.3, ease: "easeInOut" }} className="text-3xl text-green-500">
                            <FaNodeJs />
                        </motion.div>
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6, ease: "easeInOut" }} className="text-3xl text-green-400">
                            <SiMongodb />
                        </motion.div>
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.9, ease: "easeInOut" }} className="text-3xl text-green-300">
                            <SiExpress />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Floating availability badge */}
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}} className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a2238]/90 px-5 py-3 shadow-xl backdrop-blur-xl">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
                    <div>
                        <p className='text-xs text-gray-500'>Status</p>
                        <p className="text-sm font-medium text-white">Available for Work</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a href='#about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay:1.5, duration: 0.7 }} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-gray-500 transition hover:text-[#4cc9f0] sm:flex" >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <HiArrowDown />
            </motion.div>
        </motion.a>
    </section>
  )
}

export default Hero