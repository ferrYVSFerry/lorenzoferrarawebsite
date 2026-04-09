import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-[80vh] py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Contattami</h1>
          <p className="text-lg text-gray-600">
            Hai bisogno di aiuto o vuoi richiedere un preventivo? Scegli il metodo che preferisci per contattarmi.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Email */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:lorenzoferrara737@gmail.com"
            className="flex items-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors mr-6 flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600">lorenzoferrara737@gmail.com</p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/393515584636"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors mr-6 flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-gray-600">Contattami su WhatsApp</p>
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="flex items-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-pink-100 transition-colors mr-6 flex-shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Instagram</h3>
              <p className="text-gray-600">Contattami su Instagram</p>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
