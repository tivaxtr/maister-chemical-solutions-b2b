const services = [
  {
    title: "Su Şartlandırma Kimyasalları",
    description: "Korozyon önleyici, biyosit, antiskalant ve proses suyu çözümleri."
  },
  {
    title: "Tekstil Kimyasalları",
    description: "Egalizatör, yumuşatıcı, yağ sökücü, antistatik ve leke sökücü ürünler."
  },
  {
    title: "Endüstriyel Temizlik & Bakım",
    description: "Yağ, gres, karbon, pas ve kireç sökücüler, hijyen ve bakım kimyasalları."
  },
  {
    title: "Oto Bakım & Halı Yıkama",
    description: "Oto bakım ürünleri, halı yıkama şampuanları, leke sökücüler ve parfümler."
  },
  {
    title: "Tutkallar & Özel Kimyasallar",
    description: "Mobilya tutkalları, hızlı yapıştırıcılar, panel temizleyiciler ve daha fazlası."
  },
  {
    title: "Endüstriyel Kimyasallar & Yağlar",
    description: "MEG, asitler, solventler, yağlar, gresler ve katkı maddeleri."
  }
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">Profesyonel Kimyasal Çözümlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sektörel ihtiyaçlara özel, yenilikçi ve güvenilir kimyasal ürün gruplarımız.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="rounded-xl bg-white/90 border border-primary/10 shadow-sm p-6 flex flex-col items-start hover:shadow-lg transition-shadow h-full">
              <div className="flex items-center mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 animate-pulse"></span>
                <h3 className="text-lg font-semibold text-primary mb-0">{service.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
