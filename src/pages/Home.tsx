import { Link } from 'react-router-dom';
import { Monitor, Globe, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            >
              Ciao, sono <span className="text-blue-600">Lorenzo Ferrara</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Offro soluzioni pratiche e professionali per le tue esigenze digitali e di apprendimento. Dalla riparazione del tuo PC alla creazione della tua presenza online, fino al supporto nello studio.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <a 
                href="#servizi" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto"
              >
                Scopri i miei servizi
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link 
                to="/contatti" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Contattami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chi Sono Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chi sono</h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Sono un appassionato di tecnologia e informatica con anni di esperienza pratica sul campo. 
                Il mio obiettivo è semplificare la vita digitale delle persone, offrendo un supporto 
                diretto, onesto e su misura.
              </p>
              <p className="mt-4">
                Che tu abbia bisogno di rimettere a nuovo un computer lento, di lanciare il tuo primo 
                sito web o di superare uno scoglio nello studio, metto a disposizione la mia pazienza, 
                le mie competenze e la mia disponibilità per aiutarti a raggiungere il tuo obiettivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">I miei servizi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluzioni concrete per problemi reali. Scegli l'area in cui hai bisogno di supporto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assistenza PC</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Riparazione, ottimizzazione e manutenzione di computer Windows e Mac. Risoluzione problemi software e hardware.
              </p>
              <Link 
                to="/servizi/assistenza-pc" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Scopri di più <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creazione Siti Web</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Siti vetrina, landing page e portfolio personali. Design moderno, responsive e ottimizzato per i motori di ricerca.
              </p>
              <Link 
                to="/servizi/creazione-siti-web" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Scopri di più <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ripetizioni</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Supporto allo studio personalizzato per materie scientifiche e informatica. Metodo di studio efficace e mirato.
              </p>
              <Link 
                to="/servizi/ripetizioni" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Scopri di più <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perché scegliere me */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Perché scegliere me</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Il mio approccio si basa sulla trasparenza e sulla volontà di risolvere realmente i tuoi problemi, senza complicazioni inutili.
              </p>
              <ul className="space-y-4">
                {[
                  "Prezzi accessibili e trasparenti fin da subito",
                  "Approccio diretto e comunicazione chiara",
                  "Flessibilità di orari e disponibilità",
                  "Supporto rapido e risolutivo"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Pronto a iniziare?</h3>
              <p className="text-gray-400 mb-8">
                Contattami senza impegno per discutere delle tue necessità. Ti risponderò il prima possibile.
              </p>
              <Link 
                to="/contatti" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Contattami ora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
