import { useState } from "react";

function ProductCard({price, title, description }) {
    const [count, setCount ] = useState(0)
  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
      
    }
  };

  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };
  
  let minCount = 1
  let maxCount = 10
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
        <div className="flex items-center space-x-3">
      <button
        onClick={decrement}
        disabled={count <= minCount}
        className={`
          w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${count <= minCount 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }
        `}
      >
        −
      </button>

      <span className="w-12 text-center text-xl font-semibold text-gray-800">
        {count}
      </span>

      <button
        onClick={increment}
        disabled={count >= maxCount}
        className={`
          w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${count >= maxCount
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
          }
        `}
      >
        +
      </button>
    </div>
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