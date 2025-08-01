"use client"

import { motion } from "framer-motion"
import { Brain, Mail, Linkedin, Github, Twitter, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { name: "AI/ML Development", href: "#ai-demos" },
    { name: "Automation Solutions", href: "#automation" },
    { name: "Enterprise Applications", href: "#projects" },
    { name: "Technical Consulting", href: "#contact" },
  ],
  resources: [
    { name: "Case Studies", href: "#projects" },
    { name: "Technology Stack", href: "#about" },
    { name: "Blog Articles", href: "#" },
    { name: "White Papers", href: "#" },
  ],
  company: [
    { name: "About Jason", href: "#about" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" },
  ]
}

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/jasoneverson",
    label: "LinkedIn"
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/jasoneverson",
    label: "GitHub"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/jasoneverson",
    label: "Twitter"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:jason@jasoneverson.dev",
    label: "Email"
  }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-black/50 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-network opacity-30" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-primary pulse-glow" />
                <span className="text-xl font-bold holographic-text">
                  Jason Everson
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Building the future with intelligent systems, automation solutions, 
                and enterprise applications that transform businesses and solve 
                complex challenges.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    aria-label={social.label}
                  >
                    <div className="group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors 
                               hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors 
                               hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors 
                               hover:translate-x-1 transform duration-200 block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass-card p-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20"
              >
                <h4 className="font-semibold mb-2">Ready to start your project?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Let&apos;s discuss how AI and automation can transform your business.
                </p>
                <Button variant="neural" size="sm" className="w-full">
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © {new Date().getFullYear()} Jason Everson. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="glass-card hover:bg-white/10"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-green-500/5 to-blue-500/5 blur-2xl" />
    </footer>
  )
}