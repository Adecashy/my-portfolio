import { motion } from "motion/react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { HiArrowUp } from "react-icons/hi2"

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050f1a] px-6 py-12 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#4cc9f0]/10 blur-[100px]" />
        <div className="mx-auto max-w-7xl">

            {/* Main Footer */}
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

                {/* Logo + Text */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <a href="#home" className="text-3xl font-bold tracking-tight text-white">
                        ADE<span className="text-[#4cc9f0]">.</span>
                    </a>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">Full Stack Web Developer building modern, scalable and engaging digital experiences.</p>
                </motion.div>

                {/* Socials */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="flex gap-3">
                    {[
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
                    ].map((social) => {
                        const Icon = social.icon
                        return (
                            <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[#4cc9f0] hover:text-[#4cc9f0]">
                                <Icon />
                            </motion.a>
                        )
                    })}
                </motion.div>

                {/* Back to top */}
                <motion.a href="#home" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-3 text-sm font-medium text-gray-400 transition hover:text-[#4cc9f0]">
                    Back to top
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#4cc9f0]">
                        <HiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
                    </span>
                </motion.a>
            </div>

            {/* Bottom */}
            <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                <p>© {currentYear} Ade. All rights reserved.</p>
                <p className="flex items-center gap-2">
                    Built with
                    <span className="text-[#4cc9f0]">React</span>
                    &
                    <span className="text-[#4cc9f0]">Motion</span>
                </p>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer