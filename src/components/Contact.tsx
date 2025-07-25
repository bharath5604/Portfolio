import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bhaveshperumalla@gmail.com',
      link: 'mailto:bhaveshperumalla@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9100830568',
      link: 'tel:+919100830568',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India, IN',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's <span className="text-cyan-400">Connect</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're someone who has a project in mind, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Available for freelance work</span>
                </div>
                <p className="text-gray-400 mt-2">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a <span className="text-cyan-400">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;