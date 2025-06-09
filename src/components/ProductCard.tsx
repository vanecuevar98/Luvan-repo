import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-bold text-black">{product.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-gray-100 hover:bg-black hover:text-white text-black py-3 rounded-xl font-medium transition-all duration-300"
        >
          Ver Detalles
        </motion.button>
      </div>
    </motion.div>
  );
}