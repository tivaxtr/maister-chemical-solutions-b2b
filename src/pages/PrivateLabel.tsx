
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

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Markanızı Güçlendiren Private Label Çözümler</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maister Chemical Solutions olarak, kendi markanızla pazara sunabileceğiniz yüksek kaliteli kimyasal ürünler üretiyoruz. Private label projelerimiz, markanızın değerini artırırken, üretim ve Ar-Ge maliyetlerinden tasarruf etmenizi sağlıyor.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Uzmanlığımız ve üretim kapasitemizle, endüstriyel temizleyicilerden kişisel bakım ürünlerine, otomotiv bakım ürünlerinden ev temizlik ürünlerine kadar geniş bir yelpazede private label üretim hizmeti sunuyoruz.
                </p>
                <p className="text-lg text-muted-foreground">
                  Her aşamada yanınızda olarak, ürün formülasyonundan etiket tasarımına, ambalajlamadan lojistik planlamaya kadar eksiksiz bir hizmet sağlıyoruz.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1602665742701-389671bc40c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Private Label Projeleri" 
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Private Label'in Avantajları</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kendi markanızla ürün satmanın işletmenize sağlayacağı faydalar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Marka Değeri Oluşturma</h3>
                <p className="text-muted-foreground">
                  Kendi markanızla satış yaparak, marka bilinirliğinizi artırın ve müşterilerinizle daha güçlü bağlar kurun.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Üretim Maliyetlerinden Tasarruf</h3>
                <p className="text-muted-foreground">
                  Kendi üretim tesisinizi kurma ve işletme maliyetleri olmadan, profesyonel üretim avantajlarından yararlanın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Rekabetçi Fiyatlandırma</h3>
                <p className="text-muted-foreground">
                  Ölçek ekonomisinden yararlanarak, rekabetçi fiyatlarla yüksek kaliteli ürünler sunabilirsiniz.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Ar-Ge'siz İnovasyon</h3>
                <p className="text-muted-foreground">
                  Kendi Ar-Ge ekibiniz olmadan, sürekli yenilenen ve geliştirilen ürün formüllerinden faydalanın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Ürün Yelpazesi Genişletme</h3>
                <p className="text-muted-foreground">
                  Minimal risk ve yatırımla ürün yelpazenizi genişletin ve yeni pazarlara açılın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Hızlı Pazara Giriş</h3>
                <p className="text-muted-foreground">
                  Yeni bir ürünü geliştirme ve üretim süreçlerini atlayarak, çok daha hızlı bir şekilde pazara girin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Private Label Ürün Kategorilerimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Markanız için üretebileceğimiz geniş ürün yelpazesi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Endüstriyel Temizlik Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Fabrikalar, atölyeler ve endüstriyel tesisler için yüksek performanslı temizlik ürünleri.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Endüstriyel Yağ Çözücüler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Zemin Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Makine Parça Yıkama Solüsyonları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CIP (Cleaning-in-Place) Sistemleri</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Profesyonel Temizlik Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Oteller, restoranlar, ofisler ve kurumsal tesisler için profesyonel temizlik çözümleri.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Genel Yüzey Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Banyo ve Mutfak Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Halı ve Döşeme Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dezenfektanlar ve Hijyen Ürünleri</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Otomotiv Bakım Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Oto yıkama, galeri ve servislerin ihtiyaçlarına yönelik otomotiv bakım kimyasalları.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Oto Yıkama Şampuanları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lastik ve Plastik Parlatıcılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Motor ve Parça Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cilalar ve Koruyucu Ürünler</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Ev Temizlik Ürünleri</h3>
                  <p className="text-muted-foreground mb-6">
                    Tüketici pazarına yönelik, günlük ev temizliğinde kullanılan yüksek kaliteli ürünler.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Çamaşır Deterjanları ve Yumuşatıcılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Bulaşık Deterjanları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Çok Amaçlı Temizleyiciler</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Özel Yüzey Temizleyiciler</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Private Label Sürecimiz</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kendi markanızla ürün geliştirme aşamaları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 pt-2">İhtiyaç Analizi</h3>
                <p className="text-muted-foreground">
                  Markanızın, hedef kitlenizin ve ürün beklentilerinizin detaylı analizi
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Formül Geliştirme</h3>
                <p className="text-muted-foreground">
                  Markanıza ve pazarınıza uygun özel formüllerin Ar-Ge süreçleri
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Ambalaj Tasarımı</h3>
                <p className="text-muted-foreground">
                  Markanıza uygun etiket ve ambalaj tasarımı desteği
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Üretim</h3>
                <p className="text-muted-foreground">
                  Modern tesislerimizde yüksek kalite standartlarında üretim
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
                <h3 className="text-xl font-bold mb-4 pt-2">Teslimat ve Destek</h3>
                <p className="text-muted-foreground">
                  Zamanında teslimat ve sürekli teknik destek hizmetleri
                </p>
              </div>
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
