
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
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Marka Kimliği</h3>
                <p className="text-muted-foreground">
                  Şirketinizin logosunu taşıyan, kurumsal renklerinizle uyumlu ürünlerle marka bilinirliğinizi artırın. Her kimyasal ürün, markanızın bir elçisi haline gelir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Özel Formülasyon</h3>
                <p className="text-muted-foreground">
                  İşletmenizin spesifik ihtiyaçlarına göre formüle edilmiş, maksimum performans sağlayan kimyasal çözümler. Standart ürünlerin sağlayamadığı etkinlikte sonuçlar elde edin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Benzersiz Koku ve Renk</h3>
                <p className="text-muted-foreground">
                  Markanıza özel geliştirilmiş kokular ve renklerle, çalışanlarınız ve müşterileriniz üzerinde olumlu etki bırakın. Duyusal deneyim, markanızın hatırlanabilirliğini artırır.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Rekabet Avantajı</h3>
                <p className="text-muted-foreground">
                  Rakiplerinizin sunmadığı, benzersiz özelliklere sahip ürünlerle pazarda öne çıkın. Özel formüller sayesinde daha iyi sonuçlar alın ve müşteri memnuniyetini artırın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Maliyet Optimizasyonu</h3>
                <p className="text-muted-foreground">
                  İhtiyaçlarınıza göre özelleştirilmiş formüller sayesinde gereksiz maliyetlerden kurtulun. İşletmenizin ihtiyaçlarına tam olarak uyan, israfı önleyen çözümler.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Profesyonel İmaj</h3>
                <p className="text-muted-foreground">
                  Markalı, özel ürünlerinizle profesyonel bir görüntü oluşturun. Bu detay, müşterilerinizin ve iş ortaklarınızın işletmenizi nasıl algıladığını olumlu yönde etkiler.
                </p>
              </div>
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Endüstriyel Temizleyiciler</h3>
                  <p className="text-muted-foreground mb-6">
                    Üretim tesisleri, atölyeler ve endüstriyel alanlar için özel formüle edilmiş, yüksek performanslı temizlik çözümleri. Yağ, gres, pas ve zorlu kirleri etkili bir şekilde temizler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ağır Hizmet Yağ Çözücüler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Metal Yüzey Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Zemin Temizleme Solüsyonları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Özel Amaçlı Leke Çıkarıcılar</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Kurumsal Hijyen Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Ofisler, oteller, restoranlar ve kurumsal alanlar için geliştirilen, markanızı yansıtan, hoş kokulu ve etkili hijyen ürünleri.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>El Dezenfektanları ve Sabunlar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yüzey Dezenfektanları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Çok Amaçlı Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Oda ve Çevre Koku Sistemleri</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Tekstil ve Deri Kimyasalları</h3>
                  <p className="text-muted-foreground mb-6">
                    Tekstil ve deri sektörü için özel geliştirilmiş, üretim süreçlerini iyileştiren ve son ürün kalitesini artıran kimyasal çözümler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Özel Boyama Katkıları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yumuşatıcılar ve Aprelar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Su ve Leke İtici Kimyasallar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Deri Finish Ürünleri</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Otomotiv Bakım Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Oto yıkama, galeri ve servisler için markalı, yüksek performanslı ve koruyucu özellikli otomotiv bakım kimyasalları.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Şampuanlar ve Cilalar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>İç Mekan Temizleyicileri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Motor ve Parça Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Koruyucu Kaplamalar</span>
                    </li>
                  </ul>
                </div>
              </div>
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
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 pt-2">İhtiyaç Analizi</h3>
                <p className="text-muted-foreground">
                  İşletmenizin spesifik ihtiyaçlarını, marka değerlerinizi ve hedeflerinizi derinlemesine analiz ediyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Özel Formülasyon</h3>
                <p className="text-muted-foreground">
                  Ar-Ge laboratuvarımızda, ihtiyaçlarınıza özel formüller geliştiriyor ve test ediyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Marka Entegrasyonu</h3>
                <p className="text-muted-foreground">
                  Ürünün renk, koku ve etiket tasarımını markanızla tamamen uyumlu hale getiriyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Üretim ve Teslimat</h3>
                <p className="text-muted-foreground">
                  Yüksek kalite standartlarında üretim yapıyor ve ürünlerinizi zamanında teslim ediyoruz.
                </p>
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

export default CustomProducts;
