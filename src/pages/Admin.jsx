// src/pages/Admin.jsx
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function Admin() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("https://69ec8c2aaf4ff533142b13f2.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [])

    const handleDeleteProduct = (id) => {
        if (window.confirm("Вы уверены, что хотите удалить этот товар?")) {
            fetch(`https://69ec8c2aaf4ff533142b13f2.mockapi.io/products/${id}`, {
                method: "DELETE",
            })
                .then(() => {
                    setProducts(products.filter(product => product.id !== id))
                    alert("Товар успешно удален!")
                })
                .catch((error) => {
                    console.error("Ошибка при удалении:", error)
                    alert("Ошибка при удалении товара")
                })
        }
    }

    const filteredProducts = products.filter(product => {
        const searchLower = searchTerm.toLowerCase()
        return product.name?.toLowerCase().includes(searchLower) ||
               product.description?.toLowerCase().includes(searchLower)
    })

    const handleLogout = () => {
        navigate("/auth")
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Выйти
                    </button>
                </div>

                <h1 className="text-2xl font-bold mb-6">Управление товарами</h1>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Поиск товаров..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Товары не найдены</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                <p className="text-xl font-bold text-blue-600 mb-3">{product.price} ₽</p>
                                <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin