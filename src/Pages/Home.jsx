import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import GlitchText from '../Components/GlitchText';
import CyberButton from '../Components/CyberButton';
import Create3DRings from '../Components/Create3DRings';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const stats = [
    { count: '50+', label: 'Projects Completed' },
    { count: '100+', label: 'Happy Clients' },
    { count: '5+', label: 'Years Experience' }
  ];

  const projects = [
    {
      title: 'Cyber Dashboard',
      description: 'Advanced analytics platform with real-time data visualization',
      tags: ['React', 'D3.js', 'Tailwind'],
      color: 'from-cyan-400'
    },
    {
      title: 'Neural Network Interface',
      description: 'AI-powered content generation system with intuitive UI',
      tags: ['Next.js', 'TensorFlow', 'WebGL'],
      color: 'from-magenta-400'
    },
    {
      title: 'Quantum Framework',
      description: 'High-performance web framework for next-gen applications',
      tags: ['TypeScript', 'Webpack', 'Node.js'],
      color: 'from-yellow-400'
    },
    {
      title: 'Digital Dimension',
      description: '3D immersive experience builder for metaverse platforms',
      tags: ['Three.js', 'WebXR', 'React Three Fiber'],
      color: 'from-cyan-400'
    }
  ];

  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-0">
        {/* Background Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-80 h-80 bg-cyber-cyan/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-magenta/15 rounded-full blur-3xl"
          />
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center text-center md:text-left"
          >
            {/* Stacked Text */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-6xl md:text-8xl font-orbitron font-bold text-cyber-cyan leading-tight text-glow-cyan">
                HI
              </h2>
              <h2 className="text-6xl md:text-8xl font-orbitron font-bold text-cyber-magenta leading-tight text-glow-magenta">
                I AM
              </h2>
            </motion.div>

            {/* Glitch Name */}
            <motion.div variants={itemVariants} className="mb-8">
              <GlitchText text="PRANISH ACHARYA" />
            </motion.div>

            {/* Typewriter Roles */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-2xl md:text-4xl font-rajdhani text-cyber-cyan">
                <span className="text-cyber-yellow font-bold">{'< '}</span>
                <Typewriter
                  words={['Frontend Developer', 'UI/UX Designer', 'Creative Technologist', 'Digital Innovator']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
                <span className="text-cyber-yellow font-bold">{' />'}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-slate-100 mb-8 max-w-lg leading-relaxed font-rajdhani font-medium"
            >
              Crafting immersive digital experiences that blend cutting-edge technology with stunning design. Transforming ideas into reality through code and creativity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <CyberButton text="Start Project" variant="primary" size="lg" />
              <button className="px-8 py-3 border-2 border-cyber-cyan text-cyber-cyan font-rajdhani font-bold rounded-lg hover:bg-cyber-cyan/10 transition-all duration-300 flex items-center justify-center gap-2 group text-glow-cyan uppercase tracking-widest">
                View Portfolio
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden md:flex justify-center items-center"
          >
            <Create3DRings />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 md:px-8 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-orbitron font-bold text-cyan-400 mb-2">
                  {stat.count}
                </div>
                <div className="text-slate-300 font-rajdhani text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 px-4 md:px-8 border-t border-magenta-500/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center">
              <span className="text-cyan-400">FEATURED</span>
              <span className="text-magenta-400 ml-4">PROJECTS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-lg border border-slate-600/50 hover:border-cyan-400/50 bg-slate-900/30 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
              >
                {/* linear Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <h3 className="text-2xl font-orbitron font-bold text-cyan-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 font-rajdhani mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-rajdhani text-cyan-300 border border-cyan-400/40 rounded-lg bg-cyan-400/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-400 font-rajdhani font-bold flex items-center gap-2 group/btn hover:text-magenta-400 transition-colors">
                    View Project
                    <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA Section */}
      <section className="relative py-20 px-4 md:px-8 border-t border-yellow-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-cyan-400">LET'S BUILD</span>
              <br />
              <span className="text-magenta-400">SOMETHING AMAZING</span>
            </h2>

            <p className="text-xl text-slate-300 font-rajdhani mb-8 leading-relaxed">
              Ready to bring your vision to life? Let's collaborate and create something extraordinary that pushes the boundaries of digital innovation.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <CyberButton text="Start Collaboration" />
              <button className="px-8 py-3 border-2 border-magenta-400 text-magenta-400 font-rajdhani font-bold rounded-lg hover:bg-magenta-400/10 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
