
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
                  Maister Chemical Solutions, 2005 yılında Dr. Kemal Yılmaz tarafından endüstriyel kimya alanında yenilikçi çözümler sunmak üzere kuruldu. İstanbul'da mütevazı bir laboratuvarda başlayan yolculuğumuz, bugün Türkiye'nin önde gelen endüstriyel kimya şirketlerinden biri olma başarısına ulaştı.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Kuruluşumuzdan bu yana, sürdürülebilirlik ve inovasyon ilkelerini benimseyen Maister, çeşitli sektörlerdeki işletmelere özel kimyasal çözümler geliştirmeye odaklanmıştır. İlk yıllarda temizlik ürünleri alanında faaliyet gösteren şirketimiz, zamanla tekstil, otomotiv, gıda ve ilaç sektörlerine yönelik özelleştirilmiş kimyasal çözümler sunmaya başlamıştır.
                </p>
                <p className="text-lg text-muted-foreground">
                  2012 yılında mevcut tesisimize taşınarak üretim kapasitemizi artırdık ve 2015 yılında Ar-Ge laboratuvarımızı kurduk. Bu yatırımlar, müşterilerimize daha kapsamlı ve özelleştirilmiş hizmetler sunmamıza olanak sağladı.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Maister Chemical Solutions Laboratuvar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">Misyonumuz</h3>
                <p className="text-lg text-muted-foreground">
                  İşletmelerin rekabet gücünü artıran, verimliliklerini yükselten ve sürdürülebilir kalkınmaya katkı sağlayan yenilikçi kimyasal çözümler geliştirmek ve sunmak. Her müşterimizin benzersiz ihtiyaçlarına uygun, kaliteli ve güvenilir ürünler sağlayarak, endüstriyel kimya alanında güvenilir bir iş ortağı olmak.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">Vizyonumuz</h3>
                <p className="text-lg text-muted-foreground">
                  Endüstriyel kimya alanında global ölçekte tanınan, inovasyona öncülük eden, müşteri memnuniyeti ve sürdürülebilirliği merkeze alan lider bir marka olmak. Sürekli gelişim ve mükemmellik anlayışıyla, sektörde yeni standartlar belirleyen ve değer yaratan çözümler sunmaya devam etmek.
                </p>
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Kemal Yılmaz" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Kemal Yılmaz</h3>
                  <p className="text-primary mb-4">Kurucu ve CEO</p>
                  <p className="text-muted-foreground">
                    20 yılı aşkın endüstriyel kimya deneyimiyle, şirketimizin vizyonunu ve stratejik yönünü belirliyor.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Prof. Dr. Ayşe Demir" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Prof. Dr. Ayşe Demir</h3>
                  <p className="text-primary mb-4">Ar-Ge Direktörü</p>
                  <p className="text-muted-foreground">
                    Organik kimya alanındaki uzmanlığıyla yenilikçi formüller geliştiriyor ve Ar-Ge ekibine liderlik ediyor.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Murat Kaya" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Murat Kaya</h3>
                  <p className="text-primary mb-4">Üretim Müdürü</p>
                  <p className="text-muted-foreground">
                    Üretim süreçlerinin optimize edilmesi ve kalite standartlarının sağlanmasından sorumlu.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Zeynep Öztürk" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Zeynep Öztürk</h3>
                  <p className="text-primary mb-4">İş Geliştirme Direktörü</p>
                  <p className="text-muted-foreground">
                    Stratejik ortaklıklar kurarak şirketin büyüme hedeflerini gerçekleştiriyor.
                  </p>
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

export default About;
