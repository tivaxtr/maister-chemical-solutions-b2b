import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const EfficiencyProjects = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Verimlilik Projeleri</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Şirketinizin verimliliğini ve karlılığını artıran özel kimyasal çözümler
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">İşletmeniz İçin Optimize Edilmiş Kimyasal Çözümler</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister Chemical Solutions olarak, sadece kimyasal ürünler satmıyoruz; işletmenizin verimliliğini ve karlılığını artıran kapsamlı projeler geliştiriyoruz. Uzman ekibimiz, süreçlerinizi analiz ederek özel kimyasal çözümlerle maliyetlerinizi düşürür ve üretim verimliliğinizi artırır.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Verimlilik projelerimiz, endüstriyel üretim, enerji tasarrufu, su tüketimi, atık yönetimi ve bakım-onarım gibi alanlarda maliyetleri düşürerek işletmenize rekabet avantajı sağlar.
                </p>
                <p className="text-lg text-muted-foreground">
                  Her proje, işletmenizin spesifik ihtiyaçlarına göre tasarlanır ve ölçülebilir sonuçlar elde etmenizi sağlar. Yatırımınızın geri dönüşünü net olarak görebilirsiniz.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Verimlilik Projeleri" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Verimlilik Projelerinin Faydaları</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maister'in verimlilik çözümleriyle rekabet avantajı elde edin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Maliyet Tasarrufu",
                  desc: "Verimli kimyasal formülasyonlar ve optimize süreçlerle üretim maliyetlerinizi önemli ölçüde azaltın.",
                  color: "from-green-400 to-green-600",
                  icon: "💸"
                },
                {
                  title: "Kaynak Optimizasyonu",
                  desc: "Su, enerji ve hammadde kullanımında tasarruf sağlayan çözümlerle kaynaklarınızı daha verimli kullanın.",
                  color: "from-blue-400 to-blue-600",
                  icon: "💧"
                },
                {
                  title: "Üretim Verimliliği",
                  desc: "Daha etkili kimyasal çözümlerle üretim süreçlerinizi hızlandırın ve kapasitenizi artırın.",
                  color: "from-yellow-400 to-yellow-600",
                  icon: "⚡"
                },
                {
                  title: "Ürün Kalitesinde Artış",
                  desc: "Yüksek performanslı kimyasal çözümler sayesinde son ürün kalitenizi yükseltin ve müşteri memnuniyetini artırın.",
                  color: "from-purple-400 to-indigo-500",
                  icon: "🏆"
                },
                {
                  title: "Çevresel Sürdürülebilirlik",
                  desc: "Daha az kaynak tüketen, çevre dostu formüller ile sürdürülebilirlik hedeflerinize ulaşın ve kurumsal itibarınızı güçlendirin.",
                  color: "from-emerald-400 to-emerald-600",
                  icon: "🌱"
                },
                {
                  title: "Rekabet Avantajı",
                  desc: "Düşük maliyetler ve yüksek kalite sayesinde pazarda rekabet avantajı elde edin ve karlılığınızı artırın.",
                  color: "from-pink-400 to-pink-600",
                  icon: "🚀"
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

        {/* Project Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Verimlilik Proje Kategorilerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Farklı sektörlere ve ihtiyaçlara yönelik verimlilik çözümlerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Endüstriyel Temizlik Optimizasyonu",
                  desc: "Üretim hatları ve endüstriyel ekipmanlar için özel kimyasal çözümlerle temizlik süreçlerini hızlandırır, su ve enerji tasarrufu sağlar.",
                  color: "from-primary/80 to-accent/80",
                  items: [
                    {
                      name: "Temizlik Sürelerinde Azalma",
                      info: "Optimize kimyasal formüllerle temizlik sürelerinde %40'a varan azalma. Daha kısa temizlik, daha uzun üretim süresi demektir."
                    },
                    {
                      name: "Su Tüketiminde Tasarruf",
                      info: "Yüksek verimli temizlik kimyasalları ile su tüketiminde %30'a varan tasarruf. Çevre dostu ve ekonomik bir yaklaşım."
                    },
                    {
                      name: "Ekipman Performansında Artış",
                      info: "Düzenli ve etkili temizlik, ekipman ve hat performansını artırır, arıza riskini azaltır."
                    },
                    {
                      name: "Daha Uzun Ekipman Ömrü",
                      info: "Korozyon ve birikinti önleyici çözümlerle ekipmanlarınızın ömrünü uzatın, bakım maliyetlerinizi düşürün."
                    }
                  ]
                },
                {
                  title: "Su Yönetimi Çözümleri",
                  desc: "Endüstriyel süreçlerde su kullanımını azaltan, arıtma maliyetlerini düşüren ve atık suların yeniden kullanımını sağlayan projeler.",
                  color: "from-blue-400 to-blue-600",
                  items: [
                    {
                      name: "Su Tüketiminde Azalma",
                      info: "Proses optimizasyonu ve özel kimyasallar ile su tüketiminde %25-45 arasında azalma sağlanır."
                    },
                    {
                      name: "Arıtma Kimyasallarında Tasarruf",
                      info: "Daha az kimyasal kullanımı ile arıtma maliyetlerinde düşüş ve çevreye daha az yük."
                    },
                    {
                      name: "Atık Su Maliyetlerinde Düşüş",
                      info: "Atık suyun yeniden kullanımı ve azaltılması ile işletme giderlerinde önemli tasarruf."
                    },
                    {
                      name: "Sürdürülebilirlik Hedeflerine Katkı",
                      info: "Su yönetimi projeleri ile sürdürülebilirlik ve çevre standartlarına uyum sağlanır."
                    }
                  ]
                },
                {
                  title: "Enerji Verimliliği Çözümleri",
                  desc: "Isıtma, soğutma ve enerji yoğun süreçlerde kullanılan özel kimyasallarla enerji tüketimini azaltan projeler.",
                  color: "from-amber-400 to-orange-500",
                  items: [
                    {
                      name: "Verimlilik Artışı",
                      info: "Kazan ve soğutma sistemlerinde verimlilik artışı, daha az enerjiyle daha fazla üretim."
                    },
                    {
                      name: "Isı Transferinde İyileşme",
                      info: "Isı transfer yüzeylerinde birikinti oluşumunu önleyerek enerji kayıplarını minimize eder."
                    },
                    {
                      name: "Bakım Maliyetlerinde Düşüş",
                      info: "Daha az arıza ve bakım ihtiyacı ile operasyonel maliyetlerde azalma."
                    },
                    {
                      name: "Karbon Ayak İzinde Azalma",
                      info: "Enerji tasarrufu ile karbon salınımını azaltarak çevreye katkı sağlar."
                    }
                  ]
                },
                {
                  title: "Üretim Süreci İyileştirme",
                  desc: "Üretim süreçlerinin kimyasal aşamalarını optimize ederek, hammadde kullanımını azaltan ve üretim verimini artıran projeler.",
                  color: "from-pink-400 to-yellow-400",
                  items: [
                    {
                      name: "Hammadde Kullanımında Tasarruf",
                      info: "Kimyasal optimizasyon ile hammadde kullanımında %15-25 tasarruf sağlanır."
                    },
                    {
                      name: "Üretim Kapasitesinde Artış",
                      info: "Daha verimli prosesler ile üretim kapasiteniz yükselir, rekabet gücünüz artar."
                    },
                    {
                      name: "Atık Miktarında Azalma",
                      info: "Daha az atık ile hem çevreye hem de işletme bütçenize katkı."
                    },
                    {
                      name: "Ürün Kalitesinde İyileşme",
                      info: "Optimize kimyasal süreçlerle son ürün kalitesinde gözle görülür artış."
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

        {/* Project Methodology */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proje Metodolojimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Verimlilik projelerimizi nasıl hayata geçiriyoruz?
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline items */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Durum Analizi</h3>
                    <p className="text-muted-foreground">
                      İşletmenizin mevcut süreçlerini, kimyasal kullanımını ve verimlilik göstergelerini detaylı olarak analiz ediyoruz.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">Fırsat Tanımlama</h3>
                    <p className="text-muted-foreground">
                      İyileştirme potansiyeli olan alanları belirliyor ve verimlilik artışı sağlayacak projeleri tasarlıyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Çözüm Geliştirme</h3>
                    <p className="text-muted-foreground">
                      Ar-Ge laboratuvarımızda, ihtiyaçlarınıza özel kimyasal formüller ve uygulama metodları geliştiriyoruz.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">Pilot Uygulama</h3>
                    <p className="text-muted-foreground">
                      Geliştirilen çözümleri kontrollü bir ortamda test ediyor ve sonuçları ölçüyoruz.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-2">Tam Ölçekli Uygulama</h3>
                    <p className="text-muted-foreground">
                      Başarılı sonuçlanan pilot uygulamaları tam ölçekli operasyonlarınıza entegre ediyoruz.
                    </p>
                  </div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-2">Sürekli İyileştirme</h3>
                    <p className="text-muted-foreground">
                      Sonuçları düzenli olarak takip ediyor ve formülasyonları sürekli olarak iyileştiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Başarı Hikayelerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Verimlilik projelerimizle işletmelere sağladığımız somut faydalar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  sector: "Tekstil Sektörü",
                  title: "%35 Su Tasarrufu",
                  desc: "Öncü bir tekstil firması için geliştirdiğimiz özel boyama kimyasalları ile su tüketimini %35 azalttık ve enerji maliyetlerini düşürdük.",
                  color: "from-blue-400 to-blue-600",
                  quote: "Maister'in geliştirdiği kimyasal çözümler sayesinde sadece maliyetlerimizi düşürmekle kalmadık, sürdürülebilirlik hedeflerimize de bir adım daha yaklaştık.",
                  author: "Aylin Demir, Üretim Müdürü"
                },
                {
                  sector: "Gıda İmalatı",
                  title: "%40 Temizlik Süresi Azalması",
                  desc: "Bir gıda üreticisi için özel formüle ettiğimiz CIP (Cleaning-in-Place) kimyasalları ile temizlik sürelerini %40 azalttık ve üretim kapasitesini artırdık.",
                  color: "from-green-400 to-green-600",
                  quote: "Temizlik sürelerindeki azalma sayesinde üretim kapasitemizi %15 artırdık. Maister ekibinin profesyonel yaklaşımı süreç boyunca bize güven verdi.",
                  author: "Mehmet Yılmaz, Operasyon Direktörü"
                },
                {
                  sector: "Metal İşleme",
                  title: "%20 Enerji Tasarrufu",
                  desc: "Metal işleme tesisi için geliştirdiğimiz koruyucu kimyasallar ile ekipman ömrünü uzattık ve enerji tüketimini %20 azalttık.",
                  color: "from-amber-400 to-orange-500",
                  quote: "Ekipmanlarımızın performansındaki artış ve enerji tasarrufu, operasyonel maliyetlerimizi önemli ölçüde düşürdü. Maister ile çalışmaya devam edeceğiz.",
                  author: "Ali Kaya, Teknik Müdür"
                },
                {
                  sector: "Otomotiv Sektörü",
                  title: "%25 Bakım Maliyeti Azalması",
                  desc: "Otomotiv üreticisi için uygulanan özel temizlik ve koruyucu kimyasallar ile bakım maliyetlerinde %25 azalma sağlandı.",
                  color: "from-pink-400 to-yellow-400",
                  quote: "Bakım aralıklarımız uzadı, üretim kayıplarımız azaldı. Maister'in uzmanlığına güveniyoruz.",
                  author: "Serkan Usta, Bakım Şefi"
                },
                {
                  sector: "Enerji Sektörü",
                  title: "%18 Enerji Verimliliği Artışı",
                  desc: "Enerji santralinde uygulanan proses kimyasalları ile enerji verimliliğinde %18 artış elde edildi.",
                  color: "from-emerald-400 to-emerald-600",
                  quote: "Enerji maliyetlerimizdeki düşüş ve sistem güvenliği için Maister'i tercih ettik.",
                  author: "Gökhan Yıldız, Enerji Yöneticisi"
                },
                {
                  sector: "Gıda & İçecek",
                  title: "%30 Atık Azalması",
                  desc: "Gıda ve içecek fabrikasında atık yönetimi projesiyle atık miktarı %30 azaltıldı, çevreye duyarlı üretim sağlandı.",
                  color: "from-purple-400 to-indigo-500",
                  quote: "Çevreye duyarlı üretim hedeflerimize Maister ile ulaştık. Atıklarımızı ciddi oranda azalttık.",
                  author: "Derya Aksoy, Fabrika Müdürü"
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative group bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg transition-transform hover:scale-105`}>
                  <div className="bg-white rounded-2xl h-full p-7 flex flex-col">
                    <p className="text-lg font-semibold text-primary mb-2">{item.sector}</p>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{item.desc}</p>
                    <div className="border-t border-border pt-4 text-sm text-muted-foreground italic">
                      <p>"{item.quote}"</p>
                      <p className="font-medium mt-2 not-italic text-primary">- {item.author}</p>
                    </div>
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

export default EfficiencyProjects;
