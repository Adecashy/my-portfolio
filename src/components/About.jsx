import { motion } from "motion/react";
import { HiArrowUpRight, HiCheckCircle, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineRocketLaunch } from "react-icons/hi2";
import profilePic from "../assets/ade-profile.JPG"


const stats = [
    {
        number: "4+",
        label: "Projects Built"
    },
    {
        number: "MERN",
        label: "Primary Stack"
    },
    {
        number: "100%",
        label: "Passion for Building"
    }
]

const strengths = [
    {
        icon: HiOutlineCodeBracket,
        title: "Clean Development",
        description: "I build responsive and maintainable applications with a strong focus on clean code and user experience."
    },
    {
        icon: HiOutlineCpuChip,
        title: "Full Stack Solution",
        description: "From frontend interfaces to backend APIs and databases, I enjoy building complete web applications."
    },
    {
        icon: HiOutlineRocketLaunch,
        title: "Real Products",
        description: "I focus on turning ideas into functional products that solve real problems and provide value to users."
    }
]


const About = () => {

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-[#071a2b] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">

        {/* Background decoration */}
        <motion.div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#1b4965]/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

            {/* Section Heading */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#4cc9f0]" />
                    <span className="text-sm uppercase tracking-[0.3em] text-[#4cc9f0]">About Me</span>
                </div>
                <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    More than just writing
                    <span className="block text-[#4cc9f0]">code.</span>
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">

                {/* About text */}
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="relative">
                    <motion.div>

                        {/* Main card */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a2238] p-6 sm:p-8">

                            {/* Decorative grid */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="h-full w-full" style={{ backgroundImage: "linear-gradient(rgba(76,201,240,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,0.15) 1px, transparent 1px)", backgroundSize: "35px 35px" }} />
                            </div>
                            <div className="relative z-10">

                                {/* Avatar */}
                                <motion.div className="flex h-88 w-58 items-center justify-center rounded-full border border-[#4cc9f0]/30 bg-[#071a2b] text-4xl font-bold text-[#4cc9f0] shadow-[0_0_50px_rgba(76,201,240,0.12)]">
                                    <img src={profilePic} alt="Ade" className="h-full w-full object-cover rounded-2xl" />
                                </motion.div>
                                <p className="mt-8 text-sm uppercase tracking-[0.25em] text-gray-500">Developer mindset</p>
                                <p className="mt-3 text-2xl font-bold leading-snug text-white">Build. Learn. <br /> Improve. Repeat.</p>

                                {/* Status */}
                                <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
                                    <span className="text-sm text-gray-300">Always learning something new</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 -right-3 rounded-2xl border border-white/10 bg-[#0a2238] px-5 py-4 shadow-xl">
                            <p className="text-2xl font-bold text-[#4cc9f0]">MERN</p>
                            <p className="text-xs text-gray-500">Primary Stack</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Content  */}
                <div>
                    <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-lg leading-8 text-gray-300">I'm Adeleke Damilare Emmanuel, a Full Stack Web Developer passionate about building modern digital experiences and solving problems through technology</motion.p>
                    <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 leading-7 text-gray-400">My main stack is MongoDB, Express, React and Node.js. I enjoy working across the entire development process, from designing interfaces and building APIs to managing databases and connecting everything together.</motion.p>
                    <motion.a href="#projects" initial={{ opacity: 0, y: 20 }}  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} whileHover={{ x: 6 }} className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#4cc9f0]">
                        Explore my work
                        <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </motion.a>

                    {/* Strength Cards */}
                    <div className="mt-12 space-y-5">{strengths.map((strength, index) => {
                        const Icon = strength.icon

                        return (
                            <motion.div key={strength.title} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.12 }} whileHover={{ x: 8, scale: 1.01 }} className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#4cc9f0]/20 hover:bg-white/[0.04]">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1b4965]/10 text-xl text-[#4cc9f0] transition duration-300 group-hover:scale-110">
                                    <Icon />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{strength.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-400">{strength.description}</p>
                                </div>
                                <HiCheckCircle className="ml-auto mt-1 hidden shrink-0 text-[#4cc9f0]/40 transition group-hover:text-[#4cc9f0] sm:block" />
                            </motion.div>
                        )
                    })}</div>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-[#0a2238] sm:grid-cols-3">
                {stats.map((stat, index) => {
                    return (
                        <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`p-8 text-center ${ index !== 2 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : "" }`}>
                            <p className="text-3xl font-bold text-[#4cc9f0] sm:text-4xl">{stat.number}</p>
                            <p className="mt-2 text-sm leading-5 text-gray-500">{stat.label}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About