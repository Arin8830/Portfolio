import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Electronics Engineering",
    institution: "Yashwantrao Chavan College of Engineering (YCCE)",
    period: "2022 - 2026",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dharampeth M.P. Deo Memorial Science College",
    period: "2020 - 2022",
    score: "65%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ashirvad English High School",
    period: "2019 - 2020",
    score: "84.20%",
  },
];

const achievements = [
  "604th out of 4329 participants in Kaggle Competition",
  "Open Source Developer at Kaggle (June 2025 - Present)",
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Education & Achievements</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-mono text-lg">Education</h3>
              </div>
              
              <div className="relative pl-6 border-l border-border">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    className="relative mb-8 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className={`absolute -left-[25px] w-3 h-3 rounded-full border-2 ${edu.current ? 'bg-primary border-primary animate-pulse-glow' : 'bg-background border-muted-foreground'}`} />
                    
                    <div className="card-glow p-4">
                      <span className="font-mono text-primary text-xs">{edu.period}</span>
                      <h4 className="font-semibold mt-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                      {edu.score && (
                        <span className="inline-block mt-2 px-2 py-1 bg-secondary rounded text-xs font-mono">
                          {edu.score}
                        </span>
                      )}
                      {edu.current && (
                        <span className="inline-block mt-2 px-2 py-1 bg-primary/20 text-primary rounded text-xs font-mono">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-accent" />
                <h3 className="font-mono text-lg">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 card-glow"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;