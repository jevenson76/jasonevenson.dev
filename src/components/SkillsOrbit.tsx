'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, 
  FaGitAlt, FaFigma, FaSlack, FaRobot, FaCogs
} from 'react-icons/fa';
import { 
  SiTypescript, SiGraphql, SiMongodb, SiPostgresql, 
  SiKubernetes, SiTerraform, SiOpenai, SiLangchain
} from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';

interface Skill {
  name: string;
  icon: React.ReactElement;
  color: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'ai' | 'devops' | 'design';
}

const SkillsOrbit = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: <FaReact />, color: '#61DAFB', proficiency: 95, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', proficiency: 90, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', proficiency: 88, category: 'backend' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', proficiency: 85, category: 'backend' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', proficiency: 82, category: 'backend' },
    
    // AI/ML
    { name: 'OpenAI', icon: <SiOpenai />, color: '#00A67E', proficiency: 90, category: 'ai' },
    { name: 'LangChain', icon: <SiLangchain />, color: '#1C3C3C', proficiency: 85, category: 'ai' },
    { name: 'AI Agents', icon: <FaRobot />, color: '#FF6B6B', proficiency: 88, category: 'ai' },
    { name: 'Automation', icon: <FaCogs />, color: '#4ECDC4', proficiency: 92, category: 'ai' },
    
    // DevOps
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', proficiency: 87, category: 'devops' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', proficiency: 85, category: 'devops' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', proficiency: 78, category: 'devops' },
    
    // Design & Collaboration
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E', proficiency: 80, category: 'design' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', proficiency: 95, category: 'devops' },
    { name: 'Slack Apps', icon: <FaSlack />, color: '#4A154B', proficiency: 88, category: 'design' }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', color: 'from-purple-500 to-blue-500' },
    { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { id: 'ai', name: 'AI & Automation', color: 'from-red-500 to-pink-500' },
    { id: 'devops', name: 'DevOps', color: 'from-orange-500 to-yellow-500' },
    { id: 'design', name: 'Design', color: 'from-purple-500 to-pink-500' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            A dynamic constellation of skills, constantly evolving with the latest technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                style={{
                  backgroundImage: selectedCategory === category.id 
                    ? `linear-gradient(to right, ${category.color.split(' ')[0]} ${category.color.split(' ')[1]}, ${category.color.split(' ')[2]} ${category.color.split(' ')[3]})`
                    : undefined
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Orbit Visualization */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Center Icon */}
          <motion.div
            className="absolute z-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <HiSparkles className="text-6xl text-purple-500" />
          </motion.div>

          {/* Orbiting Skills */}
          {filteredSkills.map((skill, index) => {
            const angle = (index / filteredSkills.length) * 2 * Math.PI;
            const radius = 200 + (index % 3) * 60;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [x, x + 10, x],
                  y: [y, y - 10, y]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  scale: { duration: 0.5, delay: index * 0.1 },
                  x: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" }
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative group cursor-pointer">
                  {/* Skill Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gray-900 border-2 flex items-center justify-center shadow-lg"
                    style={{ borderColor: skill.color }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-2xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                  </motion.div>

                  {/* Hover Card */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 rounded-lg p-3 shadow-xl border border-gray-800 min-w-[150px]"
                    >
                      <p className="text-white font-medium text-sm">{skill.name}</p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Orbital Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-gray-800/30"
              style={{
                width: `${(200 + (ring - 1) * 60) * 2}px`,
                height: `${(200 + (ring - 1) * 60) * 2}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{ 
                duration: 60 + ring * 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          ))}
        </div>

        {/* Skills Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.slice(1).map((category) => (
            <div
              key={category.id}
              className="bg-gray-900 rounded-lg p-4 border border-gray-800"
            >
              <div 
                className={`h-1 w-full rounded-full bg-gradient-to-r ${category.color} mb-3`} 
              />
              <p className="text-white font-medium text-sm">{category.name}</p>
              <p className="text-gray-400 text-xs mt-1">
                {skills.filter(s => s.category === category.id).length} skills
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { SkillsOrbit };