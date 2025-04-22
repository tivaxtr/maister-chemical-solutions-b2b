
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 shadow-md w-full z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary text-2xl font-extrabold tracking-tight">MAISTER</span>
            <span className="text-accent text-lg font-semibold tracking-wide">Chemical Solutions</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 bg-primary/5 rounded-full px-2 py-1 shadow-sm border border-primary/10">
            {[
              { to: "/", label: "Ana Sayfa" },
              { to: "/about", label: "Hakkımızda" },
              { to: "/blog", label: "Blog" },
              { to: "/custom-products", label: "Özel Ürünler" },
              { to: "/efficiency-projects", label: "Verimlilik Projeleri" },
              { to: "/private-label", label: "Private Label" },
              { to: "/raw-materials", label: "Hammaddeler" },
              { to: "/contact", label: "İletişim" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-1.5 rounded-full font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-150 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg border-b border-primary/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { to: "/", label: "Ana Sayfa" },
              { to: "/about", label: "Hakkımızda" },
              { to: "/blog", label: "Blog" },
              { to: "/custom-products", label: "Özel Ürünler" },
              { to: "/efficiency-projects", label: "Verimlilik Projeleri" },
              { to: "/private-label", label: "Private Label" },
              { to: "/raw-materials", label: "Hammaddeler" },
              { to: "/contact", label: "İletişim" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2 rounded font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-150"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
