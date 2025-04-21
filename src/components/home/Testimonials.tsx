import { useState } from "react";

const testimonials = [
  {
    quote: "Maister Chemical Solutions ile çalışmaya başladıktan sonra üretim verimliliğimiz %30 oranında arttı. Özel formüle edilmiş endüstriyel temizleyicileri, işimize özel olarak geliştirilmesi büyük fark yarattı.",
    author: "Ahmet Yılmaz",
    company: "Mega Endüstri A.Ş.",
    position: "Üretim Müdürü"
  },
  {
    quote: "Private label ürünlerimiz için Maister'i tercih ettik ve sonuçlardan son derece memnunuz. Müşterilerimiz ürün kalitesini fark ediyor ve bu da markamıza olan güveni artırıyor.",
    author: "Ayşe Kaya",
    company: "BestClean Ltd.",
    position: "Genel Müdür"
  },
  {
    quote: "Profesyonel yaklaşımları ve çözüm odaklı hizmetleriyle Maister, kimyasal ihtiyaçlarımız için vazgeçilmez bir iş ortağı haline geldi. Hammadde tedariklerindeki güvenilirlik ve kalite standartları bizi her zaman memnun ediyor.",
    author: "Murat Demir",
    company: "İnova Tekstil",
    position: "Satın Alma Direktörü"
  },
  {
    quote: "Maister sayesinde üretim maliyetlerimizde ciddi bir azalma sağladık. Teknik destek ekibi her zaman ulaşılabilir ve çözüm odaklı.",
    author: "Elif Arslan",
    company: "Arslan Gıda",
    position: "Fabrika Müdürü"
  },
  {
    quote: "Yenilikçi ürünleri ve sürdürülebilirlik vizyonu ile sektörümüzde fark yarattılar. Uzun vadeli iş birliğimizden çok memnunuz.",
    author: "Cemal Korkmaz",
    company: "Korkmaz Metal",
    position: "Genel Müdür"
  },
  {
    quote: "Hızlı teslimat, kaliteli ürün ve güvenilirlik... Maister ile çalışmak büyük bir avantaj.",
    author: "Zeynep Uçar",
    company: "Uçar Halı Yıkama",
    position: "İşletme Sahibi"
  }
];

const Testimonials = () => {
  const [start, setStart] = useState(0);
  const visible = 3;
  const total = testimonials.length;
  const next = () => setStart((prev) => (prev + 1) % total);
  const prev = () => setStart((prev) => (prev - 1 + total) % total);
  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(testimonials[(start + i) % total]);
    }
    return arr;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-100">
            Sunduğumuz kimyasal çözümlerle işletmelere nasıl değer kattığımızı keşfedin.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button onClick={prev} aria-label="Önceki" className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg transition-colors duration-200 border border-primary/20">
            <span className="text-2xl">&#8592;</span>
          </button>
          <div className="overflow-hidden w-full">
            <div className="flex justify-center gap-8 transition-transform duration-500">
              {getVisible().map((testimonial, index) => (
                <div key={index} className="relative bg-gradient-to-br from-white via-secondary/40 to-primary/5 rounded-2xl shadow-xl p-8 min-w-[320px] max-w-md mx-auto flex-1 flex flex-col items-center group hover:scale-105 transition-transform">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl shadow-lg border-4 border-white animate-bounce">
                    <span>“</span>
                  </div>
                  <div className="relative z-10 mt-8">
                    <p className="text-foreground mb-6 italic text-lg animate-fade-in delay-150">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-primary text-base animate-fade-in delay-200">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm animate-fade-in delay-300">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} aria-label="Sonraki" className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg transition-colors duration-200 border border-primary/20">
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStart(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${start === idx ? "bg-primary" : "bg-primary/20"}`}
              aria-label={`Yorumu göster: ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
