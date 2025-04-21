import React from 'react';
import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/90 via-primary/60 to-accent/80 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/90 via-primary/60 to-accent/80 opacity-80 blur-[2px] z-0 animate-gradient-x" />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto animate-fade-in delay-100">
              İnovasyon ve kaliteyle, endüstriyel kimyada yeni standartlar belirliyoruz.<br/>
              <span className="block mt-2 text-base text-white/80">Maister & BEJ Kimya</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-200">
              <span className="inline-flex items-center bg-accent text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-accent/90 transition-colors">
                Sürdürülebilirlik
              </span>
              <span className="inline-flex items-center bg-white/90 text-primary font-semibold px-5 py-2 rounded-full shadow hover:bg-primary/90 hover:text-white transition-colors">
                Yenilikçi Çözümler
              </span>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
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
        </div>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Maister & BEJ Kimya Hakkında</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister, BEJ KAUÇUK PLASTİK KİMYA SAN. VE TİC. A.Ş.'nin alt markasıdır. Şirketimiz 2009 yılından bu yana kimya sektöründe; Su Şartlandırma Kimyasalları, Yardımcı Tekstil Kimyasalları, Teknik Bakım ve Koruma Kimyasalları, Endüstriyel Temizlik Kimyasalları, Oto Bakım Ürünleri, Halı Yıkama Kimyasalları, Tutkallar ve Genel Kimyasallar alanında faaliyet göstermektedir.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  İnsan ve çevre sağlığını önceleyen, müşteri memnuniyetini ve sürdürülebilir yenilikçi çözümleri ilke edinmiş bir firmayız. Ürünlerimizin büyük kısmı kendi tesislerimizde üretilmekte, bazı özel ürünlerin tedarik ve satışı da gerçekleştirilmektedir.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Misyonumuz: Sektördeki bilgi birikimimizi yenilikçi üretim teknikleriyle birleştirerek, müşterilerimize yüksek kaliteli ve güvenilir ürünler sunmak.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Vizyonumuz: Kimyasal ürünler sektöründe sürdürülebilir üretim anlayışıyla, ulusal ve uluslararası alanda güvenilir bir marka olmak.
                </p>
                <p className="text-lg text-muted-foreground">
                  “Ortak Geleceğimiz” için iş sağlığı ve güvenliği ile doğa dostu ve çevreci ürünlerin üretilmesi konusunda gelişen teknolojileri takip edip, maksimum düzeyde iştirak ederek devam edeceğiz.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/94fe424a-b19a-48d0-a80f-a30f18ec0612.png" 
                  alt="BEJ Kimya CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Deneyimli Ekibimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maister'in başarısının arkasındaki uzman ve tutkulu ekip.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/lovable-uploads/94fe424a-b19a-48d0-a80f-a30f18ec0612.png"
                  alt="Meral Altuntaş" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Meral Altuntaş</h3>
                  <p className="text-primary mb-4">Kurucu ve SEO</p>
                  <p className="text-muted-foreground">
                    15 yılı aşkın endüstriyel kimya deneyimiyle, şirketimizin vizyonunu ve stratejik yönünü belirliyor.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/lovable-uploads/f814cd5d-2f09-41fc-bae1-71fb321843c9.png"
                  alt="Yunus Torun" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Yunus Torun</h3>
                  <p className="text-primary mb-4">Üretim Müdürü ve Ortak</p>
                  <p className="text-muted-foreground">
                    Üretim süreçlerinin optimize edilmesi ve kalite standartlarının sağlanmasından sorumlu.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/lovable-uploads/c7b45c44-2fad-4af8-92ba-4f3a835504cb.png"
                  alt="Ömür Can Ayhan" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Ömür Can Ayhan</h3>
                  <p className="text-primary mb-4">Dijital Pazarlama Sorumlusu</p>
                  <p className="text-muted-foreground">
                    Dijital varlığımızı güçlendirerek markamızın büyüme hedeflerini gerçekleştiriyor.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/public/lovable-uploads/0d0bbd82-51d2-4917-90cb-425ba0eb9a4a.png"
                  alt="Yusuf Yuzar" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Yusuf Yuzar</h3>
                  <p className="text-primary mb-4">Üretim Sorumlusu</p>
                  <p className="text-muted-foreground">
                    Üretim süreçlerinin verimliliğini ve ürün kalitesini en üst düzeyde tutuyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Temel Değerlerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Maister'i benzersiz kılan değerler ve ilkeler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Kalite ve Güvenilirlik</h3>
                <p className="text-muted-foreground">
                  Tüm ürün ve hizmetlerimizde en yüksek kalite standartlarını korumayı ve müşterilerimize güvenilir çözümler sunmayı taahhüt ediyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">İnovasyon</h3>
                <p className="text-muted-foreground">
                  Sürekli olarak yeni fikirler ve teknolojiler geliştirerek endüstriyel kimya alanında yenilikçi çözümler sunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Müşteri Odaklılık</h3>
                <p className="text-muted-foreground">
                  Her müşterinin benzersiz ihtiyaçlarını anlamak ve bu ihtiyaçlara özel çözümler geliştirmek önceliğimizdir.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Sürdürülebilirlik</h3>
                <p className="text-muted-foreground">
                  Çevreye saygılı üretim süreçleri ve ürünler geliştirerek, doğal kaynakların korunmasına katkıda bulunuyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Etik İş Anlayışı</h3>
                <p className="text-muted-foreground">
                  Dürüstlük, şeffaflık ve adalet ilkelerine bağlı kalarak, tüm paydaşlarımızla güvene dayalı ilişkiler kuruyoruz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Sürekli Gelişim</h3>
                <p className="text-muted-foreground">
                  Kendimizi ve süreçlerimizi sürekli iyileştirerek, müşterilerimize her zaman daha iyi hizmet sunmayı hedefliyoruz.
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

export default About;
