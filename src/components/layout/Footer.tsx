
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MAISTER Chemical Solutions</h3>
            <p className="mb-4">
              Şirketlere özel kimyasal çözümler sunarak verimliliği ve karlılığı artırıyoruz.
            </p>
            <div className="flex items-center mt-4">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@beijchemicals.com</span>
            </div>
            <div className="flex items-center mt-2">
              <Phone className="h-5 w-5 mr-2" />
              <span>+90 (532) 131 95 95</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/custom-products" className="hover:underline">Özel Ürünler</Link>
              </li>
              <li>
                <Link to="/efficiency-projects" className="hover:underline">Verimlilik Projeleri</Link>
              </li>
              <li>
                <Link to="/private-label" className="hover:underline">Private Label</Link>
              </li>
              <li>
                <Link to="/raw-materials" className="hover:underline">Hammaddeler</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">İletişim</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Maister'i Keşfedin</h3>
            <p className="mb-4">
              Endüstriyel kimya konusunda uzman çözüm ortağınız. İnovasyon ve kalite odaklı çözümler.
            </p>
            <p>
              Adres: Cumhuriyet Mah. Okul Cad. No:40 İç Kapı No:2 <br />
              Kartal, İstanbul, Türkiye
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Maister Chemical Solutions. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
