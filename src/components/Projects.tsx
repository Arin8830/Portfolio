import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, MessageSquare, HardHat, Dna } from "lucide-react";

const projects = [
  {
    title: "YouTube RAG Bot",
    description: "Retrieval-Augmented Generation chatbot that answers student queries using YouTube video transcripts. Built with free embedding models and lightweight LLMs for efficient semantic search.",
    tech: ["Python", "LangChain", "Streamlit", "RAG", "LLMs"],
    icon: MessageSquare,
    color: "primary",
    github: "https://github.com/Arin8830/RAG_Study_bot",
  },
  {
    title: "Smart Mining Helmet",
    description: "IoT-based smart helmet with gas, temperature, humidity sensors, GPS, and ESP32. Uses ML models to predict environment safety and miner drowsiness in real-time.",
    tech: ["ESP32", "IoT", "Machine Learning", "Sensors", "Python"],
    icon: HardHat,
    color: "accent",
    github: null,
  },
  {
    title: "Sentiment Analysis - IMDb",
    description: "NLP project analyzing 50,000 IMDb reviews with tokenization, TF-IDF vectorization, and ML models for sentiment classification with high accuracy.",
    tech: ["NLP", "Python", "Scikit-learn", "TF-IDF"],
    icon: Brain,
    color: "primary",
    github: "https://github.com/Arin8830/IMB-Movie-Reviews",
  },
  {
    title: "Genome Sequencing Analysis",
    description: "Analyzed genome data to identify genetic patterns and biomarkers. Developed pipelines for data preprocessing and visualization to support genomic research.",
    tech: ["Python", "RDKIT", "Data Analysis", "Bioinformatics"],
    icon: Dna,
    color: "accent",
    github: null,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12 max-w-4xl mx-auto">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card-glow p-6 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon 
                    className={`w-10 h-10 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} 
                  />
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://www.kaggle.com/arin8830/code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono text-sm"
            >
              View more on Kaggle
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;