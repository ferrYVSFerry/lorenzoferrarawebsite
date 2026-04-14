import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Search, 
  Users, 
  TrendingDown,
  TrendingUp,
  MousePointerClick,
  Zap,
  Target,
  MessageCircle,
  Mail,
  Instagram,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import immagineStudio from './studio-bisio.png';

const portfolioItems = [
  {
    id: 1,
    name: 'De Maio Home',
    description: 'Sito vetrina con contatto diretto e ecommerce.',
    image: "https://i.postimg.cc/R0X2jBtk/Screenshot-De-Maio-Home.png",
    link: 'https://www.demaiohome.it'
  },
  {
    id: 2,
    name: 'Ristorante "La Bella Vita"',
    description: 'Sito vetrina con menù digitale incorporato.',
    image: 'https://i.postimg.cc/J0jZvRFg/Screenshot-La-Bella-Vita.png',
    link: 'https://ferryvsferry.github.io/La-Bella-Vita---Website/'
  },
  {
    id: 3,
    name: 'Studio Ibis',
    description: 'Sito web elegante e dal design raffinato per uno studio di tatuaggi. Progettato per esaltare le opere d\'arte e facilitare le prenotazioni.',
    image: 'https://i.postimg.cc/QxzCZ2Q7/studio-ibis.png',
    link: 'https://ferryvsferry.github.io/Studio-Ibis/'
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    dettagli: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nome,
          surname: formData.cognome,
          email: formData.email,
          projectDetails: formData.dettagli
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio');
      }

      setSubmitStatus('success');
      setFormData({ nome: '', cognome: '', email: '', dettagli: '' });
      setTimeout(() => {
        setIsContactModalOpen(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Richiedi una demo gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
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
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-xl hover:bg-gray-50 transition-all shadow-md w-full sm:w-auto"
            >
              Voglio vedere la mia bozza gratuita
            </button>
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

      {/* SEZIONE SEO */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Il tuo miglior venditore
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cos'è la SEO e perché ti porta nuovi clienti?
            </h2>
            <p className="text-lg text-gray-600">
              Avere un bel sito non basta se nessuno lo visita. La SEO (Ottimizzazione per i Motori di Ricerca) è l'insieme di tecniche che permette al tuo sito di apparire su Google proprio quando i tuoi potenziali clienti stanno cercando i tuoi servizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. La Ricerca</h3>
                <p className="text-gray-600">
                  Un utente ha un bisogno e cerca su Google (es. "ristorante vicino a me" o "idraulico urgente"). È un cliente già interessato e pronto ad acquistare.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Il Posizionamento</h3>
                <p className="text-gray-600">
                  Google analizza i siti e premia quelli veloci, sicuri e con contenuti chiari. Un sito ben ottimizzato appare tra i primi risultati, sbaragliando la concorrenza.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6">
                  <MousePointerClick className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. La Conversione</h3>
                <p className="text-gray-600">
                  L'utente clicca sul tuo sito, trova subito le informazioni che cerca grazie a un design intuitivo, e ti contatta o acquista il tuo servizio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEZIONE PORTFOLIO */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alcuni lavori realizzati</h2>
            <p className="text-lg text-gray-600">Esempi di come ho aiutato altre attività a presentarsi al meglio.</p>
          </div>

          <div 
            className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9] shadow-md group max-w-5xl mx-auto"
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

          <div className="flex justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-blue-900 bg-white rounded-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto group"
            >
              <Mail className="w-7 h-7 mr-3 text-blue-600 group-hover:scale-110 transition-transform" />
              Compila il modulo di richiesta
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Richiedi Informazioni</h2>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[80vh]">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h3>
                    <p className="text-gray-600">Grazie per avermi contattato. Ti risponderò il prima possibile.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Mario"
                        />
                      </div>
                      <div>
                        <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">Cognome *</label>
                        <input
                          type="text"
                          id="cognome"
                          name="cognome"
                          required
                          value={formData.cognome}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Rossi"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="mario.rossi@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="dettagli" className="block text-sm font-medium text-gray-700 mb-1">
                        Descrivi come vorresti il tuo sito web *
                      </label>
                      <textarea
                        id="dettagli"
                        name="dettagli"
                        required
                        rows={4}
                        value={formData.dettagli}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                        placeholder="Parlami del tuo progetto, dei tuoi obiettivi e di cosa ti piacerebbe avere sul tuo nuovo sito..."
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                        Si è verificato un errore durante l'invio. Riprova più tardi.
                      </div>
                    )}

                    <div className="pt-4">
                      <p className="text-xs text-gray-500 mb-4 text-center">
                        Cliccando su "Invia Richiesta", dichiari di aver letto e compreso la nostra{' '}
                        <button 
                          type="button"
                          onClick={() => {
                            setIsContactModalOpen(false);
                            // We need to trigger the privacy policy modal from Layout.tsx
                            // Since it's in a parent component, we can use a custom event
                            window.dispatchEvent(new CustomEvent('open-privacy-policy'));
                          }}
                          className="text-blue-600 hover:underline"
                        >
                          Privacy Policy
                        </button>.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Invio in corso...
                          </>
                        ) : (
                          'Invia Richiesta'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

