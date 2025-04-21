import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import ContactCTA from "../components/home/ContactCTA";

const About = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hakkımızda</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                İnovasyon ve kaliteyi temel alarak endüstriyel kimya alanında yeni standartlar belirliyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hikayemiz</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister Chemical Solutions, 2009 yılında Meral Altuntaş tarafından endüstriyel kimya alanında yenilikçi çözümler sunmak üzere kuruldu. İstanbul'da mütevazı bir laboratuvarda başlayan yolculuğumuz, bugün Türkiye'nin önde gelen endüstriyel kimya şirketlerinden biri olma başarısına ulaştı.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Kuruluşumuzdan bu yana, sürdürülebilirlik ve inovasyon ilkelerini benimseyen Maister, çeşitli sektörlerdeki işletmelere özel kimyasal çözümler geliştirmeye odaklanmıştır. İlk yıllarda temizlik ürünleri alanında faaliyet gösteren şirketimiz, zamanla tekstil, otomotiv, gıda ve ilaç sektörlerine yönelik özelleştirilmiş kimyasal çözümler sunmaya başlamıştır.
                </p>
                <p className="text-lg text-muted-foreground">
                  2015 yılında mevcut tesisimize taşınarak üretim kapasitemizi artırdık ve Ar-Ge laboratuvarımızı kurduk. Bu yatırımlar, müşterilerimize daha kapsamlı ve özelleştirilmiş hizmetler sunmamıza olanak sağladı.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/94fe424a-b19a-48d0-a80f-a30f18ec0612.png" 
                  alt="Maister Chemical Solutions CEO" 
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
                  src="/public/lovable-uploads/c7b45c44-2fad-4af8-92ba-4f3a835504cb.png"
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
                  src="/public/lovable-uploads/f814cd5d-2f09-41fc-bae1-71fb321843c9.png"
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
