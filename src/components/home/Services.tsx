
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Özel Kimyasal Ürünler",
    description: "Şirketinize özel rengi, kokusu ve etiketinde logonuz olan kimyasal çözümler geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "/custom-products"
  },
  {
    title: "Verimlilik Projeleri",
    description: "Şirketinizin verimliliğini ve karlılığını artırmak için özel kimyasal çözümler sunuyoruz.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "/efficiency-projects"
  },
  {
    title: "Private Label Projeleri",
    description: "Kendi markanızla pazara sunabileceğiniz özel kimyasal ürünler üretiyoruz.",
    image: "https://images.unsplash.com/photo-1602665742701-389671bc40c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "/private-label"
  },
  {
    title: "Hammadde Satışları",
    description: "Yüksek kaliteli kimyasal hammaddeleri rekabetçi fiyatlarla tedarik ediyoruz.",
    image: "https://images.unsplash.com/photo-1602928301882-3ef98dc8399d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    link: "/raw-materials"
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profesyonel Kimyasal Çözümlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizi bir adım ileri taşıyacak özel kimyasal çözümlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4 line-clamp-2">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-white hover:text-accent transition-colors"
                >
                  <span>Daha Fazla Bilgi</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
