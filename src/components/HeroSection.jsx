import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Surya
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              p
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development and 
          </p>

          {/* 🔽 "Who am I?" Section */}
          <div className="opacity-0 animate-fade-in-delay-4">
            <h3 className="text-2xl font-bold tracking-tight">
              <span>Who am</span>
              <span className="text-primary"> I</span>
              <span className="text-gradient ml-2">?</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              I'm <span className="font-semibold text-primary">Surya P</span>, a dedicated and aspiring technology professional from <span className="font-semibold text-primary">Karur, Tamil Nadu</span>. Currently, I’m pursuing my final year of 
              <span className="font-semibold text-primary"> B.Tech in Artificial Intelligence and Data Science</span> at Chettinad College of Engineering and Technology, Puliyur.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              With a strong interest in frontend development and intelligent systems, I strive to bridge the gap between design and functionality, creating innovative digital experiences. 
              I completed my schooling at Cheran Matric Higher Secondary School, securing <span className="font-semibold">66.6%</span> in SSLC and <span className="font-semibold">61%</span> in HSlC.
            </p>
          </div>



          {/* View My Work Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-10 md:mt-0 md:ml-8 w-full md:w-1/2 flex justify-center pt-4 opacity-0 animate-fade-in-delay-4">
          <img
            src="/projects/surya.png"
            alt="Surya"
            className="rounded-xl max-h-[450px] w-auto object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
