
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const features = [
  {
    title: "Özel Formülasyon",
    description: "Firmanızın ihtiyaçlarına özel olarak geliştirdiğimiz kimyasal çözümler ile rekabet avantajı elde edin.",
    icon: CheckCircle,
  },
  {
    title: "Verimlilik Artışı",
    description: "Özel kimyasal çözümlerimiz sayesinde üretim süreçlerinizi optimize ederek verimliliği artırın.",
    icon: TrendingUp,
  },
  {
    title: "Marka Değeri",
    description: "Kendi markanızla özel üretim kimyasal ürünler sayesinde müşterilerinize özel hizmet sunun.",
    icon: Users,
  },
  {
    title: "Kalite Garantisi",
    description: "Tüm ürünlerimiz uluslararası standartlara uygun olarak üretilmekte ve sertifikalandırılmaktadır.",
    icon: Award,
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neden Maister Chemical Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizin kimyasal ihtiyaçlarını en üst düzeyde karşılayan özel çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-5">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
