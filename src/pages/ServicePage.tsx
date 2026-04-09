import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Monitor, Globe, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const servicesData = {
  'assistenza-pc': {
    title: 'Assistenza PC',
    description: 'Servizio professionale di riparazione e ottimizzazione per computer fissi e portatili.',
    icon: Monitor,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  'creazione-siti-web': {
    title: 'Creazione Siti Web',
    description: 'Sviluppo di siti web moderni, veloci e ottimizzati per convertire i visitatori in clienti.',
    icon: Globe,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  'ripetizioni': {
    title: 'Ripetizioni',
    description: 'Lezioni private e supporto allo studio con un metodo personalizzato e orientato ai risultati.',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Fallback if service not found
  const service = serviceId && servicesData[serviceId as keyof typeof servicesData] 
    ? servicesData[serviceId as keyof typeof servicesData] 
    : null;

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Servizio non trovato</h1>
        <Link to="/" className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Home
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white min-h-[80vh]">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Torna alla Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.bgColor} ${service.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-600">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg text-gray-600 max-w-none"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center mb-12">
            <p className="text-gray-500 italic">Contenuto in arrivo</p>
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              to="/contatti" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contattami per informazioni
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
