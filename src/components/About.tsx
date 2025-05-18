import React from "react";
import { ScrollObserver } from "./ScrollObserver";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mt-12">
          <div className="space-y-6">
            <ScrollObserver animation="slide-up">
              <h2 className="section-heading neon-text-green text-center">About Me</h2>
            </ScrollObserver>
            
            <ScrollObserver animation="fade-in">
              <p className="text-lg">
                Hello! I'm <span className="neon-text-green font-semibold">Harshith</span>, I’m deeply interested in the world of machine learning and artificial intelligence — from building models to understanding how smart systems learn.
              </p>
            </ScrollObserver>
            
            <ScrollObserver animation="fade-in" delay={0.2}>
              <p>
              I’m also exploring full-stack development to connect the logic of AI with intuitive user experiences.
              Outside of tech, I enjoy chess and strategy games, which help me stay sharp and think critically.
              </p>
            </ScrollObserver>
            
            <ScrollObserver animation="fade-in" delay={0.4}>
              <p>
                I'm looking forward to for oppertunities to work on real-world projects and learn from experienced professionals.
              </p>
            </ScrollObserver>
            
            <ScrollObserver animation="zoom-in" delay={0.6}>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">Problem Solver</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/30">Tech Enthusiast</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-neon-pink/10 text-neon-pink border border-neon-pink/30">Continuous Learner</span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-neon-green/10 text-neon-green border border-neon-green/30">Time Management</span>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
