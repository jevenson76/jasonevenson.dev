"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, Brain, Zap, Users, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: "ai-ml" | "automation" | "enterprise" | "full-stack"
  links: {
    demo?: string
    github?: string
    live?: string
  }
  metrics: {
    users?: string
    performance?: string
    impact?: string
  }
  featured: boolean
}

const projects: Project[] = [
  {
    id: "neural-chat-platform",
    title: "Neural Chat Platform",
    description: "Enterprise-grade conversational AI platform with multi-turn dialogue and context awareness.",
    longDescription: "A comprehensive chatbot platform that leverages advanced neural networks to provide intelligent, context-aware conversations. Built for enterprise scale with support for multiple languages, custom training, and seamless integration with existing business systems.",
    image: "🤖",
    tags: ["AI/ML", "NLP", "Node.js", "React", "PostgreSQL", "Redis"],
    category: "ai-ml",
    links: {
      demo: "#",
      github: "#",
      live: "#"
    },
    metrics: {
      users: "10K+ daily users",
      performance: "120ms avg response",
      impact: "85% customer satisfaction"
    },
    featured: true
  },
  {
    id: "smart-workflow-engine",
    title: "Smart Workflow Engine",
    description: "No-code automation platform with AI-powered workflow optimization and 500+ integrations.",
    longDescription: "A visual workflow builder that uses machine learning to optimize business processes. Features drag-and-drop interface, intelligent routing, error handling, and extensive API integrations for seamless automation across platforms.",
    image: "⚡",
    tags: ["Automation", "Python", "React", "Docker", "AWS", "API Integration"],
    category: "automation",
    links: {
      demo: "#",
      github: "#"
    },
    metrics: {
      users: "2K+ businesses",
      performance: "99.8% uptime",
      impact: "40hrs saved weekly"
    },
    featured: true
  },
  {
    id: "predictive-analytics-suite",
    title: "Predictive Analytics Suite",
    description: "Real-time data processing and ML-powered forecasting for business intelligence.",
    longDescription: "Advanced analytics platform that processes real-time data streams to generate predictive insights. Includes custom ML models, interactive dashboards, automated reporting, and alert systems for proactive decision making.",
    image: "📊",
    tags: ["Machine Learning", "Python", "TensorFlow", "React", "Time Series", "BigQuery"],
    category: "ai-ml",
    links: {
      demo: "#",
      live: "#"
    },
    metrics: {
      users: "500+ enterprises",
      performance: "Real-time processing",
      impact: "25% revenue increase"
    },
    featured: true
  },
  {
    id: "enterprise-dashboard",
    title: "Enterprise Command Center",
    description: "Comprehensive business intelligence dashboard with real-time monitoring and alerts.",
    longDescription: "A centralized dashboard that provides real-time visibility into business operations. Features customizable widgets, advanced filtering, role-based access control, and integration with multiple data sources for complete business oversight.",
    image: "🏢",
    tags: ["Full-Stack", "React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    category: "enterprise",
    links: {
      demo: "#",
      github: "#"
    },
    metrics: {
      users: "1K+ managers",
      performance: "Sub-second queries",
      impact: "60% faster decisions"
    },
    featured: false
  },
  {
    id: "social-automation-hub",
    title: "Social Media Automation Hub",
    description: "AI-powered social media management with content generation and cross-platform posting.",
    longDescription: "Complete social media automation solution that uses AI to generate engaging content, schedule posts across multiple platforms, analyze engagement metrics, and optimize posting strategies for maximum reach and interaction.",
    image: "📱",
    tags: ["Automation", "AI Content", "Node.js", "React", "MongoDB", "Social APIs"],
    category: "automation",
    links: {
      demo: "#",
      live: "#"
    },
    metrics: {
      users: "800+ creators",
      performance: "5x faster posting",
      impact: "200% engagement boost"
    },
    featured: false
  },
  {
    id: "computer-vision-api",
    title: "Computer Vision API",
    description: "Scalable image analysis API with object detection, classification, and custom training.",
    longDescription: "RESTful API service that provides advanced computer vision capabilities including object detection, image classification, facial recognition, and custom model training. Built for high-throughput processing with robust error handling and monitoring.",
    image: "👁️",
    tags: ["Computer Vision", "Python", "TensorFlow", "FastAPI", "Docker", "AWS"],
    category: "ai-ml",
    links: {
      demo: "#",
      github: "#"
    },
    metrics: {
      users: "300+ developers",
      performance: "180ms processing",
      impact: "95% accuracy rate"
    },
    featured: false
  }
]

const categories = [
  { id: "all", name: "All Projects", icon: <BarChart className="w-4 h-4" /> },
  { id: "ai-ml", name: "AI/ML", icon: <Brain className="w-4 h-4" /> },
  { id: "automation", name: "Automation", icon: <Zap className="w-4 h-4" /> },
  { id: "enterprise", name: "Enterprise", icon: <Users className="w-4 h-4" /> },
  { id: "full-stack", name: "Full-Stack", icon: <BarChart className="w-4 h-4" /> },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="holographic-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions that demonstrate expertise in AI/ML, 
            automation, and enterprise application development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass-card hover:bg-white/10"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                  onSelect={setSelectedProject}
                  featured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={projects.find(p => p.id === selectedProject)!}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({ 
  project, 
  index, 
  onSelect, 
  featured 
}: { 
  project: Project
  index: number
  onSelect: (id: string) => void
  featured: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card p-6 group hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        featured ? "ring-2 ring-primary/20" : ""
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={() => onSelect(project.id)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{project.image}</div>
        {featured && (
          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span 
            key={tag}
            className="px-2 py-1 bg-black/20 text-xs rounded"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 bg-black/20 text-xs rounded">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {project.links.demo && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Play className="w-4 h-4" />
            </Button>
          )}
          {project.links.github && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="w-4 h-4" />
            </Button>
          )}
          {project.links.live && (
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        <Button variant="neural" size="sm">
          View Details
        </Button>
      </div>
    </motion.div>
  )
}

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: Project
  onClose: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-5xl">{project.image}</div>
            <div>
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {project.links.demo && (
                <Button variant="neural">
                  <Play className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              )}
              {project.links.live && (
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Metrics</h3>
              <div className="space-y-4">
                {project.metrics.users && (
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                    <span className="text-muted-foreground">Users</span>
                    <span className="font-semibold text-green-400">{project.metrics.users}</span>
                  </div>
                )}
                {project.metrics.performance && (
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="font-semibold text-blue-400">{project.metrics.performance}</span>
                  </div>
                )}
                {project.metrics.impact && (
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                    <span className="text-muted-foreground">Impact</span>
                    <span className="font-semibold text-purple-400">{project.metrics.impact}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Scalable architecture for enterprise deployment</li>
                <li>• Real-time data processing and analytics</li>
                <li>• Comprehensive API documentation</li>
                <li>• Advanced security and compliance features</li>
                <li>• Mobile-responsive design</li>
                <li>• Integration with popular third-party services</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}