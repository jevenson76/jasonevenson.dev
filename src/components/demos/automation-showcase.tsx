"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Share2, BarChart, Workflow, Settings, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AutomationTool {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: "chatbot" | "social" | "workflow" | "analytics"
  features: string[]
  metrics: {
    efficiency: number
    accuracy: number
    timeSaved: string
  }
}

const automationTools: AutomationTool[] = [
  {
    id: "chatbot-platform",
    title: "Multi-Platform Chatbot Manager",
    description: "Unified chatbot management across Discord, Slack, Teams, and custom platforms with advanced NLP.",
    icon: <MessageCircle className="w-6 h-6" />,
    category: "chatbot",
    features: [
      "Multi-platform integration",
      "Advanced NLP processing",
      "Context-aware responses",
      "Analytics dashboard",
      "Custom workflow triggers"
    ],
    metrics: {
      efficiency: 94,
      accuracy: 87,
      timeSaved: "15+ hours/week"
    }
  },
  {
    id: "social-automation",
    title: "Social Media Automation Suite",
    description: "Comprehensive social media management with AI-powered content generation and cross-platform posting.",
    icon: <Share2 className="w-6 h-6" />,
    category: "social",
    features: [
      "AI content generation",
      "Cross-platform posting",
      "Engagement analytics",
      "A/B testing automation",
      "Trend analysis"
    ],
    metrics: {
      efficiency: 89,
      accuracy: 92,
      timeSaved: "20+ hours/week"
    }
  },
  {
    id: "workflow-builder",
    title: "Visual Workflow Builder",
    description: "No-code automation platform for complex business processes with integrations to 500+ services.",
    icon: <Workflow className="w-6 h-6" />,
    category: "workflow",
    features: [
      "Visual drag-drop builder",
      "500+ service integrations",
      "Conditional logic",
      "Error handling",
      "Real-time monitoring"
    ],
    metrics: {
      efficiency: 96,
      accuracy: 91,
      timeSaved: "25+ hours/week"
    }
  },
  {
    id: "analytics-engine",
    title: "Automated Analytics Engine",
    description: "Real-time data processing and reporting with predictive insights and automated decision making.",
    icon: <BarChart className="w-6 h-6" />,
    category: "analytics",
    features: [
      "Real-time processing",
      "Predictive analytics",
      "Automated reporting",
      "Alert systems",
      "Custom dashboards"
    ],
    metrics: {
      efficiency: 91,
      accuracy: 88,
      timeSaved: "12+ hours/week"
    }
  }
]

const categoryColors = {
  chatbot: "from-blue-500 to-cyan-500",
  social: "from-purple-500 to-pink-500",
  workflow: "from-green-500 to-emerald-500",
  analytics: "from-orange-500 to-red-500",
}

export function AutomationShowcase() {
  const [selectedTool, setSelectedTool] = useState<string>("chatbot-platform")
  const [runningDemo, setRunningDemo] = useState<string | null>(null)

  const selectedToolData = automationTools.find(tool => tool.id === selectedTool)

  const runDemo = (toolId: string) => {
    setRunningDemo(toolId)
    setTimeout(() => setRunningDemo(null), 3000) // Demo runs for 3 seconds
  }

  return (
    <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Automation <span className="holographic-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful automation tools that streamline workflows, increase efficiency, 
            and transform how businesses operate in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tool Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {automationTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedTool === tool.id 
                      ? "bg-white/10 border-primary/50" 
                      : "hover:bg-white/5 hover:border-white/20"
                  }`}
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[tool.category]} shrink-0`}>
                      {tool.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm leading-tight">{tool.title}</h3>
                      <span className="text-xs text-muted-foreground capitalize">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {tool.description}
                  </div>

                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">
                      {tool.metrics.efficiency}% efficiency
                    </span>
                    <span className="text-blue-400">
                      {tool.metrics.timeSaved}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tool Display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {selectedToolData && (
                <motion.div
                  key={selectedTool}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 h-full min-h-[600px]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[selectedToolData.category]}`}>
                        {selectedToolData.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedToolData.title}</h3>
                        <p className="text-muted-foreground">{selectedToolData.description}</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="neural"
                      onClick={() => runDemo(selectedTool)}
                      disabled={runningDemo === selectedTool}
                      className="shrink-0"
                    >
                      {runningDemo === selectedTool ? (
                        <>
                          <Settings className="w-4 h-4 mr-2 animate-spin" />
                          Running...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Run Demo
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedToolData.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Interface */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Live Demo</h4>
                    <div className="space-y-4">
                      {selectedTool === "chatbot-platform" && (
                        <ChatbotManagerDemo running={runningDemo === selectedTool} />
                      )}
                      {selectedTool === "social-automation" && (
                        <SocialAutomationDemo running={runningDemo === selectedTool} />
                      )}
                      {selectedTool === "workflow-builder" && (
                        <WorkflowBuilderDemo running={runningDemo === selectedTool} />
                      )}
                      {selectedTool === "analytics-engine" && (
                        <AnalyticsEngineDemo running={runningDemo === selectedTool} />
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-black/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        {selectedToolData.metrics.efficiency}%
                      </div>
                      <div className="text-sm text-muted-foreground">Efficiency</div>
                    </div>
                    <div className="text-center p-4 bg-black/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">
                        {selectedToolData.metrics.accuracy}%
                      </div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-black/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">
                        {selectedToolData.metrics.timeSaved}
                      </div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Individual Demo Components
function ChatbotManagerDemo({ running }: { running: boolean }) {
  return (
    <div className="bg-black/20 rounded-lg p-4 h-48 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">Multi-Platform Status</h5>
        <div className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 flex-1">
        {["Discord", "Slack", "Teams", "Custom"].map((platform) => (
          <div key={platform} className="flex items-center justify-between p-2 bg-black/20 rounded">
            <span className="text-sm">{platform}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              running ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
            }`}>
              {running ? "Active" : "Idle"}
            </span>
          </div>
        ))}
      </div>
      
      {running && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs text-green-400"
        >
          Processing 127 messages across platforms...
        </motion.div>
      )}
    </div>
  )
}

function SocialAutomationDemo({ running }: { running: boolean }) {
  return (
    <div className="bg-black/20 rounded-lg p-4 h-48">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">Content Pipeline</h5>
        <div className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
      </div>
      
      <div className="space-y-3">
        {[
          { task: "AI Content Generation", status: running ? "active" : "idle" },
          { task: "Cross-Platform Posting", status: running ? "queued" : "idle" },
          { task: "Engagement Analysis", status: running ? "processing" : "idle" },
          { task: "A/B Testing", status: "idle" }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm">{item.task}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              item.status === "active" ? "bg-green-500/20 text-green-400" :
              item.status === "queued" ? "bg-yellow-500/20 text-yellow-400" :
              item.status === "processing" ? "bg-blue-500/20 text-blue-400" :
              "bg-gray-500/20 text-gray-400"
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      
      {running && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-xs text-blue-400"
        >
          Generated 12 posts, scheduled across 5 platforms
        </motion.div>
      )}
    </div>
  )
}

function WorkflowBuilderDemo({ running }: { running: boolean }) {
  return (
    <div className="bg-black/20 rounded-lg p-4 h-48">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">Workflow Execution</h5>
        <div className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
      </div>
      
      <div className="flex items-center justify-between">
        {["Trigger", "Process", "Validate", "Execute"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
              running && index <= 2 ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
            }`}>
              {index + 1}
            </div>
            <span className="text-xs mt-1">{step}</span>
            {index < 3 && (
              <motion.div
                className={`w-12 h-0.5 mt-2 ${
                  running && index < 2 ? "bg-green-400" : "bg-gray-600"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: running && index < 2 ? 1 : 0 }}
                transition={{ delay: index * 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
      
      {running && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-xs text-green-400"
        >
          Workflow executing: Email → CRM → Slack notification
        </motion.div>
      )}
    </div>
  )
}

function AnalyticsEngineDemo({ running }: { running: boolean }) {
  const metrics = [
    { name: "Data Points", value: running ? "24.7K" : "0", change: "+12%" },
    { name: "Predictions", value: running ? "156" : "0", change: "+8%" },
    { name: "Alerts", value: running ? "7" : "0", change: "-3%" },
  ]

  return (
    <div className="bg-black/20 rounded-lg p-4 h-48">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-medium">Real-time Analytics</h5>
        <div className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center">
            <div className={`text-lg font-bold ${
              running ? "text-blue-400" : "text-gray-400"
            }`}>
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">{metric.name}</div>
            {running && (
              <div className="text-xs text-green-400">{metric.change}</div>
            )}
          </div>
        ))}
      </div>
      
      <div className="h-12 bg-black/20 rounded flex items-end justify-center space-x-1">
        {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
          <motion.div
            key={index}
            className={`w-4 rounded-t ${running ? "bg-blue-400" : "bg-gray-600"}`}
            initial={{ height: 0 }}
            animate={{ height: running ? `${height}%` : 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
      
      {running && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs text-blue-400"
        >
          Processing real-time data streams...
        </motion.div>
      )}
    </div>
  )
}