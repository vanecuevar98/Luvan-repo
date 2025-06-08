import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from './ProductCard';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos', count: 23 },
    { id: 'bastidores', name: 'Bastidores', count: 5 },
    { id: 'marcos', name: 'Marcos', count: 8 },
    { id: 'bases', name: 'Bases', count: 4 },
    { id: 'cajas', name: 'Cajas', count: 3 },
    { id: 'espejos', name: 'Espejos', count: 3 },
  ];

  const products = {
    bastidores: [
      {
        id: 1,
        title: 'Bastidor Canvas 40x60cm',
        description: 'Bastidor de madera premium con canvas preparado',
        image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$350'
      },
      {
        id: 2,
        title: 'Bastidor Profesional 50x70cm',
        description: 'Bastidor de calidad profesional para artistas',
        image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$485'
      },
      {
        id: 3,
        title: 'Bastidor Mini 20x30cm',
        description: 'Bastidor pequeño ideal para bocetos y estudios',
        image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$180'
      },
      {
        id: 4,
        title: 'Bastidor Galería 60x90cm',
        description: 'Bastidor grande formato galería con perfil profundo',
        image: 'https://images.pexels.com/photos/1143755/pexels-photo-1143755.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$720'
      },
      {
        id: 5,
        title: 'Bastidor Cuadrado 40x40cm',
        description: 'Bastidor formato cuadrado para composiciones modernas',
        image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$290'
      }
    ],
    marcos: [
      {
        id: 6,
        title: 'Marco Clásico Dorado',
        description: 'Marco ornamental con acabado dorado envejecido',
        image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$450'
      },
      {
        id: 7,
        title: 'Marco Moderno Negro',
        description: 'Marco minimalista negro mate, perfecto para arte contemporáneo',
        image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$320'
      },
      {
        id: 8,
        title: 'Marco Rústico de Madera',
        description: 'Marco de madera natural con acabado rústico',
        image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$280'
      },
      {
        id: 9,
        title: 'Marco Plateado Elegante',
        description: 'Marco con acabado plateado brillante de alta calidad',
        image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$390'
      }
    ],
    bases: [
      {
        id: 10,
        title: 'Base Atril Madera',
        description: 'Atril de madera maciza para cuadros y lienzos',
        image: 'https://images.pexels.com/photos/1143755/pexels-photo-1143755.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$220'
      },
      {
        id: 11,
        title: 'Base Metálica Ajustable',
        description: 'Base metálica con altura ajustable para exposiciones',
        image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$340'
      },
      {
        id: 12,
        title: 'Base de Mesa Compacta',
        description: 'Base pequeña ideal para obras de mesa',
        image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$150'
      },
      {
        id: 13,
        title: 'Base Profesional de Estudio',
        description: 'Base robusta para estudio de artista con ruedas',
        image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$580'
      }
    ],
    cajas: [
      {
        id: 14,
        title: 'Caja Marco Profunda',
        description: 'Caja marco con profundidad para objetos tridimensionales',
        image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$380'
      },
      {
        id: 15,
        title: 'Caja Vitrina Premium',
        description: 'Caja vitrina con cristal UV para protección total',
        image: 'https://images.pexels.com/photos/1143755/pexels-photo-1143755.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$520'
      },
      {
        id: 16,
        title: 'Caja Colección Pequeña',
        description: 'Caja compacta para colecciones y objetos especiales',
        image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$250'
      }
    ],
    espejos: [
      {
        id: 17,
        title: 'Espejo Marco Ornamental',
        description: 'Espejo con marco decorativo estilo clásico',
        image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$480'
      },
      {
        id: 18,
        title: 'Espejo Minimalista',
        description: 'Espejo con marco delgado estilo moderno',
        image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$320'
      },
      {
        id: 19,
        title: 'Espejo Vintage Redondo',
        description: 'Espejo circular con marco vintage de bronce',
        image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=500',
        price: '$420'
      }
    ]
  };

  const getAllProducts = () => {
    return Object.values(products).flat();
  };

  const getFilteredProducts = () => {
    if (activeCategory === 'todos') {
      return getAllProducts();
    }
    return products[activeCategory as keyof typeof products] || [];
  };

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
            Nuestro <span className="font-bold">Catálogo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos de calidad premium
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {getFilteredProducts().map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {getFilteredProducts().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No hay productos en esta categoría</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}