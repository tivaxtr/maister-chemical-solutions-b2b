
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Şirketinize Özel Kimyasal Çözümler
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Rekabet avantajı sağlayan, markanızı güçlendiren ve maliyetlerinizi düşüren özel
              kimyasal formüller ile işletmenizi ileriye taşıyın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/custom-products"
                className="bg-white text-primary font-medium px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow"
              >
                Özel Ürünlerimiz
              </Link>
              <Link
                to="/contact"
                className="bg-accent text-white font-medium px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow"
              >
                Hemen İletişime Geçin
              </Link>
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
