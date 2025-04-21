import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const CustomProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-16 md:py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Özel Kimyasal Ürünler</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Firmanıza özel, rengi ve kokusu benzersiz, etiketinde kendi logonuzu taşıyan kimyasal çözümler.
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Markanızı Güçlendiren Özel Kimyasal Çözümler</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister Chemical Solutions olarak, her işletmenin kendine has ihtiyaçlarının olduğunu biliyoruz. Bu nedenle, şirketinizin kimlik ve değerlerini yansıtan, özel formüle edilmiş kimyasal ürünler geliştiriyoruz.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Özel ürünlerimiz, şirketinizin benzersiz ihtiyaçlarına cevap vermenin yanı sıra, müşterilerinizin zihninde markanızı güçlendiren ve kalıcı bir iz bırakan etkileyici bir deneyim sunuyor.
                </p>
                <p className="text-lg text-muted-foreground">
                  Rengi, kokusu ve etiketi ile tamamen sizin markanıza özel olarak tasarlanan bu ürünler, işletmenizin profesyonelliğini ve kalite anlayışını yansıtıyor.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Özel Kimyasal Ürünler" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Özel Ürünlerimizin Avantajları</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Şirketinize özel kimyasal çözümlerimizle rakiplerinizden farklılaşın.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Marka Kimliği",
                  desc: "Şirketinizin logosunu taşıyan, kurumsal renklerinizle uyumlu ürünlerle marka bilinirliğinizi artırın. Her kimyasal ürün, markanızın bir elçisi haline gelir.",
                  color: "from-primary/80 to-accent/80",
                  icon: "🏷️"
                },
                {
                  title: "Özel Formülasyon",
                  desc: "İşletmenizin spesifik ihtiyaçlarına göre formüle edilmiş, maksimum performans sağlayan kimyasal çözümler. Standart ürünlerin sağlayamadığı etkinlikte sonuçlar elde edin.",
                  color: "from-green-400 to-green-600",
                  icon: "🧪"
                },
                {
                  title: "Benzersiz Koku ve Renk",
                  desc: "Markanıza özel geliştirilmiş kokular ve renklerle, çalışanlarınız ve müşterileriniz üzerinde olumlu etki bırakın. Duyusal deneyim, markanızın hatırlanabilirliğini artırır.",
                  color: "from-pink-400 to-yellow-400",
                  icon: "🌈"
                },
                {
                  title: "Rekabet Avantajı",
                  desc: "Rakiplerinizin sunmadığı, benzersiz özelliklere sahip ürünlerle pazarda öne çıkın. Özel formüller sayesinde daha iyi sonuçlar alın ve müşteri memnuniyetini artırın.",
                  color: "from-blue-400 to-blue-600",
                  icon: "🚀"
                },
                {
                  title: "Maliyet Optimizasyonu",
                  desc: "İhtiyaçlarınıza göre özelleştirilmiş formüller sayesinde gereksiz maliyetlerden kurtulun. İşletmenizin ihtiyaçlarına tam olarak uyan, israfı önleyen çözümler.",
                  color: "from-amber-400 to-orange-500",
                  icon: "💸"
                },
                {
                  title: "Profesyonel İmaj",
                  desc: "Markalı, özel ürünlerinizle profesyonel bir görüntü oluşturun. Bu detay, müşterilerinizin ve iş ortaklarınızın işletmenizi nasıl algıladığını olumlu yönde etkiler.",
                  color: "from-purple-400 to-indigo-500",
                  icon: "🎩"
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative group bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg transition-transform hover:scale-105`}>
                  <div className="bg-white rounded-2xl h-full p-7 flex flex-col items-center text-center">
                    <div className="mb-4 text-4xl md:text-5xl drop-shadow-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Özel Ürün Kategorilerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Geniş ürün yelpazemiz ile farklı sektörlere özel kimyasal çözümler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Endüstriyel Temizleyiciler",
                  desc: "Üretim tesisleri, atölyeler ve endüstriyel alanlar için özel formüle edilmiş, yüksek performanslı temizlik çözümleri. Yağ, gres, pas ve zorlu kirleri etkili bir şekilde temizler.",
                  color: "from-primary/80 to-accent/80",
                  items: [
                    {
                      name: "Ağır Hizmet Yağ Çözücüler",
                      info: "Endüstriyel makinelerde ve zorlu ortamlarda biriken yağ ve kirleri hızlıca çözer. Yüksek performanslı formülüyle üretim hattınızın verimliliğini artırır."
                    },
                    {
                      name: "Metal Yüzey Temizleyiciler",
                      info: "Metal yüzeylerdeki pas, oksit ve kirleri etkili şekilde temizler. Korozyon önleyici özelliğiyle ekipman ömrünü uzatır."
                    },
                    {
                      name: "Zemin Temizleme Solüsyonları",
                      info: "Fabrika ve atölye zeminlerinde biriken inatçı kirleri ve yağları kolayca çıkarır. Kaymaz ve hijyenik yüzey sağlar."
                    },
                    {
                      name: "Özel Amaçlı Leke Çıkarıcılar",
                      info: "Endüstriyel lekeler için geliştirilmiş güçlü formül. Zorlu lekeleri yüzeye zarar vermeden temizler."
                    }
                  ]
                },
                {
                  title: "Kurumsal Hijyen Ürünleri",
                  desc: "Ofisler, oteller, restoranlar ve kurumsal alanlar için geliştirilen, markanızı yansıtan, hoş kokulu ve etkili hijyen ürünleri.",
                  color: "from-blue-400 to-blue-600",
                  items: [
                    {
                      name: "El Dezenfektanları ve Sabunlar",
                      info: "Cilt dostu ve etkili formüllerle hijyen sağlar. Antibakteriyel özellikleriyle ofis ve ortak alanlarda güvenli kullanım sunar."
                    },
                    {
                      name: "Yüzey Dezenfektanları",
                      info: "Bakteri ve virüslere karşı güçlü koruma. Sık temas edilen yüzeylerde hijyen standartlarını yükseltir."
                    },
                    {
                      name: "Çok Amaçlı Temizleyiciler",
                      info: "Farklı yüzeylerde güvenle kullanılabilen, hoş kokulu ve etkili temizlik sağlayan ürünler."
                    },
                    {
                      name: "Oda ve Çevre Koku Sistemleri",
                      info: "Uzun süre kalıcı, ferahlatıcı kokularla ortam havasını tazeler. Kurumsal imajınızı güçlendirir."
                    }
                  ]
                },
                {
                  title: "Tekstil ve Deri Kimyasalları",
                  desc: "Tekstil ve deri sektörü için özel geliştirilmiş, üretim süreçlerini iyileştiren ve son ürün kalitesini artıran kimyasal çözümler.",
                  color: "from-pink-400 to-yellow-400",
                  items: [
                    {
                      name: "Özel Boyama Katkıları",
                      info: "Canlı ve kalıcı renkler için geliştirilmiş katkı maddeleri. Boyama proseslerinde maksimum verim ve renk tutarlılığı sağlar."
                    },
                    {
                      name: "Yumuşatıcılar ve Aprelar",
                      info: "Tekstil ürünlerine yumuşaklık ve dayanıklılık kazandırır. Son üründe üstün kalite ve müşteri memnuniyeti sunar."
                    },
                    {
                      name: "Su ve Leke İtici Kimyasallar",
                      info: "Kumaş ve deriye su, yağ ve leke geçirmezlik özelliği kazandırır. Ürünlerin ömrünü ve kullanım kolaylığını artırır."
                    },
                    {
                      name: "Deri Finish Ürünleri",
                      info: "Deri yüzeylerde parlaklık, koruma ve estetik görünüm sağlar. Uzun ömürlü ve kaliteli sonuçlar sunar."
                    }
                  ]
                },
                {
                  title: "Otomotiv Bakım Ürünleri",
                  desc: "Oto yıkama, galeri ve servisler için markalı, yüksek performanslı ve koruyucu özellikli otomotiv bakım kimyasalları.",
                  color: "from-amber-400 to-orange-500",
                  items: [
                    {
                      name: "Şampuanlar ve Cilalar",
                      info: "Araç yüzeyinde derinlemesine temizlik ve parlaklık sağlar. Boya koruma özelliğiyle aracınızın değerini korur."
                    },
                    {
                      name: "İç Mekan Temizleyicileri",
                      info: "Araç içi plastik, vinil ve kumaş yüzeylerde hijyen ve ferahlık sunar. Antibakteriyel ve hoş kokulu formüller."
                    },
                    {
                      name: "Motor ve Parça Temizleyiciler",
                      info: "Motor ve mekanik parçalardaki yağ, kir ve birikintileri etkili şekilde temizler. Performans ve bakım kolaylığı sağlar."
                    },
                    {
                      name: "Koruyucu Kaplamalar",
                      info: "Araç yüzeyini dış etkenlere karşı koruyan, uzun ömürlü ve su itici kaplama çözümleri."
                    }
                  ]
                }
              ].map((cat, idx) => (
                <div key={idx} className={`relative group bg-gradient-to-br ${cat.color} p-1 rounded-2xl shadow-lg transition-transform hover:scale-105`}>
                  <div className="bg-white rounded-2xl h-full p-7">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{cat.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{cat.desc}</p>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="relative group">
                          <details className="cursor-pointer">
                            <summary className="flex items-center text-primary font-semibold hover:underline focus:outline-none">
                              <span className="mr-2">•</span>{item.name}
                            </summary>
                            <div className="ml-6 mt-1 text-muted-foreground text-xs bg-accent/10 rounded p-2 shadow-inner animate-fade-in">
                              {item.info}
                            </div>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Özel Ürün Geliştirme Sürecimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Markanızı yansıtan kimyasal çözümleri nasıl geliştiriyoruz?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "İhtiyaç Analizi",
                  desc: "İşletmenizin hedefleri, marka değerleri ve sektörel gereksinimleri detaylıca analiz edilir. Böylece size en uygun çözümün temeli atılır.",
                  color: "from-primary/80 to-accent/80",
                  icon: "🔍"
                },
                {
                  step: 2,
                  title: "Ar-Ge & Özel Formülasyon",
                  desc: "Uzman ekibimiz ve Ar-Ge laboratuvarımızda, ihtiyaçlarınıza özel formüller geliştirilir ve test edilir. Performans ve sürdürülebilirlik ön planda tutulur.",
                  color: "from-green-400 to-green-600",
                  icon: "🧪"
                },
                {
                  step: 3,
                  title: "Marka Entegrasyonu",
                  desc: "Ürünün renk, koku ve etiket tasarımı markanızla bütünleşecek şekilde özelleştirilir. Her detayda kurumsal kimliğiniz yansıtılır.",
                  color: "from-pink-400 to-yellow-400",
                  icon: "🎨"
                },
                {
                  step: 4,
                  title: "Üretim & Teslimat",
                  desc: "Yüksek kalite standartlarında üretim yapılır, ürünleriniz zamanında ve güvenle teslim edilir. Süreç boyunca şeffaf iletişim sağlanır.",
                  color: "from-blue-400 to-blue-600",
                  icon: "🚚"
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative group bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg transition-transform hover:scale-105`}>
                  <div className="bg-white rounded-2xl h-full p-7 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-3xl md:text-4xl mr-2">{item.icon}</span>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg shadow-md border-2 border-accent">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CustomProducts;
