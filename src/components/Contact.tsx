import { motion } from 'framer-motion';
import { Clock, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Clock,
      title: 'Horarios de Atención',
      details: ['Lunes a Viernes: 9:00 AM - 7:00 PM', 'Sábados: 9:00 AM - 5:00 PM', 'Domingos: Cerrado'],
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. Fidel Velazquez 1487', 'Fidel Velázquez, 44220', 'Guadalajara, Jalisco'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['arroyest@hotmail.com'],
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+52 33 3677 1288'],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light text-black mb-4">
            <span className="font-bold">Contacto</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con todos tus proyectos artísticos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Información de Contacto</h2>
              <p className="text-gray-600 text-lg mb-8">
                Ponte en contacto con nosotros para consultas, presupuestos o para conocer más sobre nuestros servicios.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3" />
                Envíanos un Mensaje
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-700 mb-2">Nuestra Ubicación</h4>
                  <p className="text-gray-600 text-sm">
                    Av. Fidel Velazquez 1487<br />
                    Guadalajara, Jalisco
                  </p>
                </div>
                
                {/* Google Maps Embed Placeholder */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0234!2d-103.35644842576826!3d20.66863680024764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4b6c7b9f45%3A0x7b9f8f8f8f8f8f8f!2sAv.%20Fidel%20Vel%C3%A1zquez%201487%2C%20Fidel%20Vel%C3%A1zquez%2C%2044220%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1635789012345!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gray-50 rounded-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Trabajemos juntos para dar vida a tu visión artística
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
          >
            Iniciar Proyecto
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}