import { useState } from "react"

function Header() {
    const [isVisible, setIsVisible] = useState(true)
    
    return (
        <header className="relative flex items-center justify-between p-4 bg-gray-100">
            <div className="w-20"></div> {/* Пустой div для баланса */}
            <span className="text-xl font-bold">Интернет магазин</span>
            <button 
                onClick={() => setIsVisible(!isVisible)}
                className="bg-black text-white px-4 py-2 rounded "
            >
                {isVisible ? "Выйти" : "Войти"}
            </button>
        </header>
    )
}

export default Header