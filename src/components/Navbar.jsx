import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { HiOutlineBars3, HiOutlineBriefcase, HiOutlineCodeBracket, HiOutlineEnvelope, HiOutlineHome, HiOutlineUser, HiOutlineXMark } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'


const navLinks = [
    {
        name: "Home",
        icon: HiOutlineHome,
        path: "/"
    },
    {
        name: "About",
        icon: HiOutlineUser,
        path: "/about"
    },
    {
        name: "Skills",
        icon: HiOutlineCodeBracket,
        path: "/skills"
    },
    {
        name: "Projects",
        icon: HiOutlineBriefcase,
        path: "/projects"
    },
    {
        name: "Contact",
        icon: HiOutlineEnvelope,
        path: "/contact"
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const navigate = useNavigate()

    const handleNavigation = (path) => {
        const sectionId = path === "/" ? "home" : path.slice(1)
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            })
        }
        navigate(path, { replace: true })
        setActiveSection(sectionId)
        setIsOpen(false)
    }

    useEffect(() => {
        const sections = navLinks.map((link) => {
            const sectionId = link.path === "/" ? "home" : link.path.slice(1)
            return document.getElementById(sectionId)
        }).filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (!visibleSection) return;
                const sectionId = visibleSection.target.id
                setActiveSection(sectionId)
                    
                const newPath = sectionId === "home" ? "/" : `/${sectionId}`
                if (window.location.pathname !== newPath) {
                    window.history.replaceState(
                        null,
                        "",
                        newPath
                    )
                }
            }, { rootMargin: "-25% 0px -60% 0px" } 
        )
        sections.forEach((section) => (observer.observe(section)))
        return () => observer.disconnect()
    }, [])
  return (
    <div>
        {/* Mobile Header */}
        <header className='fixed top-0 left-0 z-50 flex h-[73px] w-full items-center justify-between border-b border-white/10 bg-[#071a2b]/90 px-6  backdrop-blur-xl lg:hidden'>
            <motion.button type="button" onClick={() => handleNavigation("/")} whileTap={{ scale: 0.95 }} className='text-xl font-bold tracking-tight text-white cursor-pointer'>ADE <span className='text-[#4cc9f0]'>.</span></motion.button>
            <motion.button type='button' onClick={() => setIsOpen((prev) => !prev)} whileTap={{ scale: 0.9 }} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-2xl text-white transition hover:border-[#4cc9f0]/40 hover:text-[#4cc9f0]" aria-label='Toggle Navigation' aria-expanded={isOpen}>
                <AnimatePresence mode='wait' initial={false} >
                    <motion.span key={isOpen ? "close" : "menu"} initial={{ opacity: 0, rotate: -90, scale: 0.7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.7 }} transition={{ duration: 0.2 }}>
                        {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 /> }
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </header>

        {/* Desktop Sidebar */}
        <aside className='fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col justify-between border-r border-white/10 bg-[#071a2b] p-8 lg:flex'>
            <div>
                <motion.a onClick={() => handleNavigation("/")} whileHover={{ x: 3 }} className='inline-block text-3xl font-bold tracking-tight text-white cursor-pointer'>ADE <span className='text-[#4cc9f0]'>.</span></motion.a>
                <p className='mt-2 text-sm text-gray-400'>Full Stack Web Developer</p>
            </div>
            <nav className='flex flex-col gap-3'>
                {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const sectionId = link.path === "/" ? "home" : link.path.slice(1)
                    const isActive = activeSection === sectionId
                    return (
                        <motion.a key={link.name} href={link.path} onClick={(e) => { e.preventDefault(); handleNavigation(link.path)}} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08, duration: 0.4 }} whileHover={{ x: 8 }} className={`group relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3 transition ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`} >

                            {/* Active Background */}
                            {isActive && (
                                <motion.div layoutId="activeNav" className="absolute inset-0 rounded-xl bg-[#1b4965]" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                            )}

                            {/* left accent  */}
                            {isActive && (
                                <motion.span layoutId='activeIndicator' className="absolute left-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-full bg-[#4cc9f0]" />
                            )}

                            {/* content */}
                            <span className="relative z-10 flex items-center gap-4">
                                <Icon className={`text-xl transition ${isActive ? "text-[#4cc9f0]" : "text-gray-500 group-hover:text-[#4cc9f0]"}`} />
                                <span>{link.name}</span>
                            </span>
                        </motion.a>
                    )
                })}
            </nav>
            <div className='border-t border-white/10 pt-6'>
                <p className='text-sm text-gray-600'> © {new Date().getFullYear()} Ade</p>
                <p className='mt-1 text-xs text-gray-600'>Built with React</p>
            </div>
        </aside>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 top-[73px] z-30 bg-black/40 backdrop-blur-sm lg:hidden" />
                    <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0}} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }} className='fixed left-0 top-[73px] z-40 max-h-[calc(100vh-73px)] w-full overflow-y-auto border-b border-white/10 bg-[#071a2b] px-6 py-8 shadow-2xl lg:hidden' >
                        <nav className='flex flex-col gap-3'>
                            {navLinks.map((link, index) => {
                                const Icon = link.icon;
                                const sectionId = link.path === "/" ? "home" : link.path.slice(1)
                                const isActive = activeSection === sectionId
                                return (
                                    <motion.a key={link.name} href={link.path} onClick={(e) => { e.preventDefault(); handleNavigation(link.path)}} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06, duration: 0.3 }} whileTap={{ scale: 0.98 }} className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-lg transition ${isActive ? "border-[#4cc9f0]/20 bg-[#1b4965] text-white" : "border-white/5 text-gray-300 hover:bg-white/5 hover:text-white"}`}>
                                        <Icon className={`text-2xl ${isActive ? "text-[#4cc9f0]" : "text-gray-500"}`}/>
                                        {link.name}
                                        {/* {isActive && (
                                            <motion.span layoutId="mobileActiveDot" className="ml-auto h-2 w-2 rounded-full bg-[#4cc9f0]" />
                                        )} */}
                                    </motion.a>
                                )
                            })}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar