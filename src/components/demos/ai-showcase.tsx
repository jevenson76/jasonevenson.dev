"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, MessageSquare, BarChart3, Image, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AIDemo {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: "nlp" | "vision" | "predictive" | "generative"
  status: "running" | "stopped"
  metrics?: {
    accuracy?: number
    latency?: string
    throughput?: string
  }
}

const aiDemos: AIDemo[] = [
  {
    id: "chatbot",
    title: "Intelligent Chatbot",
    description: "Advanced conversational AI with context awareness and multi-turn dialogue capabilities.",
    icon: <MessageSquare className="w-6 h-6" />,
    category: "nlp",
    status: "running",
    metrics: {
      accuracy: 94.2,
      latency: "120ms",
      throughput: "500 req/min"
    }
  },
  {
    id: "sentiment",
    title: "Sentiment Analysis",
    description: "Real-time sentiment analysis with emotional intelligence and context understanding.",
    icon: <Brain className="w-6 h-6" />,
    category: "nlp",
    status: "running",
    metrics: {
      accuracy: 89.7,
      latency: "45ms",
      throughput: "1200 req/min"
    }
  },
  {
    id: "prediction",
    title: "Predictive Analytics",
    description: "Machine learning models for forecasting trends and business intelligence.",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "predictive",
    status: "stopped",
    metrics: {
      accuracy: 87.3,
      latency: "200ms",
      throughput: "300 req/min"
    }
  },
  {
    id: "vision",
    title: "Computer Vision",
    description: "Object detection, image classification, and visual content analysis.",
    icon: <Image className="w-6 h-6" aria-hidden="true" />,
    category: "vision",
    status: "running",
    metrics: {
      accuracy: 91.8,
      latency: "180ms",
      throughput: "150 req/min"
    }
  },
]

const categoryColors = {
  nlp: "from-blue-500 to-cyan-500",
  vision: "from-purple-500 to-pink-500",
  predictive: "from-green-500 to-emerald-500",
  generative: "from-orange-500 to-red-500",
}

export function AIShowcase() {
  const [selectedDemo, setSelectedDemo] = useState<string>("chatbot")
  const [demoStates, setDemoStates] = useState<Record<string, "running" | "stopped">>(
    Object.fromEntries(aiDemos.map(demo => [demo.id, demo.status]))
  )

  const toggleDemo = (demoId: string) => {
    setDemoStates(prev => ({
      ...prev,
      [demoId]: prev[demoId] === "running" ? "stopped" : "running"
    }))
  }

  const selectedDemoData = aiDemos.find(demo => demo.id === selectedDemo)

  return (
    <section id="ai-demos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            AI/ML <span className="holographic-text">Demonstrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive demonstrations of cutting-edge AI and machine learning technologies 
            built for enterprise-scale applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {aiDemos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id 
                      ? "bg-white/10 border-primary/50" 
                      : "hover:bg-white/5 hover:border-white/20"
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[demo.category]}`}>
                        {demo.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{demo.title}</h3>
                        <span className="text-xs text-muted-foreground capitalize">
                          {demo.category}
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleDemo(demo.id)
                      }}
                      className="h-8 w-8"
                    >
                      {demoStates[demo.id] === "running" ? (
                        <Pause className="w-4 h-4 text-green-400" />
                      ) : (
                        <Play className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3">
                    {demo.description}
                  </p>

                  {demo.metrics && (
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">
                        {demo.metrics.accuracy}% accuracy
                      </span>
                      <span className="text-blue-400">
                        {demo.metrics.latency}
                      </span>
                      <span 
                        className={`flex items-center space-x-1 ${
                          demoStates[demo.id] === "running" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          demoStates[demo.id] === "running" ? "bg-green-400 animate-pulse" : "bg-red-400"
                        }`} />
                        <span>{demoStates[demo.id]}</span>
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedDemoData && (
                <motion.div
                  key={selectedDemo}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 h-full min-h-[500px]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[selectedDemoData.category]}`}>
                        {selectedDemoData.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedDemoData.title}</h3>
                        <p className="text-muted-foreground">{selectedDemoData.description}</p>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      demoStates[selectedDemo] === "running" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      {demoStates[selectedDemo]}
                    </div>
                  </div>

                  {/* Demo Interface */}
                  <div className="space-y-6">
                    {selectedDemo === "chatbot" && <ChatbotDemo running={demoStates[selectedDemo] === "running"} />}
                    {selectedDemo === "sentiment" && <SentimentDemo running={demoStates[selectedDemo] === "running"} />}
                    {selectedDemo === "prediction" && <PredictionDemo running={demoStates[selectedDemo] === "running"} />}
                    {selectedDemo === "vision" && <VisionDemo running={demoStates[selectedDemo] === "running"} />}
                  </div>

                  {/* Metrics */}
                  {selectedDemoData.metrics && (
                    <div className="mt-8 grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {selectedDemoData.metrics.accuracy}%
                        </div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          {selectedDemoData.metrics.latency}
                        </div>
                        <div className="text-sm text-muted-foreground">Latency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          {selectedDemoData.metrics.throughput}
                        </div>
                        <div className="text-sm text-muted-foreground">Throughput</div>
                      </div>
                    </div>
                  )}
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
function ChatbotDemo({ running }: { running: boolean }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm an AI assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim() || !running) return
    
    setMessages(prev => [...prev, { role: "user", content: input }])
    setInput("")
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's an interesting question! Let me help you with that.",
        "I understand what you're asking. Here's my analysis...",
        "Based on the data I've processed, I can provide insights on this topic.",
        "Great question! This relates to several AI concepts I can explain."
      ]
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: responses[Math.floor(Math.random() * responses.length)]
      }])
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="h-64 overflow-y-auto space-y-3 p-4 bg-black/20 rounded-lg">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-xs p-3 rounded-lg ${
              message.role === "user" 
                ? "bg-primary text-primary-foreground ml-4" 
                : "bg-muted text-muted-foreground mr-4"
            }`}>
              {message.content}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder={running ? "Type your message..." : "Demo is stopped"}
          disabled={!running}
          className="flex-1 px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 disabled:opacity-50"
        />
        <Button onClick={sendMessage} disabled={!running || !input.trim()}>
          Send
        </Button>
      </div>
    </div>
  )
}

function SentimentDemo({ running }: { running: boolean }) {
  const [text, setText] = useState("This product is absolutely amazing! I love how intuitive it is.")
  const [sentiment, setSentiment] = useState({ score: 0.85, label: "Positive", confidence: 0.92 })

  const analyzeSentiment = () => {
    if (!running) return
    
    // Simulate sentiment analysis
    const sentiments = [
      { score: 0.9, label: "Very Positive", confidence: 0.95 },
      { score: 0.6, label: "Positive", confidence: 0.88 },
      { score: 0.1, label: "Neutral", confidence: 0.75 },
      { score: -0.3, label: "Negative", confidence: 0.82 },
      { score: -0.8, label: "Very Negative", confidence: 0.91 },
    ]
    
    setTimeout(() => {
      setSentiment(sentiments[Math.floor(Math.random() * sentiments.length)])
    }, 500)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={running ? "Enter text to analyze..." : "Demo is stopped"}
        disabled={!running}
        className="w-full h-32 px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 disabled:opacity-50 resize-none"
      />
      
      <Button onClick={analyzeSentiment} disabled={!running || !text.trim()} className="w-full">
        Analyze Sentiment
      </Button>
      
      <div className="p-4 bg-black/20 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Sentiment:</span>
          <span className={`font-medium ${
            sentiment.score > 0.5 ? "text-green-400" :
            sentiment.score > 0 ? "text-blue-400" :
            sentiment.score > -0.5 ? "text-yellow-400" : "text-red-400"
          }`}>
            {sentiment.label}
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Score:</span>
          <span className="font-mono text-sm">{sentiment.score.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Confidence:</span>
          <span className="font-mono text-sm">{(sentiment.confidence * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  )
}

function PredictionDemo({ running }: { running: boolean }) {
  const [prediction] = useState({
    trend: "Upward",
    confidence: 78.5,
    nextValue: 1247.83,
    change: "+5.2%"
  })

  return (
    <div className="space-y-4">
      <div className="h-48 bg-black/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-muted-foreground">
            {running ? "Real-time prediction model" : "Demo stopped - Start to see predictions"}
          </p>
        </div>
      </div>
      
      {running && (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-black/20 rounded-lg text-center">
            <div className="text-lg font-bold text-green-400">{prediction.trend}</div>
            <div className="text-sm text-muted-foreground">Trend</div>
          </div>
          <div className="p-3 bg-black/20 rounded-lg text-center">
            <div className="text-lg font-bold text-blue-400">{prediction.confidence}%</div>
            <div className="text-sm text-muted-foreground">Confidence</div>
          </div>
          <div className="p-3 bg-black/20 rounded-lg text-center">
            <div className="text-lg font-bold text-purple-400">{prediction.nextValue}</div>
            <div className="text-sm text-muted-foreground">Next Value</div>
          </div>
          <div className="p-3 bg-black/20 rounded-lg text-center">
            <div className="text-lg font-bold text-green-400">{prediction.change}</div>
            <div className="text-sm text-muted-foreground">Change</div>
          </div>
        </div>
      )}
    </div>
  )
}

function VisionDemo({ running }: { running: boolean }) {
  const [detection] = useState({
    objects: [
      { name: "Person", confidence: 0.94, bbox: [120, 80, 200, 250] },
      { name: "Car", confidence: 0.87, bbox: [300, 150, 450, 280] },
      { name: "Tree", confidence: 0.76, bbox: [50, 20, 150, 200] },
    ]
  })

  return (
    <div className="space-y-4">
      <div className="h-64 bg-black/20 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="text-center">
          <div className="text-4xl mb-2">👁️</div>
          <p className="text-muted-foreground">
            {running ? "Computer vision analysis active" : "Demo stopped - Start to analyze images"}
          </p>
        </div>
        
        {running && (
          <div className="absolute inset-0">
            {detection.objects.map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="absolute border-2 border-green-400 rounded"
                style={{
                  left: `${(obj.bbox[0] / 500) * 100}%`,
                  top: `${(obj.bbox[1] / 300) * 100}%`,
                  width: `${((obj.bbox[2] - obj.bbox[0]) / 500) * 100}%`,
                  height: `${((obj.bbox[3] - obj.bbox[1]) / 300) * 100}%`,
                }}
              >
                <div className="absolute -top-6 left-0 bg-green-400 text-black px-2 py-1 text-xs rounded">
                  {obj.name} ({(obj.confidence * 100).toFixed(0)}%)
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {running && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Detected Objects:</h4>
          {detection.objects.map((obj, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-black/20 rounded">
              <span className="text-sm">{obj.name}</span>
              <span className="text-sm text-green-400">{(obj.confidence * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}