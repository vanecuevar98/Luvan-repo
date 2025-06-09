import { motion } from 'framer-motion';
import { ArrowRight, Palette, Frame, Award } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

export default function Home({ setActiveSection }: HomeProps) {
  const features = [
    {
      icon: Frame,
      title: 'Marcos Premium',
      description: 'Marcos de la más alta calidad para realzar tus obras de arte',
    },
    {
      icon: Palette,
      title: 'Arte Personalizado',
      description: 'Soluciones artísticas personalizadas para cada espacio',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Más de 20 años de experiencia en el sector artístico',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-black mb-6"
            >
              Luvan
              <span className="block font-bold">Arte y Enmarcado</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light"
            >
              Transformamos tus espacios con marcos de calidad premium y 
              soluciones artísticas personalizadas
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => setActiveSection('catalog')}
                className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 group"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className="border border-gray-300 text-black px-8 py-4 rounded-2xl font-medium hover:border-black transition-colors"
              >
                Contactar
              </button>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-40 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
              Nuestra <span className="font-bold">Especialidad</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos productos y servicios de la más alta calidad para el mundo del arte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descubre nuestra amplia gama de productos y servicios
            </p>
            <button 
              onClick={() => setActiveSection('catalog')}
              className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
            >
              Explorar Catálogo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}