
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary text-2xl font-bold">MAISTER</span>
              <span className="text-accent ml-1 text-lg">Chemical Solutions</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link to="/custom-products" className="text-foreground hover:text-primary font-medium transition-colors">
              Özel Ürünler
            </Link>
            <Link to="/efficiency-projects" className="text-foreground hover:text-primary font-medium transition-colors">
              Verimlilik Projeleri
            </Link>
            <Link to="/private-label" className="text-foreground hover:text-primary font-medium transition-colors">
              Private Label
            </Link>
            <Link to="/raw-materials" className="text-foreground hover:text-primary font-medium transition-colors">
              Hammaddeler
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
              İletişim
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/custom-products" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Özel Ürünler
            </Link>
            <Link 
              to="/efficiency-projects" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Verimlilik Projeleri
            </Link>
            <Link 
              to="/private-label" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Private Label
            </Link>
            <Link 
              to="/raw-materials" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              Hammaddeler
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
