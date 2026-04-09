import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const portfolioItems = [
  {
    id: 1,
    name: 'Sito Vetrina Ristorante',
    image: 'https://picsum.photos/seed/restaurant/800/500',
    link: '#'
  },
  {
    id: 2,
    name: 'E-commerce Abbigliamento',
    image: 'https://picsum.photos/seed/ecommerce/800/500',
    link: '#'
  },
  {
    id: 3,
    name: 'Portfolio Fotografico',
    image: 'https://picsum.photos/seed/portfolio/800/500',
    link: '#'
  }
];

export default function CreazioneSitiWeb() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  return (
    <div className="bg-white min-h-[80vh]">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600">
              <Globe className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Creazione Siti Web</h1>
          </div>
          <p className="text-xl text-gray-600">Sviluppo di siti web moderni, veloci e ottimizzati per convertire i visitatori in clienti.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-600 max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come funziona</h2>
          <p>
            La creazione del sito web si sviluppa partendo dalla <strong>dimostrazione pratica</strong>: realizzo una demo personalizzata per farti toccare con mano il risultato potenziale. Successivamente, tramite un contatto diretto, stabiliamo insieme le direttive, gli obiettivi e il design desiderato.
          </p>
          <p>
            Una volta definita la strategia, decidiamo come procedere. Le tipologie di siti web che posso realizzare includono:
          </p>
          <ul className="space-y-2">
            <li><strong>Singole pagine (Landing Page):</strong> perfette per promuovere un servizio specifico o raccogliere contatti.</li>
            <li><strong>Siti multi-pagina:</strong> ideali per presentare un'azienda, i suoi servizi e la sua storia in modo strutturato.</li>
            <li><strong>E-commerce:</strong> negozi online completi per vendere i tuoi prodotti direttamente sul web.</li>
          </ul>
          <p>
            Inoltre, la <strong>gestione del sito web</strong> è flessibile: può essere affidata completamente a te (ti fornirò gli strumenti necessari) oppure posso occuparmene io direttamente, garantendo aggiornamenti e manutenzione costanti.
          </p>

          {/* Portfolio Carousel */}
          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8">Portfolio</h2>
          
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video shadow-sm group">
            <AnimatePresence mode="wait">
              <motion.a
                key={currentSlide}
                href={portfolioItems[currentSlide].link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 block"
              >
                <img 
                  src={portfolioItems[currentSlide].image} 
                  alt={portfolioItems[currentSlide].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white flex items-center justify-between w-full">
                    <h3 className="text-2xl font-bold">{portfolioItems[currentSlide].name}</h3>
                    <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            </AnimatePresence>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {portfolioItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Iniziamo il tuo progetto</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Raccontami la tua idea. Partiremo con una demo gratuita per capire insieme la direzione migliore per il tuo nuovo sito web.
            </p>
            <Link 
              to="/contatti" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Richiedi una demo gratuita
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
