
import React from "react";
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-muted relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground/60">
              © {new Date().getFullYear()} Harshith. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Harshith106"
              className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center transition-colors duration-300 hover:bg-neon-cyan/20 hover:text-neon-cyan"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/TheCosmicBoy123"
              className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center transition-colors duration-300 hover:bg-neon-pink/20 hover:text-neon-pink"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/p-harshith-09b357354/"
              className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center transition-colors duration-300 hover:bg-neon-purple/20 hover:text-neon-purple"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-neon-green/20 text-neon-green flex items-center justify-center neon-border neon-border-green transition-transform duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
