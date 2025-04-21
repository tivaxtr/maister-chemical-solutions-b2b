import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const PrivateLabel = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Private Label Projeleri</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Kendi markanızla satışa sunabileceğiniz yüksek kaliteli kimyasal ürünler
              </p>
            </div>
          </div>
        </div>

        {/* Project Methodology - Bannerın Altında, Dikey Strateji Ağacı */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-accent/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight drop-shadow">Private Label Proje Metodolojimiz</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Markanız için özel kimyasal ürün geliştirme sürecimiz; stratejik analizden, üretime ve teslimata kadar uçtan uca profesyonel bir yolculuktur.
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-primary/20 z-0" style={{minHeight:'calc(100% - 4rem)'}}></div>
              {[
                {
                  icon: "🔍",
                  title: "İhtiyaç & Pazar Analizi",
                  desc: "Markanızın hedef kitlesi, pazar dinamikleri ve ürün beklentileri detaylıca analiz edilir. Böylece projenin temeli sağlam atılır."
                },
                {
                  icon: "🧪",
                  title: "Ar-Ge & Formülasyon",
                  desc: "Uzman ekibimiz, markanıza özel formüller geliştirir ve performans testleriyle en iyi sonucu garanti altına alır."
                },
                {
                  icon: "🎨",
                  title: "Tasarım & Ambalaj",
                  desc: "Ürün etiketinden ambalajına kadar, markanızın kimliğini yansıtan özgün ve modern tasarımlar hazırlanır."
                },
                {
                  icon: "🏭",
                  title: "Üretim & Kalite Kontrol",
                  desc: "Modern tesislerimizde yüksek kalite standartlarında üretim yapılır, her aşamada kalite kontrol sağlanır."
                },
                {
                  icon: "🚚",
                  title: "Teslimat & Destek",
                  desc: "Ürünleriniz zamanında teslim edilir, satış sonrası teknik destek ve danışmanlık ile her zaman yanınızdayız."
                }
              ].map((item, idx, arr) => (
                <div key={idx} className="relative z-10 flex flex-col items-center mb-10 last:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl font-bold shadow-lg border-4 border-white z-10">
                    {item.icon}
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6 mt-4 mb-2 w-full text-center max-w-md">
                    <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="w-1 h-8 bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight drop-shadow">Markanızı Güçlendiren Private Label Çözümler</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Maister Chemical Solutions olarak, kendi markanızla pazara sunabileceğiniz yüksek kaliteli kimyasal ürünler üretiyoruz. Private label projelerimiz, markanızın değerini artırırken, üretim ve Ar-Ge maliyetlerinden tasarruf etmenizi sağlıyor.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏷️",
                  title: "Marka Değerinizi Yükseltin",
                  desc: "Kendi markanızla satış yaparak, marka bilinirliğinizi artırın ve müşterilerinizle daha güçlü bağlar kurun."
                },
                {
                  icon: "⚗️",
                  title: "Geniş Ürün Yelpazesi",
                  desc: "Endüstriyel temizleyicilerden ev bakımına, otomotivden kişisel bakıma kadar çok çeşitli ürün gruplarında private label üretim."
                },
                {
                  icon: "🚀",
                  title: "Hızlı ve Esnek Çözüm",
                  desc: "Ürün formülasyonundan etiket ve ambalaj tasarımına, lojistikten teknik desteğe kadar uçtan uca hizmet."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Uzmanlığımız ve üretim kapasitemizle, her aşamada yanınızda olarak, ürün formülasyonundan etiket tasarımına, ambalajlamadan lojistik planlamaya kadar eksiksiz bir hizmet sağlıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Private Label'in Avantajları</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kendi markanızla ürün satmanın işletmenize sağlayacağı stratejik ve ticari avantajlar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏷️",
                  title: "Marka Gücü & Sadakat",
                  desc: "Kendi markanızla satış yaparak marka bilinirliğinizi artırır, müşteri sadakati ve güveni oluşturursunuz."
                },
                {
                  icon: "💡",
                  title: "Yenilikçi Ürün Portföyü",
                  desc: "Ar-Ge ve üretim yatırımı yapmadan, sürekli güncellenen ve yenilenen ürün portföyüne sahip olursunuz."
                },
                {
                  icon: "💸",
                  title: "Düşük Yatırım, Yüksek Karlılık",
                  desc: "Üretim tesisi kurmadan, ölçek ekonomisiyle düşük maliyetli ve yüksek kârlı ürünler sunabilirsiniz."
                },
                {
                  icon: "🚀",
                  title: "Hızlı Pazara Giriş",
                  desc: "Ürün geliştirme ve üretim süreçlerini atlayarak, yeni ürünleri çok daha hızlı şekilde pazara sunarsınız."
                },
                {
                  icon: "🌍",
                  title: "Yeni Pazarlara Açılım",
                  desc: "Private label ile ürün yelpazenizi genişletip farklı sektör ve pazarlara kolayca giriş yapabilirsiniz."
                },
                {
                  icon: "🤝",
                  title: "Tam Destek & Danışmanlık",
                  desc: "Formülasyondan ambalaja, lojistikten satış sonrası desteğe kadar uçtan uca profesyonel hizmet alırsınız."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Private Label Ürün Kategorilerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Markanız için üretebileceğimiz geniş ürün yelpazesi ve her ürün grubuna özel avantajlar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Endüstriyel Temizlik Ürünleri",
                  desc: "Fabrikalar, atölyeler ve endüstriyel tesisler için yüksek performanslı, profesyonel temizlik ürünleri.",
                  color: "from-primary/80 to-accent/80",
                  items: [
                    {
                      name: "Endüstriyel Yağ Çözücüler",
                      info: "Ağır sanayi ve üretim tesislerinde biriken yağ, gres ve kirleri hızlıca çözen, makine ömrünü uzatan güçlü formül."
                    },
                    {
                      name: "Zemin Temizleyiciler",
                      info: "Fabrika ve atölye zeminlerinde inatçı kirleri ve yağları kolayca çıkarır, kaymaz ve hijyenik yüzey sağlar."
                    },
                    {
                      name: "Makine Parça Yıkama Solüsyonları",
                      info: "Makine ve ekipman parçalarında biriken yağ, metal talaşı ve kirleri etkili şekilde temizler. Bakım maliyetlerini azaltır."
                    },
                    {
                      name: "CIP (Cleaning-in-Place) Sistemleri",
                      info: "Gıda ve içecek endüstrisinde hijyen standartlarını yükselten, otomatik temizlik sistemleri için özel formülasyonlar."
                    }
                  ]
                },
                {
                  title: "Profesyonel Temizlik Ürünleri",
                  desc: "Oteller, restoranlar, ofisler ve kurumsal tesisler için profesyonel temizlik ve hijyen çözümleri.",
                  color: "from-blue-400 to-blue-600",
                  items: [
                    {
                      name: "Genel Yüzey Temizleyiciler",
                      info: "Farklı yüzeylerde güvenle kullanılabilen, hoş kokulu ve etkili temizlik sağlayan ürünler."
                    },
                    {
                      name: "Banyo ve Mutfak Temizleyiciler",
                      info: "Kireç, sabun ve yağ kalıntılarını kolayca çözen, hijyen ve parlaklık sağlayan özel formüller."
                    },
                    {
                      name: "Halı ve Döşeme Temizleyiciler",
                      info: "Halı, koltuk ve döşemelerde derinlemesine temizlik ve ferahlık sunar. Leke çıkarıcı ve antibakteriyel özellikli."
                    },
                    {
                      name: "Dezenfektanlar ve Hijyen Ürünleri",
                      info: "Bakteri ve virüslere karşı güçlü koruma sağlayan, cilt dostu ve etkili hijyen ürünleri."
                    }
                  ]
                },
                {
                  title: "Otomotiv Bakım Ürünleri",
                  desc: "Oto yıkama, galeri ve servislerin ihtiyaçlarına yönelik, yüksek performanslı otomotiv bakım kimyasalları.",
                  color: "from-amber-400 to-orange-500",
                  items: [
                    {
                      name: "Oto Yıkama Şampuanları",
                      info: "Araç yüzeyinde derinlemesine temizlik ve parlaklık sağlar. Boya koruma özelliğiyle aracınızın değerini korur."
                    },
                    {
                      name: "Lastik ve Plastik Parlatıcılar",
                      info: "Lastik ve plastik yüzeylere uzun süreli parlaklık ve koruma kazandırır. UV ışınlarına karşı dayanıklıdır."
                    },
                    {
                      name: "Motor ve Parça Temizleyiciler",
                      info: "Motor ve mekanik parçalardaki yağ, kir ve birikintileri etkili şekilde temizler. Performans ve bakım kolaylığı sağlar."
                    },
                    {
                      name: "Cilalar ve Koruyucu Ürünler",
                      info: "Araç yüzeyini dış etkenlere karşı koruyan, uzun ömürlü ve su itici kaplama çözümleri."
                    }
                  ]
                },
                {
                  title: "Ev Temizlik Ürünleri",
                  desc: "Tüketici pazarına yönelik, günlük ev temizliğinde kullanılan yüksek kaliteli ve güvenilir ürünler.",
                  color: "from-pink-400 to-yellow-400",
                  items: [
                    {
                      name: "Çamaşır Deterjanları ve Yumuşatıcılar",
                      info: "Kumaşlarda derinlemesine temizlik, yumuşaklık ve ferahlık sağlayan, renk koruyucu ve hoş kokulu formüller."
                    },
                    {
                      name: "Bulaşık Deterjanları",
                      info: "Zorlu yağ ve kirleri kolayca çözen, elde ve makinede güvenle kullanılabilen bulaşık deterjanları."
                    },
                    {
                      name: "Çok Amaçlı Temizleyiciler",
                      info: "Evdeki tüm yüzeylerde etkili temizlik ve hijyen sağlayan, pratik ve ekonomik çözümler."
                    },
                    {
                      name: "Özel Yüzey Temizleyiciler",
                      info: "Ahşap, cam, seramik gibi özel yüzeyler için geliştirilmiş, iz bırakmayan ve yüzeye zarar vermeyen ürünler."
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

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Müşterilerimizin Deneyimleri</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Private label projelerimizde işbirliği yaptığımız markalar ne diyor?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h2.2l5.8 5.8v-5.8h4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12z"></path>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Maister Chemical Solutions ile yürüttüğümüz private label projesi sayesinde, kendi markamızla profesyonel temizlik ürünleri pazarına giriş yapabildik. Ürün kalitesi ve geliştirme sürecindeki profesyonel yaklaşımları, bize büyük bir rekabet avantajı sağladı."
                </p>
                <div>
                  <p className="font-bold text-foreground">Selim Kaya</p>
                  <p className="text-muted-foreground">Genel Müdür, CleanMaster</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h2.2l5.8 5.8v-5.8h4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12z"></path>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Otomotiv bakım ürünlerimizi Maister ile geliştirmek, işimiz için doğru bir karar oldu. Formülasyonların kalitesi ve ürünlerin performansı müşterilerimiz tarafından çok beğenildi. Ayrıca, ambalaj tasarımı konusundaki destekleri markamızın tanınırlığını artırdı."
                </p>
                <div>
                  <p className="font-bold text-foreground">Ayşe Demir</p>
                  <p className="text-muted-foreground">Ürün Müdürü, AutoBrite</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h2.2l5.8 5.8v-5.8h4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12z"></path>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Ev temizlik ürünleri markamız için Maister ile çalışmaya başladığımızda, yüksek kaliteli ürünleri uygun maliyetle üretmenin mümkün olduğunu gördük. Ürünlerimizin kalitesi ve fiyat-performans oranı, pazarda hızla büyümemizi sağladı."
                </p>
                <div>
                  <p className="font-bold text-foreground">Murat Öztürk</p>
                  <p className="text-muted-foreground">Kurucu, EcoClean</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h2.2l5.8 5.8v-5.8h4c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12z"></path>
                </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Endüstriyel temizlik sektöründe faaliyet gösteren şirketimiz için, Maister'in private label üretim kapasitesi çok değerli oldu. Ar-Ge ve üretim süreçlerini onlara bırakarak, satış ve pazarlamaya odaklanabiliyoruz."
                </p>
                <div>
                  <p className="font-bold text-foreground">Zeynep Yıldız</p>
                  <p className="text-muted-foreground">Satış Direktörü, InduClean</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateLabel;
