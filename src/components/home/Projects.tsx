import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Droplet, Bolt } from "lucide-react";

const projects = [
  {
    title: "Özel Private Label Başarısı",
    description:
      "Bir müşterimiz için geliştirdiğimiz özel formül ve ambalaj tasarımı ile, kendi markaları altında piyasaya sürdükleri temizlik ürünü kısa sürede büyük ilgi gördü. Satış hacmi %200 arttı ve müşteri sadakati sağlandı.",
    company: "CleanPro - Private Label Projesi",
  },
  {
    title: "Tekstil Firmasında %30 Su Tasarrufu",
    description:
      "Tekstil sektöründe faaliyet gösteren bir müşterimizde, özel kimyasal optimizasyon projesiyle yıllık su tüketimini %30 azalttık. Bu sayede hem maliyetler düştü hem de sürdürülebilirlik hedeflerine katkı sağlandı.",
    company: "ModaTex - Verimlilik Projesi",
  },
  {
    title: "Gıda Üreticisinde Enerji Verimliliği",
    description:
      "Gıda üretimi yapan bir firmada, proses kimyasallarını optimize ederek enerji tüketiminde %18 tasarruf sağladık. Proje sonunda üretim maliyetleri azaldı ve çevresel etki minimize edildi.",
    company: "LezzetGıda - Enerji Tasarrufu Projesi",
  },
];

const cardImages = [
  null, // 1. kart için ikon
  null, // 2. kart için ikon
  null, // 3. kart için ikon
];
const cardIcons = [
  Award,
  Droplet,
  Bolt,
];

const Projects = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight drop-shadow">Projelerimiz</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Müşterilerimize özel geliştirdiğimiz projelerden bazı başarı hikayeleri.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => {
            const Icon = cardIcons[idx];
            return (
              <Card key={idx} className="group shadow-xl h-full flex flex-col border-0 bg-white/90 hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 w-full flex items-center justify-center bg-gradient-to-t from-primary/80 to-transparent rounded-t-lg">
                  {Icon && (
                    <Icon className="w-20 h-20 text-white drop-shadow-lg" />
                  )}
                </div>
                <CardHeader className="pb-2 pt-6 text-center">
                  <CardTitle className="text-lg font-bold text-primary drop-shadow-sm">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between text-center">
                  <p className="mb-4 text-muted-foreground text-base">{project.description}</p>
                  <span className="font-semibold text-primary/80 text-sm">{project.company}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
