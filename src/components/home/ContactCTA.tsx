
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          İşletmenize Özel Kimyasal Çözümler İçin Hemen İletişime Geçin
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Uzman ekibimiz, işletmenizin ihtiyaçlarına en uygun kimyasal çözümleri geliştirmek için yanınızda.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-shadow inline-block"
        >
          Bizimle İletişime Geçin
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
