import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Search, 
  Users, 
  TrendingDown,
  Zap,
  Target,
  MessageCircle,
  Mail,
  Instagram,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import immagineStudio from './studio-bisio.png';

const portfolioItems = [
  {
    id: 1,
    name: 'Studio Ibis',
    description: 'Sito web elegante e dal design raffinato per uno studio di tatuaggi. Progettato per esaltare le opere d\'arte e facilitare le prenotazioni.',
    image: immagineStudio,
    link: 'https://ferryvsferry.github.io/Studio-Ibis/'
  },
  {
    id: 2,
    name: 'Ristorante "La Tradizione"',
    description: 'Sito vetrina con menu digitale e modulo prenotazioni integrato.',
    image: 'https://picsum.photos/seed/restaurant/800/500',
    link: '#'
  },
  {
    id: 3,
    name: 'Studio Legale Rossi',
    description: 'Restyling completo per trasmettere professionalità e acquisire nuovi clienti.',
    image: 'https://picsum.photos/seed/lawyer/800/500',
    link: '#'
  }
];

const testimonials = [
  {
    text: "Lorenzo ha capito subito le nostre esigenze. Il nuovo sito ci ha portato il 30% di prenotazioni in più nel primo mese.",
    author: "Marco T.",
    role: "Titolare Ristorante"
  },
  {
    text: "Professionale, veloce e sempre disponibile. La bozza gratuita mi ha convinto subito ad affidarmi a lui.",
    author: "Giulia S.",
    role: "Libera Professionista"
  }
];

export default function CreazioneSitiWeb() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  return (
    <div className="bg-white flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-50 pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Fai crescere la tua attività online con un sito che <span className="text-blue-600">lavora per te</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Aiuto le realtà locali a migliorare la propria presenza online e ottenere più clienti, con soluzioni semplici e concrete.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#contatti-rapidi" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Richiedi una demo gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-gray-500 font-medium">Nessun costo. Nessun impegno.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. SEZIONE EMPATIA E CONNESSIONE */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Il digitale non deve essere un ostacolo</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p>
              Dietro ogni attività locale c'è un lavoro immenso che spesso non viene valorizzato online. 
              Il mio obiettivo è tradurre la tua passione in una presenza web che parli direttamente ai tuoi clienti, 
              togliendoti il peso delle complicazioni tecniche.
            </p>
            <p className="font-medium text-gray-900 text-xl mt-8 border-l-4 border-blue-600 pl-6 text-left italic">
              "Voglio darti gli strumenti per competere e distinguerti, trasformando il tuo sito in un vero e proprio alleato per il tuo lavoro quotidiano."
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE PROBLEMA (Pain points) */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ti riconosci in queste situazioni?</h2>
            <p className="text-lg text-gray-600">Molte attività locali affrontano gli stessi ostacoli online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Sito web lento", desc: "I clienti abbandonano la pagina prima ancora che si carichi." },
              { icon: Search, title: "Scarsa visibilità", desc: "Sei introvabile su Google quando le persone cercano i tuoi servizi." },
              { icon: TrendingDown, title: "Pochi contatti", desc: "Il sito c'è, ma il telefono non squilla e non arrivano email." },
              { icon: Users, title: "Immagine datata", desc: "Una presenza online poco curata che non trasmette il tuo vero valore." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEZIONE SOLUZIONE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Per rendere tutto semplice e senza rischi...</h2>
          <p className="text-xl text-gray-600 mb-12">
            L'obiettivo è mostrarvi concretamente come un sito moderno può attirare clienti e semplificare il vostro lavoro.
          </p>
          
          <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-3xl font-bold mb-6">Ti offro una BOZZA GRATUITA personalizzata</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
              <div className="flex items-center justify-center bg-blue-700/50 rounded-lg py-3 px-6">
                <CheckCircle2 className="w-6 h-6 text-blue-300 mr-3" />
                <span className="font-medium text-lg">Nessun costo</span>
              </div>
              <div className="flex items-center justify-center bg-blue-700/50 rounded-lg py-3 px-6">
                <CheckCircle2 className="w-6 h-6 text-blue-300 mr-3" />
                <span className="font-medium text-lg">Nessun obbligo</span>
              </div>
            </div>
            <a 
              href="#contatti-rapidi" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-xl hover:bg-gray-50 transition-all shadow-md w-full sm:w-auto"
            >
              Voglio vedere la mia bozza gratuita
            </a>
          </div>
        </div>
      </section>

      {/* 5. SEZIONE VALORE CONCRETO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cosa otterrai con il nuovo sito</h2>
              <ul className="space-y-6">
                {[
                  { icon: Zap, title: "Sito più veloce e moderno", desc: "Ottimizzato per caricarsi all'istante su smartphone e PC." },
                  { icon: Search, title: "Migliore posizionamento", desc: "Strutturato per piacere a Google e farti trovare facilmente." },
                  { icon: Target, title: "Più contatti e richieste", desc: "Pulsanti chiari e moduli semplici per trasformare i visitatori in clienti." },
                  { icon: Users, title: "Design pensato per convertire", desc: "Non solo bello da vedere, ma studiato per guidare l'utente all'azione." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Analisi e crescita sito web" 
                className="relative rounded-3xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEZIONE PORTFOLIO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alcuni lavori realizzati</h2>
            <p className="text-lg text-gray-600">Esempi di come ho aiutato altre attività a presentarsi al meglio.</p>
          </div>

          <div 
            className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9] shadow-md group max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={currentSlide}
                href={portfolioItems[currentSlide].link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 block"
              >
                <img 
                  src={portfolioItems[currentSlide].image} 
                  alt={portfolioItems[currentSlide].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 pb-20 sm:p-10 sm:pb-20">
                  <div className="text-white flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{portfolioItems[currentSlide].name}</h3>
                      <p className="text-gray-200 text-sm sm:text-base max-w-xl">{portfolioItems[currentSlide].description}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-blue-600 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </AnimatePresence>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg transition-transform hover:scale-110 z-10"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg transition-transform hover:scale-110 z-10"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {portfolioItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEZIONE PROVA SOCIALE */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Collaboro con realtà locali che vogliono crescere online</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="text-4xl text-blue-200 absolute top-4 left-4 font-serif">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 pt-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEZIONE CONTATTO RAPIDO (HIGHLIGHTED) */}
      <section id="contatti-rapidi" className="py-24 bg-blue-600 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Vuoi vedere come potrebbe essere il tuo nuovo sito?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Richiedi ora una demo gratuita e senza impegno. Scegli il metodo che preferisci per contattarmi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a 
              href="https://wa.me/393515584636"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-500 text-center">Risposta rapida</p>
            </a>

            <a 
              href="mailto:lorenzoferrara737@gmail.com"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-500 text-center">Scrivimi i dettagli</p>
            </a>

            <a 
              href="#"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all mb-4">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Instagram</h3>
              <p className="text-sm text-gray-500 text-center">Seguimi e scrivimi</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

