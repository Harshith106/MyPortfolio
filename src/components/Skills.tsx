import React from "react";
import { ScrollObserver } from "./ScrollObserver";
import { SiPython, SiTensorflow, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: "cyan" | "green" | "pink" | "purple" | "yellow" | "red" | "orange";
  level: number;
};

const skills: Skill[] = [
  {
    name: "Python",
    icon: <SiPython className="w-10 h-10" />,
    color: "yellow",
    level: 90,
  },
  {
    name: "Java",
    icon: <FaJava className="w-10 h-10" />,
    color: "red",
    level: 80,
  },
  {
    name: "HTML/CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    color: "purple",
    level: 95,
  },
  {
    name: "React",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 animate-spin-slow">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    color: "cyan",
    level: 85,
  },
  {
    name: "TensorFlow/ML",
    icon: <SiTensorflow className="w-10 h-10" />,
    color: "orange",
    level: 75,
  },
  {
    name: "SQL",
    icon: <SiMysql className="w-10 h-10" />,
    color: "pink",
    level: 85,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-background/70">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollObserver animation="slide-up">
          <h2 className="section-heading text-neon-cyan text-center">My Skills</h2>
        </ScrollObserver>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollObserver animation="rotate-in" delay={index * 0.1} key={skill.name} threshold={0.2}>
              <div className={`skill-item group`} style={{
                color: `var(--neon-${skill.color})`,
                textShadow: `0 0 5px var(--neon-${skill.color}), 0 0 10px var(--neon-${skill.color}), 0 0 20px var(--neon-${skill.color})`
              }}>
                <div className="mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">{skill.name}</h3>
                <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full animate-pulse-glow w-0"
                    style={{ 
                      width: '0%',
                      animation: `growWidth 1.5s ease-out forwards ${index * 0.2}s`,
                      animationFillMode: 'forwards',
                      backgroundColor: `var(--neon-${skill.color})`,
                      boxShadow: `0 0 10px var(--neon-${skill.color})`
                    }}
                    data-width={`${skill.level}%`}
                  />
                </div>
              </div>
            </ScrollObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
