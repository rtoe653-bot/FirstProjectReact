function ProductCard({price, title, description }) {
    
    return (
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-sm mx-auto hover:shadow-xl transition-all duration-300 border border-white/20">
        {/* Текстовая иконка с легким размытием */}
        <div className="w-full h-48 bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-xl mb-4 flex items-center justify-center">
          <span className="text-6xl opacity-90">🛒</span>
        </div>
        
<h3 className="text-xl font-semibold text-gray-800 mb-2 backdrop-blur-sm">        
         {title}
        </h3>
        
        <p className="text-gray-600 mb-4 backdrop-blur-sm">
          {description}
        </p>
        
        <div className="flex items-center justify-between backdrop-blur-sm">
          <div className="text-2xl font-bold text-gray-900">
          {price}
          </div>
          <button className="bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-300">
            Купить
          </button>
        </div>
      </div>
    );
  }

  
export default ProductCard