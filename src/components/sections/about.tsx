"use client"

import { motion } from "framer-motion"
import { Brain, Code, Zap, Users, Award, TrendingUp } from "lucide-react"

const skills = [
  {
    category: "AI/ML",
    icon: <Brain className="w-5 h-5" />,
    technologies: ["Neural Networks", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "OpenAI GPT"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Full-Stack",
    icon: <Code className="w-5 h-5" />,
    technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Automation",
    icon: <Zap className="w-5 h-5" />,
    technologies: ["Workflow Automation", "CI/CD", "Docker", "AWS", "Serverless", "API Integration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Enterprise",
    icon: <Users className="w-5 h-5" />,
    technologies: ["System Architecture", "Microservices", "Performance Optimization", "Security", "Scalability"],
    color: "from-orange-500 to-red-500"
  }
]

const achievements = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Enterprise AI Solutions",
    description: "Built and deployed 15+ AI/ML systems serving millions of users with 99.9% uptime."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Automation Impact",
    description: "Created automation tools that save clients 100+ hours weekly across various industries."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Innovation Leader",
    description: "Led development of cutting-edge neural network architectures for real-world applications."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="holographic-text">Jason Everson</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Senior Software Engineer with 8+ years of experience building enterprise-scale AI/ML solutions, 
            intelligent automation systems, and full-stack applications that drive business transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-primary" />
                Technical Expertise
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in creating intelligent systems that solve complex business problems. 
                From neural networks that process natural language to automation platforms that 
                streamline enterprise workflows, I build technology that makes a real impact.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">Current Focus</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced conversational AI and chatbot platforms</li>
                    <li>• Computer vision applications for enterprise</li>
                    <li>• Predictive analytics and business intelligence</li>
                    <li>• No-code automation and workflow optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">Industries Served</h4>
                  <div className="flex flex-wrap gap-2">
                    {["FinTech", "Healthcare", "E-commerce", "SaaS", "Manufacturing", "Education"].map((industry) => (
                      <span 
                        key={industry}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-4 flex items-start space-x-4"
                >
                  <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="px-3 py-2 bg-black/20 rounded-lg text-sm text-center 
                                 group-hover:bg-white/5 transition-colors duration-300
                                 hover:bg-white/10 cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12">Experience Journey</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {[
                { year: "2016", role: "Junior Developer", company: "StartupTech" },
                { year: "2018", role: "Full-Stack Engineer", company: "GrowthCorp" },
                { year: "2020", role: "AI/ML Engineer", company: "InnovateLabs" },
                { year: "2022", role: "Senior Engineer", company: "Enterprise Solutions" },
                { year: "2024", role: "Technical Lead", company: "Current Role" }
              ].map((exp, index) => (
                <motion.div
                  key={exp.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 glass-card rounded-full flex items-center justify-center font-bold text-primary">
                    {exp.year}
                  </div>
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}