import { motion } from "motion/react"
import { useState } from "react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { HiArrowUpRight, HiEnvelope, HiMapPin, HiPaperAirplane } from "react-icons/hi2"


const Contact = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const socials = [
        {
            icon: FaGithub,
            href: "https://github.com/Adecashy",
            label: "Github"
        },
        {
            icon: FaLinkedinIn,
            href: "https://ng.linkedin.com/in/damilare-adeleke-5363133a6",
            label: "LinkedIn"
        },
        {
            icon: FaTwitter,
            href: "https://x.com/adecashy?s=11",
            label: "Twitter"
        }
    ]

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-[#071a2b] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#4cc9f0]/5 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-[#1b4965]/20 blur-[120px]" />

            {/* Heading */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="mb-16">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#4cc9f0]" />
                        <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">Get In Touch</span>
                    </div>
                    <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Let's build something{" "}
                        <span className="text-[#4cc9f0]">great.</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"> Have an idea, a project, or an opportunity you'd like to discuss? Send me a message and let's turn that idea into something real</p>
                </motion.div>
                
                {/* Main Contact area */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Left Side */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0a2238] p-8 sm:p-10">

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#4cc9f0]/10 blur-3xl" />
                        <div className="z-10">
                            <motion.div whileHover={{ rotate: 5, scale: 1.05 }} className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4cc9f0]/10">
                                <HiEnvelope className="text-2xl text-[#4cc9f0]" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">Have a project in mind?</h3>
                            <p className="mt-4 max-w-md leading-7 text-gray-400">I'm always interested in hearing about new projects, creative ideas, and opportunities to collaborate.</p>

                            {/* Contact details */}
                            <div className="mt-10 space-y-6">
                                <motion.a href="mailto:immaemmanuell@gmail.com" whileHover={{ x: 6 }} className="group flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:bg-[#4cc9f0]/10">
                                        <HiEnvelope className="text-lg text-[#4cc9f0]" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
                                        <p className="mt-1 text-sm text-gray-300 transition group-hover:text-white">immaemmanuell@gmail.com</p>
                                    </div>
                                </motion.a>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                                        <HiMapPin className="text-lg text-[#4cc9f0]" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
                                        <p className="mt-1 text-sm text-gray-300">Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="relative z-10 mt-12 border-t border-white/10 pt-8">
                            <p className="mb-4 text-sm text-gray-500">Find me online</p>
                            <div className="flex gap-3">
                                {socials.map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#4cc9f0]/40 hover:bg-[#4cc9f0]/10 hover:text-[#4cc9f0]">
                                            <Icon />
                                        </motion.a>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a2238] p-8 sm:p-10">

                        {/* glow */}
                        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#4cc9f0]/5 blur-3xl" />
                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white sm:text-3xl">Send a message</h3>
                                <p className="mt-2 text-sm text-gray-500">I'll get back to you as soon as possible</p>
                            </div>
                            <div className="space-y-6">

                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">Your Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ade Leke" required className="w-full rounded-xl border border-white/10 bg-[#071a2b] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-[#4cc9f0]/60 focus:ring-2 focus:ring-[#4cc9f0]/10" />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="adeleke@dev.com" required className="w-full rounded-xl border border-white/10 bg-[#071a2b] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-[#4cc9f0]/60 focus:ring-2 focus:ring-[#4cc9f0]/10" />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">Your Message</label>
                                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project. . ." rows="6" required className="w-full resize-none rounded-xl border border-white/10 bg-[#071a2b] px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-[#4cc9f0]/60 focus:ring-2 focus:ring-[#4cc9f0]/10" />
                                </div>

                                {/* Submit */}
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#4cc9f0] px-6 py-4 font-semibold text-[#071a2b] transition hover:bg-white">
                                    Send Message
                                    <HiPaperAirplane className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.form>
                </div>

                {/* Bottom Statement */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-24 text-center">
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                        "Good software is built with{" "}
                        <span className="text-[#4cc9f0]">purpose.</span>"
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-white/10" />
                        <HiArrowUpRight className="text-[#4cc9f0]" />
                        <span className="h-px w-12 bg-white/10" />
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Contact