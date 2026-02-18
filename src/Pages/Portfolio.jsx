import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../Components/CyberButton';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cinematic Title Sequence',
      category: 'video',
      description: 'Professional cinematic title sequence with advanced motion graphics and sound design.',
      image: '🎬',
      tags: ['After Effects', 'Premiere Pro', 'Sound Design'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Product Showcase Video',
      category: 'video',
      description: 'High-quality product showcase with 3D animations and professional color grading.',
      image: '📦',
      tags: ['4K Editing', 'Color Grading', 'VFX'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'VFX Commercial',
      category: 'vfx',
      description: 'Creative commercial with advanced visual effects and compositing.',
      image: '✨',
      tags: ['3D Modeling', 'Compositing', 'Motion Graphics'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Interactive Portfolio',
      category: 'development',
      description: 'Fully responsive interactive portfolio website with animations and modern design.',
      image: '💻',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      category: 'development',
      description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin panel.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'development',
      description: 'Advanced analytics dashboard with real-time data visualization and performance monitoring.',
      image: '📊',
      tags: ['React', 'D3.js', 'WebSocket'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Visual Effects Demo',
      category: 'vfx',
      description: 'Showcase of advanced VFX techniques including tracking, keying, and particle effects.',
      image: '🌌',
      tags: ['Motion Tracking', 'Keying', 'Particles'],
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Brand Content Series',
      category: 'video',
      description: 'Series of professional brand content videos with consistent visual identity.',
      image: '🎥',
      tags: ['Video Editing', 'Branding', 'Motion Graphics'],
      link: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'Animation Studio',
      category: 'development',
      description: 'Interactive animation portfolio showcasing creative web animations and transitions.',
      image: '🎨',
      tags: ['Animation', 'JavaScript', 'Canvas API'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'video', label: 'Video Editing' },
    { id: 'vfx', label: 'VFX & Animation' },
    { id: 'development', label: 'Development' }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Page Header */}
      <section className="relative py-20 px-4 md:px-10 border-b border-cyber-cyan/30">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-10 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl"
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
              <span className="text-cyber-magenta text-glow-magenta">PORTFOLIO</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyber-magenta to-cyber-cyan mx-auto mb-6"></div>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto">
              Showcase of my latest work spanning video editing, visual effects, and web development. Each project represents dedication to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-4 md:px-10 border-b border-cyber-cyan/20">
        <div className="container-cyber">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 md:gap-4 justify-center items-center"
          >
            <FiFilter className="text-cyber-cyan text-glow-cyan hidden md:block" size={20} />
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2 rounded-sm font-orbitron font-bold uppercase tracking-wider transition-all duration-300 border clip-diagonal ${
                  activeFilter === cat.id
                    ? 'bg-cyber-cyan text-cyber-dark border-cyber-cyan text-glow-cyan'
                    : 'border-cyber-cyan/50 text-cyber-cyan/70 hover:border-cyber-cyan hover:text-cyber-cyan'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-sm"
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full p-6 border border-cyber-cyan/30 bg-cyber-gray/20 backdrop-blur-sm hover:border-cyber-cyan/60 transition-all duration-300">
                  {/* linear overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 rounded-sm mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl">{project.image}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-xs px-3 py-1 bg-cyber-magenta/30 text-cyber-magenta rounded border border-cyber-magenta/50 font-rajdhani uppercase tracking-wider">
                        {categories.find(c => c.id === project.category)?.label}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 font-rajdhani text-sm leading-relaxed mb-4 grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded border border-cyber-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 border-t border-cyber-cyan/20 pt-4">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-cyber-cyan/20 text-cyber-cyan rounded hover:bg-cyber-cyan/40 transition-colors duration-300 grow justify-center"
                      >
                        <FiExternalLink size={18} />
                        <span className="text-sm font-orbitron font-bold">View</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-cyber-magenta/20 text-cyber-magenta rounded hover:bg-cyber-magenta/40 transition-colors duration-300 grow justify-center"
                      >
                        <FiGithub size={18} />
                        <span className="text-sm font-orbitron font-bold">Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg font-rajdhani">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-10 border-t border-cyber-cyan/30">
        <div className="container-cyber text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Interested in <span className="text-cyber-cyan text-glow-cyan">Collaborating</span>?
            </h2>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto mb-8">
              Let's create something amazing together. I'm always open to new and exciting projects.
            </p>
            <CyberButton variant="primary" size="lg">
              <span className="flex items-center justify-center gap-2">
                Contact Me
              </span>
            </CyberButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
