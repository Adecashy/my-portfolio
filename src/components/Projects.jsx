import { motion } from "motion/react"
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { HiArrowUpRight, HiSparkles } from "react-icons/hi2"
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si"
import innspaceImg from "../assets/projects/innspace.png"
import myportfolioImg from "../assets/projects/myportfolio.jpg"
import fonecribImg from "../assets/projects/fonecrib.png"

const projects = [
    {
        title: "InnSpace",
        category: "Hotel Booking Platform",
        description: "A full-stack hotel booking platform where users can explore hotels, select rooms, make bookings, complete payments, and leave feedback.",
        image: innspaceImg,
        technologies: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "TailwindCSS", icon: SiTailwindcss }
        ],
        number: "01",
        featured: true,
        liveUrl: "https://innspace.vercel.app/"
    },
    {
        title: "FitGenie",
        category: "AI Fitness Platform",
        description: "An AI-powered fitness platform designed to generate personalized workout and nutrition plans.",
        image: null,
        technologies: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "TailwindCSS", icon: SiTailwindcss }
        ],
        number: "02",
        featured: true,
        liveUrl: "#"
    },
    {
        title: "Fonecrib",
        category: "E-commerce phone store",
        description: "A platform designed to shop for phone, gadgets and other accessories",
        image: fonecribImg,
        technologies: [
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "Javascript", icon: FaJs },
            { name: "Firebase", icon: SiFirebase }
        ],
        number: "03",
        featured: true,
        liveUrl: "https://fonecrib.vercel.app"
    },
    {
        title: "My Portfolio",
        category: "Personal Portfolio",
        description: "A modern interactive portfolio showcasing my development work, technical skills, and creative approach to building digital experiences.",
        image: myportfolioImg,
        technologies: [
            { name: "React", icon: FaReact },
            { name: "TailwindCSS", icon: SiTailwindcss }
        ],
        number: "04",
        featured: true,
        liveUrl: "https://deadeleke.vercel.app"
    },
]

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-[#071a2b] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4cc9f0]/5 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#4cc9f0]" />
                        <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">My Work</span>
                    </div>
                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Things I've{" "}
                        <span className="text-[#4cc9f0]">built.</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">A collection of projects where I turn ideas into functional, scalable and visually engaging digital products</p>
                </motion.div>

                {/* Projects */}
                <div className="mt-16 space-y-10">
                    {projects.map((project, index) => {
                        return (
                            <motion.article key={project.title} initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay: index * 0.1 }} className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a2238] ${project.featured ? "min-h-[560px]" : "min-h-[440px]" }`}>

                                {/* Decorative glow */}
                                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#4cc9f0]/10 blur-3xl transition duration-700 group-hover:bg-[#4cc9f0]/20" />
                                <div className="grid h-full lg:grid-cols-2">

                                    {/* Project Visuals */}
                                    <div className={`relative flex min-h-[300px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#081d31] p-5 sm:p-8 lg:min-h-full ${index % 2 !== 0 ? "lg:order-2 lg:border-b-0 lg:border-l" : "lg:border-r"}`}>

                                        {/* Decorative grid */}
                                        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(76,201,240,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px"}} />

                                        {/* Browser Window */}
                                        <motion.div whileHover={{ rotateY: -2, scale: 1.03 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="group/image relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#071a2b] shadow-2xl" style={{ perspective: 1200 }}>
                                            {project.image ? (
                                                <div className="relative overflow-hidden">
                                                    <motion.img src={project.image} alt={`${project.title} project preview`} whileHover={{ scale: 1.06 }} transition={{ duration: 0.6, ease: "easeOut" }} className="h-auto w-full object-cover" />

                                                    {/* dark overlay */}
                                                    <div className="pointer-events-none absolute inset-0 bg-[#071a2b]/0 transition duration-500 group-hover/image:bg-[#071a2b]/20" />
                                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover/image:opacity-100">
                                                        <span className="flex items-center gap-2 rounded-full bg-[#071a2b]/90 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md">
                                                            <HiArrowUpRight />
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#1b4965] via-[#0a2238] to-[#071a2b]">
                                                    <div className="text-center">
                                                        <HiSparkles className="mx-auto text-4xl text-[#4cc9f0]" />
                                                        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gray-500">Project Preview</p>
                                                        <p className="mt-2 text-xl font-semibold text-white">Coming Soon</p>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* Project number */}
                                        <span className="absolute bottom-2 left-5 text-7xl font-bold text-white/[0.04] sm:text-9xl">{project.number}</span>
                                    </div>

                                    {/* Project Information */}
                                    <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>

                                        {/* Category */}
                                        <div className="mb-5 flex items-center gap-3">
                                            <HiSparkles className="text-[#4cc9f0]" />
                                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#4cc9f0]">{project.category}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{project.title}</h3>
                                        <p className="mt-5 max-w-xl leading-7 text-gray-400">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            {project.technologies.map((tech) => {
                                                const Icon = tech.icon
                                                return (
                                                    <motion.div key={tech.name} whileHover={{ y: -3 }} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition hover:border-[#4cc9f0]/30">
                                                        <Icon className="text-base text-[#4cc9f0]" />
                                                        {tech.name}
                                                    </motion.div>
                                                )
                                            })}
                                        </div>

                                        {/* Buttons */}
                                        <div className="mt-10 flex flex-wrap gap-4">
                                            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/button inline-flex items-center gap-3 rounded-full bg-[#4cc9f0] px-6 py-3 font-semibold text-[#071a2b] transition hover:bg-white">
                                                Live Demo
                                                <HiArrowUpRight className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:flex-row sm:text-left">
                    <div>
                        <p className="text-xl font-semibold text-white sm:text-2xl">Have an idea you'd like to bring to life?</p>
                        <p className="mt-2 text-gray-400">Let's build something great together.</p>
                    </div>
                    <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#4cc9f0] px-6 py-3 font-semibold text-[#4cc9f0] transition hover:bg-[#4cc9f0] hover:text-[#071a2b]">
                        Let's talk
                        <HiArrowUpRight />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Projects