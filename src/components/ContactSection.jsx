import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicRef = useRef(null);
  const form = useRef();

  useEffect(() => {
    musicRef.current = new Audio("projects/bgm.mp3");
    musicRef.current.loop = true;
  }, []);

 const toggleMusic = () => {
  if (!musicRef.current) {
    musicRef.current = new Audio("/bgm.mp3");
    musicRef.current.loop = true;
  }

  if (isMusicPlaying) {
    musicRef.current.pause();
    setIsMusicPlaying(false);
  } else {
    musicRef.current
      .play()
      .then(() => {
        setIsMusicPlaying(true);
      })
      .catch((err) => {
        console.warn("Playback failed:", err);
      });
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_7rpyg8n", "template_njo1c3m", form.current, {
        publicKey: "qDzt5avwywN9BdzrO",
      })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* 🎵 Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-white/10 border border-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition"
      >
        {isMusicPlaying ? <Volume2 /> : <VolumeX />}
      </button>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info (Glass style) */}
          <div className="space-y-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a href="mailto:suryaoff2005@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    suryaoff2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a href="tel:+916382472005" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 63824 72005
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Tamilnadu, Emur, Karur-7
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/surya-p-gojo-43b09a287/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/Surya4985014804" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/__black__dude_/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://m.facebook.com/profile.php?id=100034602818351" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Glass style) */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/20 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/20 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/20 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
