import React, { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

// Array of roles for the typing effect
const roles = [
  "Full-Stack Developer",
  "Machine Learning Engineer"
];

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    // Wait between transitions
    if (isWaiting) {
      const waiting = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(waiting);
    }

    // Handle typing and deleting animation
    if (!isDeleting && displayText === currentRole) {
      // Once the full text is typed, wait before deleting
      setIsWaiting(true);
      return;
    } else if (isDeleting && displayText === "") {
      // Once text is deleted, move to next role
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      return;
    }

    // Set the typing speed (faster for deleting, slower for typing)
    const typingSpeed = isDeleting ? 50 : 120;
    
    const timer = setTimeout(() => {
      setDisplayText(prevText => {
        if (isDeleting) {
          return prevText.substring(0, prevText.length - 1);
        } else {
          return currentRole.substring(0, prevText.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, roleIndex, isDeleting, isWaiting]);

  // Handle button click to pause animation
  const handleButtonClick = (callback: () => void) => {
    setIsPaused(true);
    callback();
    
    // Resume animation after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  // Initial animations for elements
  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add("animate-typewriter");
      }
    }, 500);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.remove("opacity-0");
        subtitleRef.current.classList.add("animate-fade-in");
      }
    }, 2000);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.remove("opacity-0");
        ctaRef.current.classList.add("animate-fade-in");
      }
    }, 3000);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center grid-pattern">

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="mx-auto max-w-3xl flex flex-col items-start justify-center space-y-8">
          <h1 
            ref={titleRef} 
            className="typewriter font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 text-left -ml-2 sm:ml-0 pr-2"
          >
            Hello,I'm <span className="neon-text-green">Harshith</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 animate-fade-in">Crafting digital dreams with code & creativity</div>
          <div 
            ref={subtitleRef} 
            className="opacity-0 text-left mt-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full min-w-0">
              <span className="text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">On a journey to become a skilled</span>
              <div className="neon-text-cyan flex-1 min-w-0 text-2xl sm:text-3xl md:text-4xl font-medium h-16 flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="mr-2">&#123;</span>
                <span className="truncate">{displayText}</span>
                <span className="animate-blink">|</span>
                <span className="ml-2">&#125;</span>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={ctaRef} className="opacity-0 mt-14 flex flex-row flex-wrap gap-8 justify-center">
          <a 
            href="#projects" 
            className="neon-button neon-border neon-border-cyan neon-text-cyan inline-flex items-center justify-center w-64 h-16 text-xl font-bold shadow-[0_0_24px_4px_rgba(0,255,255,0.3)] hover:shadow-[0_0_32px_8px_rgba(0,255,255,0.5)] transition-shadow duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="neon-button neon-border neon-border-pink neon-text-pink inline-flex items-center justify-center w-64 h-16 text-xl font-bold shadow-[0_0_24px_4px_rgba(255,0,128,0.3)] hover:shadow-[0_0_32px_8px_rgba(255,0,128,0.5)] transition-shadow duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button neon-border neon-border-green neon-text-green inline-flex items-center justify-center w-64 h-16 text-xl font-bold gap-2 shadow-[0_0_24px_4px_rgba(0,255,128,0.3)] hover:shadow-[0_0_32px_8px_rgba(0,255,128,0.5)] transition-shadow duration-300"
          >
            <FileText size={24} />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
