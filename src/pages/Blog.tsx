
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Blog</h1>
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.date}</p>
                  <div className="prose prose-lg max-w-none">
                    {post.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
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
