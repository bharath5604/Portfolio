import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Car Spare Parts and Service Booking',
      category: 'Web App',
      image: '/spareparts.jpeg',
      description: 'A web application that displays car spare parts from a database. The application features a front end to view products and a back end to manage products and service bookings.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      liveUrl: '#',
      githubUrl: 'https://github.com/yourusername/car-parts-booking-system'
    },
    {
      id: 2,
      title: 'Student Assessment Portal',
      category: 'Web App',
      image: '/assessment.jpeg',
      description: 'A comprehensive web application for students to take assessment tests based on their chosen engineering branch. Features user authentication, timed quizzes, and college recommendations based on test scores.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'bcrypt', 'JWT', 'Cors'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bharath5604/student-assessment-portal'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A responsive portfolio website with modern design and animations',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/bharath5604/Portfolio'
    },
   {
  id: 4,
  title: "AI-Based Chest X-Ray Diagnosis",
  category: "AI / Web App",
  image: "/chestxray.jpeg",
  description: "A multi-role web application for medical diagnosis. Doctors can sign up, log in, and upload patient chest X-ray images (JPG, PNG, DICOM) to receive an AI-powered diagnosis for conditions like COVID, Pneumonia, and more. The app generates a Grad-CAM heatmap to visualize the model's focus and produces a downloadable PDF report for each patient. It also includes a dashboard for doctors to view their patient analytics. An admin role provides a system-wide dashboard to monitor doctor activity and export consolidated patient data reports in Excel and PDF formats.",
  technologies: [
    "Python",
    "Streamlit",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Pydicom",
    "Pandas",
    "MySQL",
    "SQLAlchemy",
    "Plotly"
  ],
  liveUrl: "#",
  githubUrl: "#"
  },
    {
  id: 5,
  title: "Certificate OCR Extractor",
  category: "Web App",
  image: "/scanner.png",
  description: "A web application that automates the extraction of information from certificate images. Users can upload a certificate, and the backend (built with Node.js) preprocesses the image for clarity using the 'sharp' library. It then employs Tesseract.js for Optical Character Recognition (OCR) to read the text. Finally, it uses regular expressions to parse and extract key details like student name, organization, certificate type, and duration, returning the structured data to the user.",
  technologies: [
    "Node.js",
    "Express.js",
    "Tesseract.js",
    "Sharp",
    "Multer",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  liveUrl: "#",
  githubUrl: "https://github.com/bharath5604/Certificate-Scanner"
},
{
  id: 6,
  title: "Flood Relief Fund Website",
  category: "Web App",
  image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "A full-stack web application designed for a flood relief fundraising campaign. The site features a homepage with an image slider and a real-time display of total funds collected. Users can submit donations through a dedicated form, and the backend, built with Node.js and Express, securely records the transaction in a MongoDB database. Upon successful donation, the system automatically sends a personalized thank-you email to the donor using Nodemailer. The application also includes a contact form for inquiries.",
  technologies: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Nodemailer",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  liveUrl: "#",
  githubUrl: "#"
},
{
  id: 7,
  title: "Furniture Expenditure Calculator",
  category: "Web App / Utility",
  image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "A client-side web application designed to calculate furniture costs for multiple rooms. Users can dynamically add rooms and furniture items, input dimensions (length, width), rate, and quantity. The app automatically calculates the square footage, total cost per item, the subtotal for each room, and a final grand total including a user-defined GST percentage. It provides an organized way to budget for furniture expenses.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  liveUrl: "#",
  githubUrl: "https://github.com/bharath5604/House-Construction-Expenditure-Calculator"
}
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Website'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Filter size={16} />
                <span>{category}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"                   
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md hover:bg-slate-600/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;