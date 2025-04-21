import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center text-center py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/90 via-primary/60 to-accent/80 opacity-80 blur-[2px] z-0 animate-gradient-x" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block bg-white/80 text-primary font-semibold px-4 py-2 rounded-full shadow mb-6 tracking-wide animate-fade-in">
              Maister, BEJ Kimya'nın alt markasıdır
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in">
              Kimyanın Evrensel Diliyle <span className="text-accent">Yanınızdayız</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto animate-fade-in delay-100">
              Siz İsteyin, Biz Çözüm Üretelim.<br/>
              <span className="block mt-2 text-base text-white/80">www.bej.com.tr &nbsp;|&nbsp; info@bej.com.tr &nbsp;|&nbsp; (224) 411 15 68</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-200">
              <span className="inline-flex items-center bg-accent text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-accent/90 transition-colors">
                Yenilikçi Kimyasal Çözümler
              </span>
              <span className="inline-flex items-center bg-white/90 text-primary font-semibold px-5 py-2 rounded-full shadow hover:bg-primary/90 hover:text-white transition-colors">
                Sürdürülebilirlik & Güven
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
        >
          <defs>
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              patternTransform="scale(8) rotate(45)"
            >
              <circle cx="50" cy="50" r="10" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
