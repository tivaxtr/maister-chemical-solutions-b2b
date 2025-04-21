
import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const RawMaterials = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hammadde Satışları</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Yüksek kaliteli kimyasal hammaddeleri rekabetçi fiyatlarla tedarik ediyoruz
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Güvenilir Hammadde Tedariki</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister Chemical Solutions olarak, çeşitli endüstriyel sektörlerin ihtiyaç duyduğu yüksek kaliteli kimyasal hammaddeleri rekabetçi fiyatlarla tedarik ediyoruz. Global tedarik ağımız ve güçlü satın alma kapasitemiz sayesinde, işletmeniz için en iyi hammaddeleri en uygun koşullarda sağlıyoruz.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  İşletmenizin üretim süreçlerinde ihtiyaç duyduğu hammaddelerin tedarikinde yaşanan zorlukları biliyor ve çözüm sunuyoruz. Tedarik zinciri uzmanlığımız, stok yönetimi kabiliyetimiz ve geniş ürün yelpazemizle, üretim süreçlerinizin kesintisiz devam etmesini sağlıyoruz.
                </p>
                <p className="text-lg text-muted-foreground">
                  Tüm hammaddelerimiz, kalite standartlarımıza uygunluğunu garanti eden sıkı kontrol süreçlerinden geçmektedir. İhtiyaçlarınıza özel tedarik planları ve esnek ödeme seçenekleri ile işletmenize değer katıyoruz.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1602928301882-3ef98dc8399d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Hammadde Satışları" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hammadde Tedarik Avantajlarımız</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maister ile hammadde tedarikinde elde edeceğiniz faydalar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Kalite Güvencesi</h3>
                <p className="text-muted-foreground">
                  Tüm hammaddelerimiz, tedarik edilmeden önce ve sonra kapsamlı kalite testlerinden geçirilir, uluslararası standartlara uygunluğu garanti edilir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Rekabetçi Fiyatlandırma</h3>
                <p className="text-muted-foreground">
                  Güçlü tedarik ağımız ve yüksek hacimli satın alma kapasitemiz sayesinde, en kaliteli hammaddeleri rekabetçi fiyatlarla sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Geniş Ürün Yelpazesi</h3>
                <p className="text-muted-foreground">
                  Farklı endüstriyel sektörlerin ihtiyaç duyduğu geniş bir hammadde yelpazesini tek bir kaynaktan tedarik edebilirsiniz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Güvenilir Tedarik Zinciri</h3>
                <p className="text-muted-foreground">
                  Üretim süreçlerinizin kesintiye uğramaması için güvenilir tedarik zinciri ve stok yönetimi ile zamanında teslimat sağlıyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Teknik Destek</h3>
                <p className="text-muted-foreground">
                  Kimyasal uzmanlarımız, hammaddelerin doğru seçimi ve kullanımı konusunda teknik destek ve danışmanlık hizmeti sunuyor.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Esnek Çözümler</h3>
                <p className="text-muted-foreground">
                  İşletmenizin büyüklüğü ve ihtiyaçlarına göre özelleştirilmiş siparişler, teslimat planları ve ödeme seçenekleri sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hammadde Kategorilerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Farklı endüstriyel sektörlere yönelik kimyasal hammaddelerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Temizlik Kimyasalları Hammaddeleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Deterjan, temizleyici ve dezenfektan üreticileri için gerekli hammaddeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yüzey Aktif Maddeler (Sürfaktanlar)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Alkaliler ve Asitler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Çözücüler ve Taşıyıcılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Koruyucular ve Stabilizatörler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Köpük Kontrol Ajanları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Parfümler ve Kokular</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Tekstil Kimyasalları Hammaddeleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Tekstil işletmeleri için boyama, baskı ve apreleme süreçlerinde kullanılan hammaddeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Boyarmaddeler ve Pigmentler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Aprelemede Kullanılan Reçineler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yardımcı Kimyasallar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yumuşatıcılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Su ve Leke İticiler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ağartıcılar ve Oksidasyon Ajanları</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Kozmetik ve Kişisel Bakım Hammaddeleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Kozmetik ve kişisel bakım ürünleri üreticileri için gerekli hammaddeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Emülgatörler ve Stabilizatörler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Nemlendirici Ajanlar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Koruyucular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Aktif Maddeler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Koku Hammaddeleri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Renklendirici Pigmentler</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Endüstriyel Kimyasallar</h3>
                  <p className="text-muted-foreground mb-6">
                    Çeşitli endüstriyel süreçlerde kullanılan temel ve özel kimyasallar.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Solventler ve Çözücüler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Asitler ve Bazlar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Kazan Kimyasalları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Su Arıtma Kimyasalları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yağlayıcı Katkıları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Polimerler ve Reçineler</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tedarik Sürecimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hammadde tedarikinde kalite ve güvenilirliği nasıl sağlıyoruz?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Tedarikçi Seçimi ve Denetimi</h3>
                <p className="text-muted-foreground">
                  Hammadde tedarikçilerimizi sıkı kriterlere göre seçiyor ve düzenli olarak denetliyoruz. Kalite standartları, üretim kapasitesi, etik iş uygulamaları ve sürdürülebilirlik yaklaşımlarını değerlendiriyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Kalite Kontrol ve Testler</h3>
                <p className="text-muted-foreground">
                  Tedarik ettiğimiz tüm hammaddeler, laboratuvarlarımızda kapsamlı kalite testlerine tabi tutulur. Her parti, kimyasal özellikleri, saflık ve performans açısından değerlendirilir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Stok Yönetimi</h3>
                <p className="text-muted-foreground">
                  Gelişmiş stok yönetim sistemimiz ile ihtiyaç duyduğunuz hammaddelerin her zaman hazır olmasını sağlıyoruz. Düzenli stok seviyesi kontrolleri ve tahmine dayalı planlama yapıyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Lojistik ve Depolama</h3>
                <p className="text-muted-foreground">
                  Hammaddelerin güvenli bir şekilde depolanması ve taşınması için özel lojistik çözümler sunuyoruz. Tehlikeli madde taşımacılığı konusunda tüm yasal gerekliliklere uyuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Dokümantasyon ve Takip</h3>
                <p className="text-muted-foreground">
                  Her hammadde için kapsamlı dokümantasyon sağlıyoruz. Güvenlik Bilgi Formları (SDS), teknik özellikler ve analiz sertifikalarını temin ediyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Müşteri Özel Çözümleri</h3>
                <p className="text-muted-foreground">
                  İşletmenizin ihtiyaçlarına göre özelleştirilmiş hammadde tedarik planları, ambalaj boyutları ve teslimat programları sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kalite Standartlarımız ve Sertifikalarımız</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hammadde tedarikinde en yüksek kalite standartlarını uyguluyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Kalite Yönetim Sistemlerimiz</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">ISO 9001:2015</p>
                        <p className="text-muted-foreground">Uluslararası Kalite Yönetim Sistemi standardına uygunluk</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">ISO 14001:2015</p>
                        <p className="text-muted-foreground">Çevre Yönetim Sistemi standardına uygunluk</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">ISO 45001:2018</p>
                        <p className="text-muted-foreground">İş Sağlığı ve Güvenliği Yönetim Sistemi standardına uygunluk</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">REACH Uyumluluğu</p>
                        <p className="text-muted-foreground">Avrupa Birliği Kimyasallar Yönetmeliğine uygunluk</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Laboratuvar ve Test Yetkinliklerimiz</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">GLP Uyumlu Laboratuvarlar</p>
                        <p className="text-muted-foreground">İyi Laboratuvar Uygulamaları prensiplerine uygun test ortamları</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">HPLC, GC-MS ve FTIR Analiz Yetkinliği</p>
                        <p className="text-muted-foreground">İleri analitik yöntemlerle hammadde saflık ve kalite testleri</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">Fiziksel ve Kimyasal Testler</p>
                        <p className="text-muted-foreground">Yoğunluk, viskozite, pH, iletkenlik gibi kritik parametrelerin testi</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <div>
                        <p className="font-bold">Performans Testleri</p>
                        <p className="text-muted-foreground">Hammaddelerin gerçek kullanım koşullarında performans değerlendirmesi</p>
                      </div>
                    </li>
                  </ul>
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

export default RawMaterials;
