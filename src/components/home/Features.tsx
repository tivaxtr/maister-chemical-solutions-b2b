import { CheckCircle, TrendingUp, Users, Award, Leaf, ShieldCheck, Sparkles, Globe2 } from "lucide-react";

const features = [
  {
    title: "Özel Formülasyon",
    description: "Firmanızın ihtiyaçlarına özel olarak geliştirdiğimiz kimyasal çözümler ile rekabet avantajı elde edin.",
    icon: CheckCircle,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Verimlilik Artışı",
    description: "Özel kimyasal çözümlerimiz sayesinde üretim süreçlerinizi optimize ederek verimliliği artırın.",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Marka Değeri",
    description: "Kendi markanızla özel üretim kimyasal ürünler sayesinde müşterilerinize özel hizmet sunun.",
    icon: Users,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Kalite Garantisi",
    description: "Tüm ürünlerimiz uluslararası standartlara uygun olarak üretilmekte ve sertifikalandırılmaktadır.",
    icon: Award,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Çevre Dostu Üretim",
    description: "Sürdürülebilirlik ve çevreye duyarlılık, tüm üretim süreçlerimizin merkezindedir.",
    icon: Leaf,
    color: "from-emerald-400 to-emerald-600"
  },
  {
    title: "Güvenilirlik ve Destek",
    description: "Her zaman ulaşılabilir teknik destek ve çözüm odaklı yaklaşım.",
    icon: ShieldCheck,
    color: "from-sky-400 to-sky-600"
  },
  {
    title: "Yenilikçi Teknoloji",
    description: "Ar-Ge ve inovasyon ile sektörde öncü çözümler.",
    icon: Sparkles,
    color: "from-pink-400 to-pink-600"
  },
  {
    title: "Global Standartlar",
    description: "Ulusal ve uluslararası kalite standartlarına tam uyum.",
    icon: Globe2,
    color: "from-indigo-400 to-indigo-600"
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-primary/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight drop-shadow">Neden Maister Chemical Solutions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizin kimyasal ihtiyaçlarını en üst düzeyde karşılayan, sürdürülebilir ve yenilikçi çözümler.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={
                `relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`mb-5 rounded-full p-4 bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
