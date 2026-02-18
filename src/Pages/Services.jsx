import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../Components/CyberButton';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Video Editing',
      description: 'Professional video editing with cutting-edge techniques and creative storytelling.',
      icon: '📹',
      features: [
        ' 4K/8K video editing',
        'Color grading & correction',
        'Motion graphics & animations',
        'Audio mixing & mastering',
        'Multi-camera editing',
        'Subtitle & caption design'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Front-End Development',
      description: 'Modern, responsive, and performant web applications built with latest technologies.',
      icon: '💻',
      features: [
        'React.js development',
        'UI/UX implementation',
        'Responsive design',
        'Animation & interactions',
        'Performance optimization',
        'Cross-browser compatibility'
      ],
      price: 'From $2000'
    },
    {
      title: 'Web Design',
      description: 'Custom web design focusing on user experience and modern aesthetics.',
      icon: '🎨',
      features: [
        'UI/UX design',
        'Wireframing',
        'Prototyping',
        'Visual design',
        'Brand identity',
        'Design systems'
      ],
      price: '$1500+'
    },
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

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Page Header */}
      <section className="relative py-20 px-4 md:px-10 border-b border-cyber-cyan/30">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ x: [0, 20, 0], y: [-20, 20, -20] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-10 left-10 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl"
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
              <span className="text-cyber-cyan text-glow-cyan">SERVICES</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-6"></div>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto">
              Comprehensive creative and development solutions tailored to your unique needs. From concept to execution, I deliver excellence across all disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group h-full"
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 rounded-sm border border-cyber-cyan/30 bg-cyber-gray/20 backdrop-blur-sm h-full flex flex-col hover:border-cyber-cyan/60 transition-all duration-300">
                  {/* linear overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-5xl mb-4 block">{service.icon}</span>
                      <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan text-glow-cyan mb-2">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-white/70 font-rajdhani mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 grow">
                      <ul className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3 text-white/60 text-sm">
                            <FiCheck className="text-cyber-cyan mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="border-t border-cyber-cyan/20 pt-4 flex items-center justify-between">
                      <span className="font-orbitron font-bold text-cyber-magenta">{service.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-4 md:px-10 border-t border-cyber-cyan/30">
        <div className="container-cyber">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-center"
          >
            <span className="text-cyber-cyan text-glow-cyan">How I Work</span>
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Strategy', desc: 'Planning the perfect approach and timeline' },
              { step: '03', title: 'Execution', desc: 'Bringing the vision to life with precision' },
              { step: '04', title: 'Delivery', desc: 'Final polish and seamless handoff' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="p-6 border border-cyber-magenta/30 rounded-sm bg-cyber-dark/50 backdrop-blur-sm">
                  <div className="text-4xl font-orbitron font-bold text-cyber-magenta mb-3">{item.step}</div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 font-rajdhani text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-cyber-magenta to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Let's Create Something <span className="text-cyber-cyan text-glow-cyan">Extraordinary</span>
            </h2>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto mb-8">
              Ready to elevate your project? Let's discuss how we can work together to achieve your goals.
            </p>
            <CyberButton variant="primary" size="lg">
              <span className="flex items-center justify-center gap-2">
                Start Your Project <FiArrowRight />
              </span>
            </CyberButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
