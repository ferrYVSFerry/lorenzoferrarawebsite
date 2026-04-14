import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [declineWarning, setDeclineWarning] = useState(false);
  const location = useLocation();

  // Check cookie consent on mount
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      try {
        const { timestamp } = JSON.parse(consent);
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        if (Date.now() - timestamp < sevenDays) {
          // Valid consent
          return;
        }
      } catch (e) {
        // Parse error, ignore and show banner
      }
    }
    // Show banner if no valid consent
    setShowCookieBanner(true);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: true,
      timestamp: Date.now()
    }));
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    if (!declineWarning) {
      setDeclineWarning(true);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Listen for custom event to open privacy policy
  useEffect(() => {
    const handleOpenPrivacyPolicy = () => {
      setIsPrivacyOpen(true);
    };

    window.addEventListener('open-privacy-policy', handleOpenPrivacyPolicy);
    return () => {
      window.removeEventListener('open-privacy-policy', handleOpenPrivacyPolicy);
    };
  }, []);

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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Vedi i dettagli della licenza
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button 
              onClick={() => setIsCookieOpen(true)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto prose prose-blue max-w-none text-gray-600 text-sm sm:text-base text-left">
                <p><strong>Data di ultima revisione:</strong> {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Introduzione e Titolare del Trattamento</h3>
                <p>
                  La presente Informativa sulla Privacy ha lo scopo di descrivere in modo trasparente e dettagliato le modalità di gestione e trattamento dei dati personali degli utenti che consultano e interagiscono con questo sito web. Il Titolare del Trattamento è Lorenzo Ferrara, contattabile all'indirizzo email: <a href="mailto:info@lorenzoferrara.shop" className="text-blue-600 hover:underline">info@lorenzoferrara.shop</a>. La finalità di questo documento è informare l'utenza circa la natura dei dati raccolti, le finalità e le modalità del loro trattamento, nel pieno rispetto delle normative vigenti.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Tipologie di Dati Raccolti</h3>
                <p>
                  Il presente sito web è concepito come portfolio digitale e limita al minimo indispensabile la raccolta di dati. I dati trattati si suddividono in: <strong>Dati di navigazione</strong> (raccolti automaticamente dai sistemi informatici preposti al funzionamento del sito, quali indirizzi IP, nomi a dominio dei computer utilizzati dagli utenti, parametri relativi al sistema operativo e all'ambiente informatico) e <strong>Dati forniti volontariamente dall'utente</strong> (nome, cognome, indirizzo email e dettagli del progetto inseriti negli appositi form di contatto per la richiesta di realizzazione di siti web, o altre informazioni personali inserite qualora l'utente decida di contattare spontaneamente il Titolare). Non vengono in alcun modo trattati dati sensibili o dati di pagamento.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Modalità di Raccolta dei Dati</h3>
                <p>
                  La raccolta dei dati avviene secondo due modalità principali: <strong>in modo automatizzato</strong> durante la navigazione, tramite l'impiego di cookie tecnici strettamente necessari al funzionamento dell'infrastruttura (per i quali si rimanda all'apposita Cookie Policy); <strong>in modo volontario</strong>, qualora l'utente compili i form di richiesta presenti sul sito o decida di avvalersi dei recapiti indicati per inoltrare comunicazioni dirette. Il consenso per l'utilizzo dei cookie tecnici viene gestito tramite l'apposito banner informativo presentato al primo accesso.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Finalità e Base Giuridica del Trattamento</h3>
                <p>
                  I dati personali sono trattati per le seguenti finalità: a) garantire il corretto funzionamento tecnico e la sicurezza del sito web; b) riscontrare le eventuali richieste di contatto, preventivo o di informazioni inoltrate dall'utente tramite gli appositi form. I dati richiesti nel form vengono utilizzati <strong>solo ed esclusivamente a scopo di comunicazione con l'utente</strong> in merito alla sua richiesta e per nessun altro scopo (nessun invio di materiale pubblicitario non richiesto o cessione a terzi). La base giuridica che legittima il trattamento per la finalità a) è il <strong>legittimo interesse del Titolare</strong> (art. 6, par. 1, lett. f del GDPR). La base giuridica per la finalità b) è l'<strong>esecuzione di misure precontrattuali</strong> adottate su richiesta dell'interessato (art. 6, par. 1, lett. b del GDPR) o il <strong>consenso</strong> implicito nell'invio della comunicazione.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5. Destinatari dei Dati</h3>
                <p>
                  I dati personali raccolti non sono oggetto di diffusione indiscriminata. Potranno essere resi accessibili, esclusivamente per le finalità summenzionate, a soggetti terzi che agiscono in qualità di Responsabili del Trattamento (ad esempio, fornitori di servizi di hosting e infrastrutture cloud necessari per il funzionamento del sito). I dati sono trattati all'interno dello Spazio Economico Europeo (SEE) e non sono previsti trasferimenti verso Paesi terzi; qualora ciò si rendesse necessario per ragioni tecniche, avverrà nel rispetto delle garanzie adeguate previste dal GDPR (es. Clausole Contrattuali Standard).
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">6. Conservazione dei Dati</h3>
                <p>
                  I dati personali sono conservati per il tempo strettamente necessario al conseguimento delle finalità per le quali sono stati raccolti. Nello specifico: i dati di navigazione e i log di sistema vengono conservati per un periodo limitato (es. 7 giorni per le preferenze sui cookie) e successivamente cancellati. Per quanto concerne i dati forniti volontariamente tramite i form di contatto o via email, <strong>la durata di mantenimento dei dati è perpetua</strong>, ovvero vengono mantenuti nei nostri archivi di comunicazione finché non vi è una esplicita richiesta di eliminazione da parte dell'utente, al fine di mantenere uno storico delle comunicazioni intercorse.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">7. Diritti degli Utenti</h3>
                <p>
                  In conformità alla normativa vigente, l'utente (Interessato) può esercitare in qualsiasi momento i seguenti diritti:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Diritto di accesso:</strong> ottenere conferma dell'esistenza o meno di un trattamento e accedere ai propri dati.</li>
                  <li><strong>Diritto di correzione (Rettifica):</strong> richiedere l'aggiornamento o la correzione di dati inesatti o incompleti.</li>
                  <li><strong>Diritto di cancellazione (Oblio):</strong> richiedere la cancellazione dei dati in determinate circostanze previste dalla legge.</li>
                  <li><strong>Diritto di limitazione del trattamento:</strong> richiedere il blocco o la limitazione dell'elaborazione dei propri dati.</li>
                  <li><strong>Diritto di portabilità dei dati:</strong> ricevere i propri dati in un formato strutturato e leggibile da dispositivo automatico, per trasferirli ad altro titolare.</li>
                  <li><strong>Diritto di opposizione:</strong> opporsi al trattamento dei dati per motivi legittimi.</li>
                  <li><strong>Diritto di revoca del consenso:</strong> revocare in qualsiasi momento il consenso precedentemente prestato, senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca.</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">8. Sicurezza dei Dati</h3>
                <p>
                  Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate (tra cui protocolli di crittografia HTTPS/SSL, limitazione degli accessi e sistemi di protezione server) al fine di prevenire la perdita dei dati, usi illeciti o non corretti e accessi non autorizzati. Pur garantendo il massimo impegno, si rende noto che la trasmissione di dati via Internet non può essere considerata esente da rischi assoluti di violazione (data breach).
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">9. Modifiche alla Privacy Policy</h3>
                <p>
                  Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualunque momento, dandone informazione agli utenti su questa pagina. Si prega dunque di consultare regolarmente questa sezione, facendo riferimento alla data di ultima modifica indicata in apertura del documento.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">10. Contatti</h3>
                <p>
                  Per l'esercizio dei diritti sopra elencati o per qualsiasi richiesta di chiarimento inerente la protezione dei dati personali, l'utente può rivolgersi direttamente al Titolare del Trattamento ai seguenti recapiti:<br/>
                  <strong>Nome:</strong> Lorenzo Ferrara<br/>
                  <strong>Email:</strong> <a href="mailto:info@lorenzoferrara.shop" className="text-blue-600 hover:underline">info@lorenzoferrara.shop</a>
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">11. Riferimenti Legali</h3>
                <p>
                  La presente informativa privacy è redatta in adempimento agli obblighi previsti dal <strong>Regolamento (UE) 2016/679 (GDPR - General Data Protection Regulation)</strong>, nonché dalle disposizioni nazionali vigenti in materia di protezione dei dati personali.
                </p>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Prendo Atto
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cookie Policy Modal */}
      <AnimatePresence>
        {isCookieOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCookieOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Informativa Estesa sui Cookie (Cookie Policy)</h2>
                <button 
                  onClick={() => setIsCookieOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Chiudi"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto prose prose-blue max-w-none text-gray-600 text-sm sm:text-base text-left">
                <p><strong>Data dell'ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Tipologie di Cookie Utilizzati</h3>
                <p>
                  Al fine di garantire la massima trasparenza, si rende necessario definire preliminarmente la natura degli strumenti informatici impiegati. I cookie sono stringhe di testo di modeste dimensioni che i siti web visitati dall'utente trasmettono al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. In linea generale, i cookie si suddividono in: <strong>Cookie Tecnici</strong> (essenziali per il corretto funzionamento e l'erogazione del servizio), <strong>Cookie di Analisi</strong> (impiegati per raccogliere informazioni, in forma aggregata o meno, sul numero degli utenti e su come questi visitano il sito stesso) e <strong>Cookie di Profilazione</strong> (volti a creare profili relativi all'utente al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate nell'ambito della navigazione in rete). Si dichiara formalmente che <strong>il presente sito web fa uso esclusivo di Cookie Tecnici</strong>.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Finalità dei Cookie</h3>
                <p>
                  L'infrastruttura di questo sito web impiega i summenzionati cookie tecnici per finalità strettamente limitate e circoscritte alla corretta navigazione e fruizione della piattaforma. Tali finalità includono, a titolo meramente esemplificativo e non esaustivo, la gestione tecnica della sessione di navigazione (al fine di garantire un'esplorazione sicura ed efficiente del sito) e il salvataggio di preferenze di base necessarie per l'ottimizzazione dell'interfaccia utente. Non viene effettuata alcuna analisi del traffico a fini di marketing, né alcuna memorizzazione di preferenze atta a profilare l'utente.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Durata di Conservazione dei Cookie</h3>
                <p>
                  In relazione all'aspetto temporale, i cookie si distinguono in <strong>Cookie di Sessione</strong> (i quali vengono inesorabilmente distrutti ogni qualvolta il browser viene chiuso) e <strong>Cookie Persistenti</strong> (i quali permangono nel dispositivo dell'utente fino ad una data di scadenza preimpostata). I cookie tecnici impiegati da questa piattaforma sono prevalentemente cookie di sessione, strettamente limitati alla trasmissione di identificativi di sessione necessari per consentire l'esplorazione sicura del sito, i quali svaniscono al termine della sessione di navigazione.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Elenco dei Cookie di Terze Parti</h3>
                <p>
                  L'utilizzo di cookie di terze parti comporta la ricezione di cookie da siti o da web server diversi da quello che si sta attualmente visitando. A tutela della riservatezza dei visitatori, si certifica che <strong>il presente sito web non implementa, non ospita e non trasmette alcun cookie di terze parti</strong>. L'ecosistema del sito è mantenuto isolato da ingerenze esterne volte al tracciamento.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5. Link alle Privacy Policy delle Terze Parti</h3>
                <p>
                  In ottemperanza agli obblighi di trasparenza, qualora fossero presenti servizi di terze parti, sarebbe d'uopo fornire i relativi collegamenti alle rispettive informative sulla privacy. Tuttavia, stante la totale e conclamata assenza di cookie di terze parti (come esplicitato al punto precedente), non sussiste la necessità né la possibilità materiale di fornire alcun link a policy esterne, garantendo così un ambiente di navigazione privo di dispersioni di dati verso soggetti terzi.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">6. Modalità di Gestione e Disattivazione dei Cookie</h3>
                <p>
                  Si informa l'utente che è sua inalienabile prerogativa manifestare le proprie opzioni in merito all'uso dei cookie attraverso le impostazioni del proprio browser. L'utente può, in qualsiasi momento, configurare il proprio applicativo di navigazione affinché accetti tutti i cookie, ne accetti solo alcuni, oppure li rifiuti completamente, disabilitandone l'uso da parte dei siti. Di seguito si indicano i collegamenti alle istruzioni per i browser più diffusi: 
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Google Chrome</a>, 
                  <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Mozilla Firefox</a>, 
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Apple Safari</a>, 
                  <a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Microsoft Edge</a>. 
                  Si fa tuttavia presente che la disattivazione totale dei cookie tecnici potrebbe compromettere la fruibilità di alcune funzionalità del sito.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">7. Base Giuridica del Trattamento</h3>
                <p>
                  Il fondamento legale che giustifica l'installazione dei cookie tecnici su questo sito web risiede nell'<strong>Interesse Legittimo del Titolare</strong> (ai sensi dell'art. 6, par. 1, lett. f del GDPR e dell'art. 122 del Codice Privacy). Tale interesse si concretizza nella necessità tecnica di garantire il corretto funzionamento della piattaforma, la sicurezza della navigazione e il bilanciamento del carico dell'infrastruttura di hosting. Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">8. Dati del Titolare del Trattamento</h3>
                <p>
                  Il Titolare del Trattamento dei dati, inteso come la persona fisica che determina le finalità e i mezzi del trattamento di dati personali, è identificato nella persona di:<br/>
                  <strong>Nome e Cognome:</strong> Lorenzo Ferrara<br/>
                  <strong>Indirizzo Email di Contatto:</strong> <a href="mailto:info@lorenzoferrara.shop" className="text-blue-600 hover:underline">info@lorenzoferrara.shop</a><br/>
                  Gli utenti sono invitati a utilizzare i recapiti summenzionati per qualsivoglia comunicazione inerente la presente policy.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">9. Modalità di Esercizio dei Diritti dell'Utente</h3>
                <p>
                  In conformità con quanto prescritto dal Regolamento (UE) 2016/679 (GDPR), l'utente (in qualità di "Interessato") gode di specifici diritti a tutela dei propri dati personali. Sebbene questo sito non raccolga dati tramite cookie di profilazione, l'utente conserva il diritto di chiedere al Titolare del Trattamento l'accesso ai propri dati personali, la rettifica, la cancellazione degli stessi (diritto all'oblio), la limitazione del trattamento che lo riguarda, o di opporsi al loro trattamento, oltre al diritto alla portabilità dei dati. Tali diritti potranno essere esercitati in qualsivoglia momento inoltrando una formale richiesta all'indirizzo di posta elettronica del Titolare indicato al punto precedente.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">10. Data dell'ultimo aggiornamento della Cookie Policy</h3>
                <p>
                  La presente Informativa Estesa sui Cookie è soggetta a revisioni periodiche al fine di garantirne la costante aderenza alle evoluzioni normative, giurisprudenziali e tecnologiche. La data dell'ultimo aggiornamento, riportata in calce e in epigrafe al presente documento, costituisce l'attestazione temporale della validità delle disposizioni ivi contenute.
                </p>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setIsCookieOpen(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Prendo Atto
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner (Blocking) */}
      <AnimatePresence>
        {showCookieBanner && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden z-10 p-6 sm:p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Informativa sui Cookie Tecnici</h2>
              <p className="text-gray-600 mb-6">
                Questo sito utilizza esclusivamente cookie tecnici strettamente necessari per garantire il corretto funzionamento e la sicurezza della navigazione. Non utilizziamo cookie di profilazione o tracciamento.
              </p>
              
              <AnimatePresence>
                {declineWarning && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-red-600 font-medium text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                      Attenzione: i cookie tecnici sono indispensabili per la corretta funzionalità del sito. Rifiutandoli, non potrai proseguire la navigazione e verrai reindirizzato.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={handleDeclineCookies}
                  className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors order-2 sm:order-1"
                >
                  Rifiuta
                </button>
                <button 
                  onClick={handleAcceptCookies}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors order-1 sm:order-2"
                >
                  Accetta e prosegui
                </button>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsCookieOpen(true)}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Leggi l'Informativa Estesa sui Cookie
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
