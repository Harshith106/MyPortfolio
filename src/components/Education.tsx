import React from "react";
import { ScrollObserver } from "./ScrollObserver";
import { GraduationCap, Calendar, Book } from "lucide-react";
import { Progress } from "./ui/progress";

// Education data
const education = [
  {
    degree: "Completed my SSC",
    years: "2019 - 2020",
    description: "Successfully completed SSC, building foundational knowledge that supported my growth in tech and problem-solving.",
    achievements: "Secured 580 marks out of 600",
    color: "neon-purple",
    icon: Book
  },
  {
    degree: "Completed my Intermediate",
    years: "2020 - 2022",
    description: "Completed my Intermediate with a strong foundation in mathematics and science, which sparked my interest in problem-solving and technology.",
    achievements: "Secured 93% in Intermediate",
    color: "neon-cyan",
    icon: Calendar
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    years: "2022 - 2026",
    description: "Currently pursuing B.Tech in Computer Science and Engineering, focusing on building a strong foundation in computer science and engineering.",
    achievements: "Secured 9.4 CGPA in upto third year",
    color: "neon-green",
    icon: GraduationCap
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollObserver animation="slide-up">
          <h2 className="section-heading neon-text-cyan text-center">Education</h2>
        </ScrollObserver>
        
        <div className="mt-16 relative">
          <div className="absolute left-[15px] md:left-1/2 md:transform md:-translate-x-[0.5px] top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-green opacity-90 shadow-[0_0_24px_8px_rgba(0,255,128,0.7)] md:shadow-[0_0_32px_12px_rgba(0,255,255,0.7)]"></div>
          
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`relative mb-24 flex flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot - precisely aligned for both mobile and desktop */}
              <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-neon-cyan shadow-[0_0_10px_#00FFFF] z-10"></div>
              
              {/* Content - adjusted for mobile and desktop */}
              <ScrollObserver animation={index % 2 === 0 ? "slide-right" : "slide-left"} delay={0.2}>
                <div className={`w-[85%] ml-[40px] ${index === 0 ? 'md:w-[48%]' : 'md:w-[45%]'} ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`project-card bg-card/50 backdrop-blur-sm border-${item.color} hover:border-${item.color} p-10 rounded-2xl transition-all duration-300 group ${index === 0 ? 'shadow-[0_0_15px_rgba(138,43,226,0.5)] hover:shadow-[0_0_25px_rgba(138,43,226,0.7)]' : ''}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-5 rounded-xl bg-${item.color}/20 text-${item.color}`}>
                        <item.icon className="w-8 h-8 animate-pulse-glow" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold font-orbitron text-${item.color}`}>{item.degree}</h3>
                        <p className="text-lg text-muted-foreground">{item.institution}</p>
                        <p className="text-base text-muted-foreground mt-1">{item.years}</p>
                      </div>
                    </div>
                    
                    <ScrollObserver animation="fade-in" delay={0.4}>
                      <p className="text-lg mb-4">{item.description}</p>
                      <p className="text-lg font-medium">{item.achievements}</p>
                    </ScrollObserver>
                  </div>
                </div>
              </ScrollObserver>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
