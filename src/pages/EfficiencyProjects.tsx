
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
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Maliyet Tasarrufu</h3>
                <p className="text-muted-foreground">
                  Daha verimli kimyasal formülasyonlar ve optimize edilmiş süreçler sayesinde üretim maliyetlerinizi önemli ölçüde azaltın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Kaynak Optimizasyonu</h3>
                <p className="text-muted-foreground">
                  Su, enerji ve hammadde kullanımında tasarruf sağlayan çözümlerle kaynaklarınızı daha verimli kullanın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Üretim Verimliliği</h3>
                <p className="text-muted-foreground">
                  Daha etkili kimyasal çözümlerle üretim süreçlerinizi hızlandırın ve kapasitenizi artırın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Ürün Kalitesinde Artış</h3>
                <p className="text-muted-foreground">
                  Yüksek performanslı kimyasal çözümler sayesinde son ürün kalitenizi yükseltin ve müşteri memnuniyetini artırın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Çevresel Sürdürülebilirlik</h3>
                <p className="text-muted-foreground">
                  Daha az kaynak tüketen, çevre dostu formüller ile sürdürülebilirlik hedeflerinize ulaşın ve kurumsal itibarınızı güçlendirin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Rekabet Avantajı</h3>
                <p className="text-muted-foreground">
                  Düşük maliyetler ve yüksek kalite sayesinde pazarda rekabet avantajı elde edin ve karlılığınızı artırın.
                </p>
              </div>
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
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Endüstriyel Temizlik Optimizasyonu</h3>
                  <p className="text-muted-foreground mb-6">
                    Üretim hatlarının ve endüstriyel ekipmanların temizliğinde kullanılan kimyasalları optimize ederek, zaman, su ve enerji tasarrufu sağlayan projeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Temizlik sürelerinde %40'a varan azalma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Su tüketiminde %30'a varan tasarruf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ekipman ve hat performansında artış</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Daha uzun ekipman ömrü</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Su Yönetimi Çözümleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Endüstriyel süreçlerde su kullanımını azaltan, arıtma maliyetlerini düşüren ve atık suların yeniden kullanımını sağlayan kimyasal çözümler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Su tüketiminde %25-45 arasında azalma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Arıtma kimyasallarında tasarruf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Atık su maliyetlerinde düşüş</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sürdürülebilirlik hedeflerine katkı</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Enerji Verimliliği Çözümleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Isıtma, soğutma ve diğer enerji yoğun süreçlerde kullanılan özel kimyasallarla enerji tüketimini azaltan projeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Kazan ve soğutma sistemlerinde verimlilik artışı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Isı transferinde iyileşme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ekipman bakım maliyetlerinde düşüş</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Karbon ayak izinde azalma</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Üretim Süreci İyileştirme</h3>
                  <p className="text-muted-foreground mb-6">
                    Üretim süreçlerinin kimyasal aşamalarını optimize ederek, hammadde kullanımını azaltan ve üretim verimini artıran projeler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hammadde kullanımında %15-25 tasarruf</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Üretim kapasitesinde artış</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Atık miktarında azalma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ürün kalitesinde iyileşme</span>
                    </li>
                  </ul>
                </div>
              </div>
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
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary mb-2">Tekstil Sektörü</p>
                <h3 className="text-2xl font-bold mb-4">%35 Su Tasarrufu</h3>
                <p className="text-muted-foreground mb-6">
                  Öncü bir tekstil firması için geliştirdiğimiz özel boyama kimyasalları ile su tüketimini %35 azalttık ve enerji maliyetlerini düşürdük.
                </p>
                <div className="border-t border-border pt-4 text-sm text-muted-foreground">
                  <p>"Maister'in geliştirdiği kimyasal çözümler sayesinde sadece maliyetlerimizi düşürmekle kalmadık, sürdürülebilirlik hedeflerimize de bir adım daha yaklaştık."</p>
                  <p className="font-medium mt-2">- Aylin Demir, Üretim Müdürü</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary mb-2">Gıda İmalatı</p>
                <h3 className="text-2xl font-bold mb-4">%40 Temizlik Süresi Azalması</h3>
                <p className="text-muted-foreground mb-6">
                  Bir gıda üreticisi için özel formüle ettiğimiz CIP (Cleaning-in-Place) kimyasalları ile temizlik sürelerini %40 azalttık ve üretim kapasitesini artırdık.
                </p>
                <div className="border-t border-border pt-4 text-sm text-muted-foreground">
                  <p>"Temizlik sürelerindeki azalma sayesinde üretim kapasitemizi %15 artırdık. Maister ekibinin profesyonel yaklaşımı süreç boyunca bize güven verdi."</p>
                  <p className="font-medium mt-2">- Mehmet Yılmaz, Operasyon Direktörü</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary mb-2">Metal İşleme</p>
                <h3 className="text-2xl font-bold mb-4">%20 Enerji Tasarrufu</h3>
                <p className="text-muted-foreground mb-6">
                  Metal işleme tesisi için geliştirdiğimiz koruyucu kimyasallar ile ekipman ömrünü uzattık ve enerji tüketimini %20 azalttık.
                </p>
                <div className="border-t border-border pt-4 text-sm text-muted-foreground">
                  <p>"Ekipmanlarımızın performansındaki artış ve enerji tasarrufu, operasyonel maliyetlerimizi önemli ölçüde düşürdü. Maister ile çalışmaya devam edeceğiz."</p>
                  <p className="font-medium mt-2">- Ali Kaya, Teknik Müdür</p>
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

export default EfficiencyProjects;
