import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Brain, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="card-glow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Building intelligent models for sentiment analysis, classification, and predictive systems.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Cpu className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Embedded Systems</h3>
              <p className="text-muted-foreground text-sm">
                TinyML deployment on ESP32, STM32 microcontrollers with IoT integration.
              </p>
            </motion.div>

            <motion.div
              className="card-glow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Applications</h3>
              <p className="text-muted-foreground text-sm">
                RAG systems, NLP pipelines, and real-world AI solutions with practical impact.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a final-year Electronics Engineering student at{" "}
            <span className="text-foreground font-medium">YCCE, Nagpur</span>, passionate about 
            building intelligent solutions that combine AI and IoT. My projects range from 
            Smart Helmets with AI-based monitoring to Flask-based dashboards with real-time analytics. 
            With a strong foundation in embedded systems and applied machine learning, I aim to create 
            <span className="text-primary"> impactful, real-world technologies</span> that bridge 
            innovation with usability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;