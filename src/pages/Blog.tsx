import React from 'react';
import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Endüstriyel Temizlikte Verimlilik Artırmanın 5 Yolu",
      date: "18 Nisan 2025",
      excerpt: "Endüstriyel temizlik süreçlerinde verimliliği artırmak için uygulanabilecek en etkili yöntemler ve kimyasal ürün seçiminin önemi.",
      content: `
        Endüstriyel tesislerde temizlik süreçlerinin verimliliği, hem operasyonel maliyetler hem de üretim kalitesi açısından kritik öneme sahiptir. İşte endüstriyel temizlikte verimliliği artırmanın 5 etkili yolu:

        1. Doğru Kimyasal Seçimi
        - Yüzey tipine uygun kimyasal seçimi
        - Konsantrasyon oranlarının doğru ayarlanması
        - Çevre dostu ve sürdürülebilir ürünlerin tercih edilmesi

        2. Otomatik Dozajlama Sistemleri
        - İnsan hatasını minimize etme
        - Kimyasal israfını önleme
        - Tutarlı temizlik sonuçları elde etme

        3. Personel Eğitimi
        - Kimyasal kullanım güvenliği
        - Ekipman kullanım teknikleri
        - Verimli temizlik prosedürleri

        4. Preventif Bakım Programları
        - Düzenli ekipman kontrolü
        - Zamanında müdahale
        - Uzun vadeli maliyet tasarrufu

        5. Süreç Optimizasyonu
        - İş akışlarının düzenlenmesi
        - Zaman yönetiminin iyileştirilmesi
        - Kaynakların etkin kullanımı

        Bu yöntemlerin uygulanması, endüstriyel tesislerde hem temizlik kalitesini artırır hem de maliyetleri optimize eder. Maister Chemical Solutions olarak, müşterilerimize bu konularda kapsamlı danışmanlık hizmeti sunuyoruz.
      `
    },
    {
      id: 2,
      title: "Sürdürülebilir Kimyasal Üretim Neden Önemli?",
      date: "15 Nisan 2025",
      excerpt: "Çevre dostu kimyasal üretimin avantajları ve sürdürülebilirlik hedeflerine ulaşmada kimya sektörünün rolü.",
      content: `
        Sürdürülebilir kimyasal üretim, günümüz endüstrisinin en önemli konularından biridir. Çevresel etkiler ve kaynakların verimli kullanımı açısından kritik öneme sahiptir.

        Sürdürülebilir Üretimin Temel Prensipleri:
        
        1. Hammadde Kullanımı
        - Yenilenebilir kaynakların tercih edilmesi
        - Geri dönüştürülmüş malzemelerin kullanımı
        - Atık minimizasyonu

        2. Enerji Verimliliği
        - Yenilenebilir enerji kaynaklarının kullanımı
        - Enerji tasarruflu üretim süreçleri
        - Akıllı otomasyon sistemleri

        3. Su Yönetimi
        - Su tüketiminin azaltılması
        - Atık suların arıtılması ve yeniden kullanımı
        - Su ayak izinin minimize edilmesi

        4. Emisyon Kontrolü
        - Sera gazı emisyonlarının azaltılması
        - Hava kalitesi kontrolü
        - Filtrasyon sistemleri

        Maister Chemical Solutions olarak, sürdürülebilir üretim prensiplerimiz:
        - ISO 14001 Çevre Yönetim Sistemi standardına uygunluk
        - Ar-Ge çalışmalarında çevre odaklı yaklaşım
        - Yeşil kimya prensiplerinin uygulanması
        - Döngüsel ekonomi modelinin benimsenmesi

        Sürdürülebilir kimyasal üretim, gelecek nesillere daha yaşanabilir bir dünya bırakma sorumluluğumuzun önemli bir parçasıdır.
      `
    },
    {
      id: 3,
      title: "Private Label Kimyasal Ürünlerle Markanızı Nasıl Büyütürsünüz?",
      date: "10 Nisan 2025",
      excerpt: "Kendi markanızla kimyasal ürün satmanın avantajları ve pazarda öne çıkmak için stratejiler.",
      content: `
        Private label kimyasal ürünler, firmaların kendi markalarıyla pazarda yer almalarını sağlayan önemli bir iş modelidir. Bu modelin başarılı bir şekilde uygulanması için dikkat edilmesi gereken noktalar:

        1. Pazar Araştırması
        - Hedef kitlenin belirlenmesi
        - Rekabet analizi
        - Pazar boşluklarının tespiti

        2. Ürün Geliştirme
        - Kalite standartlarının belirlenmesi
        - Ar-Ge çalışmaları
        - Formülasyon optimizasyonu

        3. Marka Kimliği
        - Güçlü marka konumlandırması
        - Tutarlı görsel kimlik
        - Değer önerisi geliştirme

        4. Üretim Süreçleri
        - Kalite kontrol sistemleri
        - Verimlilik optimizasyonu
        - Maliyet yönetimi

        5. Pazarlama Stratejileri
        - Hedef kitle iletişimi
        - Dijital pazarlama
        - Müşteri ilişkileri yönetimi

        Maister Chemical Solutions'ın Private Label Hizmetleri:
        - Özel formülasyon geliştirme
        - Kalite güvence desteği
        - Teknik danışmanlık
        - Ambalaj tasarımı desteği
        - Yasal mevzuat danışmanlığı

        Private label kimyasal ürünler, firmaların kendi markalarıyla büyümelerini ve pazarda rekabet avantajı elde etmelerini sağlar.
      `
    }
  ];

  const [expanded, setExpanded] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight text-center drop-shadow">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className={`relative bg-gradient-to-br from-white via-secondary/40 to-primary/5 rounded-2xl shadow-xl p-8 flex flex-col hover:scale-105 transition-transform group border border-primary/10 ${expanded === post.id ? 'ring-2 ring-accent' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Kimya Blog</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <button
                    className="text-accent font-semibold text-sm underline underline-offset-4 mb-4 self-start hover:text-primary transition-colors"
                    onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                  >
                    {expanded === post.id ? 'Kapat' : 'Devamını Oku'}
                  </button>
                  {expanded === post.id && (
                    <div className="prose prose-lg max-w-none animate-fade-in border-t border-accent/20 pt-4 mt-2">
                      {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>
                      ))}
                    </div>
                  )}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl shadow-lg border-4 border-white animate-bounce">
                    <span>✍️</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
