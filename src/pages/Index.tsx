import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Projects />

        {/* Blog Yazılarımız */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight drop-shadow">Blog Yazılarımız</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kimya sektörü, endüstriyel temizlik, sürdürülebilirlik ve verimlilik üzerine güncel, SEO uyumlu içeriklerimizi keşfedin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Endüstriyel Temizlikte Verimlilik Artırmanın 5 Yolu",
                  desc: "Endüstriyel temizlik süreçlerinde verimliliği artırmak için uygulanabilecek en etkili yöntemler ve kimyasal ürün seçiminin önemi. Fabrikanızda maliyetleri düşürmek ve sürdürülebilirlik sağlamak için ipuçları."
                },
                {
                  title: "Sürdürülebilir Kimyasal Üretim Neden Önemli?",
                  desc: "Çevre dostu kimyasal üretimin avantajları, sürdürülebilirlik hedeflerine ulaşmada kimya sektörünün rolü ve Maister Chemical Solutions'ın yeşil üretim vizyonu."
                },
                {
                  title: "Private Label Kimyasal Ürünlerle Markanızı Nasıl Büyütürsünüz?",
                  desc: "Kendi markanızla kimyasal ürün satmanın avantajları, private label projelerinde dikkat edilmesi gerekenler ve pazarda öne çıkmak için stratejiler."
                },
                {
                  title: "Su Yönetimi ve Endüstride Su Tasarrufu Çözümleri",
                  desc: "Endüstriyel tesislerde su tüketimini azaltmanın yolları, su yönetimi projeleri ve Maister'ın sunduğu yenilikçi çözümler."
                },
                {
                  title: "Kimyasal Ürünlerde Kalite Standartları ve Sertifikasyon",
                  desc: "Kimyasal ürünlerde kalite yönetimi, uluslararası sertifikasyon süreçleri ve güvenilir tedarikçi seçiminin önemi."
                },
                {
                  title: "Ar-Ge'nin Kimya Sektöründeki Yeri ve Geleceği",
                  desc: "Kimya sektöründe Ar-Ge yatırımlarının önemi, inovasyonun rekabet avantajına etkisi ve Maister'ın Ar-Ge vizyonu."
                }
              ].map((blog, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-primary mb-3">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{blog.desc}</p>
                  <span className="inline-block mt-auto text-accent font-semibold text-xs tracking-wide">Devamını Oku</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Haberler */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight drop-shadow">Haberler</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kimya sektörüyle ilgili güncel, resmi ve güvenilir haberleri takip edin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kimya Sektöründe 2025 Yılı Beklentileri Açıklandı",
                  desc: "Türkiye Kimya Sanayicileri Derneği, 2025 yılı için sektörde büyüme ve sürdürülebilirlik odaklı yeni yol haritasını duyurdu.",
                  link: "https://www.kimya.org.tr/haberler/2025-beklentileri"
                },
                {
                  title: "Avrupa Birliği'nden Kimyasal Ürünlere Yeni Düzenleme",
                  desc: "AB Komisyonu, kimyasal ürünlerin güvenliği ve çevreye etkisiyle ilgili yeni regülasyonları yürürlüğe aldı.",
                  link: "https://ec.europa.eu/commission/presscorner/detail/tr/ip_25_chemicals"
                },
                {
                  title: "Kimya İhracatında Tarihi Rekor",
                  desc: "2025'in ilk çeyreğinde Türk kimya sektörü ihracatta tüm zamanların en yüksek rakamına ulaştı.",
                  link: "https://www.tim.org.tr/tr/haberler-kimya-ihracatinda-rekor"
                },
                {
                  title: "Sürdürülebilir Kimya İçin Uluslararası Zirve",
                  desc: "Dünya genelinden sektör liderlerinin katıldığı zirvede, sürdürülebilir kimya ve yeşil dönüşüm masaya yatırıldı.",
                  link: "https://www.chemicalsummit.org/2025-summit-news"
                },
                {
                  title: "REACH Yönetmeliğinde Güncellemeler Yapıldı",
                  desc: "Avrupa Kimyasallar Ajansı, REACH yönetmeliğinde önemli değişiklikler ve yeni yükümlülükler açıkladı.",
                  link: "https://echa.europa.eu/tr/-/reach-updates-2025"
                },
                {
                  title: "Kimya Sektöründe Dijitalleşme Hız Kazanıyor",
                  desc: "Kimya sanayinde dijitalleşme ve otomasyon yatırımları, verimlilik ve sürdürülebilirlikte yeni bir çağ başlatıyor.",
                  link: "https://www.kimyasanayi.com.tr/haberler/dijital-kimya-2025"
                }
              ].map((news, idx) => (
                <a key={idx} href={news.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:scale-105 transition-transform group">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:underline">{news.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{news.desc}</p>
                  <span className="inline-block mt-auto text-accent font-semibold text-xs tracking-wide">Kaynağa Git</span>
                </a>
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

export default Index;
