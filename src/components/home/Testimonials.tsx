
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
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sunduğumuz kimyasal çözümlerle işletmelere nasıl değer kattığımızı keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 relative">
              {/* Quote mark */}
              <div className="absolute top-6 left-8 text-6xl text-primary/10 font-serif">
                "
              </div>
              <div className="relative z-10">
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
