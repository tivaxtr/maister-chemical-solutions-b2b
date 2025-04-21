import { useState, FormEvent } from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/layout/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your server here
    // For demo purposes, we'll just simulate a successful submission
    try {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsError(false);
      // Reset form after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
    }
  };

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">İletişime Geçin</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                İşletmenize özel kimyasal çözümler için bizimle iletişime geçin. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
                
                {isSubmitted && !isError && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                  </div>
                )}
                
                {isError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <p>Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız Soyadınız*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Şirket Adı*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta Adresiniz*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Konu*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Lütfen bir konu seçin</option>
                      <option value="Özel Ürünler">Özel Ürünler</option>
                      <option value="Verimlilik Projeleri">Verimlilik Projeleri</option>
                      <option value="Private Label">Private Label</option>
                      <option value="Hammadde Satışları">Hammadde Satışları</option>
                      <option value="Genel Bilgi">Genel Bilgi</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesajınız*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Gönder
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-secondary rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium">E-posta Adresimiz</h3>
                        <p className="text-gray-600">info@bej.com.tr</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium">Telefon Numaramız</h3>
                        <p className="text-gray-600">0224 411 15 68</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium">Adresimiz</h3>
                        <p className="text-gray-600">
                          Minareliçavuş OSB, Sanayi Bölgesi, Meşe Cd. No:12/B, 16140 Ni̇lüfer/Bursa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Çalışma Saatlerimiz</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Pazartesi - Cuma:</span>
                      <span>08:30 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">Cumartesi:</span>
                      <span>09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pazar:</span>
                      <span>Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Konum</h2>
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.9656220632844!2d29.004661115246654!3d41.07747687929477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f8fffff%3A0x37e5dac4eb77d5e5!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1650011390000!5m2!1str!2str"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maister Chemical Solutions Konum"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
