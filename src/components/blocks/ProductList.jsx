import ProductCard from "./ProductCard"
import SampleBlock from "../SampleBlock"
import { useState } from "react"
import { useEffect } from "react"

function ProductList() {
    const [searchTerm, setSearchTerm] = useState("")
    const [products, setProducts] = useState([
        { id: 1, description: "Большой экран с 4K разрешением", name: "Телевизор", price: 1999 },
        { id: 2, description: "Мощный процессор и отличная камера", name: "Телефон", price: 789 },
        { id: 3, description: "Механические переключатели с подсветкой", name: "Клавиатура", price: 199 },
        { id: 4, description: "Высокая производительность для работы и игр", name: "Ноутбук", price: 4000 },
        { id: 5, description: "Беспроводная мышь с точным сенсором", name: "Мышь", price: 49 },
        { id: 6, description: "Шумоподавление и высокое качество звука", name: "Наушники", price: 299 },
        { id: 7, description: "Фитнес-трекер с пульсометром", name: "Умные часы", price: 199 },
        { id: 8, description: "Игровая приставка нового поколения", name: "PlayStation", price: 899 }
    ])
useEffect(()=>{
       fetch("https://69ec8c2aaf4ff533142b13f2.mockapi.io/products")
       .then((res)=>res.json())
       .then((data)=>{
         setProducts(data)
    })
     }, [])
    // Фильтрация товаров по поисковому запросу
    const filteredProducts = products.filter(product => {
        const searchLower = searchTerm.toLowerCase()
        return product.name.toLowerCase().includes(searchLower) ||
               product.description.toLowerCase().includes(searchLower)
    })

 

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Блок поиска */}
            <div className="mb-8">
                <div className="relative max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="🔍 Поиск товаров..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-6 py-3 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-all duration-300 shadow-sm"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>
                
                {/* Результаты поиска */}
                <div className="text-center mt-3 text-gray-600">
                    {searchTerm ? (
                        <p>Найдено товаров: {filteredProducts.length} по запросу "{searchTerm}"</p>
                    ) : (
                        <p>Всего товаров: {products.length}</p>
                    )}
                </div>
            </div>

            {/* Сетка товаров */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">😔</div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Товары не найдены</h2>
                    <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
                    <button
                        onClick={() => setSearchTerm('')}
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                        Очистить поиск
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            description={product.description}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}


  
    

export default ProductList
