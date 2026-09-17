import { motion } from "motion/react"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si"
import { TbApi } from "react-icons/tb"

const skills = [
    {
        name: "React",
        category: "Frontend",
        icon: FaReact
    },
    {
        name: "Javascript",
        category: "Language",
        icon: FaJs
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: FaNodeJs
    },
    {
        name: "Express",
        category: "Backend",
        icon: SiExpress
    },
    {
        name: "MongoDB",
        category: "Database",
        icon: SiMongodb
    },
    {
        name: "tailwind CSS",
        category: "Styling",
        icon: SiTailwindcss
    },
    {
        name: "HTML",
        category: "Frontend",
        icon: FaHtml5
    },
    {
        name: "CSS",
        category: "Styling",
        icon: FaCss3Alt
    },
    {
        name: "Git",
        category: "Version Control",
        icon: FaGitAlt
    },
    {
        name: "Github",
        category: "Development",
        icon: FaGithub
    },
    {
        name: "Postman",
        category: "API testing",
        icon: SiPostman
    },
    {
        name: "REST API",
        category: "Backend",
        icon: TbApi
    }
]

const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden bg-[#081d31] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#4cc9f0]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

            {/* Heading */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#4cc9f0]" />
                    <span className="text-sm uppercase tracking-[0.3em] text-[#4cc9f0]">My Skills</span>
                </div>
                <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Technologies I use to{" "}
                    <span className="text-[#4cc9f0]">bring ideas to life</span>
                </h2>
                <p className="mt-6 max-w-xl leading-8 text-gray-400">A practical toolkit for building modern interfaces, scalable APIs and complete full-stack applications.</p>
            </motion.div>

            {/* Featured MERN stack */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mt-14 overflow-hidden rounded-3xl border border-[#4cc9f0]/20 bg-[#071a2b] p-6 sm:p-10">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#4cc9f0]/10 blur-3xl" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                    <div>
                        <span className="text-xs text-[#4cc9f0] uppercase tracking-[0.3em]">Primary Technology Stack</span>
                        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">MERN Stack</h3>
                        <p className="mt-4 max-w-md leading-7 text-gray-500">My preferred stack for building modern, dynamic and scalable full-stack web applications</p>
                    </div>

                    {/* MERN Icons */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {[
                            {
                                name: "MongoDB",
                                icon: SiMongodb
                            },
                            {
                                name: "Express",
                                icon: SiExpress
                            },
                            {
                                name: "React",
                                icon: FaReact
                            },
                            {
                                name: "Node.js",
                                icon: FaNodeJs
                            },
                        ].map((tech, index) => {
                            const Icon = tech.icon
                            return (
                                <motion.div key={tech.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.5 }} whileHover={{ y: -8, scale: 1.03 }} className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#4cc9f0]/30 hover:bg-[#4cc9f0]/5">
                                    <Icon className="text-4xl text-[#4cc9f0] transition-transform duration-300 group-hover:scale-110" />
                                    <span className="mt-4 text-sm font-medium text-gray-300">{tech.name}</span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                        <motion.div key={skill.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: (index % 4) * 0.08}} whileHover={{ y: -6, scale: 1.02 }} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#071a2b] p-5 transition-colors hover:border-[#4cc9f0]/30 hover:bg-[#0a2238]">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:bg-[#4cc9f0]/10">
                                <Icon className="text-xl text-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:text-[#4cc9f0]" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-white">{skill.name}</h3>
                                <p className="mt-1 text-xs text-gray-500">{skill.category}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}


// MERN stack icon component 
const TechIcon = ({ icon: Icon, name, delay }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay}} whileHover={{ y: -8, scale: 1.08 }} className="flex min-w-[100px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071a2b] p-5">
            <Icon className="text-4xl text-[#4cc9f0]" />
            <p className="mt-3 text-sm text-gray-300">{name}</p>
        </motion.div>
    )
}

export default Skills