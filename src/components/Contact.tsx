import React, { useState } from "react";
import { ScrollObserver } from "./ScrollObserver";
import { Mail, MapPin, Send, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_1ca02vr',
        'template_2t2x10f',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'mIC6uApiK_MjhcHtO'
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-background/70 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollObserver>
          <h2 className="section-heading neon-text-purple text-center">Contact Me</h2>
        </ScrollObserver>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <ScrollObserver>
            <div className="space-y-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Get In Touch</h3>
              
              <p className="text-foreground/80">
                I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center neon-border neon-border-purple">
                    <Mail size={20} className="text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:hello@example.com" className="text-neon-purple hover:underline">
                      ph2241484@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-0">
                  {/* X (Twitter) */}
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center neon-border neon-border-cyan">
                      <Twitter size={20} className="text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-medium">X (Twitter)</h4>
                      <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        @TheCosmicBoy123
                      </a>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="flex items-center gap-4 py-3">
                    <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center neon-border neon-border-pink">
                      <Instagram size={20} className="text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:underline">
                        @harshith_._106
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center neon-border neon-border-green">
                    <MapPin size={20} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-neon-green">
                      Andhra pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollObserver>
          
          <ScrollObserver delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="neon-input w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="neon-input w-full"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="neon-input w-full h-32 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="neon-button neon-border neon-border-purple neon-text-purple flex items-center gap-2 justify-center w-full"
                disabled={isSubmitting}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </ScrollObserver>
        </div>
      </div>
    </section>
  );
};

export default Contact;
