import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../Components/CyberButton';
import { FiArrowRight } from 'react-icons/fi';

const TechStack = () => {
  const techCategories = [
    {
      name: 'Frontend Development',
      color: 'cyan',
      icon: '💻',
      skills: [
        { name: 'React.js', proficiency: 95 },
        { name: 'JavaScript/ES6+', proficiency: 95 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Framer Motion', proficiency: 90 },
        { name: 'HTML5', proficiency: 95 },
        { name: 'CSS3/SCSS', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 }
      ]
    },
    {
      name: 'Video & VFX',
      color: 'yellow',
      icon: '🎬',
      skills: [
        { name: 'Premiere Pro', proficiency: 95 },
        { name: 'After Effects', proficiency: 92 },
        { name: '4K Editing', proficiency: 90 },
        { name: 'Color Grading', proficiency: 88 },
        { name: 'Motion Graphics', proficiency: 90 },
        { name: 'VFX Compositing', proficiency: 85 },
        { name: 'DaVinci Resolve', proficiency: 85 },
        { name: 'Audio Mixing', proficiency: 80 }
      ]
    },
    {
      name: 'Tools & Platforms',
      color: 'magenta',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', proficiency: 90 },
        { name: 'VS Code', proficiency: 95 },
        { name: 'Docker', proficiency: 70 },
        { name: 'AWS', proficiency: 75 },
        { name: 'Vercel', proficiency: 90 },
        { name: 'Netlify', proficiency: 88 },
        { name: 'Linux', proficiency: 80 },
        { name: 'CI/CD', proficiency: 75 }
      ]
    },
    {
      name: 'Soft Skills',
      color: 'yellow',
      icon: '🤝',
      skills: [
        { name: 'Problem Solving', proficiency: 95 },
        { name: 'Communication', proficiency: 90 },
        { name: 'Project Management', proficiency: 85 },
        { name: 'Team Collaboration', proficiency: 92 },
        { name: 'Creative Thinking', proficiency: 95 },
        { name: 'Attention to Detail', proficiency: 93 },
        { name: 'Time Management', proficiency: 90 },
        { name: 'Client Relations', proficiency: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const skillVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Page Header */}
      <section className="relative py-20 px-4 md:px-10 border-b border-cyber-cyan/30">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ x: [-40, 40, -40], y: [0, 30, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-10 left-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ x: [40, -40, 40] }}
            transition={{ duration: 35, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="container-cyber">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-4">
              <span className="text-cyber-yellow">TECH STACK</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyber-yellow to-cyber-cyan mx-auto mb-6"></div>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto">
              A comprehensive overview of the technologies, tools, and skills I use to create exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Categories Grid */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {techCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                variants={itemVariants}
                className="group"
              >
                <div className="p-6 rounded-sm border border-cyber-cyan/30 bg-cyber-gray/20 backdrop-blur-sm hover:border-cyber-cyan/60 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-2xl font-orbitron font-bold text-white">
                      {category.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/80 font-rajdhani font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-cyber-cyan text-xs font-orbitron">
                            {skill.proficiency}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-cyber-gray/50 rounded-full overflow-hidden border border-cyber-cyan/20">
                          <motion.div
                            variants={skillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: skillIdx * 0.05 + 0.2 }}
                            style={{ width: `${skill.proficiency}%` }}
                            className={`h-full rounded-full ${skill.proficiency >= 90
                              ? 'bg-gradient-to-r from-cyber-cyan to-cyber-magenta shadow-[0_0_10px_rgba(0,243,255,0.5)]'
                              : skill.proficiency >= 80
                                ? 'bg-gradient-to-r from-cyber-magenta to-cyber-yellow shadow-[0_0_10px_rgba(255,0,255,0.5)]'
                                : 'bg-gradient-to-r from-cyber-yellow to-cyber-cyan shadow-[0_0_10px_rgba(243,255,0,0.5)]'
                              }`}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Summary */}
      <section className="relative py-20 px-4 md:px-10 border-t border-cyber-cyan/30">
        <div className="container-cyber">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-center"
          >
            <span className="text-cyber-cyan text-glow-cyan">Technology Highlights</span>
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Modern Stack',
                desc: 'Expert in React, TypeScript, Node.js, and modern development practices',
                icon: '⚡'
              },
              {
                title: 'Creative Tools',
                desc: 'Professional proficiency in Adobe Creative Suite and specialized VFX software',
                icon: '🎨'
              },
              {
                title: 'Performance',
                desc: 'Focus on optimization, accessibility, and best practices across all projects',
                icon: '🚀'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-cyber-magenta/30 rounded-sm bg-cyber-dark/50 backdrop-blur-sm hover:border-cyber-magenta/60 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 font-rajdhani text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyber-cyan/10 to-cyber-magenta/10 border border-cyber-cyan/30 rounded-sm p-8 text-center"
          >
            <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
              Continuously Learning & Growing
            </h2>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto mb-8">
              I'm committed to staying current with emerging technologies and industry trends. Always exploring new tools and methodologies to deliver cutting-edge solutions.
            </p>
            <CyberButton variant="outline" size="lg">
              <span className="flex items-center justify-center gap-2">
                View My Latest Work <FiArrowRight />
              </span>
            </CyberButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
