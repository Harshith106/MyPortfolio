
import React, { useEffect, useRef } from "react";

type ScrollObserverProps = {
  children: React.ReactNode;
  delay?: number;
  animation?: "fade-in" | "slide-up" | "slide-right" | "slide-left" | "zoom-in" | "rotate-in";
  threshold?: number;
};

export const ScrollObserver: React.FC<ScrollObserverProps> = ({ 
  children, 
  delay = 0, 
  animation = "fade-in",
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const target = entry.target as HTMLElement;
              
              // Base class for all animations
              target.classList.remove("opacity-0");
              
              // Apply specific animation classes based on animation prop
              switch (animation) {
                case "fade-in":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("translate-y-10");
                  break;
                case "slide-up":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("translate-y-16");
                  break;
                case "slide-right":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("-translate-x-16");
                  break;
                case "slide-left":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("translate-x-16");
                  break;
                case "zoom-in":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("scale-90");
                  break;
                case "rotate-in":
                  target.classList.add("animate-fade-in");
                  target.classList.remove("rotate-12", "scale-90");
                  break;
                default:
                  target.classList.add("animate-fade-in");
                  target.classList.remove("translate-y-10");
              }
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);
  
  // Apply initial classes based on animation type
  const getInitialClasses = () => {
    let classes = "opacity-0 ";
    
    switch (animation) {
      case "fade-in":
        classes += "translate-y-10";
        break;
      case "slide-up":
        classes += "translate-y-16";
        break;
      case "slide-right":
        classes += "-translate-x-16";
        break;
      case "slide-left":
        classes += "translate-x-16";
        break;
      case "zoom-in":
        classes += "scale-90";
        break;
      case "rotate-in":
        classes += "rotate-12 scale-90";
        break;
      default:
        classes += "translate-y-10";
    }
    
    return classes;
  };
  
  return (
    <div ref={ref} className={`transition-all duration-700 ${getInitialClasses()}`}>
      {children}
    </div>
  );
};
