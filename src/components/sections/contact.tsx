"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "jason@jasoneverson.dev",
    href: "mailto:jason@jasoneverson.dev",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    color: "from-purple-500 to-pink-500"
  }
]

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jasoneverson",
    color: "hover:text-blue-400"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/jasoneverson",
    color: "hover:text-purple-400"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "Twitter",
    href: "https://twitter.com/jasoneverson",
    color: "hover:text-cyan-400"
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let&apos;s Build Something <span className="holographic-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI/ML solutions and intelligent automation? 
            Let&apos;s discuss how we can work together to achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&apos;m always interested in discussing new opportunities, innovative projects, 
                and challenging problems that require creative technical solutions. Whether 
                you&apos;re looking to implement AI/ML systems, automate workflows, or build 
                enterprise applications, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center space-x-4 group hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color}`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {method.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass-card p-3 rounded-xl transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h4 className="font-semibold mb-3 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                Currently Available
              </h4>
              <p className="text-sm text-muted-foreground">
                I&apos;m currently accepting new projects and consulting opportunities. 
                Typical response time is within 24 hours for project inquiries.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg 
                             focus:outline-none focus:border-primary/50 transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg 
                             focus:outline-none focus:border-primary/50 transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg 
                           focus:outline-none focus:border-primary/50 transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg 
                           focus:outline-none focus:border-primary/50 transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
              </div>

              <Button
                type="submit"
                variant="neural"
                size="lg"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>There was an error sending your message. Please try again.</span>
                </motion.div>
              )}
            </form>

            {/* Additional Information */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-3">What to expect:</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Free initial consultation call</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Detailed project proposal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Transparent timeline and pricing</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}