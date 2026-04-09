import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Terminal } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center text-xl font-bold tracking-tight text-gray-900">
              <Terminal className="w-6 h-6 mr-2 text-blue-600" />
              Lorenzo Ferrara
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Servizi <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 ease-in-out ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1">
                    <Link to="/servizi/assistenza-pc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                      Assistenza PC
                    </Link>
                    <Link to="/servizi/creazione-siti-web" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                      Creazione Siti Web
                    </Link>
                    <Link to="/servizi/ripetizioni" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                      Ripetizioni
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/contatti" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contatti
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-900 mb-2">Servizi</div>
                <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                  <Link to="/servizi/assistenza-pc" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                    Assistenza PC
                  </Link>
                  <Link to="/servizi/creazione-siti-web" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                    Creazione Siti Web
                  </Link>
                  <Link to="/servizi/ripetizioni" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                    Ripetizioni
                  </Link>
                </div>
              </div>
              <Link to="/contatti" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Contatti
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            &copy; {new Date().getFullYear()} Lorenzo Ferrara - Licenza Creative Commons Attribuzione (CC BY 4.0)
          </p>
          <p className="text-xs text-gray-500 mb-4 max-w-2xl mx-auto">
            &Egrave; consentito condividere e adattare il contenuto, anche per scopi commerciali, purch&eacute; venga riconosciuta l'attribuzione all'autore.
          </p>
          <a 
            href="https://creativecommons.org/licenses/by/4.0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 transition-colors"
          >
            Vedi i dettagli della licenza
          </a>
        </div>
      </footer>
    </div>
  );
}
