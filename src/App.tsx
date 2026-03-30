import { useState, useEffect } from 'react';
import { Moon, Sun, Linkedin, Twitter, Instagram, FileText, Camera, Video, MonitorPlay, Menu, X, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">ŞDD.</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hakkimda" className="text-sm font-medium hover:text-primary/70 transition-colors">Hakkımda</a>
            <a href="#ozgecmis" className="text-sm font-medium hover:text-primary/70 transition-colors">Özgeçmiş</a>
            <a href="#iletisim" className="text-sm font-medium hover:text-primary/70 transition-colors">İletişim</a>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={toggleMenu} className="p-2 -mr-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-border bg-background overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-4">
                <a href="#hakkimda" onClick={closeMenu} className="text-base font-medium py-2">Hakkımda</a>
                <a href="#ozgecmis" onClick={closeMenu} className="text-base font-medium py-2">Özgeçmiş</a>
                <a href="#iletisim" onClick={closeMenu} className="text-base font-medium py-2">İletişim</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hakkimda" className="pt-32 pb-20 px-4 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 min-h-[80vh] md:min-h-[70vh] justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Merhaba, ben <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Şeyma Dilara Daruva
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Üsküdar Üniversitesi Yeni Medya ve İletişim bölümü 3. sınıf öğrencisiyim. 
              Video kurgu, profesyonel çekim ve sosyal medya yönetimi alanlarında kendimi geliştiriyorum.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer" className="p-3 bg-muted rounded-full hover:bg-muted/80 hover:scale-105 transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/DaruvaDilara" target="_blank" rel="noreferrer" className="p-3 bg-muted rounded-full hover:bg-muted/80 hover:scale-105 transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/dilaradrv/" target="_blank" rel="noreferrer" className="p-3 bg-muted rounded-full hover:bg-muted/80 hover:scale-105 transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src="https://i.imgur.com/vWUGAW1.jpg" 
                alt="Şeyma Dilara Daruva" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Resume Section */}
        <section id="ozgecmis" className="py-24 px-4 bg-muted/30 border-y border-border/50">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Özgeçmiş</h2>
                <p className="text-muted-foreground text-lg">Eğitim hayatım, yeteneklerim ve projelerim.</p>
              </div>
              <a 
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:39110224-3025-4490-a4c8-a0cdfa55b899" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-sm"
              >
                <FileText size={18} />
                CV'mi Görüntüle
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Eğitim */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold flex items-center gap-3 border-b border-border pb-4">
                  <MonitorPlay className="text-blue-500" size={24} /> Eğitim Bilgileri
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-background"></div>
                    <h4 className="font-bold text-lg">Üsküdar Üniversitesi</h4>
                    <p className="text-foreground/80 font-medium mt-1">Yeni Medya ve İletişim (Lisans)</p>
                    <p className="text-sm text-muted-foreground mt-1">2023 - Devam Ediyor (3. Sınıf)</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5 ring-4 ring-background"></div>
                    <h4 className="font-bold text-lg">Darıca Özel Final Anadolu Lisesi</h4>
                    <p className="text-foreground/80 font-medium mt-1">Lise Eğitimi</p>
                    <p className="text-sm text-muted-foreground mt-1">Mezuniyet: 2021</p>
                  </div>
                </div>
              </div>

              {/* Projeler & Deneyim */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold flex items-center gap-3 border-b border-border pb-4">
                  <Video className="text-purple-500" size={24} /> Projeler & Deneyim
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1.5 ring-4 ring-background"></div>
                    <h4 className="font-bold text-lg">TRT Geleceğin İletişimcileri Yarışması</h4>
                    <p className="text-foreground/80 font-medium mt-1">Finalist</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">2025</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">İki ekip arkadaşımla birlikte yönetmeye başladığımız sosyal medya hesabı projesi ile yarışmaya başvurduk ve finale kalma başarısı gösterdik.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5 ring-4 ring-background"></div>
                    <h4 className="font-bold text-lg flex items-center gap-2 flex-wrap">
                      Sosyal Medya Yönetimi - Siber Okur
                      <a href="https://www.instagram.com/siberokur?igsh=aTNkdWlrbGkzaGZn&utm_source=qr" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#E1306C] transition-colors" title="Siber Okur Instagram">
                        <Instagram size={18} />
                      </a>
                    </h4>
                    <p className="text-foreground/80 font-medium mt-1">İçerik Üreticisi & Yönetici</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">2025 - Devam Ediyor</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">Ekip arkadaşlarımla beraber Siber Okur hesabı için konsept geliştirme, içerik üretimi ve hesap yönetimi süreçlerini yürütüyoruz.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-1.5 ring-4 ring-background"></div>
                    <h4 className="font-bold text-lg flex items-center gap-2 flex-wrap">
                      Podcast - Biz Bize
                      <a href="https://open.spotify.com/show/1yrPQfREokqLzPms6uyNrn?si=5b799af7b8154dbf" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#1DB954] transition-colors" title="Biz Bize Spotify">
                        <Mic size={18} />
                      </a>
                    </h4>
                    <p className="text-foreground/80 font-medium mt-1">İçerik Üreticisi & Sunucu</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">2025 - Devam Ediyor</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">İki ekip arkadaşımızla birlikte yaptığımız bu podcast projesinde; popüler kültür, sosyal medya ve günlük yaşamın içinde fark etmeden kurduğumuz ‘ayna benlik’ ilişkisini çözümlüyor, genç dinleyicilere kendilerini tanıma ve sorgulama alanı açıyoruz.</p>
                  </div>
                </div>
              </div>

              {/* Yetenekler */}
              <div className="md:col-span-2 space-y-8 mt-4">
                <h3 className="text-2xl font-semibold flex items-center gap-3 border-b border-border pb-4">
                  <Camera className="text-green-500" size={24} /> Yetenekler & Eğitimler
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-5 bg-background rounded-2xl border border-border shadow-sm text-center space-y-2 hover:border-primary/30 transition-colors">
                    <div className="font-bold text-foreground">Adobe Premiere Pro</div>
                    <div className="text-sm text-muted-foreground">İyi Seviye Kurgu</div>
                  </div>
                  <div className="p-5 bg-background rounded-2xl border border-border shadow-sm text-center space-y-2 hover:border-primary/30 transition-colors">
                    <div className="font-bold text-foreground">Kamera Kullanımı</div>
                    <div className="text-sm text-muted-foreground">Profesyonel Çekim</div>
                  </div>
                  <div className="p-5 bg-background rounded-2xl border border-border shadow-sm text-center space-y-2 hover:border-primary/30 transition-colors">
                    <div className="font-bold text-foreground">Fotoğrafçılık</div>
                    <div className="text-sm text-muted-foreground">Makine Kullanımı</div>
                  </div>
                  <div className="p-5 bg-background rounded-2xl border border-border shadow-sm text-center space-y-2 hover:border-primary/30 transition-colors">
                    <div className="font-bold text-foreground">Canva & Adobe</div>
                    <div className="text-sm text-muted-foreground">Udemy Eğitimleri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">İletişime Geçin</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Projeleriniz, işbirlikleri veya sadece merhaba demek için sosyal medya hesaplarımdan bana ulaşabilirsiniz.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-muted rounded-2xl hover:bg-muted/80 hover:scale-105 transition-all w-full sm:w-auto">
                <Linkedin className="text-[#0A66C2]" />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a href="https://x.com/DaruvaDilara" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-muted rounded-2xl hover:bg-muted/80 hover:scale-105 transition-all w-full sm:w-auto">
                <Twitter className="text-foreground" />
                <span className="font-semibold">Twitter (X)</span>
              </a>
              <a href="https://www.instagram.com/dilaradrv/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-muted rounded-2xl hover:bg-muted/80 hover:scale-105 transition-all w-full sm:w-auto">
                <Instagram className="text-[#E1306C]" />
                <span className="font-semibold">Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} Şeyma Dilara Daruva. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
