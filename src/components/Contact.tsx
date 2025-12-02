import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-mono text-primary text-sm">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Get In Touch</h2>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi — 
            I'll do my best to get back to you!
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">arinsaynere@gmail.com</span>
            </div>
            <span className="hidden sm:block text-border">|</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">Nagpur, Maharashtra, India</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:arinsaynere@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:glow-primary transition-all duration-300 font-semibold"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
            
            <div className="flex gap-3">
              <a
                href="https://github.com/Arin8830"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arin-saynere/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;