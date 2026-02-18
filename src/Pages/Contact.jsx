import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CyberButton from '../Components/CyberButton';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'pranish@example.com',
      link: 'mailto:pranish@example.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Remote | Available Worldwide',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn', url: '#', color: 'cyan' },
    { icon: FiGithub, label: 'GitHub', url: '#', color: 'magenta' },
    { icon: FiTwitter, label: 'Twitter', url: '#', color: 'yellow' },
    { icon: FiInstagram, label: 'Instagram', url: '#', color: 'cyan' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Page Header */}
      <section className="relative py-20 px-4 md:px-10 border-b border-cyber-cyan/30">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
            className="absolute top-10 left-10 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
            transition={{ duration: 35, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl"
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
              <span className="text-cyber-magenta text-glow-magenta">GET IN TOUCH</span>
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-cyber-magenta to-cyber-cyan mx-auto mb-6"></div>
            <p className="text-white/70 font-rajdhani text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="container-cyber">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-orbitron font-bold text-cyber-cyan text-glow-cyan mb-8">
                Contact Info
              </h2>

              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={method.link}
                    className="group flex items-start gap-4 p-4 rounded-sm border border-cyber-cyan/30 bg-cyber-gray/20 backdrop-blur-sm hover:border-cyber-cyan/60 transition-all duration-300"
                  >
                    <div className="shrink-0 mt-1">
                      <Icon className="text-cyber-cyan text-glow-cyan text-2xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-orbitron font-bold mb-1">{method.label}</h3>
                      <p className="text-white/60 font-rajdhani text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8">
                <h3 className="text-xl font-orbitron font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    const colorClass = social.color === 'cyan' ? 'text-cyber-cyan hover:text-glow-cyan' : 
                                      social.color === 'magenta' ? 'text-cyber-magenta hover:shadow-[0_0_10px_rgba(255,0,255,0.5)]' :
                                      'text-cyber-yellow';
                    return (
                      <motion.a
                        key={idx}
                        href={social.url}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-sm border border-cyber-cyan/30 bg-cyber-gray/30 hover:border-current transition-all duration-300 ${colorClass}`}
                        title={social.label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-sm border border-cyber-magenta/30 bg-cyber-gray/20 backdrop-blur-sm">
                <h2 className="text-3xl font-orbitron font-bold text-cyber-magenta text-glow-magenta mb-8">
                  Send Me a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan mb-2">Message Sent!</h3>
                    <p className="text-white/60 font-rajdhani">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-rajdhani font-bold mb-2 text-sm">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 text-white rounded-sm focus:border-cyber-cyan focus:outline-none transition-colors duration-300 font-rajdhani"
                        placeholder="Your name"
                      />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 }}
                    >
                      <label className="block text-white font-rajdhani font-bold mb-2 text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 text-white rounded-sm focus:border-cyber-cyan focus:outline-none transition-colors duration-300 font-rajdhani"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    {/* Subject Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-white font-rajdhani font-bold mb-2 text-sm">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 text-white rounded-sm focus:border-cyber-cyan focus:outline-none transition-colors duration-300 font-rajdhani"
                        placeholder="Project inquiry"
                      />
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-white font-rajdhani font-bold mb-2 text-sm">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-cyan/30 text-white rounded-sm focus:border-cyber-cyan focus:outline-none transition-colors duration-300 font-rajdhani resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <CyberButton variant="primary" size="lg" type="submit" className="w-full">
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                        </span>
                      </CyberButton>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="relative py-20 px-4 md:px-10 border-t border-cyber-cyan/30">
        <div className="container-cyber">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-center"
          >
            <span className="text-cyber-cyan text-glow-cyan">Frequently Asked Questions</span>
          </motion.h2>
          <div className="h-1 w-32 bg-linear-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is your typical project turnaround time?',
                a: 'Project timelines vary depending on scope and complexity. I usually provide estimates within 24-48 hours of initial consultation.'
              },
              {
                q: 'Do you offer revision rounds?',
                a: 'Yes, I include 2-3 revision rounds in most projects. Additional revisions are available at a reasonable rate.'
              },
              {
                q: 'What is your payment process?',
                a: 'I typically require 50% upfront and 50% upon project completion. Payment plans can be arranged for larger projects.'
              },
              {
                q: 'Can you work with existing code?',
                a: 'Absolutely! I regularly work with existing codebases, improve performance, and implement new features.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-cyber-cyan/30 rounded-sm bg-cyber-gray/20 backdrop-blur-sm hover:border-cyber-cyan/60 transition-all duration-300"
              >
                <h3 className="text-lg font-orbitron font-bold text-cyber-magenta mb-3">{faq.q}</h3>
                <p className="text-white/60 font-rajdhani text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
