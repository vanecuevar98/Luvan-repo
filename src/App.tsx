import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'catalog':
        return <Catalog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.main
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20"
      >
        {renderSection()}
      </motion.main>
    </div>
  );
}

export default App;